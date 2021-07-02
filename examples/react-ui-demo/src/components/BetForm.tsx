import React, { FunctionComponent, FormEvent, useState, ChangeEvent } from 'react';
import {
  Juster,
  EventType,
  calculateRatio,
  BetType,
  estimateFeeMultiplier
} from '@juster-finance/sdk';
import BigNumber from "bignumber.js";

type BetProps = {
  eventId: number;
  event: EventType | null;
  juster: Juster
};

export const BetForm: FunctionComponent<BetProps> = ({ eventId, event, juster }) => {
  // TODO: make hook to use juster?

  const [amount, setAmount] = useState<BigNumber>(new BigNumber(0));

  // Slippage is pecent that used to reduce winDelta a bit but make this
  // bet transaction stable to ratio changes that may happen while
  // transaction accepted:
  const [slippage, setSlippage] = useState<BigNumber>(new BigNumber(0.03));

  // Ratio is the multiplier for bet amount that would be bettor profit if
  // he succeed in event:
  const [ratio, setRatio] = useState<BigNumber>(new BigNumber(0));

  // fee is liquidity, that paid to Liquidity Providers + JUSTER DAO
  // it is cutted from winDelta:
  const [fee, setFee] = useState<BigNumber>(new BigNumber(0));

  const [betType, setBetType] = useState<BetType>("aboveEq");

  // Possible win amount: it is expected fixed win amount that would receive bettor:
  const [possibleWinAmount, setPossibleWinAmount] = useState<BigNumber>(new BigNumber(0));

  // Minimal win amount is possibleWinAmount without slippage multiplier used
  // to increase chance that transaction would be succeed:
  const [minimalWinAmount, setMinimalWinAmount] = useState<BigNumber>(new BigNumber(0));

  // Ratio before bet is the ratio that was in the pool before bet changed it:
  const [ratioBeforeBet, setRatioBeforeBet] = useState<BigNumber>(new BigNumber(0));

  // Ratio after bet is the ratio that would be in the pool after bet changed it:
  const [ratioAfterBet, setRatioAfterBet] = useState<BigNumber>(new BigNumber(0));

  // TODO: Show pool change effect?
  // TODO: update all values after initialization?

  if (event === null) {
    return <div></div>
  };

  const updateValues = (
    amount: BigNumber,
    slippage: BigNumber,
    betType: BetType
  ) => {
    // TODO: should this possibleWinAmount / minimalWinAmount calculation moved to SDK?
    // TODO: maybe create one function that returns objkt with all required data?
    const fee = estimateFeeMultiplier(event, new Date());
    const feeMultiplier = new BigNumber(1).minus(fee);

    const ratio = calculateRatio(event, betType, amount);
    const winDelta = amount.times(ratio).times(feeMultiplier);

    const possibleWinAmount = winDelta.plus(amount);
    const slippageMultiplier = new BigNumber(1).minus(slippage);
    const minimalWinAmount = winDelta.times(slippageMultiplier).plus(amount);

    setAmount(amount);
    setFee(fee);
    setPossibleWinAmount(possibleWinAmount);
    setMinimalWinAmount(minimalWinAmount);
    setRatio(ratio);

    // Info parameters:
    const ratioBeforeBet = calculateRatio(event, betType);
    const ratioAfterBet = calculateRatio(event, betType, amount, winDelta);
    setRatioBeforeBet(ratioBeforeBet);
    setRatioAfterBet(ratioAfterBet)
  };

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
      })
      .catch((err) => console.log(err));
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
          defaultValue={amount.toFixed(6) || ''}/>
      </p>
      <p>
        <span>Liquidity fee:</span>
        <span>{fee.toFixed(3)}</span>
      </p>
      <p>
        <span>Slippage percent:</span>
        <input
          onChange={handleSlippageChange}
          defaultValue={slippage.toFixed(3) || ''}/>
      </p>
      <p>
        <span>Possible Win Amount:</span>
        <span>{possibleWinAmount.toFixed(6)}</span>
      </p>
      <p>
        <span>Minimal Win Amount:</span>
        <span>{minimalWinAmount.toFixed(6)}</span>
      </p>
      <p>
        <span>Ratio for bet:</span>
        <span>{ratio.toFixed(3)} ({ratioBeforeBet.toFixed(3)} &#10140; {ratioAfterBet.toFixed(3)})</span>
      </p>

      <button
          onClick={handleBet}
        >
          bet
        </button>
    </div>
  )
};
