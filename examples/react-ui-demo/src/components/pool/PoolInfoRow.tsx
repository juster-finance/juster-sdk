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
  const [APY, setAPY] = useState<BigNumber>(new BigNumber(0));
  const [riskIndex, setRiskIndex] = useState<BigNumber>(new BigNumber(0));
  const [info, setInfo] = useState<PoolType | null>(null);

  useEffect(() => {
    const fetchInfoAndSubscribe = async () => {
      setInfo(await pool.getInfo());

      pool.subscribeToAPY(
        (newAPY) => {setAPY(newAPY)}
      );

      pool.subscribeToRiskIndex(
        (newRiskIndex) => {setRiskIndex(newRiskIndex)}
      );
    }

    fetchInfoAndSubscribe();
  }, []);

  if (info === null) {
    return (
      <tr key={pool.getContractAddress()}>
        <td>loading...</td>
      </tr>
    )
  }

  return (
    <tr key={pool.getContractAddress()}>
      <td>{info.address}<br/>{info.name}</td>
      <td>{info.version}</td>
      <td>{info.entryLockPeriod}</td>
      <td>{info.isDepositPaused ? "yes" : "no"}</td>
      <td>{APY.times(100).toFixed(2)}%</td>
      <td>{riskIndex.times(100).toFixed(2)}%</td>
    </tr>
  );
};