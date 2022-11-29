import { timestamptz_comparison_exp } from "@juster-finance/gql-client";
import BigNumber from "bignumber.js";


export type Network = "mainnet" | "testnet";
export type CoreEntrypointName = "bet" | "provideLiquidity" | "withdraw";
export type PoolEntrypointName = (
  "depositLiquidity"
  | "claimLiquidity"
  | "withdrawClaims"
  | "approveEntry"
);
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
  provider: string
}

export type ClaimKeys = Array<ClaimKey>

export type PendingEntryType = {
  acceptTime: Date,
  amount: BigNumber
  poolEntryId: string,
  entryId: number
}

export type PendingEntriesType = Array<PendingEntryType>

export type PoolPositionType = {
  provider: string,
  shares: BigNumber,
  depositedAmount: BigNumber,
  realizedProfit: BigNumber,
  entrySharePrice: BigNumber,
  withdrawnShares: BigNumber,
  withdrawnAmount: BigNumber,
  lockedEstimateAmount: BigNumber
}

export type ClaimType = {
  id: number,
  provider: string,
  eventId: number,
  amount: BigNumber,
  isWithdrawn: boolean
}

export type ClaimsType = Array<ClaimType>

export type PoolActionType = (
  'EVENT_CREATED'
  | 'EVENT_FINISHED'
  | 'USER_DEPOSITED'
  | 'LIQUIDITY_APPROVED'
  | 'LIQUIDITY_CANCELED'
  | 'USER_CLAIMED'
  | 'USER_WITHDRAWN'
  | 'RECEIVED_XTZ'
  | 'POOL_ORIGINATED'
  | 'ACCUMULATED_DUST'
  | 'POOL_DISBANDED'
  | 'DEPOSITS_PAUSED'
  | 'DEPOSITS_UNPAUSED'
  | 'EMPTY_STATE'
);

export type PoolStateType = {
  timestamp: Date,
  level: number,
  counter: number,
  totalLiquidity: BigNumber,
  totalShares: BigNumber,
  activeLiquidity: BigNumber,
  withdrawableLiquidity: BigNumber,
  entryLiquidity: BigNumber,
  sharePrice: BigNumber,
  action: PoolActionType,
  opgHash: string
}

export type PoolType = {
  address: string
}

export type SummaryPositionType = {
  totalDeposited: BigNumber,
  entrySharePrice: BigNumber,
  currentSharePrice: BigNumber,
  activeShares: BigNumber,
  estimatedPositionsValue: BigNumber,
  withdrawnShares: BigNumber,
  withdrawnAmount: BigNumber,
  realizedProfit: BigNumber,
  unrealizedProfit: BigNumber,
  lockedInClaims: BigNumber
}
