import BigNumber from "bignumber.js";
import {
  PoolStateType,
  PoolPositionsType,
  AggregatedPositionType
} from '../types'


export function estimateSharePrice(state: PoolStateType): BigNumber {
  // TODO: there is possible case when state.totalShares is 0
  return state.totalLiquidity.div(state.totalShares);
}

export function aggregatePositions(
  positions: PoolPositionsType,
  poolState: PoolStateType
): AggregatedPositionType {

  const totalDeposited = positions.reduce((sum, pos) => sum.plus(pos.totalDeposited), new BigNumber(0));
  const activeShares = positions.reduce((sum, pos) => sum.plus(pos.shares), new BigNumber(0));
  const withdrawnShares = positions.reduce((sum, pos) => sum.plus(pos.withdrawnShares), new BigNumber(0));
  const withdrawnAmount = positions.reduce((sum, pos) => sum.plus(pos.withdrawnAmount), new BigNumber(0));
  const realizedProfit = positions.reduce((sum, pos) => sum.plus(pos.realizedProfit), new BigNumber(0));
  const totalShares = activeShares.plus(withdrawnShares);
  const estimatedSharePrice = estimateSharePrice(poolState);
  const entrySharePrice = totalDeposited.div(totalShares);
  const positionsProfits = positions.map(pos => estimatedSharePrice.minus(pos.entrySharePrice).times(pos.shares));
  const unrealizedProfit = positionsProfits.reduce((sum, profit) => sum.plus(profit), new BigNumber(0));

  return {
    totalDeposited: totalDeposited,
    entrySharePrice: entrySharePrice,
    currentSharePrice: estimatedSharePrice,
    activeShares: activeShares,
    estimatedPositionsValue: activeShares.times(estimatedSharePrice),
    withdrawnShares: withdrawnShares,
    withdrawnAmount: withdrawnAmount,
    realizedProfit: realizedProfit,
    unrealizedProfit: unrealizedProfit
  }
}

/* TODO:
export function estimateFreeLiquidity(pool: PoolType): BigNumber {
  ?
}

export function estimateClaimAmount(
  pool: PoolType,
  claimedShares: BigNumber
): BigNumber {
  return estimateFreeLiquidity(pool).times(claimedShares).div(pool.totalShares)
}
*/

