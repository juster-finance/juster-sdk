import BigNumber from "bignumber.js";
import { BetType, EventType } from './types'


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
  return elapsedTime.times(liquidityPercent).idiv(totalBettingTime);
}


/**
 * Estimated the size of the winnings in case of success
 *
 * @param event Juster event where the bet goes to
 * @param pool either AboveEq or Below pool
 * @param value the bet amount
 * @returns calculated possible winning amount for this event state
 */
export function estimateBetReward(
  event: EventType,
  pool: BetType,
  value: BigNumber.Value
): BigNumber {
  // TODO: add liquidity fee
  const valueBN = new BigNumber(value);
  const poolTo = pool === "aboveEq"
    ? new BigNumber(event.poolAboveEq)
    : new BigNumber(event.poolBelow);

  const poolFrom = pool === "aboveEq"
    ? new BigNumber(event.poolBelow)
    : new BigNumber(event.poolAboveEq);

  const winDelta = poolFrom.times(valueBN).idiv(valueBN.plus(poolTo));

  return valueBN.plus(winDelta);
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
  event: any,
  provided: BigNumber.Value
): BigNumber {
  const investedBN = new BigNumber(provided);
  const totalShares = new BigNumber(event.totalLiquidityShares);

  // TODO: if first LP then just return precision
  // or raise error if there are no totalShares
  // TODO: test this case with event.totalLiquidityShares === 0

  const maxPool = BigNumber.maximum(event.poolAboveEq, event.poolBelow);
  const newShares = totalShares.times(provided).idiv(maxPool);

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
  position: any,
  event: any,
  pool: BetType,

  // TODO: I don't like to have these arguments here
  //       need to decide where they should be stored (maybe make an objkt
  //       that contained this params and loads them from config?):
  profitFee: BigNumber.Value,
  precision: BigNumber.Value
): BigNumber {
  // TODO: maybe it would be better to split this in two:
  //   calculateBetPosition + calculateProviderPosition?

  const betReturn = pool === "aboveEq"
    ? new BigNumber(position.rewardAboveEq)
    : new BigNumber(position.rewardBelow);

  const shares = new BigNumber(position.shares);
  const poolA = new BigNumber(event.poolAboveEq);
  const poolB = new BigNumber(event.poolBelow);
  const providedA = new BigNumber(position.providedAboveEq);
  const providedB = new BigNumber(position.providedBelow);
  const totalShares = new BigNumber(event.totalLiquidityShares);

  const providerProfit = pool === "aboveEq"
    ? shares.times(poolB).idiv(totalShares).minus(providedB)
    : shares.times(poolA).idiv(totalShares).minus(providedA);

  const fee = providerProfit.isGreaterThan(0)
    ? providerProfit.times(profitFee).idiv(precision)
    : 0;

  const providedMax = BigNumber.max(providedA, providedB);

  return betReturn.plus(providedMax).plus(providerProfit).minus(fee);
}
