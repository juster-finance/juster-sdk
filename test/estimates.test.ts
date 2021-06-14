import { format } from "path/posix";
import { estimateBetReward, estimateShares } from "../src/estimates";
import events from "./data/events.json"
import BigNumber from "bignumber.js";


test("estimateBetReward", async () => {
  let reward: string;

  reward = estimateBetReward(events["1m:1m"], "AboveEq", 1_000_000).toFixed();
  expect(reward).toBe("1500000");

  reward = estimateBetReward(events["1m:1m"], "Bellow", 1_000_000).toFixed();
  expect(reward).toBe("1500000");

  reward = estimateBetReward(events["1k:4k"], "AboveEq", 1_000).toFixed();
  expect(reward).toBe("3000");

  reward = estimateBetReward(events["1k:4k"], "Bellow", 6_000).toFixed();
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
