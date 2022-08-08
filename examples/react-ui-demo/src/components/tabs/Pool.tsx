import React, { FunctionComponent } from 'react';
import {
  JusterPool,
  PendingEntriesType,
  PoolPositionsType,
  ClaimsType
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
};

export const PoolTab: FunctionComponent<PoolTabProps> = ({
  pkh,
  justerPool,
  pendingEntries,
  poolPositions,
  claims
}) => {

  return (
    <div>
      <DepositForm
        pkh={pkh}
        justerPool={justerPool}
      />

      <hr/>
      <PendingEntriesBlock
        pkh={pkh}
        justerPool={justerPool}
        pendingEntries={pendingEntries}
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

