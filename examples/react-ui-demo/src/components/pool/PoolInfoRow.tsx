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
  const [riskIndex, setRiskIndex] = useState<BigNumber>(new BigNumber(0));
  const [poolInfo, setPoolInfo] = useState<PoolType | null>(null);

  useEffect(() => {
    const fetchInfoAndSubscribe = async () => {
      setPoolInfo(await pool.getInfo());

      pool.subscribeToAPY(
        (newAPY) => {setPoolAPY(newAPY)}
      );

      pool.subscribeToRiskIndex(
        (newRiskIndex) => {setRiskIndex(newRiskIndex)}
      );
    }

    fetchInfoAndSubscribe();
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
      <td>{poolInfo.address}<br/>{poolInfo.name}</td>
      <td>{poolInfo.version}</td>
      <td>{poolInfo.entryLockPeriod}</td>
      <td>{poolInfo.isDepositPaused ? "yes" : "no"}</td>
      <td>{poolAPY.times(100).toFixed(2)}%</td>
      <td>{riskIndex.times(100).toFixed(2)}%</td>
    </tr>
  );
};