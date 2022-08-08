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
  PoolPositionKeyType,
  PendingEntryType,
  PendingEntriesType,
  PoolPositionType,
  PoolPositionsType,
  ClaimType,
  ClaimsType
} from '../types'

import {
  deserializePendingEntries,
  deserializePoolPositions,
  deserializeClaims
} from '../serialization'

import { JusterBaseContract } from './baseContract'


export class JusterPool extends JusterBaseContract {
  protected _shareDecimals: BigNumber;

  public unsubscribeFromPendingEntries: () => void;
  public unsubscribeFromPoolPositions: () => void;
  public unsubscribeFromClaims: () => void;

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

  // TODO: make description
  depositLiquidity(amount: BigNumber): Promise<TransactionWalletOperation> {
    return this.callMethodSend("depositLiquidity", [], amount.toNumber());
  };

  // TODO: make description
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

  // TODO: make description
  withdrawLiquidity(
    positions: Array<PoolPositionKeyType>
  ): Promise<TransactionWalletOperation> {
    return this.callMethodSend("withdrawLiquidity", positions);
  };

  // TODO: make description
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

  // TODO: make description
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

  // TODO: add description
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

  // TODO: make description
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

  // TODO: make description
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

  // TODO: add description
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

  // TODO: make description
  _makeGetClaims(
    userAddress: string
  ): QueryRequest {
    return {
      claim: [
        {
          where: {
            user: {address: {_eq: userAddress}}
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

  // TODO: make description
  getClaims(
    userAddress: string
  ): Promise<ClaimsType> {
    const claimsPromise: Promise<ClaimsType> = this._genqlClient.query(
      this._makeGetClaims(userAddress)
    ).then(result => {
      // TODO: check if there are any errors while request?
      return deserializeClaims(result.claim)
  });

  return claimsPromise
  }

  // TODO: add description
  async subscribeToClaims(
    userAddress: string,
    updateCallback: (positions: ClaimsType) => void
  ): Promise<void> {
    this.unsubscribeFromClaims();
    const { unsubscribe } = this._genqlClient.subscription(
      this._makeGetClaims(userAddress)
    ).subscribe({
      next: (result) => updateCallback(deserializeClaims(result.claim)),
      error: console.error,
    });

    this.unsubscribeFromClaims = unsubscribe;
  }

  // TODO: calculateSharePrice helper
  // TODO: calculateClaimAmount helper
}

