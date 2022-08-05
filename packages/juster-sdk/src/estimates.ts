import BigNumber from "bignumber.js";
import {
  BetType,
  EventType,
  CorePositionType
} from './types'


// TODO: rename it to just estimateFee, because multiplier 1-fee?
/**
 * Estimated liquidity fee multiplier for added bet
 *
 * @param event Juster event where the bet goes to
 * @param now time when fee estimated
 * @returns fee multiplier (BigNumber measured in liquidityPrecision)
 */
 export function estimateFeeMultiplier(
  event: EventType,
  now: Date,
): BigNumber {
  // TODO: check that event.betsCloseTime > now > event.createdTime?
  const totalBettingTime = new BigNumber(
    event.betsCloseTime.getTime() - event.createdTime.getTime());
  const elapsedTime = new BigNumber(
    now.getTime() - event.createdTime.getTime());
  const liquidityPercent = new BigNumber(event.liquidityPercent);
  return elapsedTime.times(liquidityPercent).div(totalBettingTime);
}


/**
 * Calculates ratio for given event and pool
 *
 * @param event Juster event that used to calculate position
 * @param pool either AboveEq or Below pool
 * @param valueBiasTo optional bet amount that adds into pool and change ratio
 * @param valueBiasFrom optional winDelta amount that adds into opposite pol and change ratio
 * @returns calculated ratio for give value
 */
 export function calculateRatio(
  event: EventType,
  pool: BetType,
  valueBiasTo: BigNumber = new BigNumber(0),
  valueBiasFrom: BigNumber = new BigNumber(0)
): BigNumber {
  const poolTo = pool === "aboveEq" ? event.poolAboveEq : event.poolBelow;
  const poolFrom = pool === "aboveEq" ? event.poolBelow : event.poolAboveEq;

  const ratio = poolFrom.minus(valueBiasFrom).div(valueBiasTo.plus(poolTo));
  return ratio
}


/**
 * Estimated the size of the winnings in case of success
 *
 * @param event Juster event where the bet goes to
 * @param pool either AboveEq or Below pool
 * @param value the bet amount in BigNumber format
 * @returns calculated possible winning amount for this event state
 */
export function estimateBetReward(
  event: EventType,
  pool: BetType,
  betValue: BigNumber
): BigNumber {
  // TODO: add liquidity fee

  const ratio = calculateRatio(event, pool, betValue);
  const winDelta = betValue.times(ratio);
  return betValue.plus(winDelta);
}


// TODO: estimate bet reward with liquidity fee
// TODO: add slippage to the estimateBetReward (separate helper)
// TODO: decide if all this helpers should be moved into Juster object (because of precisions)

/**
 * Estimated the amount of the new liquidity shares that would be given to provider
 *
 * @param event Juster event where the provide liquidity goes to
 * @param provided new liquidity amount
 * @returns calculated possible shares count for this event state if new provider
 *  adds "provided"
 */
 export function estimateShares(
  event: EventType,
  provided: BigNumber
): BigNumber {

  // TODO: if first LP then just return precision (or 1.0 if we are not using prec?)
  // or raise error if there are no totalShares
  // TODO: test this case with event.totalLiquidityShares === 0

  const maxPool = BigNumber.maximum(event.poolAboveEq, event.poolBelow);
  const newShares = event.totalLiquidityShares.times(provided).div(maxPool);

  return newShares;
}

/**
 * Calculates current user position for one of the outcomes using storage data
 *
 * @param position participant status returned from graphql (based on dipdup-bets
 model)
 * @param event Juster event that used to calculate position
 * @param pool either AboveEq or Below pool
 * @param profitFee fraction that cutted from provider profits, measured in nat number
 * @param precision total fractions used to measure profitFee, nat number
 * @returns user position for the given event and pool
 */
export function calculatePosition(
  position: CorePositionType,
  event: EventType,
  pool: BetType,

  // TODO: how do we request profitFee from contract? need another API entry?:
  profitFee: BigNumber,
): BigNumber {
  // TODO: maybe it would be better to split this in two:
  //   calculateBetPosition + calculateProviderPosition?

  const betReturn = pool === "aboveEq"
    ? position.rewardAboveEq
    : position.rewardBelow;

  const providerShare = position.shares.div(event.totalLiquidityShares);

  const providerProfit = pool === "aboveEq"
    ? providerShare.times(event.poolBelow)
      .minus(position.providedBelow)
    : providerShare.times(event.poolAboveEq)
      .minus(position.providedAboveEq);

  const fee = providerProfit.isGreaterThan(0)
    ? providerProfit.times(profitFee)
    : 0;

  const providedMax = BigNumber.max(
    position.providedAboveEq,
    position.providedBelow);

  return betReturn.plus(providedMax).plus(providerProfit).minus(fee);
}
