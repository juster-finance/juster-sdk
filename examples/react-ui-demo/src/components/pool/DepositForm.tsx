import React, { FunctionComponent, FormEvent, useState, ChangeEvent } from 'react';
import {
  JusterPool
} from '@juster-finance/sdk';
import BigNumber from "bignumber.js";

export type DepositFormProps = {
  pkh: string | null,
  justerPool: JusterPool
};


export const DepositForm: FunctionComponent<DepositFormProps> = ({ pkh, justerPool }) => {

  // TODO: show input with button that makes transaction deposit
  // TODO: handle not loaded?
  const [amount, setAmount] = useState<BigNumber>(new BigNumber(0));

  const handleAmountChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const newAmount = new BigNumber(e.target.value)
    setAmount(newAmount);
  };

  const handleDeposit = async (e: FormEvent<HTMLButtonElement>) => {
    justerPool.depositLiquidity(amount)
      .then((op) => {
        console.log(`Hash: ${op.opHash}`);
        op.confirmation()
          .then((result) => {
            console.log(result);
            if (result.completed) {
              console.log('Transaction correctly processed!');
            } else {
              console.log('An error has occurred');
            }
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Grid">Deposit:
      <p>
        <span>Amount:</span>
        <input
          onChange={handleAmountChange}
          defaultValue={amount.toFixed(6) || ''}/>
      </p>
      <button onClick={handleDeposit}>
          deposit
        </button>
    </div>
  );
};
