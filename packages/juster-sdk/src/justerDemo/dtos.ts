export type BetSide = 'ABOVE_EQ' | 'BELOW';
export type JusterEventStatus = 'NEW' | 'STARTED' | 'FINISHED' | 'CANCELED';

export interface UserDto {
  address: string;
  balance: number;
  totalBetsCount: number;
  totalBetsAmount: number;
  totalLiquidityProvided: number;
  totalReward: number;
  totalProviderReward: number;
  totalWithdrawn: number;
  totalFeesCollected: number;
}

export interface JusterEventDto {
  id: number;
  currencyPairId: number;
  creatorId: string;
  status: JusterEventStatus;
  winnerBets: BetSide;
  targetDynamics: number;
  measurePeriod: number;
  betsCloseTime: number;
  startRate?: number;
  closedRate?: number;
  closedDynamics?: number;
  measureOracleStartTime?: number;
  closedOracleTime?: number;
  createdTime: number;
  poolAboveEq: number;
  poolBelow: number;
  liquidityPercent: number;
  totalLiquidityShares: number;
  totalBetsAmount: number;
  totalLiquidityProvided: number;
  totalValueLocked: number;
}

export interface PositionDto {
  id: number;
  eventId: number;
  userId: string;
  shares: number;
  rewardAboveEq: number;
  rewardBelow: number;
  liquidityProvidedAboveEq: number;
  liquidityProvidedBelow: number;
  withdrawn: boolean;
  value: number;
}

export interface DepositDto {
  id: number;
  createdTime: number;
  opgHash: string;
  eventId: number;
  userId: string;
  amountAboveEq: number;
  amountBelow: number;
  shares: number;
}

export interface BetDto {
  id: number;
  createdTime: number;
  opgHash: string;
  side: BetSide;
  amount: number;
  reward: number;
  eventId: number;
  userId: string;
}

export interface BaseParamsDto {
  amount: number;
}

export interface ProvideLiquidityParams extends BaseParamsDto {
  eventId: number;
  expectedRatioAboveEq: number;
  expectedRatioBelow: number;
  maxSlippage: number;
}

export interface ProvideLiquidityResult extends BaseParamsDto {
  user: UserDto;
  event: JusterEventDto;
  position: PositionDto;
  deposit: DepositDto;
}

export interface BetParamsDto extends BaseParamsDto {
  eventId: number;
  side: 0 | 1;
  minimalWinAmount: number;
}

export interface BetResultDto {
  user: UserDto;
  event: JusterEventDto;
  position: PositionDto;
  bet: BetDto;
}
