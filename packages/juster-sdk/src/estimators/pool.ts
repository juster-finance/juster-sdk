import BigNumber from "bignumber.js";
import { PoolStateType } from '../types'


export function estimateSharePrice(state: PoolStateType): BigNumber {
  return state.totalLiquidity.div(state.totalShares);
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

