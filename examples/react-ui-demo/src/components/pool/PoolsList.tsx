import { FC } from 'react';

import {
  PoolType
} from '@juster-finance/sdk';

export type PoolsListProps = {
  pools: Array<PoolType>
};

export const PoolsList: FC<PoolsListProps> = (props) => {
  const { pools } = props;

  return (
    <div className="Grid">
      <h3>Pools:</h3>
      {pools.length > 0 &&
        <table className="Table">
          <thead>
            <tr>
              <th>address</th>
              <th>name</th>
              <th>version</th>
              <th>lock period</th>
              <th>is deposit paused</th>
            </tr>
          </thead>
          <tbody>
            {pools.map((pool, _index) => {
                  return (
                    <tr key={pool.address}>
                      <td>{pool.address}</td>
                      <td>{pool.name}</td>
                      <td>{pool.version}</td>
                      <td>{pool.entryLockPeriod}</td>
                      <td>{pool.isDepositPaused ? "yes" : "no"}</td>
                    </tr>
                  )
                }
              )
            }
          </tbody>
        </table>
      }
    </div>
  );
};