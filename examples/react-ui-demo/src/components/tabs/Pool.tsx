import React, { FunctionComponent } from 'react';
import {
  JusterPool,
  PendingEntriesType,
  PoolPositionsType,
  ClaimsType,
  PoolStateType
} from '@juster-finance/sdk';

import { DepositForm } from '../pool/DepositForm';
import { PendingEntriesBlock } from '../pool/PendingEntriesBlock';
import { PoolPositions } from '../pool/PoolPositions';
import { ClaimsBlock } from '../pool/ClaimsBlock';
import { AggregatedUserPosition } from '../pool/AggregatedUserPosition';


export type PoolTabProps = {
  pkh: string | null,
  justerPool: JusterPool,
  pendingEntries: PendingEntriesType,
  poolPositions: PoolPositionsType,
  claims: ClaimsType,
  poolState: PoolStateType | null
};

export const PoolTab: FunctionComponent<PoolTabProps> = ({
  pkh,
  justerPool,
  pendingEntries,
  poolPositions,
  claims,
  poolState
}) => {

  return (
    <div>
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
      <AggregatedUserPosition
        pkh={pkh}
        justerPool={justerPool}
        userPositions={poolPositions}
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

