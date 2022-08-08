import React, { FunctionComponent, FormEvent, useState, useEffect, ChangeEvent } from 'react';
import BigNumber from "bignumber.js";

import {
  JusterPool,
  PoolPositionsType
} from '@juster-finance/sdk';
import { processOperationSucceed, processOperationError } from '../../utility'

export type PoolPositionsProps = {
  pkh: string | null,
  justerPool: JusterPool,
  poolPositions: PoolPositionsType
};

export const PoolPositions: FunctionComponent<PoolPositionsProps> = ({ pkh, justerPool, poolPositions }) => {

  const defaultShares: Array<BigNumber> = poolPositions.map(position => position.shares);

  // sharesAmounts is array of entered shares in inputs for each position
  const [sharesAmounts, setSharesAmounts] = useState<Array<BigNumber>>(defaultShares);
  useEffect(() => { setSharesAmounts(defaultShares) }, [poolPositions]);

  const handleSharesChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const newAmount = new BigNumber(e.target.value);
    const arrayIndex: number = parseInt(e.target.name);
    console.log("updated shares index", arrayIndex, newAmount);
    sharesAmounts[arrayIndex] = newAmount;
    setSharesAmounts(sharesAmounts);
  };

  const handleClaim = async (e: FormEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    const buttonIndex: number = parseInt(button.name);
    const shares = sharesAmounts[buttonIndex];
    const positionId = poolPositions[buttonIndex].id;
    console.log("claim shares", sharesAmounts);

    justerPool.claimLiquidity(positionId, shares)
      .then(processOperationSucceed)
      .catch(processOperationError);
  };

  // TODO: calculate estimated position price

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
            {poolPositions.map((position, index) => {
                  return (
                    <tr key={position.id}>
                      <td>{position.id}</td>
                      <td>{position.shares.toFixed(6)}</td>
                      <td>...</td>
                      <td>
                        <input
                          name={index.toString()}
                          onChange={handleSharesChange}
                          defaultValue={defaultShares[index].toFixed(6)}/>
                        <button
                          name={index.toString()}
                          onClick={handleClaim}>
                            claim
                        </button>
                      </td>
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

