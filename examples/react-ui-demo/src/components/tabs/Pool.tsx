import React, { FunctionComponent } from 'react';
import {
  JusterPool,
  PendingEntriesType,
  PoolPositionsType,
  ClaimsType,
  PoolType
} from '@juster-finance/sdk';

import { DepositForm } from '../pool/DepositForm';
import { PendingEntriesBlock } from '../pool/PendingEntriesBlock';
import { PoolPositions } from '../pool/PoolPositions';
import { ClaimsBlock } from '../pool/ClaimsBlock';


export type PoolTabProps = {
  pkh: string | null,
  justerPool: JusterPool,
  pendingEntries: PendingEntriesType,
  poolPositions: PoolPositionsType,
  claims: ClaimsType,
  pool: PoolType | null
};

export const PoolTab: FunctionComponent<PoolTabProps> = ({
  pkh,
  justerPool,
  pendingEntries,
  poolPositions,
  claims,
  pool
}) => {

  return (
    <div>
      <DepositForm
        pkh={pkh}
        justerPool={justerPool}
        pool={pool}
      />

      <hr/>
      <PendingEntriesBlock
        pkh={pkh}
        justerPool={justerPool}
        pendingEntries={pendingEntries}
        pool={pool}
      />

      <hr/>
      <PoolPositions
        pkh={pkh}
        justerPool={justerPool}
        poolPositions={poolPositions}
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

