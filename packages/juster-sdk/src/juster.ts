import {
  ContractMethod,
  TezosToolkit,
  TransactionWalletOperation,
} from "@taquito/taquito";
import { ParameterSchema } from "@taquito/michelson-encoder";
import { BeaconWallet } from '@taquito/beacon-wallet';
import config from "./config.json"
import BigNumber from "bignumber.js";
import { NetworkType } from '@airgap/beacon-dapp';
import {
  Network,
  EntrypointName,
  BetType,
  EventType,
  CorePositionType,
  PoolPositionKeyType,
  PendingEntryType,
  PendingEntriesType,
  PoolPositionType,
  PoolPositionsType,
  ClaimType,
  ClaimsType
} from './types'
import {
  createClient,
  Client,
  QueryRequest
} from '@juster-finance/gql-client'
import {
  deserializeEvent,
  deserializePosition,
  deserializePendingEntries,
  deserializePoolPositions,
  deserializeClaims
} from './serialization'


// TODO: move this to separate file
export class JusterBaseContract {
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
}

// TODO: move this to separate file [2]:
export class JusterCore extends JusterBaseContract {
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

    this.unsubscribeFromEvent = () => {};
    this.unsubscribeFromPosition = () => {};

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
      (<any>NetworkType)[networkName],
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

  // TODO: create with super() or it might be better to have separate create()?
  // -- anyway need to have create() with raise not implemented in the second case
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

  // TODO: _makeGetEventQuery(); _makeGetPositionQuery(); and reuse this query
  // in both get / subscribe

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
   * @returns promise with CorePositionType
   */
  getPosition(
    eventId: number,
    participantAddress: string
  ): Promise<CorePositionType> {

    // TODO: turn off auto deserialization of numbers
    const positionPromise: Promise<CorePositionType> = this._genqlClient.query({
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

// TODO: move this to separate file [3]:
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
