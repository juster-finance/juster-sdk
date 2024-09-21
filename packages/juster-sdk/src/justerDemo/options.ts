import type { AccessTokenFactory } from './accessTokenFactory.js';
import type { JusterContractConfig } from './contractConfig.js';

type JusterContractConfigOptions = {
  -readonly [P in keyof Omit<
    JusterContractConfig,
    'nativeTokenDecimalsFactor' | 'sharesPrecisionFactor' | 'targetDynamicsPrecisionFactor'
  >]: JusterContractConfig[P];
};

export interface JusterDemoOptions {
  baseUrl: string;
  accessTokenFactory?: AccessTokenFactory;
  contractConfig?: Partial<JusterContractConfigOptions>;
}

export interface DefaultJusterDemoOptions {
  readonly contractConfig: JusterContractConfigOptions;
}
