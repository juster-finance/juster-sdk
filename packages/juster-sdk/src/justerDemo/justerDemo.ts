import { BigNumber } from 'bignumber.js';
import { textUtils } from '../utils/index.js';
import type { BetSide } from '../models.js';
import type { BetParamsDto, BetResultDto, ProvideLiquidityParams, ProvideLiquidityResult, UserDto } from './dtos.js';
import type { AccessTokenFactory } from './accessTokenFactory.js';
import { JusterDemoResponseError } from './justerDemoResponseError.js';

export class JusterDemo {
  readonly baseUrl: string;
  protected _accessTokenFactory: AccessTokenFactory | undefined;

  get accessTokenFactory() {
    return this._accessTokenFactory;
  }

  constructor(baseUrl: string, accessTokenFactory?: AccessTokenFactory) {
    this.baseUrl = textUtils.trimSlashes(baseUrl);
    this._accessTokenFactory = accessTokenFactory;
  }

  protected getUrl(uri: string) {
    return new URL(this.baseUrl + '/' + textUtils.trimSlashes(uri));
  }

  /**
   * Get user
   *
   * @param {string} address address of the user
   * @returns promise with User
   */
  async getUser(address: string): Promise<UserDto> {
    const user = await this.fetch<UserDto>(`/data/users/${address}`, false, {
      method: 'GET',
    });

    return user;
  }

  /**
   * Top up user account
   *
   * @returns promise with User
   */
  async topUp(): Promise<UserDto> {
    const user = await this.fetch<UserDto>(`/demo/top-up`, true, {
      method: 'POST',
    });

    return user;
  }

  /**
   * Calling provideLiquidity action
   *
   * @param {number} eventId number of event
   * @param {BigNumber} expectedRatioAboveEq expected pool ratio numerator
   * @param {BigNumber} expectedRatioBellow expected pool ratio denomimator
   * @param {BigNumber} maxSlippage maximal difference between expected ratio and actual ratio (nat number measured in ratioPrecision)
   * @param {BigNumber} amount added liquidity amount
   * @returns promise with ProvideLiquidityResult
   */
  async provideLiquidity(
    eventId: number,
    expectedRatioAboveEq: BigNumber,
    expectedRatioBellow: BigNumber,
    maxSlippage: BigNumber,
    amount: BigNumber
  ): Promise<ProvideLiquidityResult> {
    const provideLiquidityParams: ProvideLiquidityParams = {
      amount: amount.toNumber(),
      eventId,
      expectedRatioAboveEq: expectedRatioAboveEq.toNumber(),
      expectedRatioBelow: expectedRatioBellow.toNumber(),
      maxSlippage: maxSlippage.toNumber(),
    };
    const provideLiquidityResult = await this.fetch<ProvideLiquidityResult>('/contract/add-liquidity', true, {
      method: 'POST',
      body: JSON.stringify(provideLiquidityParams),
    });

    return provideLiquidityResult;
  };

  /**
   * Calling bet action
   *
   * @param {number} eventId id of event
   * @param {BetSide} betSide beta side: either aboveEq or below
   * @param {BigNumber} betValue bet amount
   * @param {BigNumber} minimalWinAmount minimal expected bet amount (slippage)
   * @returns promise with TransactionWalletOperation
   */
  async bet(
    eventId: number,
    betSide: BetSide,
    betValue: BigNumber,
    minimalWinAmount: BigNumber
  ): Promise<BetResultDto> {
    const betParams: BetParamsDto = {
      amount: betValue.toNumber(),
      eventId,
      side: betSide === 'aboveEq' ? 0 : 1,
      minimalWinAmount: minimalWinAmount.toNumber(),
    };
    const betResult = await this.fetch<BetResultDto>('/contract/bet', true, {
      method: 'POST',
      body: JSON.stringify(betParams),
    });

    return betResult;
  }

  /**
   * Calling withdraw action
   *
   * @param {number} eventId number of event
   * @param {address} participantAddress address of the participant used to calculate and pay rewards
   * @returns promise with TransactionWalletOperation
   */
  withdraw(
    /* eslint-disable @typescript-eslint/no-unused-vars */
    eventId: number,
    participantAddress: string
    /* eslint-enable @typescript-eslint/no-unused-vars */
  ): Promise<void> {
    return Promise.resolve();
  };

  protected async getRequestInit(isPrivate: boolean, requestInit: RequestInit = {}) {
    const headers = new Headers(requestInit.headers);
    if (!headers.has('Accept'))
      headers.append('Accept', 'application/json');
    if (!headers.has('Content-Type'))
      headers.append('Content-Type', 'application/json');

    if (isPrivate && !headers.has('Authorization')) {
      if (!this.accessTokenFactory)
        throw new Error('The \'accessTokenFactory\' should be defined for the private URIs');
      const accessToken = await this.accessTokenFactory();
      headers.append('Authorization', `Bearer ${accessToken}`);
    }

    requestInit.headers = headers;
    return requestInit;
  }

  private async fetch<T>(uri: string, isPrivate: boolean, requestInit?: RequestInit, useDefaultRequestInitFields = true): Promise<T> {
    if (useDefaultRequestInitFields)
      requestInit = await this.getRequestInit(isPrivate, requestInit);
    const url = this.getUrl(uri);
    const response = await fetch(url.href, requestInit);

    await this.ensureResponseOk(response);

    return response.json();
  }

  private async ensureResponseOk(response: Response) {
    if (response.ok)
      return;

    let content: string | undefined;
    try {
      content = await response.text();
    }
    catch {
      content = '[unavailable]';
    }

    throw new JusterDemoResponseError(response.status, content);
  }
}
