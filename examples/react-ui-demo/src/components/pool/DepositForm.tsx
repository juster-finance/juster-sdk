import React, { FunctionComponent, FormEvent, useState, ChangeEvent } from 'react';
import BigNumber from "bignumber.js";
import {
  JusterPool,
  PoolType,
  estimateSharePrice
} from '@juster-finance/sdk';
import { processOperationSucceed, processOperationError } from '../../utility'

export type DepositFormProps = {
  pkh: string | null,
  justerPool: JusterPool,
  pool: PoolType | null
};


export const DepositForm: FunctionComponent<DepositFormProps> = ({ pkh, justerPool, pool }) => {

  // TODO: show input with button that makes transaction deposit
  // TODO: handle not loaded?
  const [amount, setAmount] = useState<BigNumber>(new BigNumber(0));
  const [estimatedShares, setEstimatedShares] = useState<BigNumber>(new BigNumber(0));

  const handleAmountChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const newAmount = new BigNumber(e.target.value)
    setAmount(newAmount);

    if (pool !== null) {
      const newEstimatedShares = newAmount.div(estimateSharePrice(pool));
      setEstimatedShares(newEstimatedShares);
      console.log("new estimated", newEstimatedShares);
      console.log("pool", pool.totalShares.toFixed(6));
    };
  };

  const handleDeposit = async (e: FormEvent<HTMLButtonElement>) => {
    justerPool.depositLiquidity(amount)
      .then(processOperationSucceed)
      .catch(processOperationError);
  };

  return (
    <div className="Grid">Deposit:
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
  );
};
