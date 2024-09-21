import { BigNumber } from 'bignumber.js';

import { textUtils } from '../utils/index.js';
import type { BetSide } from '../models.js';

import { JusterDemoResponseError } from './justerDemoResponseError.js';
import type { AccessTokenFactory } from './accessTokenFactory.js';
import type { JusterDemoOptions, DefaultJusterDemoOptions } from './options.js';
import type { JusterContractConfig } from './contractConfig.js';
import type { ProvideLiquidityParams, BetParams } from './params.js';
import type { UserDto, BetResultDto, ProvideLiquidityResultDto } from './dtos.js';
import type { User, BetResult, ProvideLiquidityResult } from './models.js';
import * as defaultMappers from './mappers.js';

export class JusterDemo {
  static readonly defaultMappers: typeof defaultMappers = defaultMappers;
  static readonly defaultOptions: DefaultJusterDemoOptions = {
    contractConfig: {
      nativeTokenDecimals: 9,
      sharesPrecision: 12,
      targetDynamicsPrecision: 12,
    },
  };

  readonly baseUrl: string;
  readonly contractConfig: JusterContractConfig;
  protected _accessTokenFactory: AccessTokenFactory | undefined;
  protected mappers: typeof defaultMappers = JusterDemo.defaultMappers;

  get accessTokenFactory() {
    return this._accessTokenFactory;
  }

  constructor(options: JusterDemoOptions) {
    this.baseUrl = textUtils.trimSlashes(options.baseUrl);

    const nativeTokenDecimals = options.contractConfig?.nativeTokenDecimals || JusterDemo.defaultOptions.contractConfig.nativeTokenDecimals;
    const sharesPrecision = options.contractConfig?.sharesPrecision || JusterDemo.defaultOptions.contractConfig.sharesPrecision;
    const targetDynamicsPrecision = options.contractConfig?.targetDynamicsPrecision || JusterDemo.defaultOptions.contractConfig.targetDynamicsPrecision;
    this.contractConfig = {
      nativeTokenDecimals,
      nativeTokenDecimalsFactor: 10n ** BigInt(nativeTokenDecimals),
      sharesPrecision,
      sharesPrecisionFactor: 10n ** BigInt(sharesPrecision),
      targetDynamicsPrecision,
      targetDynamicsPrecisionFactor: 10n ** BigInt(targetDynamicsPrecision),
    };

    this._accessTokenFactory = options.accessTokenFactory;
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
  async getUser(address: string): Promise<User> {
    const user = await this.fetch<UserDto>(`/data/users/${address}`, false, {
      method: 'GET',
    });

    return this.mappers.mapUserDtoToUser(user);
  }

  /**
   * Top up user account
   *
   * @returns promise with User
   */
  async topUp(): Promise<User> {
    const user = await this.fetch<UserDto>(`/demo/top-up`, true, {
      method: 'POST',
    });

    return this.mappers.mapUserDtoToUser(user);
  }

  /**
   * Calling provideLiquidity action
   *
   * @param {number} eventId number of event
   * @param {BigNumber} expectedRatioAboveEq expected pool ratio numerator
   * @param {BigNumber} expectedRatioBelow expected pool ratio denomimator
   * @param {BigNumber} maxSlippage maximal difference between expected ratio and actual ratio (nat number measured in ratioPrecision)
   * @param {BigNumber} amount added liquidity amount
   * @returns promise with ProvideLiquidityResult
   */
  async provideLiquidity(
    eventId: number,
    expectedRatioAboveEq: BigNumber,
    expectedRatioBelow: BigNumber,
    maxSlippage: BigNumber,
    amount: BigNumber
  ): Promise<ProvideLiquidityResult> {
    const provideLiquidityParams: ProvideLiquidityParams = {
      amount: this.convertUnitsToRaw(amount, this.contractConfig.nativeTokenDecimalsFactor),
      eventId,
      expectedRatioAboveEq: this.convertUnitsToRaw(expectedRatioAboveEq, this.contractConfig.nativeTokenDecimalsFactor),
      expectedRatioBelow: this.convertUnitsToRaw(expectedRatioBelow, this.contractConfig.nativeTokenDecimalsFactor),
      maxSlippage: this.convertUnitsToRaw(maxSlippage, this.contractConfig.sharesPrecisionFactor),
    };
    const provideLiquidityResult = await this.fetch<ProvideLiquidityResultDto>('/contract/add-liquidity', true, {
      method: 'POST',
      body: JSON.stringify(provideLiquidityParams),
    });

    return this.mappers.mapProvideLiquidityResultDtoToProvideLiquidityResult(provideLiquidityResult);
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
  ): Promise<BetResult> {
    const betParams: BetParams = {
      amount: this.convertUnitsToRaw(betValue, this.contractConfig.nativeTokenDecimalsFactor),
      eventId,
      side: betSide === 'aboveEq' ? 0 : 1,
      minimalWinAmount: this.convertUnitsToRaw(minimalWinAmount, this.contractConfig.nativeTokenDecimalsFactor),
    };
    const betResult = await this.fetch<BetResultDto>('/contract/bet', true, {
      method: 'POST',
      body: JSON.stringify(betParams),
    });

    return this.mappers.mapBetResultDtoToBetResult(betResult);
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

  protected async fetch<T>(uri: string, isPrivate: boolean, requestInit?: RequestInit, useDefaultRequestInitFields = true): Promise<T> {
    if (useDefaultRequestInitFields)
      requestInit = await this.getRequestInit(isPrivate, requestInit);
    const url = this.getUrl(uri);
    const response = await fetch(url.href, requestInit);

    await this.ensureResponseOk(response);

    return response.json();
  }

  protected async ensureResponseOk(response: Response) {
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

  protected convertUnitsToRaw(value: BigNumber, factor: bigint): string {
    return value.times(factor.toString()).integerValue().toString();
  }
}
