import BigNumber from "bignumber.js";
import {
  PoolStateType,
  PoolPositionType,
  SummaryPositionType
} from '../types'


export function makeSummaryPosition(
  position: PoolPositionType,
  lastPoolState: PoolStateType
): SummaryPositionType {

  const estimatedPositionsValue = position.shares.times(lastPoolState.sharePrice);
  const unrealizedProfit = estimatedPositionsValue
    .plus(position.withdrawnAmount)
    .minus(position.depositedAmount)
    .minus(position.realizedProfit)
    .plus(position.lockedEstimateAmount);

  return {
    totalDeposited: position.depositedAmount,
    entrySharePrice: position.entrySharePrice,
    currentSharePrice: lastPoolState.sharePrice,
    activeShares: position.shares,
    estimatedPositionsValue: estimatedPositionsValue,
    withdrawnShares: position.withdrawnShares,
    withdrawnAmount: position.withdrawnAmount,
    realizedProfit: position.realizedProfit,
    unrealizedProfit: unrealizedProfit,
    lockedInClaims: position.lockedEstimateAmount
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
