import React, { FunctionComponent, FormEvent, useState, useEffect, ChangeEvent } from 'react';
import BigNumber from "bignumber.js";

import {
  JusterPool,
  PoolPositionsType,
  PoolType,
  estimateSharePrice
} from '@juster-finance/sdk';
import { processOperationSucceed, processOperationError } from '../../utility'

export type PoolPositionsProps = {
  pkh: string | null,
  justerPool: JusterPool,
  poolPositions: PoolPositionsType,
  pool: PoolType | null
};

export const PoolPositions: FunctionComponent<PoolPositionsProps> = ({ pkh, justerPool, poolPositions, pool }) => {

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
    const positionId = poolPositions[buttonIndex].positionId;
    console.log("claim shares", sharesAmounts);

    justerPool.claimLiquidity(positionId, shares)
      .then(processOperationSucceed)
      .catch(processOperationError);
  };

  const calcExpectedAmountFmt = (amount: BigNumber) => {
    if (pool !== null) {
      return amount.times(estimateSharePrice(pool)).toFixed(6)
    }
    return "-"
  };


  return (
    <div className="Grid">
      <h3>Pool Positions:</h3>
      {poolPositions.length > 0 &&
        <table className="Table">
          <thead>
            <tr>
              <th>id in db</th>
              <th>id in pool</th>
              <th>shares</th>
              <th>estimated price</th>
              <th>claim amount</th>
              <th>withdraw</th>
            </tr>
          </thead>
          <tbody>
            {poolPositions.map((position, index) => {
                  return (
                    <tr key={position.id}>
                      <td>{position.id}</td>
                      <td>{position.positionId}</td>
                      <td>{position.shares.toFixed(6)}</td>
                      <td>{calcExpectedAmountFmt(position.shares)}</td>
                      <td>
                        <input
                          name={index.toString()}
                          onChange={handleSharesChange}
                          defaultValue={defaultShares[index].toFixed(6)}/>
                      </td>
                      <td>
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

