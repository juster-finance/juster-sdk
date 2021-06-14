import BigNumber from "bignumber.js";


/**
 * Estimated the size of the winnings in case of success
 *
 * @param event Baking Bet event where the bet goes to
 * @param pool either AboveEq or Bellow pool
 * @param value the bet amount
 * @returns calculated possible winning amount for this event state
 */
export function estimateBetReward(
  // TODO: should I create type with event params?
  event: any,
  pool: "AboveEq" | "Bellow",
  value: BigNumber.Value
): BigNumber {
  const valueBN = new BigNumber(value);
  const poolTo = (pool === "AboveEq") ? event.poolAboveEq : event.poolBellow;
  const poolToBN = new BigNumber(poolTo);
  const poolFrom = (pool === "AboveEq") ? event.poolBellow : event.poolAboveEq;
  const poolFromBN = new BigNumber(poolFrom);
  const winDeelta = poolFromBN.times(valueBN).idiv(valueBN.plus(poolToBN));

  return valueBN.plus(winDeelta);
}

/**
 * Estimated the amount of the new liquidity shares that would be given to provider
 *
 * @param event Baking Bet event where the provide liquidity goes to
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

  const maxPool = BigNumber.maximum(event.poolAboveEq, event.poolBellow);
  const newShares = totalShares.times(provided).idiv(maxPool);

  return newShares;
}

