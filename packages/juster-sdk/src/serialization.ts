import {
  EventType,
  CorePositionType,
  PendingEntryType,
  PendingEntriesType,
  PoolPositionType,
  PoolActionType,
  ClaimType,
  ClaimsType,
  PoolType,
  PoolStateType,
  PoolEventType
} from '../src/types'
import BigNumber from "bignumber.js";

import {
  pool_state,
  event,
  position,
  entry_liquidity,
  pool_position,
  claim,
  pool,
  pool_event,
} from '@juster-finance/gql-client'


export const emptyEvent: EventType = {
  poolAboveEq: new BigNumber(0),
  poolBelow: new BigNumber(0),
  totalLiquidityShares: new BigNumber(0),
  createdTime: new Date(0),
  betsCloseTime: new Date(0),
  liquidityPercent: new BigNumber(0)
};

export const deserializeEvent = (rawEvent: event): EventType => {
  return {
    poolAboveEq: new BigNumber(rawEvent.poolAboveEq),
    poolBelow: new BigNumber(rawEvent.poolBelow),
    totalLiquidityShares: new BigNumber(rawEvent.totalLiquidityShares),
    createdTime: new Date(rawEvent.createdTime),
    betsCloseTime: new Date(rawEvent.betsCloseTime),
    liquidityPercent: new BigNumber(rawEvent.liquidityPercent)
  };
};

export const emptyPosition: CorePositionType = {
  rewardAboveEq: new BigNumber(0),
  rewardBelow: new BigNumber(0),
  shares: new BigNumber(0),
  providedAboveEq: new BigNumber(0),
  providedBelow: new BigNumber(0)  
};

export const deserializePosition = (rawPosition: position): CorePositionType => {
  return {
    rewardAboveEq: new BigNumber(rawPosition.rewardAboveEq),
    rewardBelow: new BigNumber(rawPosition.rewardBelow),
    shares: new BigNumber(rawPosition.shares),
    providedAboveEq: new BigNumber(rawPosition.liquidityProvidedAboveEq),
    providedBelow: new BigNumber(rawPosition.liquidityProvidedBelow)  
  };
};

export const deserializePendingEntries = (rawEntries: Array<entry_liquidity>): PendingEntriesType => {
  return rawEntries.map((rawEntry: entry_liquidity): PendingEntryType => {
    return {
      acceptTime: new Date(rawEntry.acceptTime),
      amount: new BigNumber(rawEntry.amount),
      entryId: rawEntry.entryId,
      poolEntryId: rawEntry.poolEntryId
    }
  });
};

export const emptyPoolPosition: PoolPositionType = {
  shares: new BigNumber(0),
  provider: '-',
  depositedAmount: new BigNumber(0),
  realizedProfit: new BigNumber(0),
  entrySharePrice: new BigNumber(0),
  withdrawnShares: new BigNumber(0),
  withdrawnAmount: new BigNumber(0),
  lockedEstimateAmount: new BigNumber(0)
};

export const deserializePoolPosition = (rawPosition: pool_position): PoolPositionType => {
  return {
    shares: new BigNumber(rawPosition.shares),
    provider: rawPosition.user.address,
    depositedAmount: new BigNumber(rawPosition.depositedAmount),
    realizedProfit: new BigNumber(rawPosition.realizedProfit),
    entrySharePrice: new BigNumber(rawPosition.entrySharePrice),
    withdrawnShares: new BigNumber(rawPosition.withdrawnShares),
    withdrawnAmount: new BigNumber(rawPosition.withdrawnAmount),
    lockedEstimateAmount: new BigNumber(rawPosition.lockedEstimateAmount)
  }
};

export const deserializeClaims = (rawClaims: Array<claim>): ClaimsType => {
  return rawClaims.map((rawClaim: claim): ClaimType => {
    return {
      id: rawClaim.id,
      provider: rawClaim.user.address,
      eventId: rawClaim.eventId,
      amount: new BigNumber(rawClaim.amount),
      isWithdrawn: rawClaim.withdrawn
    }
  });
};

export const emptyPoolState: PoolStateType = {
  totalLiquidity: new BigNumber(0),
  totalShares: new BigNumber(0),
  activeLiquidity: new BigNumber(0),
  withdrawableLiquidity: new BigNumber(0),
  entryLiquidity: new BigNumber(0),
  timestamp: new Date(0),
  level: 0,
  counter: 0,
  sharePrice: new BigNumber(0),
  action: 'EMPTY_STATE' as PoolActionType,
  opgHash: '-'
};

export const deserializePoolState = (rawPoolState: pool_state): PoolStateType => {
  return {
    totalLiquidity: new BigNumber(rawPoolState.totalLiquidity),
    totalShares: new BigNumber(rawPoolState.totalShares),
    activeLiquidity: new BigNumber(rawPoolState.activeLiquidity),
    withdrawableLiquidity: new BigNumber(rawPoolState.withdrawableLiquidity),
    entryLiquidity: new BigNumber(rawPoolState.entryLiquidity),
    timestamp: new Date(rawPoolState.timestamp),
    level: rawPoolState.level,
    counter: rawPoolState.counter,
    sharePrice: new BigNumber(rawPoolState.sharePrice),
    action: rawPoolState.action as PoolActionType,
    opgHash: rawPoolState.opgHash
  };
};

export const emptyPool: PoolType = {
  address: 'not-a-pool',
  isDepositPaused: false,
  isDisbanded: false,
  name: 'not-a-pool',
  version: 'not-a-pool',
  entryLockPeriod: 0
};

export const deserializePool = (rawPool: pool): PoolType => {
  return {
    address: rawPool.address,
    isDepositPaused: rawPool.isDepositPaused,
    isDisbanded: rawPool.isDisbandAllow,
    name: rawPool.name as string,
    version: rawPool.version as string,
    entryLockPeriod: rawPool.entryLockPeriod
  }
};

/**
 * Applies @param deserializeFn function to @param someValue if @param someValue
 * is not undefined or null else returns @param defaultValue
 *
 * @param someValue raw value that needs to be processed (may be undefined or null)
 * @param defaultValue is value returned if someValue is undefined or null
 * @param deserializeFn one arg function function that applied on someValue
 * @returns deserialized value if someValue is not empty
 */
export function processOrDefault<RawT, ProcessedT>(
  someValue: RawT | undefined | null,
  defaultValue: ProcessedT,
  deserializeFn: (raw: RawT) => ProcessedT
): ProcessedT {
  if ((someValue === undefined) || (someValue === null)) {
    return defaultValue
  }
  else {
    return deserializeFn(someValue)
  }
}

export const deserializePoolEvents = (
  rawEvents: Array<pool_event>
): Array<PoolEventType> => {

  const toBigNumberIfDefined = (rawNumber: BigNumber | undefined) => {
    return (rawNumber !== undefined) && (rawNumber !== null)
      ? new BigNumber(rawNumber)
      : undefined
  };

  return rawEvents.map((rawEvent: pool_event): PoolEventType => {
    return {
      provided: toBigNumberIfDefined(rawEvent.provided),
      result: toBigNumberIfDefined(rawEvent.result),
      claimed: toBigNumberIfDefined(rawEvent.claimed),
      eventId: rawEvent.eventId,
      lineId: rawEvent.lineId,
      poolId: rawEvent.poolId,
      totalLiquidityProvided: toBigNumberIfDefined(rawEvent.event?.totalLiquidityProvided),
      totalBetsAmount: toBigNumberIfDefined(rawEvent.event?.totalBetsAmount)
    }
  });
};
