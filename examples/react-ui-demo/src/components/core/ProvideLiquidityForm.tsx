import React, { FunctionComponent, FormEvent, useState, ChangeEvent } from 'react';
import {
  JusterCore,
  EventType,
  calculateRatio,
  estimateShares
} from '@juster-finance/sdk';
import BigNumber from "bignumber.js";

type ProvideLiquidityProps = {
  eventId: number;
  event: EventType | null;
  justerCore: JusterCore
};

export const ProvideLiquidityForm: FunctionComponent<ProvideLiquidityProps> = ({ eventId, event, justerCore }) => {
  // TODO: make hook to use juster?

  const [amount, setAmount] = useState<BigNumber>(new BigNumber(0));
  const [newShares, setNewShares] = useState<BigNumber>(new BigNumber(0));
  const [maxSlippage, setMaxSlippage] = useState<BigNumber>(new BigNumber(0.05));
  const [ratio, setRatio] = useState<BigNumber>(new BigNumber(0));

  // MinRatio & MaxRatio is ratios including slippage that can
  // happen during transaction processing (one for + and one for -):
  const [minRatio, setMinRatio] = useState<BigNumber>(new BigNumber(0));
  const [maxRatio, setMaxRatio] = useState<BigNumber>(new BigNumber(0));

  if (event === null) {
    return <div></div>
  };

  const updateValues = (
    amount: BigNumber,
    slippage: BigNumber,
  ) => {
    setNewShares(estimateShares(event, amount));
    setAmount(amount);
    // Ratio for shares calculated for one pool, let it be aboveEq:
    const ratio = calculateRatio(event, "aboveEq");
    setRatio(ratio);
    setMaxSlippage(slippage);
    const slippageMultiplier = slippage.plus(new BigNumber(1));
    setMinRatio(ratio.div(slippageMultiplier));
    setMaxRatio(ratio.times(slippageMultiplier));
  };

  const handleAmountChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const providedAmount = new BigNumber(e.target.value);
    updateValues(providedAmount, maxSlippage);
  };

  const handleMaxSluppageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const newSlippage = new BigNumber(e.target.value);
    updateValues(amount, newSlippage);
  };

  // TODO: update all values after initialization?
  // TODO: add slippage percent here? how to show it? maybe show min/max ratio?
  const handleProvideLiquidity = async (e: FormEvent<HTMLButtonElement>) => {

    justerCore.provideLiquidity(
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
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Grid">Provide Liquidity:
      <p>
        <span>Amount:</span>
        <input
          onChange={handleAmountChange}
          defaultValue={amount.toFixed(6) || ''}
        />
      </p>
      <p>
        <span>Max slippage:</span>
        <input
          onChange={handleMaxSluppageChange}
          defaultValue={maxSlippage.toFixed(3) || ''}
        />
      </p>
      <p>
        <span>AboveEq Ratio:</span>
        <span>{ratio.toFixed(3)}
          (min: {minRatio.toFixed(3)},
          max: {maxRatio.toFixed(3)}
        )</span>
      </p>
      <p>
        <span>New shares:</span>
        <span>{newShares.toFixed(3)}</span>
      </p>
      <button
          onClick={handleProvideLiquidity}
        >
          provideLiquidity
        </button>
    </div>
  )
};
