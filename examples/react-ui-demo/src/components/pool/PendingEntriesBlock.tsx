import React, { FunctionComponent } from 'react';
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

  return (
    <div className="Grid">Pending Entries:
      {pendingEntries.length > 0 &&
        <table className="Table">
          <thead>
            <tr>
              <th>entry id</th>
              <th>amount provided</th>
              <th>accept time after</th>
            </tr>
          </thead>
          <tbody>
            {pendingEntries.map(entry => {
                  return (
                    <tr key={entry.id}>
                      <td>{entry.id}</td>
                      <td>{entry.amount.toFixed(6)} xtz</td>
                      <td>{entry.acceptTime.toLocaleDateString()}</td>
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


