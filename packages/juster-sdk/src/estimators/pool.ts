import BigNumber from "bignumber.js";
import {
  PoolStateType,
  PoolPositionType,
  SummaryPositionType,
  PoolEventType
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

// TODO: move this to statistics.ts ?
export function calculateMean(values: Array<BigNumber>): BigNumber {
  const sum = values.reduce(
    (acc, value) => acc.plus(value),
    new BigNumber(0)
  );
  return sum.div(values.length)
}

// TODO: move this to statistics.ts [2] ?
export function calculateVariation(values: Array<BigNumber>): BigNumber {
  const mean = calculateMean(values);
  const squareDifferences = values.map((value) => {
    const difference = value.minus(mean);
    return difference.times(difference)
  });
  return calculateMean(squareDifferences)
}

/**
 * Calculates Risk Index as variation coefficient (standard deviation to the mean
 * value) of provided/result ratio for given events
 *
 * @param events is array of events that go to the Risk Index calculation
 * @returns BigNumber
 */
export function calculateRiskIndex(events: Array<PoolEventType>): BigNumber {
  const removeUndefined = (event: PoolEventType) => {
    return (event.provided !== undefined) && (event.result !== undefined)
  }

  const calcReturnDynamics = (event: PoolEventType) => {
    return event.provided!.div(event.result!)
  }

  const dynamics = events.filter(removeUndefined).map(calcReturnDynamics);
  const variation = calculateVariation(dynamics);
  const mean = calculateMean(dynamics);
  return variation.sqrt().div(mean)
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
