import { EventType } from '../src/types'
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
