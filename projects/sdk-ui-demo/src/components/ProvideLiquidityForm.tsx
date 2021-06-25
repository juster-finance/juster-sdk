import React, { FunctionComponent, FormEvent, useState, ChangeEvent } from 'react';
import {
  Juster,
  EventType,
  calculateRatio,
  estimateShares
} from 'juster-sdk';
import BigNumber from "bignumber.js";

type ProvideLiquidityProps = {
  eventId: number;
  event: EventType | null;
  juster: Juster
};

export const ProvideLiquidityForm: FunctionComponent<ProvideLiquidityProps> = ({ eventId, event, juster }) => {
  // TODO: make hook to use juster?

  const [amount, setAmount] = useState<BigNumber>(new BigNumber(0));
  const [newShares, setNewShares] = useState<BigNumber>(new BigNumber(0));
  const [maxSlippage, setMaxSlippage] = useState<BigNumber>(new BigNumber(0.05));
  const [ratio, setRatio] = useState<BigNumber>(new BigNumber(0.05));

  if (event === null) {
    return <div></div>
  };

  const handleAmountChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const provided = new BigNumber(e.target.value);
    setNewShares(estimateShares(event, provided));

    // Ratio for shares calculated for one pool, let it be aboveEq:
    setRatio(calculateRatio(event, "aboveEq"));
    setAmount(provided);
  };

  // TODO: need to show new shares that would receive participant
  // TODO: add slippage percent here? how to show it? maybe show min/max ratio?
  const handleProvideLiquidity = async (e: FormEvent<HTMLButtonElement>) => {

    juster.provideLiquidity(
      eventId, event.poolAboveEq, event.poolBelow, maxSlippage, amount)
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
      });
  };

  return (
    <div className="Grid">Provide Liquidity:
      <p>
        <span>Amount:</span>
        <input
          onChange={handleAmountChange}
          defaultValue={amount.toFixed() || ''}
        />
      </p>
      <p>
        <span>Ratio:</span>
        <span>{ratio.toFixed()}</span>
      </p>
      <p>
        <span>New shares:</span>
        <span>{newShares.toFixed()}</span>
      </p>
      <button
          onClick={handleProvideLiquidity}
        >
          provideLiquidity
        </button>
    </div>
  )
};
