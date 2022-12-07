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

export function calculateDurationY(
  dateFrom: Date,
  dateTo: Date,
  daysInYear: BigNumber = BigNumber(365.2524)
): BigNumber {
  const msInYear = daysInYear.times(24 * 60 * 60 * 1000);
  const durationMs = dateTo.getTime() - dateFrom.getTime();
  return BigNumber(durationMs).div(msInYear);
}

export function calculateAPY(
  firstPoolState: PoolStateType,
  lastPoolState: PoolStateType
): BigNumber {
  const durationY = calculateDurationY(firstPoolState.timestamp, lastPoolState.timestamp);
  const firstSharePrice = firstPoolState.sharePrice || BigNumber(1);
  const lastSharePrice = lastPoolState.sharePrice || BigNumber(1);
  const priceDynamics = lastSharePrice.div(firstSharePrice);
  return priceDynamics.pow(BigNumber(1).div(durationY))
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
