export interface JusterContractConfig {
  readonly nativeTokenDecimals: number;
  readonly nativeTokenDecimalsFactor: bigint;
  readonly sharesPrecision: number;
  readonly sharesPrecisionFactor: bigint;
  readonly targetDynamicsPrecision: number;
  readonly targetDynamicsPrecisionFactor: bigint;
}
