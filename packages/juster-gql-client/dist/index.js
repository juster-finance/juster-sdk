import {
  linkTypeMap,
  createClient as createClientOriginal,
  generateGraphqlOperation,
  assertSameVersion,
} from '@genql/runtime'
import types from './types.esm'
var typeMap = linkTypeMap(types)
export * from './guards.esm'

export var version = '2.10.0'
assertSameVersion(version)

export var createClient = function(options) {
  options = options || {}
  var optionsCopy = {
    url: 'http://localhost:8080/v1/graphql',
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription,
  }
  for (var name in options) {
    optionsCopy[name] = options[name]
  }
  return createClientOriginal(optionsCopy)
}

export const enumbetSelectColumn = {
  amount: 'amount',
  createdTime: 'createdTime',
  eventId: 'eventId',
  id: 'id',
  opgHash: 'opgHash',
  reward: 'reward',
  side: 'side',
  userId: 'userId',
}

export const enumcandleSelectColumn = {
  close: 'close',
  currencyPairId: 'currencyPairId',
  high: 'high',
  id: 'id',
  interval: 'interval',
  low: 'low',
  open: 'open',
  since: 'since',
  source: 'source',
  until: 'until',
  volume: 'volume',
}

export const enumclaimSelectColumn = {
  amount: 'amount',
  eventId: 'eventId',
  id: 'id',
  poolId: 'poolId',
  positionId: 'positionId',
  userId: 'userId',
  withdrawn: 'withdrawn',
}

export const enumcurrencyPairSelectColumn = {
  id: 'id',
  symbol: 'symbol',
  totalEvents: 'totalEvents',
  totalValueLocked: 'totalValueLocked',
  totalVolume: 'totalVolume',
}

export const enumcursorOrdering = {
  ASC: 'ASC',
  DESC: 'DESC',
}

export const enumdepositSelectColumn = {
  amountAboveEq: 'amountAboveEq',
  amountBelow: 'amountBelow',
  createdTime: 'createdTime',
  eventId: 'eventId',
  id: 'id',
  opgHash: 'opgHash',
  shares: 'shares',
  userId: 'userId',
}

export const enumdipdupContractMetadataSelectColumn = {
  contract: 'contract',
  createdAt: 'createdAt',
  id: 'id',
  metadata: 'metadata',
  network: 'network',
  updateId: 'updateId',
  updatedAt: 'updatedAt',
}

export const enumdipdupContractSelectColumn = {
  address: 'address',
  createdAt: 'createdAt',
  name: 'name',
  typename: 'typename',
  updatedAt: 'updatedAt',
}

export const enumdipdupHeadSelectColumn = {
  createdAt: 'createdAt',
  hash: 'hash',
  level: 'level',
  name: 'name',
  timestamp: 'timestamp',
  updatedAt: 'updatedAt',
}

export const enumdipdupHeadStatusSelectColumn = {
  name: 'name',
  status: 'status',
}

export const enumdipdupIndexSelectColumn = {
  configHash: 'configHash',
  createdAt: 'createdAt',
  level: 'level',
  name: 'name',
  status: 'status',
  template: 'template',
  templateValues: 'templateValues',
  type: 'type',
  updatedAt: 'updatedAt',
}

export const enumdipdupModelUpdateSelectColumn = {
  action: 'action',
  createdAt: 'createdAt',
  data: 'data',
  id: 'id',
  index: 'index',
  level: 'level',
  modelName: 'modelName',
  modelPk: 'modelPk',
  updatedAt: 'updatedAt',
}

export const enumdipdupSchemaSelectColumn = {
  createdAt: 'createdAt',
  hash: 'hash',
  name: 'name',
  reindex: 'reindex',
  updatedAt: 'updatedAt',
}

export const enumdipdupTokenMetadataSelectColumn = {
  contract: 'contract',
  createdAt: 'createdAt',
  id: 'id',
  metadata: 'metadata',
  network: 'network',
  tokenId: 'tokenId',
  updateId: 'updateId',
  updatedAt: 'updatedAt',
}

export const enumentryLiquiditySelectColumn = {
  acceptTime: 'acceptTime',
  amount: 'amount',
  entryId: 'entryId',
  poolEntryId: 'poolEntryId',
  poolId: 'poolId',
  positionId: 'positionId',
  status: 'status',
  userId: 'userId',
}

export const enumeventSelectColumn = {
  betsCloseTime: 'betsCloseTime',
  closedDynamics: 'closedDynamics',
  closedOracleTime: 'closedOracleTime',
  closedRate: 'closedRate',
  createdTime: 'createdTime',
  creatorId: 'creatorId',
  currencyPairId: 'currencyPairId',
  id: 'id',
  liquidityPercent: 'liquidityPercent',
  measureOracleStartTime: 'measureOracleStartTime',
  measurePeriod: 'measurePeriod',
  poolAboveEq: 'poolAboveEq',
  poolBelow: 'poolBelow',
  startRate: 'startRate',
  status: 'status',
  targetDynamics: 'targetDynamics',
  totalBetsAmount: 'totalBetsAmount',
  totalLiquidityProvided: 'totalLiquidityProvided',
  totalLiquidityShares: 'totalLiquidityShares',
  totalValueLocked: 'totalValueLocked',
  winnerBets: 'winnerBets',
}

export const enummergedCandlesSelectColumn = {
  close: 'close',
  currencyPairId: 'currencyPairId',
  high: 'high',
  low: 'low',
  open: 'open',
  source: 'source',
  until: 'until',
  volume: 'volume',
}

export const enumorderBy = {
  asc: 'asc',
  asc_nulls_first: 'asc_nulls_first',
  asc_nulls_last: 'asc_nulls_last',
  desc: 'desc',
  desc_nulls_first: 'desc_nulls_first',
  desc_nulls_last: 'desc_nulls_last',
}

export const enumpoolEventSelectColumn = {
  claimed: 'claimed',
  eventId: 'eventId',
  id: 'id',
  lineId: 'lineId',
  poolId: 'poolId',
  provided: 'provided',
  result: 'result',
}

export const enumpoolLineSelectColumn = {
  currencyPairId: 'currencyPairId',
  isPaused: 'isPaused',
  lastBetsCloseTime: 'lastBetsCloseTime',
  lineId: 'lineId',
  liquidityPercent: 'liquidityPercent',
  maxEvents: 'maxEvents',
  measurePeriod: 'measurePeriod',
  poolId: 'poolId',
  poolLineId: 'poolLineId',
  rateAboveEq: 'rateAboveEq',
  rateBelow: 'rateBelow',
  targetDynamics: 'targetDynamics',
}

export const enumpoolPositionSelectColumn = {
  depositedAmount: 'depositedAmount',
  entrySharePrice: 'entrySharePrice',
  id: 'id',
  lockedEstimateAmount: 'lockedEstimateAmount',
  poolId: 'poolId',
  realizedProfit: 'realizedProfit',
  shares: 'shares',
  userId: 'userId',
  withdrawnAmount: 'withdrawnAmount',
  withdrawnShares: 'withdrawnShares',
}

export const enumpoolSelectColumn = {
  address: 'address',
  entryLockPeriod: 'entryLockPeriod',
  isDepositPaused: 'isDepositPaused',
  isDisbandAllow: 'isDisbandAllow',
  name: 'name',
  version: 'version',
}

export const enumpoolStateSelectColumn = {
  action: 'action',
  activeLiquidity: 'activeLiquidity',
  activeLiquidityDiff: 'activeLiquidityDiff',
  affectedClaimId: 'affectedClaimId',
  affectedEntryId: 'affectedEntryId',
  affectedEventId: 'affectedEventId',
  affectedUserId: 'affectedUserId',
  counter: 'counter',
  entryLiquidity: 'entryLiquidity',
  entryLiquidityDiff: 'entryLiquidityDiff',
  id: 'id',
  level: 'level',
  opgHash: 'opgHash',
  poolId: 'poolId',
  sharePrice: 'sharePrice',
  timestamp: 'timestamp',
  totalLiquidity: 'totalLiquidity',
  totalLiquidityDiff: 'totalLiquidityDiff',
  totalShares: 'totalShares',
  totalSharesDiff: 'totalSharesDiff',
  withdrawableLiquidity: 'withdrawableLiquidity',
  withdrawableLiquidityDiff: 'withdrawableLiquidityDiff',
}

export const enumpositionSelectColumn = {
  eventId: 'eventId',
  id: 'id',
  liquidityProvidedAboveEq: 'liquidityProvidedAboveEq',
  liquidityProvidedBelow: 'liquidityProvidedBelow',
  rewardAboveEq: 'rewardAboveEq',
  rewardBelow: 'rewardBelow',
  shares: 'shares',
  userId: 'userId',
  value: 'value',
  withdrawn: 'withdrawn',
}

export const enumquotesWma15MSelectColumn = {
  currencyPairId: 'currencyPairId',
  price: 'price',
  timestamp: 'timestamp',
}

export const enumquotesWmaSelectColumn = {
  currencyPairId: 'currencyPairId',
  price: 'price',
  timestamp: 'timestamp',
}

export const enumtotalValueLockedSelectColumn = {
  amount: 'amount',
  createdTime: 'createdTime',
  cumSum: 'cumSum',
  eventId: 'eventId',
}

export const enumuserSelectColumn = {
  address: 'address',
  totalBetsAmount: 'totalBetsAmount',
  totalBetsCount: 'totalBetsCount',
  totalFeesCollected: 'totalFeesCollected',
  totalLiquidityProvided: 'totalLiquidityProvided',
  totalProviderReward: 'totalProviderReward',
  totalReward: 'totalReward',
  totalWithdrawn: 'totalWithdrawn',
}

export const enumwithdrawalSelectColumn = {
  amount: 'amount',
  createdTime: 'createdTime',
  eventId: 'eventId',
  feeCollectorId: 'feeCollectorId',
  id: 'id',
  opgHash: 'opgHash',
  type: 'type',
  userId: 'userId',
}

export var generateQueryOp = function(fields) {
  return generateGraphqlOperation('query', typeMap.Query, fields)
}
export var generateMutationOp = function(fields) {
  return generateGraphqlOperation('mutation', typeMap.Mutation, fields)
}
export var generateSubscriptionOp = function(fields) {
  return generateGraphqlOperation('subscription', typeMap.Subscription, fields)
}
export var everything = {
  __scalar: true,
}
