import {
  ContractMethod,
  TezosToolkit,
  TransactionWalletOperation,
} from "@taquito/taquito";

import { BeaconWallet } from '@taquito/beacon-wallet';

import {
  createClient,
  Client
} from '@juster-finance/gql-client'

import { ParameterSchema } from "@taquito/michelson-encoder";
import BigNumber from "bignumber.js";
import { NetworkType } from '@airgap/beacon-dapp';

import { EntrypointName } from '../types'


export class JusterBaseInstrument {
  protected _network: NetworkType;
  protected _tezos: TezosToolkit;
  protected _provider: BeaconWallet;
  protected _contractAddress: string;
  protected _entrypoints: Map<string, ParameterSchema>;
  protected _genqlClient: Client;
  protected _xtzDecimals: BigNumber;

  constructor(
    network: NetworkType,
    contractAddress: string,
    tezos: TezosToolkit,
    provider: BeaconWallet,
    entrypoints: Record<string, any>,
    graphqlUri: string,
    subscriptionUri: string,
  ) {
    this._network = network;
    this._tezos = tezos;
    this._provider = provider;

    this._tezos.setWalletProvider(this._provider);
    this._contractAddress = contractAddress;
    this._entrypoints = new Map<string, ParameterSchema>(
      Object.entries(entrypoints).map(([name, typeExpr]) => {
        return [name, new ParameterSchema(typeExpr)];
      }),
    );

    this._genqlClient = createClient({
      url: graphqlUri,
      subscription: {url: subscriptionUri}
    });

    this._xtzDecimals = new BigNumber(1000000);
  };

  /**
   * Request permissions for BeaconWallet
   */
  sync(): Promise<void> {
    return this._provider.requestPermissions({
      network: {
        type: this._network
      }
    });
  };

  /**
   * Return user address (public key hash)
   */
  getPkh(): Promise<string> {
    return this._provider.getPKH()
  }

  /**
   * Creates new ContractMethod and performs send call to the contract
   *
   * @param entrypoint contract entrypoint name
   * @param args arguments that transfers to this entrypoint, order matters
   * @param amount the amount added to the transaction
   * @returns promise with TransactionWalletOperation
   */
  callMethodSend(
    entrypoint: EntrypointName,
    args: any,
    amount: number = 0
  ): Promise<TransactionWalletOperation> {
    const mutez = false;
    return new ContractMethod(
      this._tezos.wallet,
      this._contractAddress,
      this._entrypoints.get(entrypoint)!,
      entrypoint,
      args).send({ amount, mutez });
  };

  /**
   * Returns contract address
   */
  getContractAddress(): string {
    return this._contractAddress
  }
}

