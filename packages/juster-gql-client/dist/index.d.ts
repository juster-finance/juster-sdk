import {
  FieldsSelection,
  GraphqlOperation,
  ClientOptions,
  Observable,
} from '@genql/runtime'
import { SubscriptionClient } from 'subscriptions-transport-ws'
export * from './schema'
import {
  query_rootRequest,
  query_rootPromiseChain,
  query_root,
  subscription_rootRequest,
  subscription_rootObservableChain,
  subscription_root,
} from './schema'
export declare const createClient: (options?: ClientOptions) => Client
export declare const everything: { __scalar: boolean }
export declare const version: string

export interface Client {
  wsClient?: SubscriptionClient

  query<R extends query_rootRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<query_root, R>>

  subscription<R extends subscription_rootRequest>(
    request: R & { __name?: string },
  ): Observable<FieldsSelection<subscription_root, R>>

  chain: {
    query: query_rootPromiseChain

    subscription: subscription_rootObservableChain
  }
}

export type QueryResult<fields extends query_rootRequest> = FieldsSelection<
  query_root,
  fields
>

export declare const generateQueryOp: (
  fields: query_rootRequest & { __name?: string },
) => GraphqlOperation
export type SubscriptionResult<
  fields extends subscription_rootRequest
> = FieldsSelection<subscription_root, fields>

export declare const generateSubscriptionOp: (
  fields: subscription_rootRequest & { __name?: string },
) => GraphqlOperation

export declare const enumbetSelectColumn: {
  readonly amount: 'amount'
  readonly createdTime: 'createdTime'
  readonly eventId: 'eventId'
  readonly id: 'id'
  readonly opgHash: 'opgHash'
  readonly reward: 'reward'
  readonly side: 'side'
  readonly userId: 'userId'
}

export declare const enumcandleSelectColumn: {
  readonly close: 'close'
  readonly currencyPairId: 'currencyPairId'
  readonly high: 'high'
  readonly id: 'id'
  readonly interval: 'interval'
  readonly low: 'low'
  readonly open: 'open'
  readonly since: 'since'
  readonly source: 'source'
  readonly until: 'until'
  readonly volume: 'volume'
}

export declare const enumclaimSelectColumn: {
  readonly amount: 'amount'
  readonly eventId: 'eventId'
  readonly id: 'id'
  readonly poolId: 'poolId'
  readonly positionId: 'positionId'
  readonly userId: 'userId'
  readonly withdrawn: 'withdrawn'
}

export declare const enumcurrencyPairSelectColumn: {
  readonly id: 'id'
  readonly symbol: 'symbol'
  readonly totalEvents: 'totalEvents'
  readonly totalValueLocked: 'totalValueLocked'
  readonly totalVolume: 'totalVolume'
}

export declare const enumcursorOrdering: {
  readonly ASC: 'ASC'
  readonly DESC: 'DESC'
}

export declare const enumdepositSelectColumn: {
  readonly amountAboveEq: 'amountAboveEq'
  readonly amountBelow: 'amountBelow'
  readonly createdTime: 'createdTime'
  readonly eventId: 'eventId'
  readonly id: 'id'
  readonly opgHash: 'opgHash'
  readonly shares: 'shares'
  readonly userId: 'userId'
}

export declare const enumdipdupContractMetadataSelectColumn: {
  readonly contract: 'contract'
  readonly createdAt: 'createdAt'
  readonly id: 'id'
  readonly metadata: 'metadata'
  readonly network: 'network'
  readonly updateId: 'updateId'
  readonly updatedAt: 'updatedAt'
}

export declare const enumdipdupContractSelectColumn: {
  readonly address: 'address'
  readonly createdAt: 'createdAt'
  readonly name: 'name'
  readonly typename: 'typename'
  readonly updatedAt: 'updatedAt'
}

export declare const enumdipdupHeadSelectColumn: {
  readonly createdAt: 'createdAt'
  readonly hash: 'hash'
  readonly level: 'level'
  readonly name: 'name'
  readonly timestamp: 'timestamp'
  readonly updatedAt: 'updatedAt'
}

export declare const enumdipdupHeadStatusSelectColumn: {
  readonly name: 'name'
  readonly status: 'status'
}

export declare const enumdipdupIndexSelectColumn: {
  readonly configHash: 'configHash'
  readonly createdAt: 'createdAt'
  readonly level: 'level'
  readonly name: 'name'
  readonly status: 'status'
  readonly template: 'template'
  readonly templateValues: 'templateValues'
  readonly type: 'type'
  readonly updatedAt: 'updatedAt'
}

export declare const enumdipdupModelUpdateSelectColumn: {
  readonly action: 'action'
  readonly createdAt: 'createdAt'
  readonly data: 'data'
  readonly id: 'id'
  readonly index: 'index'
  readonly level: 'level'
  readonly modelName: 'modelName'
  readonly modelPk: 'modelPk'
  readonly updatedAt: 'updatedAt'
}

export declare const enumdipdupSchemaSelectColumn: {
  readonly createdAt: 'createdAt'
  readonly hash: 'hash'
  readonly name: 'name'
  readonly reindex: 'reindex'
  readonly updatedAt: 'updatedAt'
}

export declare const enumdipdupTokenMetadataSelectColumn: {
  readonly contract: 'contract'
  readonly createdAt: 'createdAt'
  readonly id: 'id'
  readonly metadata: 'metadata'
  readonly network: 'network'
  readonly tokenId: 'tokenId'
  readonly updateId: 'updateId'
  readonly updatedAt: 'updatedAt'
}

export declare const enumentryLiquiditySelectColumn: {
  readonly acceptTime: 'acceptTime'
  readonly amount: 'amount'
  readonly entryId: 'entryId'
  readonly poolEntryId: 'poolEntryId'
  readonly poolId: 'poolId'
  readonly positionId: 'positionId'
  readonly status: 'status'
  readonly userId: 'userId'
}

export declare const enumeventSelectColumn: {
  readonly betsCloseTime: 'betsCloseTime'
  readonly closedDynamics: 'closedDynamics'
  readonly closedOracleTime: 'closedOracleTime'
  readonly closedRate: 'closedRate'
  readonly createdTime: 'createdTime'
  readonly creatorId: 'creatorId'
  readonly currencyPairId: 'currencyPairId'
  readonly id: 'id'
  readonly liquidityPercent: 'liquidityPercent'
  readonly measureOracleStartTime: 'measureOracleStartTime'
  readonly measurePeriod: 'measurePeriod'
  readonly poolAboveEq: 'poolAboveEq'
  readonly poolBelow: 'poolBelow'
  readonly startRate: 'startRate'
  readonly status: 'status'
  readonly targetDynamics: 'targetDynamics'
  readonly totalBetsAmount: 'totalBetsAmount'
  readonly totalLiquidityProvided: 'totalLiquidityProvided'
  readonly totalLiquidityShares: 'totalLiquidityShares'
  readonly totalValueLocked: 'totalValueLocked'
  readonly winnerBets: 'winnerBets'
}

export declare const enummergedCandlesSelectColumn: {
  readonly close: 'close'
  readonly currencyPairId: 'currencyPairId'
  readonly high: 'high'
  readonly low: 'low'
  readonly open: 'open'
  readonly source: 'source'
  readonly until: 'until'
  readonly volume: 'volume'
}

export declare const enumorderBy: {
  readonly asc: 'asc'
  readonly asc_nulls_first: 'asc_nulls_first'
  readonly asc_nulls_last: 'asc_nulls_last'
  readonly desc: 'desc'
  readonly desc_nulls_first: 'desc_nulls_first'
  readonly desc_nulls_last: 'desc_nulls_last'
}

export declare const enumpoolEventSelectColumn: {
  readonly claimed: 'claimed'
  readonly eventId: 'eventId'
  readonly id: 'id'
  readonly lineId: 'lineId'
  readonly poolId: 'poolId'
  readonly provided: 'provided'
  readonly result: 'result'
}

export declare const enumpoolLineSelectColumn: {
  readonly currencyPairId: 'currencyPairId'
  readonly isPaused: 'isPaused'
  readonly lastBetsCloseTime: 'lastBetsCloseTime'
  readonly lineId: 'lineId'
  readonly liquidityPercent: 'liquidityPercent'
  readonly maxEvents: 'maxEvents'
  readonly measurePeriod: 'measurePeriod'
  readonly poolId: 'poolId'
  readonly poolLineId: 'poolLineId'
  readonly rateAboveEq: 'rateAboveEq'
  readonly rateBelow: 'rateBelow'
  readonly targetDynamics: 'targetDynamics'
}

export declare const enumpoolPositionSelectColumn: {
  readonly depositedAmount: 'depositedAmount'
  readonly entrySharePrice: 'entrySharePrice'
  readonly id: 'id'
  readonly lockedEstimateAmount: 'lockedEstimateAmount'
  readonly poolId: 'poolId'
  readonly realizedProfit: 'realizedProfit'
  readonly shares: 'shares'
  readonly userId: 'userId'
  readonly withdrawnAmount: 'withdrawnAmount'
  readonly withdrawnShares: 'withdrawnShares'
}

export declare const enumpoolSelectColumn: {
  readonly address: 'address'
  readonly entryLockPeriod: 'entryLockPeriod'
  readonly isDepositPaused: 'isDepositPaused'
  readonly isDisbandAllow: 'isDisbandAllow'
  readonly name: 'name'
  readonly version: 'version'
}

export declare const enumpoolStateSelectColumn: {
  readonly action: 'action'
  readonly activeLiquidity: 'activeLiquidity'
  readonly activeLiquidityDiff: 'activeLiquidityDiff'
  readonly affectedClaimId: 'affectedClaimId'
  readonly affectedEntryId: 'affectedEntryId'
  readonly affectedEventId: 'affectedEventId'
  readonly affectedUserId: 'affectedUserId'
  readonly counter: 'counter'
  readonly entryLiquidity: 'entryLiquidity'
  readonly entryLiquidityDiff: 'entryLiquidityDiff'
  readonly id: 'id'
  readonly level: 'level'
  readonly opgHash: 'opgHash'
  readonly poolId: 'poolId'
  readonly sharePrice: 'sharePrice'
  readonly timestamp: 'timestamp'
  readonly totalLiquidity: 'totalLiquidity'
  readonly totalLiquidityDiff: 'totalLiquidityDiff'
  readonly totalShares: 'totalShares'
  readonly totalSharesDiff: 'totalSharesDiff'
  readonly withdrawableLiquidity: 'withdrawableLiquidity'
  readonly withdrawableLiquidityDiff: 'withdrawableLiquidityDiff'
}

export declare const enumpositionSelectColumn: {
  readonly eventId: 'eventId'
  readonly id: 'id'
  readonly liquidityProvidedAboveEq: 'liquidityProvidedAboveEq'
  readonly liquidityProvidedBelow: 'liquidityProvidedBelow'
  readonly rewardAboveEq: 'rewardAboveEq'
  readonly rewardBelow: 'rewardBelow'
  readonly shares: 'shares'
  readonly userId: 'userId'
  readonly value: 'value'
  readonly withdrawn: 'withdrawn'
}

export declare const enumquotesWma15MSelectColumn: {
  readonly currencyPairId: 'currencyPairId'
  readonly price: 'price'
  readonly timestamp: 'timestamp'
}

export declare const enumquotesWmaSelectColumn: {
  readonly currencyPairId: 'currencyPairId'
  readonly price: 'price'
  readonly timestamp: 'timestamp'
}

export declare const enumtotalValueLockedSelectColumn: {
  readonly amount: 'amount'
  readonly createdTime: 'createdTime'
  readonly cumSum: 'cumSum'
  readonly eventId: 'eventId'
}

export declare const enumuserSelectColumn: {
  readonly address: 'address'
  readonly totalBetsAmount: 'totalBetsAmount'
  readonly totalBetsCount: 'totalBetsCount'
  readonly totalFeesCollected: 'totalFeesCollected'
  readonly totalLiquidityProvided: 'totalLiquidityProvided'
  readonly totalProviderReward: 'totalProviderReward'
  readonly totalReward: 'totalReward'
  readonly totalWithdrawn: 'totalWithdrawn'
}

export declare const enumwithdrawalSelectColumn: {
  readonly amount: 'amount'
  readonly createdTime: 'createdTime'
  readonly eventId: 'eventId'
  readonly feeCollectorId: 'feeCollectorId'
  readonly id: 'id'
  readonly opgHash: 'opgHash'
  readonly type: 'type'
  readonly userId: 'userId'
}
