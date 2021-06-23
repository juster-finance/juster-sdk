// import { ContractMethod } from "./types";
import { ContractMethod, TezosToolkit } from "@taquito/taquito";
import { ParameterSchema } from "@taquito/michelson-encoder";
import { BeaconWallet } from '@taquito/beacon-wallet';
import config from "./config.json"
import BigNumber from "bignumber.js";
import { NetworkType } from '@airgap/beacon-sdk';


type Network = "mainnet" | "testnet";
type EntrypointName = "bet" | "provideLiquidity" | "withdraw";
type BetType = "aboveEq" | "below";

// TODO: move all precisions in config into one objkt?

export class BakingBet {
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
    return new BakingBet(
      network,
      contractAddress,
      tezos,
      entrypoints,
      appName
    )
  };

  sync() {
    // Calls request permissions:
    return this._provider.requestPermissions({
      network: { type: NetworkType.FLORENCENET }
    });
  };

  callMethodSend(
    entrypoint: EntrypointName,
    args: any,
    amount: number
  ) {
    const mutez = true;
    return new ContractMethod(
      this._tezos.wallet,
      this._contractAddress,
      this._entrypoints.get(entrypoint)!,
      entrypoint,
      args).send({ amount, mutez });
  };

  bet(
    // TODO: make interface for each entrypoint (?)
    eventId: number,
    bet: BetType,
    betValue: number,
    minimalWinAmount: BigNumber.Value,
  ) {
    const args = [bet, 'unit', eventId, minimalWinAmount];
    // TODO: should betValue be BigNumber.Value?
    return this.callMethodSend("bet", args, betValue);
  };

  provideLiquidity(
    eventId: number,
    expectedRatioAboveEq: BigNumber.Value,
    expectedRatioBellow: BigNumber.Value,
    maxSlippage: BigNumber.Value,
    amount: number
  ) {
    const args = [eventId, expectedRatioAboveEq, expectedRatioBellow, maxSlippage];
    return this.callMethodSend("provideLiquidity", args, amount);
  };

  // TODO: withdraw call
}

