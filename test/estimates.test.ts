import { format } from "path/posix";
import {
  estimateBetReward,
  estimateShares,
  calculatePosition
} from "../src/estimates";
import events from "./data/events.json"
import positions from "./data/positions.json"
import BigNumber from "bignumber.js";


test("estimateBetReward", async () => {
  let reward: string;

  reward = estimateBetReward(events["1m:1m"], "aboveEq", 1_000_000).toFixed();
  expect(reward).toBe("1500000");

  reward = estimateBetReward(events["1m:1m"], "below", 1_000_000).toFixed();
  expect(reward).toBe("1500000");

  reward = estimateBetReward(events["1k:4k"], "aboveEq", 1_000).toFixed();
  expect(reward).toBe("3000");

  reward = estimateBetReward(events["1k:4k"], "below", 6_000).toFixed();
  expect(reward).toBe("6600");
});


test("estimateShares", async () => {
  let shares: string;

  shares = estimateShares(events["1m:1m"], 1_000_000).toFixed();
  expect(shares).toBe("1000000");

  shares = estimateShares(events["1m:1m"], 5_000_000).toFixed();
  expect(shares).toBe("5000000");

  shares = estimateShares(events["1k:4k"], 2_000).toFixed();
  expect(shares).toBe("500");

  shares = estimateShares(events["1k:4k"], 10_000).toFixed();
  expect(shares).toBe("2500");
});


test("estimatePosition", async () => {
  let position: string;

  // Position for bettor in the pool with bet contains bet:
  position = calculatePosition(
    positions["betA 1000"],
    events["1m:1m"],
    "aboveEq",
    new BigNumber(0),
    new BigNumber(1000000)).toFixed();
  expect(position).toBe("1000");

  // Position for bettor in the pool witout bet is 0:
  position = calculatePosition(
    positions["betA 1000"],
    events["1m:1m"],
    "below",
    new BigNumber(0),
    new BigNumber(1000000)).toFixed();
  expect(position).toBe("0");

  // Position for liquidity provider that have 0.1% in event shares:
  // 1000 (poolBelow) + 1000 (providedBelow) - 1000 (providedMin)
  position = calculatePosition(
    positions["LP 1000"],
    events["1m:1m"],
    "aboveEq",
    new BigNumber(0),
    new BigNumber(1000000)).toFixed();
  expect(position).toBe("1000");

  // Position for liquidity provider that have 100% in event shares
  // with fee 20%:
  // 4000 (poolBelow) + 1000 (providedAbove) - 1000 (providedMin) = 4000
  // profit is 4000 - 1000 provided = 3000
  // fee is 3000*20% = 600
  position = calculatePosition(
    positions["LP 1000"],
    events["1k:4k"],
    "aboveEq",
    new BigNumber(200000),
    new BigNumber(1000000)).toFixed();
  expect(position).toBe("3400");

  // Position for LP 100% that bettor B at the same time:
  // 4000000 (bet) + 1000000 (poolAboveEq)
  // + 500000 (providedBelow) - 500000 (providedMin)
  position = calculatePosition(
    positions["LP 1m + betB 4m"],
    events["1m:1m"],
    "below",
    new BigNumber(0),
    new BigNumber(1000000)).toFixed();
  expect(position).toBe("5000000");

});
