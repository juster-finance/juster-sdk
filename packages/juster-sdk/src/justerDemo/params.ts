export interface BaseParams {
  amount: string;
}

export interface ProvideLiquidityParams extends BaseParams {
  eventId: number;
  expectedRatioAboveEq: string;
  expectedRatioBelow: string;
  maxSlippage: string;
}

export interface BetParams extends BaseParams {
  eventId: number;
  side: 0 | 1;
  minimalWinAmount: string;
}
