import { FC, useState, useEffect } from 'react';

import {
  JusterPool,
  PoolType
} from '@juster-finance/sdk';

import { PoolInfoRow } from './PoolInfoRow';

export type PoolsListProps = {
  pools: Array<JusterPool>
};

export const PoolsList: FC<PoolsListProps> = (props) => {
  const { pools } = props;

  return (
    <div className="Grid">
      <h3>Pools:</h3>
        <table className="Table">
          <thead>
            <tr>
              <th>address</th>
              <th>name</th>
              <th>version</th>
              <th>lock period</th>
              <th>is deposit paused</th>
              <th>APY</th>
            </tr>
          </thead>
          <tbody>
            {pools.map((pool, _index) => {
                  return <PoolInfoRow pool={pool} />
                }
              )
            }
          </tbody>
        </table>
    </div>
  );
};