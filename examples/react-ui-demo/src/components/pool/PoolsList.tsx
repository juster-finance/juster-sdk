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
        { pools.length > 0 &&
          <table className="Table">
            <thead>
              <tr>
                <th>address (name)</th>
                <th>version</th>
                <th>lock period</th>
                <th>is deposit paused</th>
                <th>APY</th>
                <th>Risk Index</th>
                <th>Utilization</th>
              </tr>
            </thead>
            <tbody>
              {pools.map((pool, _index) => {
                    return <PoolInfoRow pool={pool} key={pool.getContractAddress()}/>
                  }
                )
              }
            </tbody>
          </table>
        }
    </div>
  );
};