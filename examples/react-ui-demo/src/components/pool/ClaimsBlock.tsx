import React, { FunctionComponent, FormEvent } from 'react';
import { WithdrawClaimButton } from './WithdrawClaimButton'
import { processOperationSucceed, processOperationError } from '../../utility'
import {
  JusterPool,
  ClaimsType
} from '@juster-finance/sdk';

export type ClaimsBlockProps = {
  pkh: string | null,
  justerPool: JusterPool,
  claims: ClaimsType
};


export const ClaimsBlock: FunctionComponent<ClaimsBlockProps> = ({ pkh, justerPool, claims }) => {

  const handleWithdrawAll = async (e: FormEvent<HTMLButtonElement>) => {
    // TODO: limit claims to 30
    justerPool.withdrawLiquidity(claims)
      .then(processOperationSucceed)
      .catch(processOperationError);
  };

  return (
    <div className="Grid">
      <h3>Claims:</h3>
      {claims.length > 0 &&
        <div>
          <table className="Table">
            <thead>
              <tr>
                <th>position id</th>
                <th>event id</th>
                <th>amount</th>
                <th>is withdrawn</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {claims.map(claim => {
                    return (
                      <tr key={claim.id}>
                        <td>{claim.positionId}</td>
                        <td>{claim.eventId}</td>
                        <td>{claim.amount.toFixed(6)} xtz</td>
                        <td>{claim.withdrawn ? "yay" : "not yet"}</td>
                        <td>
                          <WithdrawClaimButton
                            claim={claim}
                            justerPool={justerPool}
                          />
                        </td>
                      </tr>
                    )
                  }
                )
              }
            </tbody>
          </table>
          <button onClick={handleWithdrawAll}>withdraw all</button>
        </div>
      }
    </div>
  );
};


