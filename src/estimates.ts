import BigNumber from "bignumber.js";


/**
 * Estimated the size of the winnings in case of success
 *
 * @param event Juster event where the bet goes to
 * @param pool either AboveEq or Below pool
 * @param value the bet amount
 * @returns calculated possible winning amount for this event state
 */
export function estimateBetReward(
  // TODO: should I create type with event params?
  event: any,
  pool: "AboveEq" | "Below",
  value: BigNumber.Value
): BigNumber {
  // TODO: add liquidity fee
  const valueBN = new BigNumber(value);
  const poolTo = pool === "AboveEq"
    ? new BigNumber(event.poolAboveEq)
    : new BigNumber(event.poolBelow);

  const poolFrom = pool === "AboveEq"
    ? new BigNumber(event.poolBelow)
    : new BigNumber(event.poolAboveEq);

  const winDelta = poolFrom.times(valueBN).idiv(valueBN.plus(poolTo));

  return valueBN.plus(winDelta);
}

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
  pool: "AboveEq" | "Below",

  // TODO: I don't like to have these arguments here
  //       need to decide where they should be stored (maybe make an objkt
  //       that contained this params and loads them from config?):
  profitFee: BigNumber.Value,
  precision: BigNumber.Value
): BigNumber {
  // TODO: maybe it would be better to split this in two:
  //   calculateBetPosition + calculateProviderPosition?

  const betReturn = pool === "AboveEq"
    ? new BigNumber(position.rewardAboveEq)
    : new BigNumber(position.rewardBelow);

  const shares = new BigNumber(position.shares);
  const poolA = new BigNumber(event.poolAboveEq);
  const poolB = new BigNumber(event.poolBelow);
  const providedA = new BigNumber(position.providedAboveEq);
  const providedB = new BigNumber(position.providedBelow);
  const totalShares = new BigNumber(event.totalLiquidityShares);

  const providerProfit = pool === "AboveEq"
    ? shares.times(poolB).idiv(totalShares).minus(providedB)
    : shares.times(poolA).idiv(totalShares).minus(providedA);

  const fee = providerProfit.isGreaterThan(0)
    ? providerProfit.times(profitFee).idiv(precision)
    : 0;

  const providedMax = BigNumber.max(providedA, providedB);

  return betReturn.plus(providedMax).plus(providerProfit).minus(fee);
}
