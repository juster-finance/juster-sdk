import {
  TezosToolkit,
  TransactionWalletOperation,
} from "@taquito/taquito";

import { BeaconWallet } from '@taquito/beacon-wallet';

import {
  QueryRequest,
  createClient,
  entry_liquidity,
  pool_position,
  claim,
  pool_state,
  pool,
  order_by
} from '@juster-finance/gql-client'

import config from "../config.json"
import BigNumber from "bignumber.js";
import { NetworkType } from '@airgap/beacon-dapp';

import {
  Network,
  ClaimKeys,
  PendingEntriesType,
  PoolPositionType,
  ClaimsType,
  PoolType,
  PoolStateType
} from '../types'

import {
  deserializePendingEntries,
  deserializePoolPosition,
  deserializeClaims,
  deserializePoolState,
  deserializePool,
  processOrDefault,
  emptyPoolPosition,
  emptyPoolState
} from '../serialization'

import { JusterBaseInstrument } from './baseInstrument'

import { requestSimilarPools } from '../tzkt'
import { calculateAPY } from "../estimators/pool";

export class JusterPool extends JusterBaseInstrument {
  protected _shareDecimals: BigNumber;

  public unsubscribeFromPendingEntries: () => void;
  public unsubscribeFromPoolPosition: () => void;
  public unsubscribeFromClaims: () => void;
  public unsubscribeFromLastPoolState: () => void;
  public unsubscribeFromFirstPoolState: () => void;
  public unsubscribeFromAPY: () => void;

  constructor(
    network: NetworkType,
    contractAddress: string,
    tezos: TezosToolkit,
    provider: BeaconWallet,
    entrypoints: Record<string, any>,
    graphqlUri: string,
    subscriptionUri: string,
    shareDecimals: string,
  ) {

    super(
      network,
      contractAddress,
      tezos,
      provider,
      entrypoints,
      graphqlUri,
      subscriptionUri,
    );

    this.unsubscribeFromPendingEntries = () => undefined;
    this.unsubscribeFromPoolPosition = () => undefined;
    this.unsubscribeFromClaims = () => undefined;
    this.unsubscribeFromLastPoolState = () => undefined;
    this.unsubscribeFromFirstPoolState = () => undefined;
    this.unsubscribeFromAPY = () => undefined;

    this._shareDecimals = new BigNumber(shareDecimals);
  };

  static create(
    tezos: TezosToolkit,
    provider: BeaconWallet,
    network: Network,
    poolAddress: string,
  ) {

    const networkSettings = config.networks[network];

    const {
      graphqlUri,
      subscriptionUri,
      networkName
    } = networkSettings;

    const {
      entrypoints,
      poolShareDecimals
    } = config;

    return new JusterPool(
      networkName as NetworkType,
      poolAddress,
      tezos,
      provider,
      entrypoints["justerPool"],
      graphqlUri,
      subscriptionUri,
      poolShareDecimals
    );
  };

  /**
   * Calling depositLiquidity entrypoint to add new liquidity entry
   *
   * @param amount added liquidity amount
   * @returns promise with TransactionWalletOperation
   */
  depositLiquidity(amount: BigNumber): Promise<TransactionWalletOperation> {
    return this.callMethodSend("depositLiquidity", [], amount.toNumber());
  };

  /**
   * Calling claimLiquidity entrypoint to claim given amount of shares
   *
   * @param provider is user address to make claim from
   * @param shares amount of shares to claim
   * @returns promise with TransactionWalletOperation
   */
  claimLiquidity(
    provider: string,
    shares: BigNumber,
  ): Promise<TransactionWalletOperation> {
    const args = [
      provider,
      shares.times(this._shareDecimals).integerValue().toNumber()
    ];
    return this.callMethodSend("claimLiquidity", args);
  };

  /**
   * Calling withdrawClaims entrypoint to withdraw given claims
   *
   * @param claims array with claim keys to be withdrawn
   * @returns promise with TransactionWalletOperation
   */
  withdrawClaims(
    claims: ClaimKeys
  ): Promise<TransactionWalletOperation> {
    return this.callMethodSend("withdrawClaims", [claims]);
  };

  /**
   * Calling approveEntry entrypoint to approve entry
   *
   * @param entryId is number of entry to be approved
   * @returns promise with TransactionWalletOperation
   */
  approveEntry(
    entryId: number
  ): Promise<TransactionWalletOperation> {
    return this.callMethodSend("approveEntry", [entryId]);
  };

  /**
   * Preparing QueryReqest for getting pending entries for a given userAddress
   *
   * @param userAddress string with user address
   * @returns QueryRequest with graphql request for event
   */
  _makeGetPendingEntriesQuery(
    userAddress: string
  ): QueryRequest {
    return {
      entryLiquidity: [
        {
          where: {
            pool: {address: {_eq: this._contractAddress}},
            user: {address: {_eq: userAddress}},
            status: {_eq: "PENDING"}
          }
        },
        {
          acceptTime: true,
          amount: true,
          poolEntryId: true,
          entryId: true
        }
      ]
    }
  }

  /**
   * Performs request to graphql API for list of pending entries for a
   * given userAddress
   *
   * @param userAddress string with user address
   * @returns promise with PendingEntriesType
   */
  getPendingEntries(
    userAddress: string
  ): Promise<PendingEntriesType> {
    const entriesPromise: Promise<PendingEntriesType> = this._genqlClient.query(
      this._makeGetPendingEntriesQuery(userAddress)
    ).then(result => {
      // TODO: check if there are any errors while request?
      return deserializePendingEntries(result.entryLiquidity as Array<entry_liquidity>)
  });

  return entriesPromise
  }

  /**
   * Subscribes to pending entries updates, calls updateCallback each time when
   * new update received
   *
   * @param userAddress string with user address
   * @param updateCallback function with PendingEntriesType arg that called each
   * time new update received
   * @returns unsubscribe function
   */
  async subscribeToPendingEntries(
    userAddress: string,
    updateCallback: (pendingEntries: PendingEntriesType) => void
  ): Promise<void> {
    this.unsubscribeFromPendingEntries();
    const { unsubscribe } = this._genqlClient.subscription(
      this._makeGetPendingEntriesQuery(userAddress)
    ).subscribe({
      next: (result) => updateCallback(
        deserializePendingEntries(result.entryLiquidity as Array<entry_liquidity>)),
      error: console.error,
  });

  this.unsubscribeFromPendingEntries = unsubscribe;
  }

  /**
   * Preparing QueryReqest for getting positions for a given userAddress
   *
   * @param userAddress string with user address
   * @returns QueryRequest with graphql request for event
   */
  _makeGetPosition(
    userAddress: string
  ): QueryRequest {
    return {
      poolPosition: [
        {
          where: {
            pool: {address: {_eq: this._contractAddress}},
            user: {address: {_eq: userAddress}}
          }
        },
        {
          shares: true,
          user: {
            address: true
          },
          realizedProfit: true,
          entrySharePrice: true,
          withdrawnShares: true,
          withdrawnAmount: true,
          depositedAmount: true,
          lockedEstimateAmount: true
        }
      ]
    }
  }

  /**
   * Performs request to graphql API for user position stats
   *
   * @param userAddress string with user address
   * @returns promise with PoolPositionsType
   */
  getPosition(
    userAddress: string
  ): Promise<PoolPositionType> {
    const positionPromise: Promise<PoolPositionType> = this._genqlClient.query(
      this._makeGetPosition(userAddress)
    ).then(result => processOrDefault(
        result.poolPosition[0] as pool_position,
        emptyPoolPosition,
        deserializePoolPosition
      )
    );

    return positionPromise
  }

  /**
   * Subscribes to pool positions, calls updateCallback each time when
   * new update received
   *
   * @param userAddress string with user address
   * @param updateCallback function with PoolPositionsType arg that called each
   * time new update received
   * @returns unsubscribe function
   */
  async subscribeToPoolPositions(
    userAddress: string,
    updateCallback: (positions: PoolPositionType) => void
  ): Promise<void> {
    this.unsubscribeFromPoolPosition();
    const { unsubscribe } = this._genqlClient.subscription(
      this._makeGetPosition(userAddress)
    ).subscribe({
      next: (result) => updateCallback(
        processOrDefault(
          result.poolPosition[0] as pool_position,
          emptyPoolPosition,
          deserializePoolPosition
        )
      ),
      error: console.error,
    });

    this.unsubscribeFromPoolPosition = unsubscribe;
  }

  /**
   * Preparing QueryReqest for getting claims for a given userAddress
   *
   * @param userAddress string with user address
   * @returns QueryRequest with graphql request for event
   */
  _makeGetWithdrawableClaims(
    userAddress: string
  ): QueryRequest {
    return {
      claim: [
        {
          where: {
            pool: {address: {_eq: this._contractAddress}},
            user: {address: {_eq: userAddress}},
            event: {result: {_is_null: false}},
            withdrawn: {_eq: false}
          }
        },
        {
          user: {
            address: true
          },
          eventId: true,
          amount: true,
          withdrawn: true,
          id: true
        }
      ]
    }
  }

  /**
   * Performs request to graphql API for list of claims for a given userAddress
   *
   * @param userAddress string with user address
   * @returns promise with ClaimsType
   */
  getWithdrawableClaims(
    userAddress: string
  ): Promise<ClaimsType> {
    const claimsPromise: Promise<ClaimsType> = this._genqlClient.query(
      this._makeGetWithdrawableClaims(userAddress)
    ).then(result => {
      // TODO: check if there are any errors while request?
      return deserializeClaims(result.claim as Array<claim>)
  });

  return claimsPromise
  }

  /**
   * Subscribes to claims, calls updateCallback each time when new update received
   *
   * @param userAddress string with user address
   * @param updateCallback function with ClaimsType arg that called each
   * time new update received
   * @returns unsubscribe function
   */
  async subscribeToWithdrawableClaims(
    userAddress: string,
    updateCallback: (positions: ClaimsType) => void
  ): Promise<void> {
    this.unsubscribeFromClaims();
    const { unsubscribe } = this._genqlClient.subscription(
      this._makeGetWithdrawableClaims(userAddress)
    ).subscribe({
      next: (result) => updateCallback(
        deserializeClaims(result.claim as Array<claim>)),
      error: console.error,
    });

    this.unsubscribeFromClaims = unsubscribe;
  }

  /**
   * Preparing QueryReqest for getting pool state
   *
   * @param orderBy is desc by default (to request last pool state)
   * @param dateFrom is minimal date from which state is requested
   * @returns QueryRequest with graphql request for event
   */
  _makeGetPoolState(
    orderBy: order_by = "desc",
    dateFrom: Date = new Date("1984-01-01T12:00:00.000Z")
  ): QueryRequest {
    return {
      poolState: [
        {
          where: {
            pool: {
              address: {_eq: this._contractAddress}
            },
            timestamp: {
              _gte: dateFrom
            }
          },
          limit: 1,
          order_by: [{counter: orderBy}]
        },
        {
          totalLiquidity: true,
          totalShares: true,
          activeLiquidity: true,
          withdrawableLiquidity: true,
          entryLiquidity: true,
          sharePrice: true,
          timestamp: true,
          level: true,
          counter: true,
          action: true,
          opgHash: true
        }
      ]
    }
  }

  /**
   * Performs request to graphql API for pool state
   *
   * @param orderBy is desc by default (to request last pool state)
   * @param dateFrom is minimal date from which state is requested
   * @returns promise with PoolStateType
   */
  getPoolState(
    orderBy: order_by = "desc",
    dateFrom: Date = new Date("1984-01-01T12:00:00.000Z")
  ): Promise<PoolStateType> {
    const poolStatePromise: Promise<PoolStateType> = this._genqlClient.query(
      this._makeGetPoolState(orderBy, dateFrom)
    ).then(
      result => processOrDefault(
        result.poolState[0] as pool_state,
        emptyPoolState,
        deserializePoolState
      )
    );

    return poolStatePromise
  }

  /**
   * Subscribes to pool states, calls updateCallback each time when new update received
   *
   * @param updateCallback function with PoolPositionsType arg that called each
   * time new update received
   * @param orderBy is desc by default (to request last pool state)
   * @param dateFrom is minimal date from which state is requested
   * @returns unsubscribe function
   */
  _makePoolStateSubscription(
    updateCallback: (positions: PoolStateType) => void,
    orderBy: order_by = "desc",
    dateFrom: Date = new Date("1984-01-01T12:00:00.000Z")
  ): () => void {
    const { unsubscribe } = this._genqlClient.subscription(
      this._makeGetPoolState(orderBy, dateFrom)
    ).subscribe({
      next: (result) => updateCallback(
        processOrDefault(
          result.poolState[0] as pool_state,
          emptyPoolState,
          deserializePoolState
        )
      ),
      error: console.error,
    });
    return unsubscribe
  }

  /**
   * Performs request to graphql API for last pool state
   *
   * @returns promise with PoolStateType
   */
  getLastPoolState(): Promise<PoolStateType> {
    return this.getPoolState()
  }

  /**
   * Subscribes to last pool state, calls updateCallback each time when new update received
   *
   * @param updateCallback function with PoolPositionsType arg that called each
   * time new update received
   * @returns unsubscribe function
   */
  async subscribeToLastPoolState(
    updateCallback: (positions: PoolStateType) => void
  ): Promise<void> {
    this.unsubscribeFromLastPoolState();
    this.unsubscribeFromLastPoolState = this._makePoolStateSubscription(updateCallback);
  }

  /**
   * performs request to graphql api for first pool state
   *
   * @returns promise with PoolStateType
   */
  getFirstPoolState(
    dateFrom: Date = new Date("1984-01-01T12:00:00.000Z")
  ): Promise<PoolStateType> {
    const orderBy: order_by = "asc";
    return this.getPoolState(orderBy, dateFrom);
  }

  /**
   * Subscribes to first pool state, calls updateCallback each time when new update received
   *
   * @param updateCallback function with PoolPositionsType arg that called each
   * time new update received
   * @param dateFrom is minimal date from which state is requested
   * @returns unsubscribe function
   */
  async subscribeToFirstPoolState(
    updateCallback: (positions: PoolStateType) => void,
    dateFrom: Date = new Date("1984-01-01T12:00:00.000Z")
  ): Promise<void> {
    this.unsubscribeFromFirstPoolState();
    const orderBy: order_by = "asc";
    this.unsubscribeFromFirstPoolState = this._makePoolStateSubscription(
      updateCallback,
      orderBy,
      dateFrom
    );
  }

  /**
   * performs requests to graphql api to calculate pool APY
   *
   * @param dateFrom is minimal date from which APY is calculated
   * @returns promise with poolstatetype
   */
  async getAPY(
    dateFrom: Date = new Date("1984-01-01T12:00:00.000Z")
  ): Promise<BigNumber> {
    return calculateAPY(
      await this.getFirstPoolState(dateFrom),
      await this.getLastPoolState()
    )
  }

  /**
   * Subscribes to pool APY updates, calls updateCallback each time 
   *
   * @param dateFrom is minimal date from which APY is calculated
   * @returns promise with PoolStateType
   */
  async subscribeToAPY(
    updateCallback: (apy: BigNumber) => void,
    dateFrom: Date = new Date("1984-01-01T12:00:00.000Z")
  ): Promise<void> {
    this.unsubscribeFromAPY();
    type OptionalPoolStateType = null | PoolStateType;
    let firstPoolState: OptionalPoolStateType = null;
    let lastPoolState: OptionalPoolStateType = null;

    function updateAPY(
      firstState: OptionalPoolStateType,
      lastState: OptionalPoolStateType
    ): void {
      if ((firstState !== null) && (lastState !== null)) {
        const newAPY = calculateAPY(firstState, lastState);
        updateCallback(newAPY)
      }
    };

    const firstPoolStateUpdateCallback = (state: PoolStateType) => {
      firstPoolState = state;
      updateAPY(firstPoolState, lastPoolState);
    };

    const lastPoolStateUpdateCallback = (state: PoolStateType) => {
      lastPoolState = state;
      updateAPY(firstPoolState, lastPoolState);
    };

    this.subscribeToFirstPoolState(firstPoolStateUpdateCallback, dateFrom);

    const unsubscribeFromFirstPoolState = this._makePoolStateSubscription(
      firstPoolStateUpdateCallback,
      "asc",
      dateFrom
    );
    const unsubscribeFromLastPoolState = this._makePoolStateSubscription(
      lastPoolStateUpdateCallback
    );

    this.unsubscribeFromAPY = () => {
      unsubscribeFromFirstPoolState();
      unsubscribeFromLastPoolState();
    };
  }

  async unsubscribeAll(): Promise<void> {
    this.unsubscribeFromPendingEntries();
    this.unsubscribeFromPoolPosition();
    this.unsubscribeFromClaims();
    this.unsubscribeFromLastPoolState();
    this.unsubscribeFromFirstPoolState();
    this.unsubscribeFromAPY();
  }
}

export const getAllPools = async (
  network: Network
): Promise<Array<PoolType>> => {
    const {
      graphqlUri,
      tzktApiBaseUrl,
      justerPoolReferenceAddress,
      trustedOriginationSenders
    } = config.networks[network];

    const client = createClient({ url: graphqlUri });

    const similarPools = await requestSimilarPools(
      tzktApiBaseUrl, justerPoolReferenceAddress);
    const trustedPoolAddresses = similarPools.filter(poolData => {
      return trustedOriginationSenders.includes(poolData.creator.address)
    }).map(poolData => {return poolData.address});

    const checkIsTrusted = (pool: PoolType) => {
      return trustedPoolAddresses.includes(pool.address)
    };

    // TODO: consider adding filtering by balance?
    const poolsPromise: Promise<Array<PoolType>> = client.query({
      pool: {
        address: true,
        entryLockPeriod: true,
        isDepositPaused: true,
        isDisbandAllow: true,
        name: true,
        version: true
      }
    }).then(result => {
      return (result.pool as Array<pool>).map(deserializePool).filter(checkIsTrusted)
  });

  return poolsPromise
}
