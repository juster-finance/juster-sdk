import {
  EventType,
  PositionType
} from '../src/types'
import BigNumber from "bignumber.js";


export const deserializeEvent = (rawEvent: any): EventType => {
  return {
    poolAboveEq: new BigNumber(rawEvent.pool_above_eq),
    poolBelow: new BigNumber(rawEvent.pool_below),
    totalLiquidityShares: new BigNumber(rawEvent.total_liquidity_shares),
    createdTime: new Date(rawEvent.created_time),
    betsCloseTime: new Date(rawEvent.bets_close_time),
    liquidityPercent: new BigNumber(rawEvent.liquidity_percent)        
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
  if (rawPosition === undefined) {
    return emptyPosition
  };

  return {
    rewardAboveEq: new BigNumber(rawPosition.reward_above_eq),
    rewardBelow: new BigNumber(rawPosition.reward_below),
    shares: new BigNumber(rawPosition.shares),
    providedAboveEq: new BigNumber(rawPosition.liquidity_provided_above_eq),
    providedBelow: new BigNumber(rawPosition.liquidity_provided_below)  
  };
};
