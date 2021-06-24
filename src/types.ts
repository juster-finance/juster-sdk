import BigNumber from "bignumber.js";


export type Network = "mainnet" | "testnet";
export type EntrypointName = "bet" | "provideLiquidity" | "withdraw";
export type BetType = "aboveEq" | "below";
export type EventType = {
  poolAboveEq: BigNumber,
  poolBelow: BigNumber,
  totalLiquidityShares: BigNumber,
  createdTime: Date,
  betsCloseTime: Date,
  liquidityPercent: BigNumber
}

export type PositionType = {
  rewardAboveEq: BigNumber,
  rewardBelow: BigNumber,
  shares: BigNumber,
  providedAboveEq: BigNumber,
  providedBelow: BigNumber
}
