import React, { FunctionComponent } from 'react';
import {
  JusterPool,
  PoolPositionsType
} from '@juster-finance/sdk';

export type PoolPositionsProps = {
  pkh: string | null,
  justerPool: JusterPool,
  poolPositions: PoolPositionsType
};

export const PoolPositions: FunctionComponent<PoolPositionsProps> = ({ pkh, justerPool, poolPositions }) => {

  // TODO: calculate estimated position price
  // TODO: add claim button here with input
  return (
    <div className="Grid">Pool Positions:
      {poolPositions.length > 0 &&
        <table className="Table">
          <thead>
            <tr>
              <th>position id</th>
              <th>shares</th>
              <th>estimated price</th>
              <th>claim from position</th>
            </tr>
          </thead>
          <tbody>
            {poolPositions.map(position => {
                  return (
                    <tr key={position.id}>
                      <td>{position.id}</td>
                      <td>{position.shares.toFixed(6)}</td>
                      <td>...</td>
                      <td><input placeholder="shares to claim"/><button>claim</button></td>
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

