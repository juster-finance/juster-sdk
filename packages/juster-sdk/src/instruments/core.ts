import {
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
  BetType,
  EventType,
  CorePositionType
} from '../types'

import {
  deserializeEvent,
  deserializePosition
} from '../serialization'

import { JusterBaseInstrument } from './baseInstrument'


export class JusterCore extends JusterBaseInstrument {
  protected _ratioPrecision: BigNumber;
  public providerProfitFee: BigNumber;

  public unsubscribeFromEvent: () => void;
  public unsubscribeFromPosition: () => void;

  constructor(
    network: NetworkType,
    contractAddress: string,
    tezos: TezosToolkit,
    provider: BeaconWallet,
    entrypoints: Record<string, any>,
    graphqlUri: string,
    subscriptionUri: string,
    providerProfitFee: string,
    ratioPrecision: string,
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

    this.unsubscribeFromEvent = () => undefined;
    this.unsubscribeFromPosition = () => undefined;

    this._ratioPrecision = new BigNumber(ratioPrecision);
    this.providerProfitFee = new BigNumber(providerProfitFee);
  };

  // TODO: looks like genql provider should be only one too, need to discuss what is the best solution
  static create(
    tezos: TezosToolkit,
    provider: BeaconWallet,
    network: Network,
  ) {

    const networkSettings = config.networks[network];

    const {
      justerCoreAddress,
      graphqlUri,
      subscriptionUri,
      networkName
    } = networkSettings;

    const {
      entrypoints,
      providerProfitFee,
      ratioPrecision
    } = config;

    return new JusterCore(
      networkName as NetworkType,
      justerCoreAddress,
      tezos,
      provider,
      entrypoints["justerCore"],
      graphqlUri,
      subscriptionUri,
      providerProfitFee,
      ratioPrecision
    );
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
   * Preparing QueryReqest for getting event by its id
   *
   * @param eventId nat number of event
   * @returns QueryRequest with graphql request for event
   */
  _makeGetEvent(
    eventId: number
  ): QueryRequest {
    return {
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
    }
  }

  /**
   * Performs request to graphql API with event data for given eventId
   *
   * @param eventId nat number of event
   * @returns promise with EventType
   */
  getEvent(
    eventId: number
  ): Promise<EventType> {
    const eventPromise: Promise<EventType> = this._genqlClient.query(
      this._makeGetEvent(eventId)
    ).then(result => {
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
    const { unsubscribe } = this._genqlClient.subscription(
      this._makeGetEvent(eventId)
    ).subscribe({
      next: (result) => updateCallback(deserializeEvent(result.eventByPk)),
      error: console.error,
  });

  this.unsubscribeFromEvent = unsubscribe;
  }

  /**
   * Preparing QueryReqest for getting user position by
   * participantAddress and eventId
   *
   * @param eventId nat number of event
   * @param participantAddress address of the user
   * @returns QueryRequest with graphql request for position
   */
  _makeGetPosition(
    eventId: number,
    participantAddress: string
  ): QueryRequest {
    return {
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
    }
  }

  /**
   * Performs request to graphql API with user position data for given eventId
   * and participantAddress
   *
   * @param eventId nat number of event
   * @param participantAddress address of the user
   * @returns promise with CorePositionType
   */
  getPosition(
    eventId: number,
    participantAddress: string
  ): Promise<CorePositionType> {

    // TODO: turn off auto deserialization of numbers
    const positionPromise: Promise<CorePositionType> = this._genqlClient.query(
      this._makeGetPosition(eventId, participantAddress)
    ).then(result => {
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
   * @param updateCallback function with CorePositionType arg that called each time
   *    new update received
   * @returns unsubscribe function
   */
   async subscribeToPosition(
    eventId: number,
    participantAddress: string,
    updateCallback: (event: CorePositionType) => void
  ): Promise<void> {

    this.unsubscribeFromPosition();
    const { unsubscribe } = this._genqlClient.subscription(
      this._makeGetPosition(eventId, participantAddress)
    ).subscribe({
      next: (result) => updateCallback(deserializePosition(result.position[0])),
      error: console.error,
  });

  this.unsubscribeFromPosition = unsubscribe;
  }
}

