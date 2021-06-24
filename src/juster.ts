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
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  gql,
} from "@apollo/client/core";
import {
  deserializeEvent,
  deserializePosition
} from './serialization'
import { graphql } from "graphql";


// TODO: move this consts into config/somewhere?
const XTZ_DECIMALS = new BigNumber(1000000);
const RATIO_PRECISION = new BigNumber(100000000);


const createApolloClient = (uri: string) => {
  return new ApolloClient({
    link: new HttpLink({ uri }),
    cache: new InMemoryCache(),
  });
};

// TODO: move all precisions in config into one objkt?

export class Juster {
  protected _network: Network;
  protected _tezos: TezosToolkit;
  protected _provider: BeaconWallet;
  protected _contractAddress: string;
  protected _entrypoints: Map<string, ParameterSchema>;
  protected _grapghQlClient: ApolloClient<NormalizedCacheObject>

  constructor(
    network: Network,
    contractAddress: string,
    tezos: TezosToolkit,
    entrypoints: Record<string, any>,
    appName: string,
    graphqlUri: string
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

    this._grapghQlClient = createApolloClient(graphqlUri);
  };

  static create(
    network: Network,
  ) {
    const networkSettings = config.networks[network];
    const { contractAddress, rpcNode, graphqlUri } = networkSettings;
    const { appName, entrypoints } = config;

    const tezos = new TezosToolkit(rpcNode);
    return new Juster(
      network,
      contractAddress,
      tezos,
      entrypoints,
      appName,
      graphqlUri
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
      minimalWinAmount.times(XTZ_DECIMALS).integerValue().toNumber()
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
      expectedRatioAboveEq.times(XTZ_DECIMALS).integerValue().toNumber(),
      expectedRatioBellow.times(XTZ_DECIMALS).integerValue().toNumber(),
      maxSlippage.times(RATIO_PRECISION).integerValue().toNumber()
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
    return this.callMethodSend("provideLiquidity", args);
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
    const query = gql`query EventQuery {
      juster_event(where: {id: {_eq: ${ eventId }}}) {
        pool_above_eq
        pool_below
        total_liquidity_shares
        created_time
        bets_close_time
        liquidity_percent
      }
    }`

    // TODO: turn off auto deserialization of numbers
    // TODO: unpack data and return EventType object? (or promise with EventType)
    const eventPromise: Promise<EventType> = this._grapghQlClient
      .query({query: query})
      .then(result => {
        // TODO: is it good to select 0 object? What happens if there are more
        // items in array? (should not happen)
        const rawEvent = result.data.juster_event[0];

        // TODO: check if there are any errors while request?
        return deserializeEvent(rawEvent)
    });

    return eventPromise
  };

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
    const query = gql`query PositionQuery {
      juster_position(where: {user: {address: {_eq: "${ participantAddress }"}}, event_id: {_eq: ${ eventId }}}) {
        liquidity_provided_above_eq
        liquidity_provided_below
        reward_above_eq
        reward_below
        shares
      }
    }`

    // TODO: turn off auto deserialization of numbers
    // TODO: unpack data and return EventType object? (or promise with EventType)
    const positionPromise: Promise<PositionType> = this._grapghQlClient
      .query({query: query})
      .then(result => {
        // TODO: is it good to select 0 object? What happens if there are more
        // items in array? (should not happen)
        const rawPosition = result.data.juster_position[0];

        // TODO: check if there are any errors while request?
        return deserializePosition(rawPosition)
    });

    return positionPromise
  }
}

