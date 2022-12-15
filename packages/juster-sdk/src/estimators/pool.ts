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

export const daysInGregorianCalendar = new BigNumber(365.2524);

export function calculateDurationY(
  dateFrom: Date,
  dateTo: Date,
  daysInYear: BigNumber = daysInGregorianCalendar
): BigNumber {
  const msInYear = daysInYear.times(24 * 60 * 60 * 1000);
  const durationMs = dateTo.getTime() - dateFrom.getTime();
  return BigNumber(durationMs).div(msInYear);
}

export function calculateAPY(
  firstPoolState: PoolStateType,
  lastPoolState: PoolStateType,
  daysInYear: BigNumber = daysInGregorianCalendar
): BigNumber {
  const durationY = calculateDurationY(
    firstPoolState.timestamp,
    lastPoolState.timestamp,
    daysInYear
  );

  // If share price is NaN (there is no shares in pool), it should be safe
  // to assume that share price is 1.0 (when first shares added it evaluated as 1.0)
  const fillNan = (price: BigNumber) => price.isNaN() ? BigNumber(1) : price;

  const firstSharePrice = fillNan(firstPoolState.sharePrice);
  const lastSharePrice = fillNan(lastPoolState.sharePrice);
  const priceDynamics = lastSharePrice.div(firstSharePrice);

  // Avoiding division by zero:
  const frequencyY = durationY.eq(0) ? BigNumber(0) : BigNumber(1).div(durationY);

  // BigNumber does not support pow for non-integer values. As far as it is not
  // critical to have high accuracy APY calculation, its replaced with Math.pow
  const annualDynamics = new BigNumber(
    Math.pow(priceDynamics.toNumber(), frequencyY.toNumber())
  );
  return annualDynamics.minus(1)
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
