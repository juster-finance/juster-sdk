import { estimateBetReward } from "../src/estimates";

test("estimateBetReward", async () => {
  const betValue = 1_000_000;

  let event = {
    poolAboveEq: 1_000_000,
    poolBellow: 1_000_000
  };

  let reward = estimateBetReward(event, "AboveEq", 1_000_000).toFixed();
  expect(reward).toBe("1500000");

  reward = estimateBetReward(event, "Bellow", 1_000_000).toFixed();
  expect(reward).toBe("1500000");

  event = {
    poolAboveEq: 1_000,
    poolBellow: 4_000
  };

  reward = estimateBetReward(event, "AboveEq", 1_000).toFixed();
  expect(reward).toBe("3000");

  reward = estimateBetReward(event, "Bellow", 6_000).toFixed();
  expect(reward).toBe("6600");
});
