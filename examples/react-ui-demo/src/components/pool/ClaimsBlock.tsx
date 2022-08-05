import React, { FunctionComponent } from 'react';
import {
  JusterPool,
  ClaimsType
} from '@juster-finance/sdk';
import BigNumber from "bignumber.js";

export type ClaimsBlockProps = {
  pkh: string | null,
  justerPool: JusterPool,
  claims: ClaimsType
};

export const ClaimsBlock: FunctionComponent<ClaimsBlockProps> = ({ pkh, justerPool, claims }) => {

  return (
    <div className="Grid">Claims:
      {claims.length > 0 &&
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
                      <td>{!claim.withdrawn ? <button>withdraw</button> : ""}</td>
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


