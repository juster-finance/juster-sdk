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

test("calculateDuration", async () => {
  let durationY: BigNumber;
  const daysIn2022 = BigNumber(365);

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
