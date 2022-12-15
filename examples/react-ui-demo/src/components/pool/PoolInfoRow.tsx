import { FC, useState, useEffect } from 'react';

import {
  JusterPool,
  PoolType
} from '@juster-finance/sdk';
import BigNumber from 'bignumber.js';

export type PoolInfoRowProps = {
  pool: JusterPool
};

export const PoolInfoRow: FC<PoolInfoRowProps> = (props) => {
  const { pool } = props;
  const [poolAPY, setPoolAPY] = useState<BigNumber>(new BigNumber(0));
  const [poolInfo, setPoolInfo] = useState<PoolType | null>(null);

  useEffect(() => {
    const fetchInfo = async () => {
      setPoolInfo(await pool.getInfo());
      // TODO: subscribe to APY and update it
    }
    fetchInfo();
  }, []);

  if (poolInfo === null) {
    return (
      <tr key={pool.getContractAddress()}>
        <td>loading...</td>
      </tr>
    )
  }

  return (
    <tr key={pool.getContractAddress()}>
      <td>{poolInfo.address}</td>
      <td>{poolInfo.name}</td>
      <td>{poolInfo.version}</td>
      <td>{poolInfo.entryLockPeriod}</td>
      <td>{poolInfo.isDepositPaused ? "yes" : "no"}</td>
      <td>{poolAPY.toFixed()}</td>
    </tr>
  );
};