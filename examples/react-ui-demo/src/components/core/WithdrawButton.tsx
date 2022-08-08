import React, { FunctionComponent, FormEvent, useState, ChangeEvent } from 'react';
import {
  JusterCore,
} from '@juster-finance/sdk';

import { processOperationSucceed, processOperationError } from '../../utility'

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
      .then(processOperationSucceed)
      .catch(processOperationError);
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
