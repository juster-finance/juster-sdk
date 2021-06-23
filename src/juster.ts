import {
  ContractMethod,
  TezosToolkit,
  TransactionWalletOperation,
} from "@taquito/taquito";
import { ParameterSchema } from "@taquito/michelson-encoder";
import { BeaconWallet } from '@taquito/beacon-wallet';
import config from "./config.json"
import BigNumber from "bignumber.js";
import { NetworkType } from '@airgap/beacon-sdk';
import { Network, EntrypointName, BetType } from './types'


// TODO: move all precisions in config into one objkt?

export class Juster {
  protected _network: Network;
  protected _tezos: TezosToolkit;
  protected _provider: BeaconWallet;
  protected _contractAddress: string;
  protected _entrypoints: Map<string, ParameterSchema>;

  constructor(
    network: Network,
    contractAddress: string,
    tezos: TezosToolkit,
    entrypoints: Record<string, any>,
    appName: string
  ) {
    this._network = network;
    this._tezos = tezos;

    // TODO: is it possible to get wallet provider using tezos instance?
    // I did not find it, so I am saving this provider to call requestPermissions
    this._provider = new BeaconWallet({
      name: appName,
      preferredNetwork: network === "mainnet"
        ? NetworkType.MAINNET
        : NetworkType.FLORENCENET
    });

    this._tezos.setWalletProvider(this._provider);
    this._contractAddress = contractAddress;
    this._entrypoints = new Map<string, ParameterSchema>(
      Object.entries(entrypoints).map(([name, typeExpr]) => {
        return [name, new ParameterSchema(typeExpr)];
      }),
    );
  };

  static create(
    network: Network,
  ) {
    const networkSettings = config.networks[network];
    const { contractAddress, rpcNode } = networkSettings;
    const { appName, entrypoints } = config;

    const tezos = new TezosToolkit(rpcNode);
    return new Juster(
      network,
      contractAddress,
      tezos,
      entrypoints,
      appName
    )
  };

  /**
   * Request permissions for BeaconWallet
   */
  sync(): Promise<void> {
    // Calls request permissions:
    return this._provider.requestPermissions({
      network: { type: NetworkType.FLORENCENET }
    });
  };

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
    const mutez = true;
    return new ContractMethod(
      this._tezos.wallet,
      this._contractAddress,
      this._entrypoints.get(entrypoint)!,
      entrypoint,
      args).send({ amount, mutez });
  };

  /**
   * Calling bet entrypoint
   *
   * @param eventId nat number of event
   * @param bet bet type: either aboveEq or below
   * @param betValue bet amount
   * @param minimalWinAmount minimal expected bet amount (slippage)
   * @returns promise with TransactionWalletOperation
   */
  bet(
    eventId: number,
    bet: BetType,
    betValue: number,
    minimalWinAmount: BigNumber.Value,
  ): Promise<TransactionWalletOperation> {
    const args = [bet, 'unit', eventId, minimalWinAmount];
    // TODO: should betValue be BigNumber.Value?
    return this.callMethodSend("bet", args, betValue);
  };

  /**
   * Calling provideLiquidity entrypoint
   *
   * @param eventId nat number of event
   * @param expectedRatioAboveEq expected pool ratio numerator
   * @param expectedRatioBellow expected pool ratio denomimator
   * @param maxSlippage maximal difference between expected ratio and actual ratio (nat number measured in ratioPrecision)
   * @param amount added liquidity amount
   * @returns promise with TransactionWalletOperation
   */
  provideLiquidity(
    eventId: number,
    expectedRatioAboveEq: BigNumber.Value,
    expectedRatioBellow: BigNumber.Value,
    maxSlippage: BigNumber.Value,
    amount: number
  ): Promise<TransactionWalletOperation> {
    const args = [eventId, expectedRatioAboveEq, expectedRatioBellow, maxSlippage];
    return this.callMethodSend("provideLiquidity", args, amount);
  };

  /**
   * Calling withdraw entrypoint
   *
   * @param eventId nat number of event
   * @param participantAddress address of the participant used to calculate and pay rewards
   * @returns promise with TransactionWalletOperation
   */
  withdraw(
    eventId: number,
    participantAddress: string,
  ): Promise<TransactionWalletOperation> {
    const args = [eventId, participantAddress];
    return this.callMethodSend("provideLiquidity", args);
  };
}

