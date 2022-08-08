import BigNumber from "bignumber.js";


export type Network = "mainnet" | "testnet";
export type CoreEntrypointName = "bet" | "provideLiquidity" | "withdraw";
export type PoolEntrypointName = "depositLiquidity" | "claimLiquidity" | "withdrawLiquidity";
export type EntrypointName = CoreEntrypointName | PoolEntrypointName;
export type BetType = "aboveEq" | "below";
export type EventType = {
  poolAboveEq: BigNumber,
  poolBelow: BigNumber,
  totalLiquidityShares: BigNumber,
  createdTime: Date,
  betsCloseTime: Date,
  liquidityPercent: BigNumber
}

export type CorePositionType = {
  rewardAboveEq: BigNumber,
  rewardBelow: BigNumber,
  shares: BigNumber,
  providedAboveEq: BigNumber,
  providedBelow: BigNumber
}

export type ClaimKey = {
  eventId: number,
  positionId: number
}

export type ClaimKeys = Array<ClaimKey>

export type PendingEntryType = {
  acceptTime: Date,
  amount: BigNumber
  id: number
}

export type PendingEntriesType = Array<PendingEntryType>

export type PoolPositionType = {
  shares: BigNumber
  id: number
}

export type PoolPositionsType = Array<PoolPositionType>

export type ClaimType = {
  id: number,
  positionId: number,
  eventId: number,
  amount: BigNumber,
  withdrawn: boolean
}

export type ClaimsType = Array<ClaimType>

