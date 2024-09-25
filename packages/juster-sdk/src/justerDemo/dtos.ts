export type BetSideDto = 'ABOVE_EQ' | 'BELOW';
export type JusterEventStatusDto = 'NEW' | 'STARTED' | 'FINISHED' | 'CANCELED';

export interface UserDto {
  address: string;
  balance: string;
  lockedAmount: string;
  totalBetsCount: number;
  totalBetsAmount: string;
  totalLiquidityProvided: string;
  totalReward: string;
  totalProviderReward: string;
  totalWithdrawn: string;
  totalFeesCollected: string;
}

export interface JusterEventDto {
  id: number;
  currencyPairId: number;
  creatorId: string;
  status: JusterEventStatusDto;
  winnerBets: BetSideDto;
  targetDynamics: string;
  measurePeriod: number;
  betsCloseTime: string;
  startRate?: string;
  closedRate?: string;
  closedDynamics?: string;
  measureOracleStartTime?: string;
  closedOracleTime?: string;
  createdTime: string;
  poolAboveEq: string;
  poolBelow: string;
  liquidityPercent: string;
  totalLiquidityShares: string;
  totalBetsAmount: string;
  totalLiquidityProvided: string;
  totalValueLocked: string;
}

export interface PositionDto {
  id: number;
  eventId: number;
  userId: string;
  shares: string;
  rewardAboveEq: string;
  rewardBelow: string;
  liquidityProvidedAboveEq: string;
  liquidityProvidedBelow: string;
  withdrawn: boolean;
  value: string;
}

export interface DepositDto {
  id: number;
  createdTime: string;
  opgHash: string;
  eventId: number;
  userId: number;
  amountAboveEq: string;
  amountBelow: string;
  shares: string;
}

export interface BetDto {
  id: number;
  createdTime: string;
  opgHash: string;
  side: BetSideDto;
  amount: string;
  reward: string;
  eventId: number;
  userId: string;
}

export interface ProvideLiquidityResultDto {
  user: UserDto;
  event: JusterEventDto;
  position: PositionDto;
  deposit: DepositDto;
}

export interface BetResultDto {
  user: UserDto;
  event: JusterEventDto;
  position: PositionDto;
  bet: BetDto;
}
