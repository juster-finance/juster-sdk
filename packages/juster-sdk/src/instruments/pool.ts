import {
  ContractMethod,
  TezosToolkit,
  TransactionWalletOperation,
} from "@taquito/taquito";

import { BeaconWallet } from '@taquito/beacon-wallet';

import { QueryRequest } from '@juster-finance/gql-client'

import config from "../config.json"
import BigNumber from "bignumber.js";
import { NetworkType } from '@airgap/beacon-dapp';

import {
  Network,
  ClaimKeys,
  PendingEntryType,
  PendingEntriesType,
  PoolPositionType,
  PoolPositionsType,
  ClaimType,
  ClaimsType,
  PoolType
} from '../types'

import {
  deserializePendingEntries,
  deserializePoolPositions,
  deserializeClaims,
  deserializePool
} from '../serialization'

import { JusterBaseInstrument } from './baseInstrument'


export class JusterPool extends JusterBaseInstrument {
  protected _shareDecimals: BigNumber;

  public unsubscribeFromPendingEntries: () => void;
  public unsubscribeFromPoolPositions: () => void;
  public unsubscribeFromClaims: () => void;
  public unsubscribeFromPool: () => void;

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

    this.unsubscribeFromPendingEntries = () => {};
    this.unsubscribeFromPoolPositions = () => {};
    this.unsubscribeFromClaims = () => {};
    this.unsubscribeFromPool = () => {};

    this._shareDecimals = new BigNumber(shareDecimals);
  };

  static create(
    tezos: TezosToolkit,
    provider: BeaconWallet,
    network: Network,
  ) {

    const networkSettings = config.networks[network];

    const {
      justerPoolAddress,
      graphqlUri,
      subscriptionUri,
      networkName
    } = networkSettings;

    const {
      entrypoints,
      poolShareDecimals
    } = config;

    return new JusterPool(
      (<any>NetworkType)[networkName],
      justerPoolAddress,
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
   * @param positionId id of position to make claim from
   * @param shares amount of shares to claim
   * @returns promise with TransactionWalletOperation
   */
  claimLiquidity(
    positionId: number,
    shares: BigNumber,
  ): Promise<TransactionWalletOperation> {
    const args = [
      positionId,
      shares.times(this._shareDecimals).integerValue().toNumber()
    ];
    return this.callMethodSend("claimLiquidity", args);
  };

  /**
   * Calling withdrawLiquidity entrypoint to withdraw given claims
   *
   * @param claims array with claim keys to be withdrawn
   * @returns promise with TransactionWalletOperation
   */
  withdrawLiquidity(
    claims: ClaimKeys
  ): Promise<TransactionWalletOperation> {
    return this.callMethodSend("withdrawLiquidity", [claims]);
  };

  /**
   * Calling approveLiquidity entrypoint to approve entry
   *
   * @param entryId is number of entry to be approved
   * @returns promise with TransactionWalletOperation
   */
  approveLiquidity(
    entryId: number
  ): Promise<TransactionWalletOperation> {
    return this.callMethodSend("approveLiquidity", [entryId]);
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
            user: {address: {_eq: userAddress}},
            status: {_eq: "PENDING"}
          }
        },
        {
          acceptTime: true,
          amount: true,
          id: true
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
      return deserializePendingEntries(result.entryLiquidity)
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
      next: (result) => updateCallback(deserializePendingEntries(result.entryLiquidity)),
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
  _makeGetPositions(
    userAddress: string
  ): QueryRequest {
    return {
      poolPosition: [
        {
          where: {
            user: {address: {_eq: userAddress}}
          }
        },
        {
          shares: true,
          id: true
        }
      ]
    }
  }

  /**
   * Performs request to graphql API for list of positions for a given userAddress
   *
   * @param userAddress string with user address
   * @returns promise with PoolPositionsType
   */
  getPositions(
    userAddress: string
  ): Promise<PoolPositionsType> {
    const positionsPromise: Promise<PoolPositionsType> = this._genqlClient.query(
      this._makeGetPositions(userAddress)
    ).then(result => {
      // TODO: check if there are any errors while request?
      return deserializePoolPositions(result.poolPosition)
  });

  return positionsPromise
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
    updateCallback: (positions: PoolPositionsType) => void
  ): Promise<void> {
    this.unsubscribeFromPoolPositions();
    const { unsubscribe } = this._genqlClient.subscription(
      this._makeGetPositions(userAddress)
    ).subscribe({
      next: (result) => updateCallback(deserializePoolPositions(result.poolPosition)),
      error: console.error,
    });

    this.unsubscribeFromPoolPositions = unsubscribe;
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
            user: {address: {_eq: userAddress}},
            event: {result: {_is_null: false}},
            withdrawn: {_eq: false}
          }
        },
        {
          positionId: true,
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
      return deserializeClaims(result.claim)
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
      next: (result) => updateCallback(deserializeClaims(result.claim)),
      error: console.error,
    });

    this.unsubscribeFromClaims = unsubscribe;
  }

  /**
   * Preparing QueryReqest for getting Pool
   *
   * @returns QueryRequest with graphql request for event
   */
  _makeGetPool(): QueryRequest {
    return {
      pool: [
        {
          where: {
            address: {_eq: this._contractAddress}
          }
        },
        {
          totalLiquidity: true,
          totalShares: true
          // TODO: need to get activeLiquidity + activeEvents list [require dipdup upd]
        }
      ]
    }
  }

  /**
   * Performs request to graphql API for pool data
   *
   * @returns promise with PoolPositionsType
   */
  getPool(): Promise<PoolType> {
    const poolPromise: Promise<PoolType> = this._genqlClient.query(
      this._makeGetPool()
    ).then(result => {
      // TODO: check if there are any errors while request?
      // TODO: handle error if there is no pools returned?
      return deserializePool(result.pool[0])
  });

  return poolPromise
  }

  /**
   * Subscribes to pool stats, calls updateCallback each time when new update received
   *
   * @param updateCallback function with PoolPositionsType arg that called each
   * time new update received
   * @returns unsubscribe function
   */
  async subscribeToPool(
    updateCallback: (positions: PoolType) => void
  ): Promise<void> {
    this.unsubscribeFromPool();
    const { unsubscribe } = this._genqlClient.subscription(
      this._makeGetPool()
    ).subscribe({
      next: (result) => updateCallback(deserializePool(result.pool[0])),
      error: console.error,
    });

    this.unsubscribeFromPool = unsubscribe;
  }
}

