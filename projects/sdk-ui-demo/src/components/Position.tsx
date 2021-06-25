import React, { FunctionComponent } from 'react';
import {
  EventType,
  PositionType,
  calculatePosition
} from 'juster-sdk';
import BigNumber from "bignumber.js";


export type PositionProps = {
  position: PositionType | null,
  event: EventType | null,
  pkh: string | null
};


export const PositionComponent: FunctionComponent<PositionProps> = ({ position, event, pkh }) => {

  const isNotLoaded = (
    (position === null)
    || (pkh === null)
    || (event === null)
  );

  if (isNotLoaded) {
    return <div>No position loaded</div>
  }

  let positionA: string = position === null
    ? "-"
    : calculatePosition(position, event!, "aboveEq", new BigNumber(0)).toFixed();

  let positionB: string = position === null
    ? "-"
    : calculatePosition(position, event!, "below", new BigNumber(0)).toFixed();

  let shares: string = position === null
    ? "-"
    : position.shares.toFixed();

  return (
    <div className="Grid">
      Address: {pkh || "-"}
      <p>
        <span>position aboveEq wins:</span>
        <span>{positionA} xtz</span>
      </p>
      <p>
        <span>position below wins:</span>
        <span>{positionB} xtz</span>
      </p>
      <p>
        <span>liquidity shares:</span>
        <span>{shares}</span>
      </p>

    </div>
  );
};