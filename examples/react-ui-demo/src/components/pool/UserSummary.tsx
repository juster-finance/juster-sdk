import React, { FC, useState, useEffect } from 'react';
import BigNumber from "bignumber.js";

import {
  JusterPool,
  PoolPositionType,
  PoolStateType,
  SummaryPositionType,
  makeSummaryPosition
} from '@juster-finance/sdk';

export type UserSummaryProps = {
  pkh: string | null,
  justerPool: JusterPool,
  userPosition: PoolPositionType | null,
  poolState: PoolStateType | null
};

export const UserSummary: FC<UserSummaryProps> = (props) => {
  const { pkh, justerPool, userPosition, poolState } = props;
  const [aggPosition, setAggPosition] = useState<SummaryPositionType | null>(null);
  useEffect(() => {
    if ((poolState !== null) && (userPosition !== null)) {
      setAggPosition(makeSummaryPosition(userPosition, poolState))
    }
  }, [userPosition, poolState]);

  return (
    <div className="Grid">
      <h3>User Summary:</h3>
      {userPosition && aggPosition &&
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
            <tr>
              <td>locked in claims</td>
              <td>{ aggPosition.lockedInClaims.toFixed(6) }</td>
            </tr>
          </tbody>
        </table>
      }
    </div>
  );
};