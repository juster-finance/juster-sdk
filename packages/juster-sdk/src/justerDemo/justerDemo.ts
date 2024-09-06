import { BigNumber } from 'bignumber.js';
import { textUtils } from '../utils/index.js';
import type { BetSide } from '../models.js';
import type { BetParamsDto, BetResultDto } from './dtos.js';
import type { AccessTokenFactory } from './accessTokenFactory.js';
import { JusterDemoResponseError } from './justerDemoResponseError.js';

export class JusterDemo {
  readonly baseUrl: string;
  protected _accessTokenFactory: AccessTokenFactory | undefined;

  get accessTokenFactory() {
    return this._accessTokenFactory;
  }

  constructor(baseUrl: string, accessTokenFactory?: AccessTokenFactory) {
    this.baseUrl = textUtils.trimSlashes(baseUrl); ;
    this._accessTokenFactory = accessTokenFactory;
  }

  protected getUrl(uri: string) {
    return new URL(this.baseUrl + '/' + textUtils.trimSlashes(uri));
  }

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
      headers.append('Authorization', `${accessToken}`);
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
