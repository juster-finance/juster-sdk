import {
  EventType,
  CorePositionType,
  PendingEntryType,
  PendingEntriesType,
  PoolPositionType,
  PoolPositionsType,
  ClaimType,
  ClaimsType,
  PoolStateType
} from '../src/types'
import BigNumber from "bignumber.js";


const emptyEvent: EventType = {
  poolAboveEq: new BigNumber(0),
  poolBelow: new BigNumber(0),
  totalLiquidityShares: new BigNumber(0),
  createdTime: new Date(0),
  betsCloseTime: new Date(0),
  liquidityPercent: new BigNumber(0)
};

export const deserializeEvent = (rawEvent: any): EventType => {
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

export const deserializePosition = (rawPosition: any): CorePositionType => {
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

export const deserializePendingEntries = (rawEntries: Array<any>): PendingEntriesType => {
  return rawEntries.map((rawEntry: any): PendingEntryType => {
    return {
      acceptTime: new Date(rawEntry.acceptTime),
      amount: new BigNumber(rawEntry.amount),
      entryId: rawEntry.entryId,
      poolEntryId: rawEntry.poolEntryId
    }
  });
};

export const deserializePoolPositions = (rawPositions: Array<any>): PoolPositionsType => {
  return rawPositions.map((rawPosition: any): PoolPositionType => {
    return {
      shares: new BigNumber(rawPosition.shares),
      positionId: rawPosition.positionId,
      poolPositionId: rawPosition.poolPositionId
    }
  });
};

export const deserializeClaims = (rawClaims: Array<any>): ClaimsType => {
  return rawClaims.map((rawClaim: any): ClaimType => {
    return {
      id: rawClaim.id,
      positionId: rawClaim.position.positionId,
      eventId: rawClaim.eventId,
      amount: new BigNumber(rawClaim.amount),
      withdrawn: rawClaim.withdrawn
    }
  });
};

export const deserializePoolState = (rawPoolState: any): PoolStateType => {
  return {
    totalLiquidity: new BigNumber(rawPoolState.totalLiquidity),
    totalShares: new BigNumber(rawPoolState.totalShares),
    activeLiquidity: new BigNumber(rawPoolState.activeLiquidity)
  };
};

