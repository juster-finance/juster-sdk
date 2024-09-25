import type { BigNumber } from 'bignumber.js';

export type BetSide = 'ABOVE_EQ' | 'BELOW';
export type JusterEventStatus = 'NEW' | 'STARTED' | 'FINISHED' | 'CANCELED';

export interface User {
  address: string;
  balance: BigNumber;
  lockedAmount: BigNumber;
  totalBetsCount: number;
  totalBetsAmount: BigNumber;
  totalLiquidityProvided: BigNumber;
  totalReward: BigNumber;
  totalProviderReward: BigNumber;
  totalWithdrawn: BigNumber;
  totalFeesCollected: BigNumber;
}

export interface JusterEvent {
  id: number;
  currencyPairId: number;
  creatorId: string;
  status: JusterEventStatus;
  winnerBets: BetSide;
  targetDynamics: BigNumber;
  measurePeriod: number;
  betsCloseTime: Date;
  startRate: BigNumber | null;
  closedRate: BigNumber | null;
  closedDynamics: BigNumber | null;
  measureOracleStartTime: Date | null;
  closedOracleTime: Date | null;
  createdTime: Date;
  poolAboveEq: BigNumber;
  poolBelow: BigNumber;
  liquidityPercent: BigNumber;
  totalLiquidityShares: BigNumber;
  totalBetsAmount: BigNumber;
  totalLiquidityProvided: BigNumber;
  totalValueLocked: BigNumber;
}

export interface Position {
  id: number;
  eventId: number;
  userId: string;
  shares: BigNumber;
  rewardAboveEq: BigNumber;
  rewardBelow: BigNumber;
  liquidityProvidedAboveEq: BigNumber;
  liquidityProvidedBelow: BigNumber;
  withdrawn: boolean;
  value: BigNumber;
}

export interface Deposit {
  id: number;
  createdTime: Date;
  opgHash: string;
  eventId: number;
  userId: number;
  amountAboveEq: BigNumber;
  amountBelow: BigNumber;
  shares: BigNumber;
}

export interface Bet {
  id: number;
  createdTime: Date;
  opgHash: string;
  side: BetSide;
  amount: BigNumber;
  reward: BigNumber;
  eventId: number;
  userId: string;
}

export interface ProvideLiquidityResult {
  user: User;
  event: JusterEvent;
  position: Position;
  deposit: Deposit;
}

export interface BetResult {
  user: User;
  event: JusterEvent;
  position: Position;
  bet: Bet;
}
