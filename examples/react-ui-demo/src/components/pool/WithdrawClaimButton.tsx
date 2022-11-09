import React, { FunctionComponent, FormEvent } from 'react';
import {
  JusterPool,
  ClaimType
} from '@juster-finance/sdk';

import { processOperationSucceed, processOperationError } from '../../utility'


export type WitdrawClaimButtonProps = {
  claim: ClaimType,
  justerPool: JusterPool
};

export const WithdrawClaimButton: FunctionComponent<WitdrawClaimButtonProps> = ({
  claim,
  justerPool
}) => {

  const handleWithdraw = async (e: FormEvent<HTMLButtonElement>) => {
    justerPool.withdrawClaims([claim])
      .then(processOperationSucceed)
      .catch(processOperationError);
  };

  return (
    <button onClick={handleWithdraw}>withdraw</button>
  )
}

