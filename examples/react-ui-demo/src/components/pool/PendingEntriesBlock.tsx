import React, { FunctionComponent, FormEvent } from 'react';
import BigNumber from "bignumber.js";

import {
  JusterPool,
  PendingEntriesType,
  PoolType,
  estimateSharePrice
} from '@juster-finance/sdk';
import { processOperationSucceed, processOperationError } from '../../utility'

export type PendingEntriesProps = {
  pkh: string | null,
  justerPool: JusterPool,
  pendingEntries: PendingEntriesType,
  pool: PoolType | null
};

export const PendingEntriesBlock: FunctionComponent<PendingEntriesProps> = ({ pkh, justerPool, pendingEntries, pool }) => {

  const handleApprove = async (e: FormEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    const entryId: number = parseInt(button.name);
    justerPool.approveLiquidity(entryId)
      .then(processOperationSucceed)
      .catch(processOperationError);
  };

  const calcExpectedSharesFmt = (amount: BigNumber) => {
    if (pool !== null) {
      return amount.div(estimateSharePrice(pool)).toFixed(6)
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
                    <tr key={entry.id}>
                      <td>{entry.id}</td>
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


