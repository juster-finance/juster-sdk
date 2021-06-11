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
