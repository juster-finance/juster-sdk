import { BigNumber } from 'bignumber.js';

import type { UserDto, JusterEventDto, BetDto, PositionDto, DepositDto, BetResultDto, ProvideLiquidityResultDto } from './dtos.js';
import type { User, JusterEvent, Bet, Position, Deposit, BetResult, ProvideLiquidityResult } from './models.js';

export const mapUserDtoToUser = (user: UserDto): User => ({
  address: user.address,
  balance: new BigNumber(user.balance),
  lockedAmount: new BigNumber(user.lockedAmount),
  totalBetsCount: user.totalBetsCount,
  totalBetsAmount: new BigNumber(user.totalBetsAmount),
  totalLiquidityProvided: new BigNumber(user.totalLiquidityProvided),
  totalReward: new BigNumber(user.totalReward),
  totalProviderReward: new BigNumber(user.totalProviderReward),
  totalWithdrawn: new BigNumber(user.totalWithdrawn),
  totalFeesCollected: new BigNumber(user.totalFeesCollected),
});

export const mapJusterEventDtoToJusterEvent = (event: JusterEventDto): JusterEvent => ({
  id: event.id,
  currencyPairId: event.currencyPairId,
  creatorId: event.creatorId,
  status: event.status,
  winnerBets: event.winnerBets,
  targetDynamics: new BigNumber(event.targetDynamics),
  measurePeriod: event.measurePeriod,
  betsCloseTime: new Date(event.betsCloseTime),
  startRate: event.startRate ? new BigNumber(event.startRate) : null,
  closedRate: event.closedRate ? new BigNumber(event.closedRate) : null,
  closedDynamics: event.closedDynamics ? new BigNumber(event.closedDynamics) : null,
  measureOracleStartTime: event.measureOracleStartTime ? new Date(event.measureOracleStartTime) : null,
  closedOracleTime: event.closedOracleTime ? new Date(event.closedOracleTime) : null,
  createdTime: new Date(event.createdTime),
  poolAboveEq: new BigNumber(event.poolAboveEq),
  poolBelow: new BigNumber(event.poolBelow),
  liquidityPercent: new BigNumber(event.liquidityPercent),
  totalLiquidityShares: new BigNumber(event.totalLiquidityShares),
  totalBetsAmount: new BigNumber(event.totalBetsAmount),
  totalLiquidityProvided: new BigNumber(event.totalLiquidityProvided),
  totalValueLocked: new BigNumber(event.totalValueLocked),
});

export const mapBetDtoToBet = (bet: BetDto): Bet => ({
  id: bet.id,
  createdTime: new Date(bet.createdTime),
  opgHash: bet.opgHash,
  side: bet.side,
  amount: new BigNumber(bet.amount),
  reward: new BigNumber(bet.reward),
  eventId: bet.eventId,
  userId: bet.userId,
});

export const mapPositionDtoToPosition = (position: PositionDto): Position => ({
  id: position.id,
  eventId: position.eventId,
  userId: position.userId,
  shares: new BigNumber(position.shares),
  rewardAboveEq: new BigNumber(position.rewardAboveEq),
  rewardBelow: new BigNumber(position.rewardBelow),
  liquidityProvidedAboveEq: new BigNumber(position.liquidityProvidedAboveEq),
  liquidityProvidedBelow: new BigNumber(position.liquidityProvidedBelow),
  withdrawn: position.withdrawn,
  value: new BigNumber(position.value),
});

export const mapDepositDtoToDeposit = (deposit: DepositDto): Deposit => ({
  id: deposit.id,
  createdTime: new Date(deposit.createdTime),
  opgHash: deposit.opgHash,
  eventId: deposit.eventId,
  userId: deposit.userId,
  amountAboveEq: new BigNumber(deposit.amountAboveEq),
  amountBelow: new BigNumber(deposit.amountBelow),
  shares: new BigNumber(deposit.shares),
});

export const mapBetResultDtoToBetResult = (result: BetResultDto): BetResult => ({
  user: mapUserDtoToUser(result.user),
  event: mapJusterEventDtoToJusterEvent(result.event),
  position: mapPositionDtoToPosition(result.position),
  bet: mapBetDtoToBet(result.bet),
});

export const mapProvideLiquidityResultDtoToProvideLiquidityResult = (result: ProvideLiquidityResultDto): ProvideLiquidityResult => ({
  user: mapUserDtoToUser(result.user),
  event: mapJusterEventDtoToJusterEvent(result.event),
  position: mapPositionDtoToPosition(result.position),
  deposit: mapDepositDtoToDeposit(result.deposit),
});
