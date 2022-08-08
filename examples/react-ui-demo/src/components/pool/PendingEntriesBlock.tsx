import React, { FunctionComponent, FormEvent } from 'react';
import {
  JusterPool,
  PendingEntriesType
} from '@juster-finance/sdk';
import { processOperationSucceed, processOperationError } from '../../utility'

export type PendingEntriesProps = {
  pkh: string | null,
  justerPool: JusterPool,
  pendingEntries: PendingEntriesType
};

export const PendingEntriesBlock: FunctionComponent<PendingEntriesProps> = ({ pkh, justerPool, pendingEntries }) => {

  const handleApprove = async (e: FormEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    const entryId: number = parseInt(button.name);
    justerPool.approveLiquidity(entryId)
      .then(processOperationSucceed)
      .catch(processOperationError);
  };

  return (
    <div className="Grid">Pending Entries:
      {pendingEntries.length > 0 &&
        <table className="Table">
          <thead>
            <tr>
              <th>entry id</th>
              <th>amount provided</th>
              <th>accept time after</th>
              <th>expected shares</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {pendingEntries.map(entry => {
                  return (
                    <tr key={entry.id}>
                      <td>{entry.id}</td>
                      <td>{entry.amount.toFixed(6)} xtz</td>
                      <td>{entry.acceptTime.toLocaleDateString()}</td>
                      <td>...</td>
                      <td>
                        <button name={entry.id.toString()} onClick={handleApprove}>approve</button>
                      </td>
                    </tr>
                  )
                }
              )
            }
          </tbody>
        </table>
      }
    </div>
  );
};


