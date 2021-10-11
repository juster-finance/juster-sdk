import {
  EventType,
  PositionType
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

const emptyPosition: PositionType = {
  rewardAboveEq: new BigNumber(0),
  rewardBelow: new BigNumber(0),
  shares: new BigNumber(0),
  providedAboveEq: new BigNumber(0),
  providedBelow: new BigNumber(0)  
};

export const deserializePosition = (rawPosition: any): PositionType => {
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
