import BigNumber from "bignumber.js";
import { PoolType } from '../types'


export function estimateSharePrice(pool: PoolType): BigNumber {
  return pool.totalLiquidity.div(pool.totalShares);
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

