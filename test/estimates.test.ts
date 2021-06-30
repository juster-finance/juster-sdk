import { format } from "path/posix";
import {
  estimateBetReward,
  estimateShares,
  calculatePosition,
  estimateFeeMultiplier,
  calculateRatio
} from "../src/estimates";
import rawEvents from "./data/events.json"
import rawPositions from "./data/positions.json"
import BigNumber from "bignumber.js";
import {
  EventType,
  PositionType
} from '../src/types'
import {
  deserializeEvent,
  deserializePosition
} from '../src/serialization'


const events = new Map<string, EventType>(
  Object.entries(rawEvents).map(([name, event]) => {
    return [name, deserializeEvent(event)];
  })
);


const positions = new Map<string, PositionType>(
  Object.entries(rawPositions).map(([name, position]) => {
    return [name, deserializePosition(position)];
  })
);


test("estimateBetReward", async () => {
  let reward: BigNumber;

  reward = estimateBetReward(
    events.get("1m:1m")!,
    "aboveEq",  
    new BigNumber(1.0));
  expect(reward.toFixed()).toBe("1.5");

  reward = estimateBetReward(
    events.get("1m:1m")!,
    "below",
    new BigNumber(1.0));
  expect(reward.toFixed()).toBe("1.5");

  reward = estimateBetReward(
    events.get("1k:4k")!,
    "aboveEq",
    new BigNumber(0.001));
  expect(reward.toFixed()).toBe("0.003");

  reward = estimateBetReward(
    events.get("1k:4k")!,
    "below",
    new BigNumber(0.006));
  expect(reward.toFixed()).toBe("0.0066");
});


test("estimateShares", async () => {
  let shares: BigNumber;

  shares = estimateShares(
    events.get("1m:1m")!,
    new BigNumber(1.0));
  expect(shares.toFixed()).toBe("1");

  shares = estimateShares(
    events.get("1m:1m")!,
    new BigNumber(5.0));
  expect(shares.toFixed()).toBe("5");

  shares = estimateShares(
    events.get("1k:4k")!,
    new BigNumber(0.002));
  expect(shares.toFixed()).toBe("0.0005");

  shares = estimateShares(
    events.get("1k:4k")!,
    new BigNumber(0.01));
  expect(shares.toFixed()).toBe("0.0025");
});


test("estimatePosition", async () => {
  let position: BigNumber;

  // Position for bettor in the pool with bet contains bet:
  position = calculatePosition(
    positions.get("betA 1000")!,
    events.get("1m:1m")!,
    "aboveEq",
    new BigNumber(0));
  expect(position.toFixed()).toBe("0.001");

  // Position for bettor in the pool witout bet is 0:
  position = calculatePosition(
    positions.get("betA 1000")!,
    events.get("1m:1m")!,
    "below",
    new BigNumber(0));
  expect(position.toFixed()).toBe("0");

  // Position for liquidity provider that have 0.1% in event shares:
  // 1000 (poolBelow) + 1000 (providedBelow) - 1000 (providedMin)
  position = calculatePosition(
    positions.get("LP 1000")!,
    events.get("1m:1m")!,
    "aboveEq",
    new BigNumber(0));
  expect(position.toFixed()).toBe("0.001");

  // Position for liquidity provider that have 100% in event shares
  // with fee 20%:
  // 4000 (poolBelow) + 1000 (providedAbove) - 1000 (providedMin) = 4000
  // profit is 4000 - 1000 provided = 3000
  // fee is 3000*20% = 600
  position = calculatePosition(
    positions.get("LP 1000")!,
    events.get("1k:4k")!,
    "aboveEq",
    new BigNumber(0.2));
  expect(position.toFixed()).toBe("0.0034");

  // Position for LP 100% that bettor B at the same time:
  // 4000000 (bet) + 1000000 (poolAboveEq)
  // + 500000 (providedBelow) - 500000 (providedMin)
  position = calculatePosition(
    positions.get("LP 1m + betB 4m")!,
    events.get("1m:1m")!,
    "below",
    new BigNumber(0));
  expect(position.toFixed()).toBe("5");

  // TODO: add test with providerFee > 0 (for example with 100% fee when
  // provider would have no profit)
});


test("estimateLiquidityFee", async () => {
  let fee: string;
  const eventStartDate = new Date("2021-06-23T12:00:00.000Z");
  const dateBetween = new Date("2021-06-23T15:00:00.000Z");
  const betsCloseDate = new Date("2021-06-23T18:00:00.000Z");

  fee = estimateFeeMultiplier(
    events.get("1m:1m")!, eventStartDate).toFixed();
  expect(fee).toBe("0");

  fee = estimateFeeMultiplier(
    events.get("1m:1m")!, betsCloseDate).toFixed();
  expect(fee).toBe("0.01");

  fee = estimateFeeMultiplier(
    events.get("1m:1m")!, dateBetween).toFixed();
  expect(fee).toBe("0.005");
});


test("estimateRatioAfterBet", async () => {
  let ratio: BigNumber;
  let betValue: BigNumber;
  let winDelta: BigNumber;

  // +1tez to below, -0.5tez from below would be 0.5:2 === 0.25
  betValue = new BigNumber(1.0);
  winDelta = new BigNumber(0.5);
  ratio = calculateRatio(
    events.get("1m:1m")!,
    "below",
    betValue,
    winDelta);
  expect(ratio.toFixed()).toBe("0.25");

  // +0.001tez to aboveEq, -0.003tez from below would be 1k:4k === 0.25 too
  betValue = new BigNumber(0.003);
  winDelta = new BigNumber(0.003);
  ratio = calculateRatio(
    events.get("1k:4k")!,
    "aboveEq",
    betValue,
    winDelta);
  expect(ratio.toFixed()).toBe("0.25");
});
