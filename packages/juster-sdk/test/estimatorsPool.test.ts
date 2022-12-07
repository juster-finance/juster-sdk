import {
  calculateAPY,
  calculateDurationY
} from "../src/estimators/pool";
import rawPoolStates from "./data/poolStates.json"
import BigNumber from "bignumber.js";
import { PoolStateType } from "../src/types";
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
});
