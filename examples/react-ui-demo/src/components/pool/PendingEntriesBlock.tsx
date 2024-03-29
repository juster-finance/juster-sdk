import React, { FunctionComponent, FormEvent } from 'react';
import BigNumber from "bignumber.js";

import {
  JusterPool,
  PendingEntriesType,
  PoolStateType
} from '@juster-finance/sdk';
import { processOperationSucceed, processOperationError } from '../../utility'

export type PendingEntriesProps = {
  pkh: string | null,
  justerPool: JusterPool,
  pendingEntries: PendingEntriesType,
  poolState: PoolStateType | null
};

export const PendingEntriesBlock: FunctionComponent<PendingEntriesProps> = ({ pkh, justerPool, pendingEntries, poolState }) => {

  const handleApprove = async (e: FormEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    const entryId: number = parseInt(button.name);
    justerPool.approveEntry(entryId)
      .then(processOperationSucceed)
      .catch(processOperationError);
  };

  const calcExpectedSharesFmt = (amount: BigNumber) => {
    if (poolState !== null) {
      return amount.div(poolState.sharePrice).toFixed(6)
    }
    return "-"
  };

  return (
    <div className="Grid">
      <h3>Pending Entries:</h3>
      {pendingEntries.length > 0 &&
        <table className="Table">
          <thead>
            <tr>
              <th>id in db</th>
              <th>id in pool</th>
              <th>amount provided</th>
              <th>accept time after</th>
              <th>expected shares</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {pendingEntries.map(entry => {
                  return (
                    <tr key={entry.poolEntryId}>
                      <td>{entry.poolEntryId}</td>
                      <td>{entry.entryId}</td>
                      <td>{entry.amount.toFixed(6)} xtz</td>
                      <td>{entry.acceptTime.toLocaleDateString()}</td>
                      <td>{calcExpectedSharesFmt(entry.amount)}</td>
                      <td>
                        <button name={entry.entryId.toString()} onClick={handleApprove}>approve</button>
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


