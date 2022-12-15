import React, { FunctionComponent } from 'react';
import {
  JusterPool,
  PendingEntriesType,
  PoolPositionType,
  ClaimsType,
  PoolStateType,
  PoolType
} from '@juster-finance/sdk';

import { DepositForm } from '../pool/DepositForm';
import { PendingEntriesBlock } from '../pool/PendingEntriesBlock';
import { PoolPositions } from '../pool/PoolPositions';
import { ClaimsBlock } from '../pool/ClaimsBlock';
import { UserSummary } from '../pool/UserSummary';
import { PoolsList } from '../pool/PoolsList';


export type PoolTabProps = {
  pkh: string | null,
  pendingEntries: PendingEntriesType,
  poolPosition: PoolPositionType | null,
  claims: ClaimsType,
  poolState: PoolStateType | null,
  pools: Array<JusterPool>
};

export const PoolTab: FunctionComponent<PoolTabProps> = ({
  pkh,
  pools,
  pendingEntries,
  poolPosition,
  claims,
  poolState,
}) => {

  const poolPositions: Array<PoolPositionType> = poolPosition == null ? [] : [poolPosition];
  // TODO: implement ability to select pool
  const justerPool = pools[0];
  return (
    <div>
      <PoolsList
        pools={pools}
      />

      <hr/>
      <DepositForm
        pkh={pkh}
        justerPool={justerPool}
        poolState={poolState}
      />

      <hr/>
      <PendingEntriesBlock
        pkh={pkh}
        justerPool={justerPool}
        pendingEntries={pendingEntries}
        poolState={poolState}
      />

      <hr/>
      <PoolPositions
        pkh={pkh}
        justerPool={justerPool}
        poolPositions={poolPositions}
        poolState={poolState}
      />

      <hr/>
      <UserSummary
        pkh={pkh}
        justerPool={justerPool}
        userPosition={poolPosition}
        poolState={poolState}
      />

      <hr/>
      <ClaimsBlock
        pkh={pkh}
        justerPool={justerPool}
        claims={claims}
      />

    </div>
  );
};