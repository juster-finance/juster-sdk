import React, { FunctionComponent, FormEvent, useState, ChangeEvent } from 'react';
import BigNumber from "bignumber.js";
import {
  JusterPool,
  PoolStateType
} from '@juster-finance/sdk';
import { processOperationSucceed, processOperationError } from '../../utility'

export type DepositFormProps = {
  pkh: string | null,
  justerPool: JusterPool,
  poolState: PoolStateType | null
};


export const DepositForm: FunctionComponent<DepositFormProps> = ({ pkh, justerPool, poolState }) => {

  // TODO: show input with button that makes transaction deposit
  // TODO: handle not loaded?
  const [amount, setAmount] = useState<BigNumber>(new BigNumber(0));
  const [estimatedShares, setEstimatedShares] = useState<BigNumber>(new BigNumber(0));

  const handleAmountChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const newAmount = new BigNumber(e.target.value)
    setAmount(newAmount);

    if (poolState !== null) {
      const newEstimatedShares = newAmount.div(poolState.sharePrice);
      setEstimatedShares(newEstimatedShares);
      console.log("new estimated", newEstimatedShares);
      console.log("pool state", poolState.totalShares.toFixed(6));
    };
  };

  const handleDeposit = async (e: FormEvent<HTMLButtonElement>) => {
    justerPool.depositLiquidity(amount)
      .then(processOperationSucceed)
      .catch(processOperationError);
  };

  return (
    <div className="Grid">
      <h3>Deposit:</h3>
      {pkh &&
        <div>
          <p>
            <span>Amount:</span>
            <input
              onChange={handleAmountChange}
              defaultValue={amount.toFixed(6) || ''}/>
          </p>
          <p>
            <span>Expected shares:</span>
            <span>{estimatedShares.toFixed(6)}</span>
          </p>
          <button onClick={handleDeposit}>
              deposit
          </button>
        </div>
      }
    </div>
  );
};
