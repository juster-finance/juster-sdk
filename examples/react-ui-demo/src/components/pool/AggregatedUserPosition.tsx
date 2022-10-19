import React, { FunctionComponent, useState, useEffect } from 'react';
import BigNumber from "bignumber.js";

import {
  JusterPool,
  PoolPositionsType,
  PoolStateType,
  AggregatedPositionType,
  aggregatePositions
} from '@juster-finance/sdk';

export type AggregatedUserPositionProps = {
  pkh: string | null,
  justerPool: JusterPool,
  userPositions: PoolPositionsType,
  poolState: PoolStateType | null
};

export const AggregatedUserPosition: FunctionComponent<AggregatedUserPositionProps> = ({ pkh, justerPool, userPositions, poolState }) => {

  const [aggPosition, setAggPosition] = useState<AggregatedPositionType | null>(null);
  useEffect(() => {
    if (poolState !== null) {
      setAggPosition(aggregatePositions(userPositions, poolState))
    }
  }, [userPositions, poolState]);

  return (
    <div className="Grid">
      <h3>Aggregated User Position:</h3>
      {userPositions.length > 0 && aggPosition &&
        <table className="Table">
          <thead>
            <tr>
              <th>parameter</th>
              <th>value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>total deposited</td>
              <td>{ aggPosition.totalDeposited.toFixed(6) }</td>
            </tr>
            <tr>
              <td>estimated positions value</td>
              <td>{ aggPosition.estimatedPositionsValue.toFixed(6) }</td>
            </tr>
            <tr>
              <td>average entry share price</td>
              <td>{ aggPosition.entrySharePrice.toFixed(6) }</td>
            </tr>
            <tr>
              <td>current share price (diff)</td>
              <td>
                { aggPosition.currentSharePrice.toFixed(6) }
                ({ aggPosition.currentSharePrice.minus(aggPosition.entrySharePrice).toFixed(6) })
              </td>
            </tr>
            <tr>
              <td>active shares</td>
              <td>{ aggPosition.activeShares.toFixed(6) }</td>
            </tr>
            <tr>
              <td>withdrawn shares</td>
              <td>{ aggPosition.withdrawnShares.toFixed(6) }</td>
            </tr>
            <tr>
              <td>withdrawn amount</td>
              <td>{ aggPosition.withdrawnAmount.toFixed(6) }</td>
            </tr>
            <tr>
              <td>realized profit</td>
              <td>{ aggPosition.realizedProfit.toFixed(6) }</td>
            </tr>
            <tr>
              <td>unrealized profit</td>
              <td>{ aggPosition.unrealizedProfit.toFixed(6) }</td>
            </tr>
          </tbody>
        </table>
      }
    </div>
  );
};


