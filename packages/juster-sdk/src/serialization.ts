import {
  EventType,
  CorePositionType,
  PendingEntryType,
  PendingEntriesType,
  PoolPositionType,
  PoolActionType,
  ClaimType,
  ClaimsType,
  PoolStateType
} from '../src/types'
import BigNumber from "bignumber.js";

import {
  pool_state,
  event,
  position,
  entry_liquidity,
  pool_position,
  claim,
} from '@juster-finance/gql-client'


const emptyEvent: EventType = {
  poolAboveEq: new BigNumber(0),
  poolBelow: new BigNumber(0),
  totalLiquidityShares: new BigNumber(0),
  createdTime: new Date(0),
  betsCloseTime: new Date(0),
  liquidityPercent: new BigNumber(0)
};

export const deserializeEvent = (rawEvent: event): EventType => {
  // TODO: where should happen this check that event is empty?
  if ((rawEvent === undefined) || (rawEvent === null)) {
    // TODO: maybe it is good to raise some error here?
    return emptyEvent
  };

  return {
    poolAboveEq: new BigNumber(rawEvent.poolAboveEq),
    poolBelow: new BigNumber(rawEvent.poolBelow),
    totalLiquidityShares: new BigNumber(rawEvent.totalLiquidityShares),
    createdTime: new Date(rawEvent.createdTime),
    betsCloseTime: new Date(rawEvent.betsCloseTime),
    liquidityPercent: new BigNumber(rawEvent.liquidityPercent)
  };
};

const emptyPosition: CorePositionType = {
  rewardAboveEq: new BigNumber(0),
  rewardBelow: new BigNumber(0),
  shares: new BigNumber(0),
  providedAboveEq: new BigNumber(0),
  providedBelow: new BigNumber(0)  
};

export const deserializePosition = (rawPosition: position): CorePositionType => {
  // TODO: where should happen this check that position is empty?
  if ((rawPosition === undefined) || (rawPosition === null)) {
    // TODO: maybe it is good to raise some error here?
    return emptyPosition
  };

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
      poolEntryId: parseInt(rawEntry.poolEntryId)
    }
  });
};

export const deserializePoolPosition = (rawPosition: pool_position): PoolPositionType => {
  return {
    shares: new BigNumber(rawPosition.shares),
    provider: rawPosition.user.address,
    depositedAmount: new BigNumber(rawPosition.depositedAmount),
    realizedProfit: new BigNumber(rawPosition.realizedProfit),
    entrySharePrice: new BigNumber(rawPosition.entrySharePrice),
    withdrawnShares: new BigNumber(rawPosition.withdrawnShares),
    withdrawnAmount: new BigNumber(rawPosition.withdrawnAmount)
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