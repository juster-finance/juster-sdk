import React, { FunctionComponent, FormEvent } from 'react';
import {
  JusterPool,
  PendingEntriesType
} from '@juster-finance/sdk';

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
    <div className="Grid">Pending Entries:
      {pendingEntries.length > 0 &&
        <table className="Table">
          <thead>
            <tr>
              <th>entry id</th>
              <th>amount provided</th>
              <th>accept time after</th>
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


