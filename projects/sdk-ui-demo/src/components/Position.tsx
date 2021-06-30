import React, { FunctionComponent } from 'react';
import {
  EventType,
  PositionType,
  calculatePosition
} from 'juster-sdk';
import BigNumber from "bignumber.js";
import {
  Juster,
} from 'juster-sdk';

export type PositionProps = {
  position: PositionType | null,
  event: EventType | null,
  pkh: string | null,
  juster: Juster
};


export const PositionComponent: FunctionComponent<PositionProps> = ({ position, event, pkh, juster }) => {

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
    : calculatePosition(position, event!, "aboveEq", juster.providerProfitFee).toFixed(6);

  let positionB: string = position === null
    ? "-"
    : calculatePosition(position, event!, "below", juster.providerProfitFee).toFixed(6);

  let shares: string = position === null
    ? "-"
    : position.shares.toFixed(3);

  return (
    <div className="Grid">
      Position for address: {pkh || "-"}
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
