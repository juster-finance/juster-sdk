export type Network = "mainnet" | "testnet";
export type EntrypointName = "bet" | "provideLiquidity" | "withdraw";
export type BetType = "aboveEq" | "below";
export type EventType = {
  poolAboveEq: number,
  poolBelow: number,
  totalLiquidityShares: number,
  createdTime: Date,
  betsCloseTime: Date,
  liquidityPercent: number
}
