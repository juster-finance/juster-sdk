import {
  calculateAPY,
  calculateDurationY,
  calculateMean,
  calculateRiskIndex,
  calculateUtilization,
  calculateVariation
} from "../src/estimators/pool";
import rawPoolStates from "./data/poolStates.json"
import BigNumber from "bignumber.js";
import { PoolEventType, PoolStateType } from "../src/types";
import { deserializePoolState } from "../src/serialization";
import { pool_state } from "@juster-finance/gql-client";

const poolStates = new Map<string, PoolStateType>(
  Object.entries(rawPoolStates).map(([name, poolState]) => {
    return [name, deserializePoolState(poolState as pool_state)];
  })
);


const daysIn2022 = BigNumber(365);


test("calculateDuration", async () => {
  let durationY: BigNumber;

  /* Duration of period that starts and ends at the same time is 0: */
  durationY = calculateDurationY(
    new Date("2022-12-07T12:00:00.000Z"),
    new Date("2022-12-07T12:00:00.000Z"),
    daysIn2022
  );
  expect(durationY.toFixed()).toBe("0");

  /* Check that one year duration calculated properly: */
  durationY = calculateDurationY(
    new Date("2022-12-07T12:00:00.000Z"),
    new Date("2023-12-07T12:00:00.000Z"),
    daysIn2022
  );
  expect(durationY.toFixed()).toBe("1");
});


test("calculateAPY", async () => {
  let apy: BigNumber;

  /* APY measured between same state should be 0%: */
  apy = calculateAPY(
    poolStates.get("originatedState")!,
    poolStates.get("originatedState")!
  );
  expect(apy.toFixed()).toBe("0");

  /* Check that x2 price dynamics in one year is 100%: */
  apy = calculateAPY(
    poolStates.get("originatedState")!,
    poolStates.get("profitableState")!,
    daysIn2022
  );
  expect(apy.toFixed()).toBe("1");

  /* Check that x1.41 price dynamics in half year is approx 100%: */
  apy = calculateAPY(
    poolStates.get("originatedState")!,
    poolStates.get("stateAfterHalfYear")!,
    daysIn2022
  );
  expect(apy.isGreaterThan(0.99)).toBe(true);
  expect(apy.isLessThan(1.01)).toBe(true);
});

describe("mean calculation", () => {
  test("should return correct mean for an array of numbers", () => {
    const numbers = [
      new BigNumber(1),
      new BigNumber(2),
      new BigNumber(3)
    ];
    expect(calculateMean(numbers).toFixed()).toBe("2")
  });

  test("should return the same value if there is only one number", () => {
    const numbers = [new BigNumber(420)];
    expect(calculateMean(numbers).toFixed()).toBe("420")
  });
})

describe("variance calculation", () => {
  test("should return correct variance for an array of numbers", () => {
    const numbers = [
      new BigNumber(10),
      new BigNumber(20),
      new BigNumber(30),
      new BigNumber(40)
    ];
    expect(calculateVariation(numbers).toFixed()).toBe("125")
  });

  test("should return 0 if variation calculated for only one number", () => {
    const numbers = [new BigNumber(420)];
    expect(calculateVariation(numbers).toFixed()).toBe("0")
  });

  test("should return 0 for array where all instances is the same number", () => {
    const numbers = [
      new BigNumber(42),
      new BigNumber(42),
      new BigNumber(42)
    ];
    expect(calculateVariation(numbers).toFixed()).toBe("0")
  });
})

describe("risk index calculation", () => {
  test("should return correct risk index for multiple events ~0.082", () => {
    const events = [
      {provided: BigNumber(100), result: BigNumber(100)} as PoolEventType,
      {provided: BigNumber(100), result: BigNumber(110)} as PoolEventType,
      {provided: BigNumber(100), result: BigNumber(90)} as PoolEventType,
    ];
    expect(calculateRiskIndex(events).isGreaterThan(0.08)).toBe(true)
    expect(calculateRiskIndex(events).isLessThan(0.09)).toBe(true)
  });

  test("should return 0 if Risk Index calculated for only one event", () => {
    const events = [
      {provided: BigNumber(100), result: BigNumber(10)} as PoolEventType
    ];
    expect(calculateRiskIndex(events).toFixed()).toBe("0")
  });

  test("should be robust for unfinished events", () => {
    const events = [
      {provided: BigNumber(100), result: undefined} as PoolEventType,
      {provided: BigNumber(100), result: BigNumber(110)} as PoolEventType,
      {provided: BigNumber(100)} as PoolEventType,
    ];
    expect(calculateRiskIndex(events).toFixed()).toBe("0")
  });
})

describe("utilization calculation", () => {
  test("should return correct mean utilization for two events", () => {
    const events = [
      {
        totalLiquidityProvided: BigNumber(100),
        totalBetsAmount: BigNumber(1)
      } as PoolEventType,
      {
        totalLiquidityProvided: BigNumber(100),
        totalBetsAmount: BigNumber(3)
      } as PoolEventType,
    ];
    expect(calculateUtilization(events).toFixed()).toBe("0.02")
  });
})
