import React, { FunctionComponent, FormEvent, useState, ChangeEvent } from 'react';
import {
  Juster,
  EventType,
  calculateRatio,
  BetType
} from 'juster-sdk';
import BigNumber from "bignumber.js";

type BetProps = {
  eventId: number;
  event: EventType | null;
  juster: Juster
};

export const BetForm: FunctionComponent<BetProps> = ({ eventId, event, juster }) => {
  // TODO: make hook to use juster?

  const [amount, setAmount] = useState<BigNumber>(new BigNumber(0));
  const [slippage, setSlippage] = useState<BigNumber>(new BigNumber(0.05));
  // TODO: maybe it is better to have ratio as BigNumber?
  const [ratioString, setRatio] = useState<string>("-");
  const [betType, setBetType] = useState<BetType>("aboveEq");
  const [minimalWinAmount, setMinimalWinAmount] = useState<BigNumber>(new BigNumber(0));

  if (event === null) {
    return <div></div>
  };

  // TODO: I feel that it can be done a lot easier with some kind of mutations
  // that I was not worked with, but this is just example:
  const updateValues = (
    amount: BigNumber,
    slippage: BigNumber,
    betType: BetType
  ) => {
    // TODO: add liquidity fee calculation
    // TODO: should this possibleWinAmount / minimalWinAmount calculation moved to SDK?
    const ratio = calculateRatio(event, betType, amount);
    const winDelta = amount.times(ratio);
    const multiplier = new BigNumber(1).minus(slippage);
    setAmount(amount);
    setMinimalWinAmount(winDelta.times(multiplier).plus(amount));
    setRatio(ratio.toFixed());
  };

  // TODO: is it important to have this?:
  if (ratioString === "-") {
    updateValues(amount, slippage, betType);
  }

  const handleAmountChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const newAmount = new BigNumber(e.target.value)
    updateValues(newAmount, slippage, betType);
  };

  const handleBetTypeChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    let newBetType: BetType = "aboveEq";
    if (e.target.value === "below") {
      newBetType = "below"
    }
    updateValues(amount, slippage, newBetType)
  };

  const handleSlippageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const newSlippage = new BigNumber(e.target.value);
    updateValues(amount, newSlippage, betType)
  };

  const handleBet = async (e: FormEvent<HTMLButtonElement>) => {

    // TODO: check that minimal win amount calculated in mutez!
    juster.bet(eventId, betType, amount, minimalWinAmount)
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
    <div className="Grid">Bet:
      <p>
        <span>Pool:</span>
        <select name="betType" id="betType" onChange={handleBetTypeChange}>
          <option value="aboveEq">Above or equal</option>
          <option value="below">Below</option>
        </select>
      </p>
      <p>
        <span>Amount:</span>
        <input
          onChange={handleAmountChange}
          defaultValue={amount.toFixed() || ''}/>
      </p>
      <p>
        <span>Slippage percent:</span>
        <input
          onChange={handleSlippageChange}
          defaultValue={slippage.toFixed() || ''}/>
      </p>
      <p>
        <span>Minimal Win Amount:</span>
        <span>{minimalWinAmount.toFixed()}</span>
      </p>
      <p>
        <span>Ratio for bet:</span>
        <span>{ratioString}</span>
      </p>

      <button
          onClick={handleBet}
        >
          bet
        </button>
    </div>
  )
};
