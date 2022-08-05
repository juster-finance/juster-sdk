import React, { FunctionComponent, FormEvent, useState, ChangeEvent } from 'react';
import {
  JusterCore,
} from '@juster-finance/sdk';

type WithdrawProps = {
  eventId: number;
  pkh: string | null;
  justerCore: JusterCore
};

export const WithdrawButton: FunctionComponent<WithdrawProps> = ({ eventId, pkh, justerCore }) => {
  // TODO: make hook to use juster?

  if (pkh === null) {
    return <div></div>
  };

  const handleWithdraw = async (e: FormEvent<HTMLButtonElement>) => {

    // TODO: check that minimal win amount calculated in mutez!
    justerCore.withdraw(eventId, pkh!)
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
    <div>
      <button
          onClick={handleWithdraw}
        >
          withdraw
        </button>
    </div>
  )
};
