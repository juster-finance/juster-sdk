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
import {
  Network,
  EntrypointName,
  BetType,
  EventType,
  PositionType
} from './types'
import { createClient, Client } from '@juster-finance/gql-client'
import {
  deserializeEvent,
  deserializePosition
} from './serialization'


export class Juster {
  protected _network: NetworkType;
  protected _tezos: TezosToolkit;
  protected _provider: BeaconWallet;
  protected _contractAddress: string;
  protected _entrypoints: Map<string, ParameterSchema>;
  protected _genqlClient: Client;
  protected _xtzDecimals: BigNumber;
  protected _ratioPrecision: BigNumber;

  public providerProfitFee: BigNumber;
  public unsubscribeFromEvent: () => void;
  public unsubscribeFromPosition: () => void;

  constructor(
    network: NetworkType,
    contractAddress: string,
    tezos: TezosToolkit,
    entrypoints: Record<string, any>,
    appName: string,
    graphqlUri: string,
    subscriptionUri: string,
    providerProfitFee: string,
    ratioPrecision: string,
  ) {
    this._network = network;
    this._tezos = tezos;

    // TODO: is it possible to get wallet provider using tezos instance?
    // I did not find it, so I am saving this provider to call requestPermissions
    this._provider = new BeaconWallet({
      name: appName,
      preferredNetwork: network
    });

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

    this.unsubscribeFromEvent = () => {};
    this.unsubscribeFromPosition = () => {};

    this._xtzDecimals = new BigNumber(1000000);
    this._ratioPrecision = new BigNumber(ratioPrecision);
    this.providerProfitFee = new BigNumber(providerProfitFee);
  };

  static create(
    network: Network,
  ) {
    const networkSettings = config.networks[network];

    const {
      contractAddress,
      rpcNode,
      graphqlUri,
      subscriptionUri,
      networkName
    } = networkSettings;

    const {
      appName,
      entrypoints,
      providerProfitFee,
      ratioPrecision
    } = config;

    const tezos = new TezosToolkit(rpcNode);
    return new Juster(
      (<any>NetworkType)[networkName],
      contractAddress,
      tezos,
      entrypoints,
      appName,
      graphqlUri,
      subscriptionUri,
      providerProfitFee,
      ratioPrecision
    );
  };

  /**
   * Request permissions for BeaconWallet
   */
  sync(): Promise<void> {
    // Calls request permissions:

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
    // TODO: consider saving this PKH inside sync and returing string here
    // instead of promise?
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
    betValue: BigNumber,
    minimalWinAmount: BigNumber,
  ): Promise<TransactionWalletOperation> {
    const args = [
      bet,
      'unit',
      eventId,
      minimalWinAmount.times(this._xtzDecimals).integerValue().toNumber()
    ];
    return this.callMethodSend("bet", args, betValue.toNumber());
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
    expectedRatioAboveEq: BigNumber,
    expectedRatioBellow: BigNumber,
    maxSlippage: BigNumber,
    amount: BigNumber
  ): Promise<TransactionWalletOperation> {
    const args = [
      eventId,
      expectedRatioAboveEq.times(this._xtzDecimals).integerValue().toNumber(),
      expectedRatioBellow.times(this._xtzDecimals).integerValue().toNumber(),
      maxSlippage.times(this._ratioPrecision).integerValue().toNumber()
    ];
    return this.callMethodSend("provideLiquidity", args, amount.toNumber());
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
    return this.callMethodSend("withdraw", args);
  };

  /**
   * Performs request to graphql API with event data for given eventId
   *
   * @param eventId nat number of event
   * @returns promise with EventType
   */
  getEvent(
    eventId: number
  ): Promise<EventType> {
    const eventPromise: Promise<EventType> = this._genqlClient.query({
      eventByPk: [
        {
          id: eventId
        },
        {
          poolAboveEq: true,
          poolBelow: true,
          totalLiquidityShares: true,
          createdTime: true,
          betsCloseTime: true,
          liquidityPercent: true
        }
      ]
    }).then(result => {
      // TODO: check if there are any errors while request?
      return deserializeEvent(result.eventByPk)
  });

  return eventPromise
  }

  /**
   * Subscribes to event updates, calls updateCallback each time when new update received
   *
   * @param eventId nat number of event
   * @param updateCallback function with EventType arg that called each time
   *    new update received
   * @returns unsubscribe function
   */
  async subscribeToEvent(
    eventId: number,
    updateCallback: (event: EventType) => void
  ): Promise<void> {

    this.unsubscribeFromEvent();
    const { unsubscribe } = this._genqlClient.subscription({
      eventByPk: [
        {
          id: eventId
        },
        {
          poolAboveEq: true,
          poolBelow: true,
          totalLiquidityShares: true,
          createdTime: true,
          betsCloseTime: true,
          liquidityPercent: true
        }
      ]
    }).subscribe({
      next: (result) => updateCallback(deserializeEvent(result.eventByPk)),
      error: console.error,
  });

  this.unsubscribeFromEvent = unsubscribe;
  }

  /**
   * Performs request to graphql API with user position data for given eventId
   * and participantAddress
   *
   * @param eventId nat number of event
   * @param participantAddress address of the user
   * @returns promise with PositionType
   */
  getPosition(
    eventId: number,
    participantAddress: string
  ): Promise<PositionType> {

    // TODO: turn off auto deserialization of numbers
    const positionPromise: Promise<PositionType> = this._genqlClient.query({
      position: [
        {
          where: {
            user: {address: {_eq: participantAddress}},
            eventId: {_eq: eventId}
          }
        },
        {
          liquidityProvidedAboveEq: true,
          liquidityProvidedBelow: true,
          rewardAboveEq: true,
          rewardBelow: true,
          shares: true,
        }
      ]
    }).then(result => {
        // TODO: is it good to select 0 object? What happens if there are more
        // items in array? (should not happen)
        const rawPosition = result.position[0];

        // TODO: check if there are any errors while request?
        return deserializePosition(rawPosition)
    });

    return positionPromise
  }

  /**
   * Subscribes to position updates, calls updateCallback each time when
   * new update received
   *
   * @param eventId nat number of event
   * @param participantAddress address of the user
   * @param updateCallback function with PositionType arg that called each time
   *    new update received
   * @returns unsubscribe function
   */
   async subscribeToPosition(
    eventId: number,
    participantAddress: string,
    updateCallback: (event: PositionType) => void
  ): Promise<void> {

    this.unsubscribeFromPosition();
    const { unsubscribe } = this._genqlClient.subscription({
      position: [
        {
          where: {
            user: {address: {_eq: participantAddress}},
            eventId: {_eq: eventId}
          }
        },
        {
          liquidityProvidedAboveEq: true,
          liquidityProvidedBelow: true,
          rewardAboveEq: true,
          rewardBelow: true,
          shares: true,
        }
      ]
    }).subscribe({
      // TODO: I feel that this is too complicated and there is smth wrong doing this:
      next: (result) => updateCallback(
        deserializePosition(result.position[0])),
      error: console.error,
  });

  this.unsubscribeFromPosition = unsubscribe;
  }
}
