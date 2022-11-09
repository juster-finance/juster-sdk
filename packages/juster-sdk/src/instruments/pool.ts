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
  pool_state
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
  deserializePoolState
} from '../serialization'

import { JusterBaseInstrument } from './baseInstrument'

import { requestSimilarPools } from '../tzkt'

export class JusterPool extends JusterBaseInstrument {
  protected _shareDecimals: BigNumber;

  public unsubscribeFromPendingEntries: () => void;
  public unsubscribeFromPoolPosition: () => void;
  public unsubscribeFromClaims: () => void;
  public unsubscribeFromLastPoolState: () => void;

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
    ).then(result => {
      // TODO: check if there are any errors while request?
      return deserializePoolPosition(result.poolPosition[0] as pool_position)
  });

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
        deserializePoolPosition(result.poolPosition[0] as pool_position)),
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
   * Preparing QueryReqest for getting Pool
   *
   * @returns QueryRequest with graphql request for event
   */
  _makeGetLastPoolState(): QueryRequest {
    return {
      poolState: [
        {
          where: {
            pool: {
              address: {_eq: this._contractAddress}
            }
          },
          limit: 1,
          order_by: [{counter: "desc"}]
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
   * Performs request to graphql API for pool data
   *
   * @returns promise with PoolStateType
   */
  getLastPoolState(): Promise<PoolStateType> {
    const poolStatePromise: Promise<PoolStateType> = this._genqlClient.query(
      this._makeGetLastPoolState()
    ).then(result => {
      // TODO: check if there are any errors while request?
      // TODO: handle error if there is no pools returned?
      return deserializePoolState(result.poolState[0] as pool_state)
  });

  return poolStatePromise
  }

  /**
   * Subscribes to pool stats, calls updateCallback each time when new update received
   *
   * @param updateCallback function with PoolPositionsType arg that called each
   * time new update received
   * @returns unsubscribe function
   */
  async subscribeToLastPoolState(
    updateCallback: (positions: PoolStateType) => void
  ): Promise<void> {
    this.unsubscribeFromLastPoolState();
    const { unsubscribe } = this._genqlClient.subscription(
      this._makeGetLastPoolState()
    ).subscribe({
      next: (result) => updateCallback(
        deserializePoolState(result.poolState[0] as pool_state)),
      error: console.error,
    });

    this.unsubscribeFromLastPoolState = unsubscribe;
  }

  async unsubscribeAll(): Promise<void> {
    this.unsubscribeFromPendingEntries();
    this.unsubscribeFromPoolPosition();
    this.unsubscribeFromClaims();
    this.unsubscribeFromLastPoolState();
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

    const deserializePool = (pool: PoolType) => {
      return {address: pool.address}
    };

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
      pool: {address: true}
    }).then(result => {
      return result.pool.map(deserializePool).filter(checkIsTrusted)
  });

  return poolsPromise
}
