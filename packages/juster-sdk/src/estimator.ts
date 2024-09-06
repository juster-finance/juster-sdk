import { BigNumber } from 'bignumber.js';

export function estimateFee(
  event: {
    betsCloseTime: Date;
    createdTime: Date;
    liquidityPercent: number;
  },
  now: Date
): BigNumber {
  // TODO: check that event.betsCloseTime > now > event.createdTime?
  const totalBettingTime = new BigNumber(
    event.betsCloseTime.getTime() - event.createdTime.getTime());
  const elapsedTime = new BigNumber(
    now.getTime() - event.createdTime.getTime());
  const liquidityPercent = new BigNumber(event.liquidityPercent);
  return elapsedTime.times(liquidityPercent).div(totalBettingTime);
}
