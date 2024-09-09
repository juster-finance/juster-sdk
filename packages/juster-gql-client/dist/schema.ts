import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    Boolean: boolean,
    Int: number,
    String: string,
    bigint: any,
    jsonb: any,
    numeric: any,
    timestamptz: any,
}


/** columns and relationships of "bet" */
export interface bet {
    amount: Scalars['numeric']
    createdTime: Scalars['timestamptz']
    /** An object relationship */
    event: event
    eventId: Scalars['bigint']
    id: Scalars['bigint']
    opgHash: Scalars['String']
    reward: Scalars['numeric']
    /** ABOVE_EQ: ABOVE_EQ\nBELOW: BELOW */
    side: Scalars['String']
    /** An object relationship */
    user: user
    userId: Scalars['String']
    __typename: 'bet'
}


/** select columns of table "bet" */
export type bet_select_column = 'amount' | 'createdTime' | 'eventId' | 'id' | 'opgHash' | 'reward' | 'side' | 'userId'


/** columns and relationships of "candle" */
export interface candle {
    close: Scalars['numeric']
    /** An object relationship */
    currencyPair: currencyPair
    currencyPairId: Scalars['Int']
    high: Scalars['numeric']
    id: Scalars['bigint']
    /** ONE_MINUTE: ONE_MINUTE\nFIVE_MINUTES: FIVE_MINUTES\nFIFTEEN_MINUTES: FIFTEEN_MINUTES\nONE_HOUR: ONE_HOUR\nSIX_HOURS: SIX_HOURS\nONE_DAY: ONE_DAY */
    interval: Scalars['String']
    low: Scalars['numeric']
    open: Scalars['numeric']
    since: Scalars['timestamptz']
    /** HARBINGER: HARBINGER\nCOINBASE: COINBASE\nMERGED: MERGED */
    source: Scalars['String']
    until: Scalars['timestamptz']
    volume: Scalars['numeric']
    __typename: 'candle'
}


/** select columns of table "candle" */
export type candle_select_column = 'close' | 'currencyPairId' | 'high' | 'id' | 'interval' | 'low' | 'open' | 'since' | 'source' | 'until' | 'volume'


/** columns and relationships of "claim" */
export interface claim {
    amount: Scalars['numeric']
    /** An object relationship */
    event: pool_event
    eventId: Scalars['bigint']
    id: Scalars['Int']
    /** An object relationship */
    pool: pool
    poolId: Scalars['String']
    /** An object relationship */
    position: pool_position
    positionId: Scalars['bigint']
    /** An array relationship */
    states: pool_state[]
    /** An object relationship */
    user: user
    userId: Scalars['String']
    withdrawn: Scalars['Boolean']
    __typename: 'claim'
}


/** select columns of table "claim" */
export type claim_select_column = 'amount' | 'eventId' | 'id' | 'poolId' | 'positionId' | 'userId' | 'withdrawn'


/** columns and relationships of "currencyPair" */
export interface currencyPair {
    /** An array relationship */
    candles: candle[]
    /** An array relationship */
    events: event[]
    id: Scalars['Int']
    /** An array relationship */
    poolLines: pool_line[]
    symbol: Scalars['String']
    totalEvents: Scalars['Int']
    totalValueLocked: Scalars['numeric']
    totalVolume: Scalars['numeric']
    __typename: 'currencyPair'
}


/** select columns of table "currencyPair" */
export type currencyPair_select_column = 'id' | 'symbol' | 'totalEvents' | 'totalValueLocked' | 'totalVolume'


/** ordering argument of a cursor */
export type cursor_ordering = 'ASC' | 'DESC'


/** columns and relationships of "deposit" */
export interface deposit {
    amountAboveEq: Scalars['numeric']
    amountBelow: Scalars['numeric']
    createdTime: Scalars['timestamptz']
    /** An object relationship */
    event: event
    eventId: Scalars['bigint']
    id: Scalars['bigint']
    opgHash: Scalars['String']
    shares: Scalars['numeric']
    /** An object relationship */
    user: user
    userId: Scalars['String']
    __typename: 'deposit'
}


/** select columns of table "deposit" */
export type deposit_select_column = 'amountAboveEq' | 'amountBelow' | 'createdTime' | 'eventId' | 'id' | 'opgHash' | 'shares' | 'userId'


/** columns and relationships of "dipdup_contract" */
export interface dipdup_contract {
    address: Scalars['String']
    createdAt: Scalars['timestamptz']
    name: Scalars['String']
    typename?: Scalars['String']
    updatedAt: Scalars['timestamptz']
    __typename: 'dipdup_contract'
}


/** columns and relationships of "dipdup_contract_metadata" */
export interface dipdup_contract_metadata {
    contract: Scalars['String']
    createdAt: Scalars['timestamptz']
    id: Scalars['Int']
    metadata: Scalars['jsonb']
    network: Scalars['String']
    updateId: Scalars['Int']
    updatedAt: Scalars['timestamptz']
    __typename: 'dipdup_contract_metadata'
}


/** select columns of table "dipdup_contract_metadata" */
export type dipdup_contract_metadata_select_column = 'contract' | 'createdAt' | 'id' | 'metadata' | 'network' | 'updateId' | 'updatedAt'


/** select columns of table "dipdup_contract" */
export type dipdup_contract_select_column = 'address' | 'createdAt' | 'name' | 'typename' | 'updatedAt'


/** columns and relationships of "dipdup_head" */
export interface dipdup_head {
    createdAt: Scalars['timestamptz']
    hash: Scalars['String']
    level: Scalars['Int']
    name: Scalars['String']
    timestamp: Scalars['timestamptz']
    updatedAt: Scalars['timestamptz']
    __typename: 'dipdup_head'
}


/** select columns of table "dipdup_head" */
export type dipdup_head_select_column = 'createdAt' | 'hash' | 'level' | 'name' | 'timestamp' | 'updatedAt'


/** columns and relationships of "dipdup_head_status" */
export interface dipdup_head_status {
    name?: Scalars['String']
    status?: Scalars['String']
    __typename: 'dipdup_head_status'
}


/** select columns of table "dipdup_head_status" */
export type dipdup_head_status_select_column = 'name' | 'status'


/** columns and relationships of "dipdup_index" */
export interface dipdup_index {
    configHash: Scalars['String']
    createdAt: Scalars['timestamptz']
    level: Scalars['Int']
    name: Scalars['String']
    /** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
    status: Scalars['String']
    template?: Scalars['String']
    templateValues?: Scalars['jsonb']
    /** operation: operation\nbig_map: big_map\nhead: head\ntoken_transfer: token_transfer\nevent: event */
    type: Scalars['String']
    updatedAt: Scalars['timestamptz']
    __typename: 'dipdup_index'
}


/** select columns of table "dipdup_index" */
export type dipdup_index_select_column = 'configHash' | 'createdAt' | 'level' | 'name' | 'status' | 'template' | 'templateValues' | 'type' | 'updatedAt'


/** Model update created within versioned transactions */
export interface dipdup_model_update {
    /** INSERT: INSERT\nUPDATE: UPDATE\nDELETE: DELETE */
    action: Scalars['String']
    createdAt: Scalars['timestamptz']
    data?: Scalars['jsonb']
    id: Scalars['Int']
    index: Scalars['String']
    level: Scalars['Int']
    modelName: Scalars['String']
    modelPk: Scalars['String']
    updatedAt: Scalars['timestamptz']
    __typename: 'dipdup_model_update'
}


/** select columns of table "dipdup_model_update" */
export type dipdup_model_update_select_column = 'action' | 'createdAt' | 'data' | 'id' | 'index' | 'level' | 'modelName' | 'modelPk' | 'updatedAt'


/** columns and relationships of "dipdup_schema" */
export interface dipdup_schema {
    createdAt: Scalars['timestamptz']
    hash: Scalars['String']
    name: Scalars['String']
    /** manual: manual\nmigration: migration\nrollback: rollback\nconfig_modified: config_modified\nschema_modified: schema_modified */
    reindex?: Scalars['String']
    updatedAt: Scalars['timestamptz']
    __typename: 'dipdup_schema'
}


/** select columns of table "dipdup_schema" */
export type dipdup_schema_select_column = 'createdAt' | 'hash' | 'name' | 'reindex' | 'updatedAt'


/** columns and relationships of "dipdup_token_metadata" */
export interface dipdup_token_metadata {
    contract: Scalars['String']
    createdAt: Scalars['timestamptz']
    id: Scalars['Int']
    metadata: Scalars['jsonb']
    network: Scalars['String']
    tokenId: Scalars['String']
    updateId: Scalars['Int']
    updatedAt: Scalars['timestamptz']
    __typename: 'dipdup_token_metadata'
}


/** select columns of table "dipdup_token_metadata" */
export type dipdup_token_metadata_select_column = 'contract' | 'createdAt' | 'id' | 'metadata' | 'network' | 'tokenId' | 'updateId' | 'updatedAt'


/** columns and relationships of "entry_liquidity" */
export interface entry_liquidity {
    acceptTime: Scalars['timestamptz']
    amount: Scalars['numeric']
    entryId: Scalars['Int']
    /** An object relationship */
    pool: pool
    poolEntryId: Scalars['String']
    poolId: Scalars['String']
    /** An object relationship */
    position?: pool_position
    positionId?: Scalars['bigint']
    /** An array relationship */
    states: pool_state[]
    /** PENDING: PENDING\nAPPROVED: APPROVED\nCANCELED: CANCELED */
    status: Scalars['String']
    /** An object relationship */
    user: user
    userId: Scalars['String']
    __typename: 'entry_liquidity'
}


/** select columns of table "entry_liquidity" */
export type entry_liquidity_select_column = 'acceptTime' | 'amount' | 'entryId' | 'poolEntryId' | 'poolId' | 'positionId' | 'status' | 'userId'


/** columns and relationships of "event" */
export interface event {
    /** An array relationship */
    bets: bet[]
    betsCloseTime: Scalars['timestamptz']
    closedDynamics?: Scalars['numeric']
    closedOracleTime?: Scalars['timestamptz']
    closedRate?: Scalars['numeric']
    createdTime: Scalars['timestamptz']
    /** An object relationship */
    creator: user
    creatorId: Scalars['String']
    /** An object relationship */
    currencyPair: currencyPair
    currencyPairId: Scalars['Int']
    /** An array relationship */
    deposits: deposit[]
    id: Scalars['bigint']
    liquidityPercent: Scalars['numeric']
    measureOracleStartTime?: Scalars['timestamptz']
    measurePeriod: Scalars['bigint']
    poolAboveEq: Scalars['numeric']
    poolBelow: Scalars['numeric']
    /** An array relationship */
    poolEventData: pool_event[]
    /** An array relationship */
    positions: position[]
    startRate?: Scalars['numeric']
    /** NEW: NEW\nSTARTED: STARTED\nFINISHED: FINISHED\nCANCELED: CANCELED */
    status: Scalars['String']
    targetDynamics: Scalars['numeric']
    totalBetsAmount: Scalars['numeric']
    totalLiquidityProvided: Scalars['numeric']
    totalLiquidityShares: Scalars['numeric']
    totalValueLocked: Scalars['numeric']
    /** ABOVE_EQ: ABOVE_EQ\nBELOW: BELOW */
    winnerBets?: Scalars['String']
    /** An array relationship */
    withdrawals: withdrawal[]
    __typename: 'event'
}


/** select columns of table "event" */
export type event_select_column = 'betsCloseTime' | 'closedDynamics' | 'closedOracleTime' | 'closedRate' | 'createdTime' | 'creatorId' | 'currencyPairId' | 'id' | 'liquidityPercent' | 'measureOracleStartTime' | 'measurePeriod' | 'poolAboveEq' | 'poolBelow' | 'startRate' | 'status' | 'targetDynamics' | 'totalBetsAmount' | 'totalLiquidityProvided' | 'totalLiquidityShares' | 'totalValueLocked' | 'winnerBets'


/** columns and relationships of "merged_candles" */
export interface merged_candles {
    close?: Scalars['numeric']
    currencyPairId?: Scalars['Int']
    high?: Scalars['numeric']
    low?: Scalars['numeric']
    open?: Scalars['numeric']
    source?: Scalars['String']
    until?: Scalars['timestamptz']
    volume?: Scalars['numeric']
    __typename: 'merged_candles'
}


/** select columns of table "merged_candles" */
export type merged_candles_select_column = 'close' | 'currencyPairId' | 'high' | 'low' | 'open' | 'source' | 'until' | 'volume'


/** column ordering options */
export type order_by = 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last'


/** columns and relationships of "pool" */
export interface pool {
    address: Scalars['String']
    /** An array relationship */
    claims: claim[]
    /** An array relationship */
    entries: entry_liquidity[]
    entryLockPeriod: Scalars['bigint']
    /** An array relationship */
    events: pool_event[]
    isDepositPaused: Scalars['Boolean']
    isDisbandAllow: Scalars['Boolean']
    name?: Scalars['String']
    /** An array relationship */
    poolLines: pool_line[]
    /** An array relationship */
    poolPositions: pool_position[]
    /** An array relationship */
    states: pool_state[]
    version?: Scalars['String']
    __typename: 'pool'
}


/** columns and relationships of "pool_event" */
export interface pool_event {
    claimed: Scalars['numeric']
    /** An array relationship */
    claims: claim[]
    /** An object relationship */
    event?: event
    eventId?: Scalars['bigint']
    id: Scalars['bigint']
    /** An object relationship */
    line: pool_line
    lineId: Scalars['String']
    /** An object relationship */
    pool: pool
    poolId: Scalars['String']
    provided: Scalars['numeric']
    result?: Scalars['numeric']
    /** An array relationship */
    states: pool_state[]
    __typename: 'pool_event'
}


/** select columns of table "pool_event" */
export type pool_event_select_column = 'claimed' | 'eventId' | 'id' | 'lineId' | 'poolId' | 'provided' | 'result'


/** columns and relationships of "pool_line" */
export interface pool_line {
    /** An object relationship */
    currencyPair: currencyPair
    currencyPairId: Scalars['Int']
    /** An array relationship */
    events: pool_event[]
    isPaused: Scalars['Boolean']
    lastBetsCloseTime: Scalars['timestamptz']
    lineId: Scalars['Int']
    liquidityPercent: Scalars['numeric']
    maxEvents: Scalars['Int']
    measurePeriod: Scalars['bigint']
    /** An object relationship */
    pool: pool
    poolId: Scalars['String']
    poolLineId: Scalars['String']
    rateAboveEq: Scalars['numeric']
    rateBelow: Scalars['numeric']
    targetDynamics: Scalars['numeric']
    __typename: 'pool_line'
}


/** select columns of table "pool_line" */
export type pool_line_select_column = 'currencyPairId' | 'isPaused' | 'lastBetsCloseTime' | 'lineId' | 'liquidityPercent' | 'maxEvents' | 'measurePeriod' | 'poolId' | 'poolLineId' | 'rateAboveEq' | 'rateBelow' | 'targetDynamics'


/** columns and relationships of "pool_position" */
export interface pool_position {
    /** An array relationship */
    claims: claim[]
    depositedAmount: Scalars['numeric']
    /** An array relationship */
    entries: entry_liquidity[]
    entrySharePrice: Scalars['numeric']
    id: Scalars['bigint']
    lockedEstimateAmount: Scalars['numeric']
    /** An object relationship */
    pool: pool
    poolId: Scalars['String']
    realizedProfit: Scalars['numeric']
    shares: Scalars['numeric']
    /** An object relationship */
    user: user
    userId: Scalars['String']
    withdrawnAmount: Scalars['numeric']
    withdrawnShares: Scalars['numeric']
    __typename: 'pool_position'
}


/** select columns of table "pool_position" */
export type pool_position_select_column = 'depositedAmount' | 'entrySharePrice' | 'id' | 'lockedEstimateAmount' | 'poolId' | 'realizedProfit' | 'shares' | 'userId' | 'withdrawnAmount' | 'withdrawnShares'


/** select columns of table "pool" */
export type pool_select_column = 'address' | 'entryLockPeriod' | 'isDepositPaused' | 'isDisbandAllow' | 'name' | 'version'


/** columns and relationships of "pool_state" */
export interface pool_state {
    /** EVENT_CREATED: EVENT_CREATED\nEVENT_FINISHED: EVENT_FINISHED\nUSER_DEPOSITED: USER_DEPOSITED\nLIQUIDITY_APPROVED: LIQUIDITY_APPROVED\nLIQUIDITY_CANCELED: LIQUIDITY_CANCELED\nUSER_CLAIMED: USER_CLAIMED\nUSER_WITHDRAWN: USER_WITHDRAWN\nRECEIVED_XTZ: RECEIVED_XTZ\nPOOL_ORIGINATED: POOL_ORIGINATED\nACCUMULATED_DUST: ACCUMULATED_DUST\nPOOL_DISBANDED: POOL_DISBANDED\nDEPOSITS_PAUSED: DEPOSITS_PAUSED\nDEPOSITS_UNPAUSED: DEPOSITS_UNPAUSED */
    action: Scalars['String']
    activeLiquidity: Scalars['numeric']
    activeLiquidityDiff: Scalars['numeric']
    /** An object relationship */
    affectedClaim?: claim
    affectedClaimId?: Scalars['Int']
    /** An object relationship */
    affectedEntry?: entry_liquidity
    affectedEntryId?: Scalars['String']
    /** An object relationship */
    affectedEvent?: pool_event
    affectedEventId?: Scalars['bigint']
    /** An object relationship */
    affectedUser?: user
    affectedUserId?: Scalars['String']
    counter: Scalars['Int']
    entryLiquidity: Scalars['numeric']
    entryLiquidityDiff: Scalars['numeric']
    id: Scalars['bigint']
    level: Scalars['Int']
    opgHash: Scalars['String']
    /** An object relationship */
    pool: pool
    poolId: Scalars['String']
    sharePrice?: Scalars['numeric']
    timestamp: Scalars['timestamptz']
    totalLiquidity: Scalars['numeric']
    totalLiquidityDiff: Scalars['numeric']
    totalShares: Scalars['numeric']
    totalSharesDiff: Scalars['numeric']
    withdrawableLiquidity: Scalars['numeric']
    withdrawableLiquidityDiff: Scalars['numeric']
    __typename: 'pool_state'
}


/** select columns of table "pool_state" */
export type pool_state_select_column = 'action' | 'activeLiquidity' | 'activeLiquidityDiff' | 'affectedClaimId' | 'affectedEntryId' | 'affectedEventId' | 'affectedUserId' | 'counter' | 'entryLiquidity' | 'entryLiquidityDiff' | 'id' | 'level' | 'opgHash' | 'poolId' | 'sharePrice' | 'timestamp' | 'totalLiquidity' | 'totalLiquidityDiff' | 'totalShares' | 'totalSharesDiff' | 'withdrawableLiquidity' | 'withdrawableLiquidityDiff'


/** columns and relationships of "position" */
export interface position {
    /** An object relationship */
    event: event
    eventId: Scalars['bigint']
    id: Scalars['bigint']
    liquidityProvidedAboveEq: Scalars['numeric']
    liquidityProvidedBelow: Scalars['numeric']
    rewardAboveEq: Scalars['numeric']
    rewardBelow: Scalars['numeric']
    shares: Scalars['numeric']
    /** An object relationship */
    user: user
    userId: Scalars['String']
    value: Scalars['numeric']
    withdrawn: Scalars['Boolean']
    __typename: 'position'
}


/** select columns of table "position" */
export type position_select_column = 'eventId' | 'id' | 'liquidityProvidedAboveEq' | 'liquidityProvidedBelow' | 'rewardAboveEq' | 'rewardBelow' | 'shares' | 'userId' | 'value' | 'withdrawn'

export interface query_root {
    /** fetch data from the table: "bet" */
    bet: bet[]
    /** fetch data from the table: "bet" using primary key columns */
    betByPk?: bet
    /** fetch data from the table: "candle" */
    candle: candle[]
    /** fetch data from the table: "candle" using primary key columns */
    candleByPk?: candle
    /** fetch data from the table: "claim" */
    claim: claim[]
    /** fetch data from the table: "claim" using primary key columns */
    claimByPk?: claim
    /** fetch data from the table: "currencyPair" */
    currencyPair: currencyPair[]
    /** fetch data from the table: "currencyPair" using primary key columns */
    currencyPairByPk?: currencyPair
    /** fetch data from the table: "deposit" */
    deposit: deposit[]
    /** fetch data from the table: "deposit" using primary key columns */
    depositByPk?: deposit
    /** fetch data from the table: "dipdup_contract" */
    dipdupContract: dipdup_contract[]
    /** fetch data from the table: "dipdup_contract" using primary key columns */
    dipdupContractByPk?: dipdup_contract
    /** fetch data from the table: "dipdup_contract_metadata" */
    dipdupContractMetadata: dipdup_contract_metadata[]
    /** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
    dipdupContractMetadataByPk?: dipdup_contract_metadata
    /** fetch data from the table: "dipdup_head" */
    dipdupHead: dipdup_head[]
    /** fetch data from the table: "dipdup_head" using primary key columns */
    dipdupHeadByPk?: dipdup_head
    /** fetch data from the table: "dipdup_head_status" */
    dipdupHeadStatus: dipdup_head_status[]
    /** fetch data from the table: "dipdup_index" */
    dipdupIndex: dipdup_index[]
    /** fetch data from the table: "dipdup_index" using primary key columns */
    dipdupIndexByPk?: dipdup_index
    /** fetch data from the table: "dipdup_model_update" */
    dipdupModelUpdate: dipdup_model_update[]
    /** fetch data from the table: "dipdup_model_update" using primary key columns */
    dipdupModelUpdateByPk?: dipdup_model_update
    /** fetch data from the table: "dipdup_schema" */
    dipdupSchema: dipdup_schema[]
    /** fetch data from the table: "dipdup_schema" using primary key columns */
    dipdupSchemaByPk?: dipdup_schema
    /** fetch data from the table: "dipdup_token_metadata" */
    dipdupTokenMetadata: dipdup_token_metadata[]
    /** fetch data from the table: "dipdup_token_metadata" using primary key columns */
    dipdupTokenMetadataByPk?: dipdup_token_metadata
    /** fetch data from the table: "entry_liquidity" */
    entryLiquidity: entry_liquidity[]
    /** fetch data from the table: "entry_liquidity" using primary key columns */
    entryLiquidityByPk?: entry_liquidity
    /** fetch data from the table: "event" */
    event: event[]
    /** fetch data from the table: "event" using primary key columns */
    eventByPk?: event
    /** fetch data from the table: "merged_candles" */
    mergedCandles: merged_candles[]
    /** fetch data from the table: "pool" */
    pool: pool[]
    /** fetch data from the table: "pool" using primary key columns */
    poolByPk?: pool
    /** fetch data from the table: "pool_event" */
    poolEvent: pool_event[]
    /** fetch data from the table: "pool_event" using primary key columns */
    poolEventByPk?: pool_event
    /** fetch data from the table: "pool_line" */
    poolLine: pool_line[]
    /** fetch data from the table: "pool_line" using primary key columns */
    poolLineByPk?: pool_line
    /** fetch data from the table: "pool_position" */
    poolPosition: pool_position[]
    /** fetch data from the table: "pool_position" using primary key columns */
    poolPositionByPk?: pool_position
    /** fetch data from the table: "pool_state" */
    poolState: pool_state[]
    /** fetch data from the table: "pool_state" using primary key columns */
    poolStateByPk?: pool_state
    /** fetch data from the table: "position" */
    position: position[]
    /** fetch data from the table: "position" using primary key columns */
    positionByPk?: position
    /** fetch data from the table: "quotesWma" */
    quotesWma: quotesWma[]
    /** fetch data from the table: "quotesWma_15m" */
    quotesWma15m: quotesWma_15m[]
    /** fetch data from the table: "total_value_locked" */
    totalValueLocked: total_value_locked[]
    /** fetch data from the table: "user" */
    user: user[]
    /** fetch data from the table: "user" using primary key columns */
    userByPk?: user
    /** fetch data from the table: "withdrawal" */
    withdrawal: withdrawal[]
    /** fetch data from the table: "withdrawal" using primary key columns */
    withdrawalByPk?: withdrawal
    __typename: 'query_root'
}


/** columns and relationships of "quotesWma" */
export interface quotesWma {
    currencyPairId?: Scalars['Int']
    price?: Scalars['numeric']
    timestamp?: Scalars['timestamptz']
    __typename: 'quotesWma'
}


/** columns and relationships of "quotesWma_15m" */
export interface quotesWma_15m {
    currencyPairId?: Scalars['Int']
    price?: Scalars['numeric']
    timestamp?: Scalars['timestamptz']
    __typename: 'quotesWma_15m'
}


/** select columns of table "quotesWma_15m" */
export type quotesWma_15m_select_column = 'currencyPairId' | 'price' | 'timestamp'


/** select columns of table "quotesWma" */
export type quotesWma_select_column = 'currencyPairId' | 'price' | 'timestamp'

export interface subscription_root {
    /** fetch data from the table: "bet" */
    bet: bet[]
    /** fetch data from the table: "bet" using primary key columns */
    betByPk?: bet
    /** fetch data from the table in a streaming manner: "bet" */
    bet_stream: bet[]
    /** fetch data from the table: "candle" */
    candle: candle[]
    /** fetch data from the table: "candle" using primary key columns */
    candleByPk?: candle
    /** fetch data from the table in a streaming manner: "candle" */
    candle_stream: candle[]
    /** fetch data from the table: "claim" */
    claim: claim[]
    /** fetch data from the table: "claim" using primary key columns */
    claimByPk?: claim
    /** fetch data from the table in a streaming manner: "claim" */
    claim_stream: claim[]
    /** fetch data from the table: "currencyPair" */
    currencyPair: currencyPair[]
    /** fetch data from the table: "currencyPair" using primary key columns */
    currencyPairByPk?: currencyPair
    /** fetch data from the table in a streaming manner: "currencyPair" */
    currencyPair_stream: currencyPair[]
    /** fetch data from the table: "deposit" */
    deposit: deposit[]
    /** fetch data from the table: "deposit" using primary key columns */
    depositByPk?: deposit
    /** fetch data from the table in a streaming manner: "deposit" */
    deposit_stream: deposit[]
    /** fetch data from the table: "dipdup_contract" */
    dipdupContract: dipdup_contract[]
    /** fetch data from the table: "dipdup_contract" using primary key columns */
    dipdupContractByPk?: dipdup_contract
    /** fetch data from the table: "dipdup_contract_metadata" */
    dipdupContractMetadata: dipdup_contract_metadata[]
    /** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
    dipdupContractMetadataByPk?: dipdup_contract_metadata
    /** fetch data from the table: "dipdup_head" */
    dipdupHead: dipdup_head[]
    /** fetch data from the table: "dipdup_head" using primary key columns */
    dipdupHeadByPk?: dipdup_head
    /** fetch data from the table: "dipdup_head_status" */
    dipdupHeadStatus: dipdup_head_status[]
    /** fetch data from the table: "dipdup_index" */
    dipdupIndex: dipdup_index[]
    /** fetch data from the table: "dipdup_index" using primary key columns */
    dipdupIndexByPk?: dipdup_index
    /** fetch data from the table: "dipdup_model_update" */
    dipdupModelUpdate: dipdup_model_update[]
    /** fetch data from the table: "dipdup_model_update" using primary key columns */
    dipdupModelUpdateByPk?: dipdup_model_update
    /** fetch data from the table: "dipdup_schema" */
    dipdupSchema: dipdup_schema[]
    /** fetch data from the table: "dipdup_schema" using primary key columns */
    dipdupSchemaByPk?: dipdup_schema
    /** fetch data from the table: "dipdup_token_metadata" */
    dipdupTokenMetadata: dipdup_token_metadata[]
    /** fetch data from the table: "dipdup_token_metadata" using primary key columns */
    dipdupTokenMetadataByPk?: dipdup_token_metadata
    /** fetch data from the table in a streaming manner: "dipdup_contract_metadata" */
    dipdup_contract_metadata_stream: dipdup_contract_metadata[]
    /** fetch data from the table in a streaming manner: "dipdup_contract" */
    dipdup_contract_stream: dipdup_contract[]
    /** fetch data from the table in a streaming manner: "dipdup_head_status" */
    dipdup_head_status_stream: dipdup_head_status[]
    /** fetch data from the table in a streaming manner: "dipdup_head" */
    dipdup_head_stream: dipdup_head[]
    /** fetch data from the table in a streaming manner: "dipdup_index" */
    dipdup_index_stream: dipdup_index[]
    /** fetch data from the table in a streaming manner: "dipdup_model_update" */
    dipdup_model_update_stream: dipdup_model_update[]
    /** fetch data from the table in a streaming manner: "dipdup_schema" */
    dipdup_schema_stream: dipdup_schema[]
    /** fetch data from the table in a streaming manner: "dipdup_token_metadata" */
    dipdup_token_metadata_stream: dipdup_token_metadata[]
    /** fetch data from the table: "entry_liquidity" */
    entryLiquidity: entry_liquidity[]
    /** fetch data from the table: "entry_liquidity" using primary key columns */
    entryLiquidityByPk?: entry_liquidity
    /** fetch data from the table in a streaming manner: "entry_liquidity" */
    entry_liquidity_stream: entry_liquidity[]
    /** fetch data from the table: "event" */
    event: event[]
    /** fetch data from the table: "event" using primary key columns */
    eventByPk?: event
    /** fetch data from the table in a streaming manner: "event" */
    event_stream: event[]
    /** fetch data from the table: "merged_candles" */
    mergedCandles: merged_candles[]
    /** fetch data from the table in a streaming manner: "merged_candles" */
    merged_candles_stream: merged_candles[]
    /** fetch data from the table: "pool" */
    pool: pool[]
    /** fetch data from the table: "pool" using primary key columns */
    poolByPk?: pool
    /** fetch data from the table: "pool_event" */
    poolEvent: pool_event[]
    /** fetch data from the table: "pool_event" using primary key columns */
    poolEventByPk?: pool_event
    /** fetch data from the table: "pool_line" */
    poolLine: pool_line[]
    /** fetch data from the table: "pool_line" using primary key columns */
    poolLineByPk?: pool_line
    /** fetch data from the table: "pool_position" */
    poolPosition: pool_position[]
    /** fetch data from the table: "pool_position" using primary key columns */
    poolPositionByPk?: pool_position
    /** fetch data from the table: "pool_state" */
    poolState: pool_state[]
    /** fetch data from the table: "pool_state" using primary key columns */
    poolStateByPk?: pool_state
    /** fetch data from the table in a streaming manner: "pool_event" */
    pool_event_stream: pool_event[]
    /** fetch data from the table in a streaming manner: "pool_line" */
    pool_line_stream: pool_line[]
    /** fetch data from the table in a streaming manner: "pool_position" */
    pool_position_stream: pool_position[]
    /** fetch data from the table in a streaming manner: "pool_state" */
    pool_state_stream: pool_state[]
    /** fetch data from the table in a streaming manner: "pool" */
    pool_stream: pool[]
    /** fetch data from the table: "position" */
    position: position[]
    /** fetch data from the table: "position" using primary key columns */
    positionByPk?: position
    /** fetch data from the table in a streaming manner: "position" */
    position_stream: position[]
    /** fetch data from the table: "quotesWma" */
    quotesWma: quotesWma[]
    /** fetch data from the table: "quotesWma_15m" */
    quotesWma15m: quotesWma_15m[]
    /** fetch data from the table in a streaming manner: "quotesWma_15m" */
    quotesWma_15m_stream: quotesWma_15m[]
    /** fetch data from the table in a streaming manner: "quotesWma" */
    quotesWma_stream: quotesWma[]
    /** fetch data from the table: "total_value_locked" */
    totalValueLocked: total_value_locked[]
    /** fetch data from the table in a streaming manner: "total_value_locked" */
    total_value_locked_stream: total_value_locked[]
    /** fetch data from the table: "user" */
    user: user[]
    /** fetch data from the table: "user" using primary key columns */
    userByPk?: user
    /** fetch data from the table in a streaming manner: "user" */
    user_stream: user[]
    /** fetch data from the table: "withdrawal" */
    withdrawal: withdrawal[]
    /** fetch data from the table: "withdrawal" using primary key columns */
    withdrawalByPk?: withdrawal
    /** fetch data from the table in a streaming manner: "withdrawal" */
    withdrawal_stream: withdrawal[]
    __typename: 'subscription_root'
}


/** columns and relationships of "total_value_locked" */
export interface total_value_locked {
    amount?: Scalars['numeric']
    createdTime?: Scalars['timestamptz']
    cumSum?: Scalars['numeric']
    eventId?: Scalars['bigint']
    __typename: 'total_value_locked'
}


/** select columns of table "total_value_locked" */
export type total_value_locked_select_column = 'amount' | 'createdTime' | 'cumSum' | 'eventId'


/** columns and relationships of "user" */
export interface user {
    address: Scalars['String']
    /** An array relationship */
    bets: bet[]
    /** An array relationship */
    claims: claim[]
    /** An array relationship */
    deposits: deposit[]
    /** An array relationship */
    entries: entry_liquidity[]
    /** An array relationship */
    events: event[]
    /** An array relationship */
    poolPositions: pool_position[]
    /** An array relationship */
    poolStates: pool_state[]
    /** An array relationship */
    positions: position[]
    /** An array relationship */
    thirdPartyWithdrawals: withdrawal[]
    totalBetsAmount: Scalars['numeric']
    totalBetsCount: Scalars['Int']
    totalFeesCollected: Scalars['numeric']
    totalLiquidityProvided: Scalars['numeric']
    totalProviderReward: Scalars['numeric']
    totalReward: Scalars['numeric']
    totalWithdrawn: Scalars['numeric']
    /** An array relationship */
    withdrawals: withdrawal[]
    __typename: 'user'
}


/** select columns of table "user" */
export type user_select_column = 'address' | 'totalBetsAmount' | 'totalBetsCount' | 'totalFeesCollected' | 'totalLiquidityProvided' | 'totalProviderReward' | 'totalReward' | 'totalWithdrawn'


/** columns and relationships of "withdrawal" */
export interface withdrawal {
    amount: Scalars['numeric']
    createdTime: Scalars['timestamptz']
    /** An object relationship */
    event: event
    eventId: Scalars['bigint']
    /** An object relationship */
    feeCollector?: user
    feeCollectorId?: Scalars['String']
    id: Scalars['bigint']
    opgHash: Scalars['String']
    /** MANUAL: MANUAL\nTHIRD_PARTY: THIRD_PARTY */
    type: Scalars['String']
    /** An object relationship */
    user: user
    userId: Scalars['String']
    __typename: 'withdrawal'
}


/** select columns of table "withdrawal" */
export type withdrawal_select_column = 'amount' | 'createdTime' | 'eventId' | 'feeCollectorId' | 'id' | 'opgHash' | 'type' | 'userId'

export type Query = query_root
export type Subscription = subscription_root


/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface Boolean_comparison_exp {_eq?: (Scalars['Boolean'] | null),_gt?: (Scalars['Boolean'] | null),_gte?: (Scalars['Boolean'] | null),_in?: (Scalars['Boolean'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Boolean'] | null),_lte?: (Scalars['Boolean'] | null),_neq?: (Scalars['Boolean'] | null),_nin?: (Scalars['Boolean'][] | null)}


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {_eq?: (Scalars['Int'] | null),_gt?: (Scalars['Int'] | null),_gte?: (Scalars['Int'] | null),_in?: (Scalars['Int'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Int'] | null),_lte?: (Scalars['Int'] | null),_neq?: (Scalars['Int'] | null),_nin?: (Scalars['Int'][] | null)}


/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {_eq?: (Scalars['String'] | null),_gt?: (Scalars['String'] | null),_gte?: (Scalars['String'] | null),
/** does the column match the given case-insensitive pattern */
_ilike?: (Scalars['String'] | null),_in?: (Scalars['String'][] | null),
/** does the column match the given POSIX regular expression, case insensitive */
_iregex?: (Scalars['String'] | null),_is_null?: (Scalars['Boolean'] | null),
/** does the column match the given pattern */
_like?: (Scalars['String'] | null),_lt?: (Scalars['String'] | null),_lte?: (Scalars['String'] | null),_neq?: (Scalars['String'] | null),
/** does the column NOT match the given case-insensitive pattern */
_nilike?: (Scalars['String'] | null),_nin?: (Scalars['String'][] | null),
/** does the column NOT match the given POSIX regular expression, case insensitive */
_niregex?: (Scalars['String'] | null),
/** does the column NOT match the given pattern */
_nlike?: (Scalars['String'] | null),
/** does the column NOT match the given POSIX regular expression, case sensitive */
_nregex?: (Scalars['String'] | null),
/** does the column NOT match the given SQL regular expression */
_nsimilar?: (Scalars['String'] | null),
/** does the column match the given POSIX regular expression, case sensitive */
_regex?: (Scalars['String'] | null),
/** does the column match the given SQL regular expression */
_similar?: (Scalars['String'] | null)}


/** columns and relationships of "bet" */
export interface betRequest{
    amount?: boolean | number
    createdTime?: boolean | number
    /** An object relationship */
    event?: eventRequest
    eventId?: boolean | number
    id?: boolean | number
    opgHash?: boolean | number
    reward?: boolean | number
    /** ABOVE_EQ: ABOVE_EQ\nBELOW: BELOW */
    side?: boolean | number
    /** An object relationship */
    user?: userRequest
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "bet" */
export interface bet_aggregate_order_by {avg?: (bet_avg_order_by | null),count?: (order_by | null),max?: (bet_max_order_by | null),min?: (bet_min_order_by | null),stddev?: (bet_stddev_order_by | null),stddev_pop?: (bet_stddev_pop_order_by | null),stddev_samp?: (bet_stddev_samp_order_by | null),sum?: (bet_sum_order_by | null),var_pop?: (bet_var_pop_order_by | null),var_samp?: (bet_var_samp_order_by | null),variance?: (bet_variance_order_by | null)}


/** order by avg() on columns of table "bet" */
export interface bet_avg_order_by {amount?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),reward?: (order_by | null)}


/** Boolean expression to filter rows from the table "bet". All fields are combined with a logical 'AND'. */
export interface bet_bool_exp {_and?: (bet_bool_exp[] | null),_not?: (bet_bool_exp | null),_or?: (bet_bool_exp[] | null),amount?: (numeric_comparison_exp | null),createdTime?: (timestamptz_comparison_exp | null),event?: (event_bool_exp | null),eventId?: (bigint_comparison_exp | null),id?: (bigint_comparison_exp | null),opgHash?: (String_comparison_exp | null),reward?: (numeric_comparison_exp | null),side?: (String_comparison_exp | null),user?: (user_bool_exp | null),userId?: (String_comparison_exp | null)}


/** order by max() on columns of table "bet" */
export interface bet_max_order_by {amount?: (order_by | null),createdTime?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),opgHash?: (order_by | null),reward?: (order_by | null),
/** ABOVE_EQ: ABOVE_EQ\nBELOW: BELOW */
side?: (order_by | null),userId?: (order_by | null)}


/** order by min() on columns of table "bet" */
export interface bet_min_order_by {amount?: (order_by | null),createdTime?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),opgHash?: (order_by | null),reward?: (order_by | null),
/** ABOVE_EQ: ABOVE_EQ\nBELOW: BELOW */
side?: (order_by | null),userId?: (order_by | null)}


/** Ordering options when selecting data from "bet". */
export interface bet_order_by {amount?: (order_by | null),createdTime?: (order_by | null),event?: (event_order_by | null),eventId?: (order_by | null),id?: (order_by | null),opgHash?: (order_by | null),reward?: (order_by | null),side?: (order_by | null),user?: (user_order_by | null),userId?: (order_by | null)}


/** order by stddev() on columns of table "bet" */
export interface bet_stddev_order_by {amount?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),reward?: (order_by | null)}


/** order by stddev_pop() on columns of table "bet" */
export interface bet_stddev_pop_order_by {amount?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),reward?: (order_by | null)}


/** order by stddev_samp() on columns of table "bet" */
export interface bet_stddev_samp_order_by {amount?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),reward?: (order_by | null)}


/** Streaming cursor of the table "bet" */
export interface bet_stream_cursor_input {
/** Stream column input with initial value */
initial_value: bet_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface bet_stream_cursor_value_input {amount?: (Scalars['numeric'] | null),createdTime?: (Scalars['timestamptz'] | null),eventId?: (Scalars['bigint'] | null),id?: (Scalars['bigint'] | null),opgHash?: (Scalars['String'] | null),reward?: (Scalars['numeric'] | null),
/** ABOVE_EQ: ABOVE_EQ\nBELOW: BELOW */
side?: (Scalars['String'] | null),userId?: (Scalars['String'] | null)}


/** order by sum() on columns of table "bet" */
export interface bet_sum_order_by {amount?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),reward?: (order_by | null)}


/** order by var_pop() on columns of table "bet" */
export interface bet_var_pop_order_by {amount?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),reward?: (order_by | null)}


/** order by var_samp() on columns of table "bet" */
export interface bet_var_samp_order_by {amount?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),reward?: (order_by | null)}


/** order by variance() on columns of table "bet" */
export interface bet_variance_order_by {amount?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),reward?: (order_by | null)}


/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export interface bigint_comparison_exp {_eq?: (Scalars['bigint'] | null),_gt?: (Scalars['bigint'] | null),_gte?: (Scalars['bigint'] | null),_in?: (Scalars['bigint'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['bigint'] | null),_lte?: (Scalars['bigint'] | null),_neq?: (Scalars['bigint'] | null),_nin?: (Scalars['bigint'][] | null)}


/** columns and relationships of "candle" */
export interface candleRequest{
    close?: boolean | number
    /** An object relationship */
    currencyPair?: currencyPairRequest
    currencyPairId?: boolean | number
    high?: boolean | number
    id?: boolean | number
    /** ONE_MINUTE: ONE_MINUTE\nFIVE_MINUTES: FIVE_MINUTES\nFIFTEEN_MINUTES: FIFTEEN_MINUTES\nONE_HOUR: ONE_HOUR\nSIX_HOURS: SIX_HOURS\nONE_DAY: ONE_DAY */
    interval?: boolean | number
    low?: boolean | number
    open?: boolean | number
    since?: boolean | number
    /** HARBINGER: HARBINGER\nCOINBASE: COINBASE\nMERGED: MERGED */
    source?: boolean | number
    until?: boolean | number
    volume?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "candle" */
export interface candle_aggregate_order_by {avg?: (candle_avg_order_by | null),count?: (order_by | null),max?: (candle_max_order_by | null),min?: (candle_min_order_by | null),stddev?: (candle_stddev_order_by | null),stddev_pop?: (candle_stddev_pop_order_by | null),stddev_samp?: (candle_stddev_samp_order_by | null),sum?: (candle_sum_order_by | null),var_pop?: (candle_var_pop_order_by | null),var_samp?: (candle_var_samp_order_by | null),variance?: (candle_variance_order_by | null)}


/** order by avg() on columns of table "candle" */
export interface candle_avg_order_by {close?: (order_by | null),currencyPairId?: (order_by | null),high?: (order_by | null),id?: (order_by | null),low?: (order_by | null),open?: (order_by | null),volume?: (order_by | null)}


/** Boolean expression to filter rows from the table "candle". All fields are combined with a logical 'AND'. */
export interface candle_bool_exp {_and?: (candle_bool_exp[] | null),_not?: (candle_bool_exp | null),_or?: (candle_bool_exp[] | null),close?: (numeric_comparison_exp | null),currencyPair?: (currencyPair_bool_exp | null),currencyPairId?: (Int_comparison_exp | null),high?: (numeric_comparison_exp | null),id?: (bigint_comparison_exp | null),interval?: (String_comparison_exp | null),low?: (numeric_comparison_exp | null),open?: (numeric_comparison_exp | null),since?: (timestamptz_comparison_exp | null),source?: (String_comparison_exp | null),until?: (timestamptz_comparison_exp | null),volume?: (numeric_comparison_exp | null)}


/** order by max() on columns of table "candle" */
export interface candle_max_order_by {close?: (order_by | null),currencyPairId?: (order_by | null),high?: (order_by | null),id?: (order_by | null),
/** ONE_MINUTE: ONE_MINUTE\nFIVE_MINUTES: FIVE_MINUTES\nFIFTEEN_MINUTES: FIFTEEN_MINUTES\nONE_HOUR: ONE_HOUR\nSIX_HOURS: SIX_HOURS\nONE_DAY: ONE_DAY */
interval?: (order_by | null),low?: (order_by | null),open?: (order_by | null),since?: (order_by | null),
/** HARBINGER: HARBINGER\nCOINBASE: COINBASE\nMERGED: MERGED */
source?: (order_by | null),until?: (order_by | null),volume?: (order_by | null)}


/** order by min() on columns of table "candle" */
export interface candle_min_order_by {close?: (order_by | null),currencyPairId?: (order_by | null),high?: (order_by | null),id?: (order_by | null),
/** ONE_MINUTE: ONE_MINUTE\nFIVE_MINUTES: FIVE_MINUTES\nFIFTEEN_MINUTES: FIFTEEN_MINUTES\nONE_HOUR: ONE_HOUR\nSIX_HOURS: SIX_HOURS\nONE_DAY: ONE_DAY */
interval?: (order_by | null),low?: (order_by | null),open?: (order_by | null),since?: (order_by | null),
/** HARBINGER: HARBINGER\nCOINBASE: COINBASE\nMERGED: MERGED */
source?: (order_by | null),until?: (order_by | null),volume?: (order_by | null)}


/** Ordering options when selecting data from "candle". */
export interface candle_order_by {close?: (order_by | null),currencyPair?: (currencyPair_order_by | null),currencyPairId?: (order_by | null),high?: (order_by | null),id?: (order_by | null),interval?: (order_by | null),low?: (order_by | null),open?: (order_by | null),since?: (order_by | null),source?: (order_by | null),until?: (order_by | null),volume?: (order_by | null)}


/** order by stddev() on columns of table "candle" */
export interface candle_stddev_order_by {close?: (order_by | null),currencyPairId?: (order_by | null),high?: (order_by | null),id?: (order_by | null),low?: (order_by | null),open?: (order_by | null),volume?: (order_by | null)}


/** order by stddev_pop() on columns of table "candle" */
export interface candle_stddev_pop_order_by {close?: (order_by | null),currencyPairId?: (order_by | null),high?: (order_by | null),id?: (order_by | null),low?: (order_by | null),open?: (order_by | null),volume?: (order_by | null)}


/** order by stddev_samp() on columns of table "candle" */
export interface candle_stddev_samp_order_by {close?: (order_by | null),currencyPairId?: (order_by | null),high?: (order_by | null),id?: (order_by | null),low?: (order_by | null),open?: (order_by | null),volume?: (order_by | null)}


/** Streaming cursor of the table "candle" */
export interface candle_stream_cursor_input {
/** Stream column input with initial value */
initial_value: candle_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface candle_stream_cursor_value_input {close?: (Scalars['numeric'] | null),currencyPairId?: (Scalars['Int'] | null),high?: (Scalars['numeric'] | null),id?: (Scalars['bigint'] | null),
/** ONE_MINUTE: ONE_MINUTE\nFIVE_MINUTES: FIVE_MINUTES\nFIFTEEN_MINUTES: FIFTEEN_MINUTES\nONE_HOUR: ONE_HOUR\nSIX_HOURS: SIX_HOURS\nONE_DAY: ONE_DAY */
interval?: (Scalars['String'] | null),low?: (Scalars['numeric'] | null),open?: (Scalars['numeric'] | null),since?: (Scalars['timestamptz'] | null),
/** HARBINGER: HARBINGER\nCOINBASE: COINBASE\nMERGED: MERGED */
source?: (Scalars['String'] | null),until?: (Scalars['timestamptz'] | null),volume?: (Scalars['numeric'] | null)}


/** order by sum() on columns of table "candle" */
export interface candle_sum_order_by {close?: (order_by | null),currencyPairId?: (order_by | null),high?: (order_by | null),id?: (order_by | null),low?: (order_by | null),open?: (order_by | null),volume?: (order_by | null)}


/** order by var_pop() on columns of table "candle" */
export interface candle_var_pop_order_by {close?: (order_by | null),currencyPairId?: (order_by | null),high?: (order_by | null),id?: (order_by | null),low?: (order_by | null),open?: (order_by | null),volume?: (order_by | null)}


/** order by var_samp() on columns of table "candle" */
export interface candle_var_samp_order_by {close?: (order_by | null),currencyPairId?: (order_by | null),high?: (order_by | null),id?: (order_by | null),low?: (order_by | null),open?: (order_by | null),volume?: (order_by | null)}


/** order by variance() on columns of table "candle" */
export interface candle_variance_order_by {close?: (order_by | null),currencyPairId?: (order_by | null),high?: (order_by | null),id?: (order_by | null),low?: (order_by | null),open?: (order_by | null),volume?: (order_by | null)}


/** columns and relationships of "claim" */
export interface claimRequest{
    amount?: boolean | number
    /** An object relationship */
    event?: pool_eventRequest
    eventId?: boolean | number
    id?: boolean | number
    /** An object relationship */
    pool?: poolRequest
    poolId?: boolean | number
    /** An object relationship */
    position?: pool_positionRequest
    positionId?: boolean | number
    /** An array relationship */
    states?: [{
    /** distinct select on columns */
    distinct_on?: (pool_state_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (pool_state_order_by[] | null),
    /** filter the rows returned */
    where?: (pool_state_bool_exp | null)},pool_stateRequest] | pool_stateRequest
    /** An object relationship */
    user?: userRequest
    userId?: boolean | number
    withdrawn?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "claim" */
export interface claim_aggregate_order_by {avg?: (claim_avg_order_by | null),count?: (order_by | null),max?: (claim_max_order_by | null),min?: (claim_min_order_by | null),stddev?: (claim_stddev_order_by | null),stddev_pop?: (claim_stddev_pop_order_by | null),stddev_samp?: (claim_stddev_samp_order_by | null),sum?: (claim_sum_order_by | null),var_pop?: (claim_var_pop_order_by | null),var_samp?: (claim_var_samp_order_by | null),variance?: (claim_variance_order_by | null)}


/** order by avg() on columns of table "claim" */
export interface claim_avg_order_by {amount?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),positionId?: (order_by | null)}


/** Boolean expression to filter rows from the table "claim". All fields are combined with a logical 'AND'. */
export interface claim_bool_exp {_and?: (claim_bool_exp[] | null),_not?: (claim_bool_exp | null),_or?: (claim_bool_exp[] | null),amount?: (numeric_comparison_exp | null),event?: (pool_event_bool_exp | null),eventId?: (bigint_comparison_exp | null),id?: (Int_comparison_exp | null),pool?: (pool_bool_exp | null),poolId?: (String_comparison_exp | null),position?: (pool_position_bool_exp | null),positionId?: (bigint_comparison_exp | null),states?: (pool_state_bool_exp | null),user?: (user_bool_exp | null),userId?: (String_comparison_exp | null),withdrawn?: (Boolean_comparison_exp | null)}


/** order by max() on columns of table "claim" */
export interface claim_max_order_by {amount?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),poolId?: (order_by | null),positionId?: (order_by | null),userId?: (order_by | null)}


/** order by min() on columns of table "claim" */
export interface claim_min_order_by {amount?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),poolId?: (order_by | null),positionId?: (order_by | null),userId?: (order_by | null)}


/** Ordering options when selecting data from "claim". */
export interface claim_order_by {amount?: (order_by | null),event?: (pool_event_order_by | null),eventId?: (order_by | null),id?: (order_by | null),pool?: (pool_order_by | null),poolId?: (order_by | null),position?: (pool_position_order_by | null),positionId?: (order_by | null),states_aggregate?: (pool_state_aggregate_order_by | null),user?: (user_order_by | null),userId?: (order_by | null),withdrawn?: (order_by | null)}


/** order by stddev() on columns of table "claim" */
export interface claim_stddev_order_by {amount?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),positionId?: (order_by | null)}


/** order by stddev_pop() on columns of table "claim" */
export interface claim_stddev_pop_order_by {amount?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),positionId?: (order_by | null)}


/** order by stddev_samp() on columns of table "claim" */
export interface claim_stddev_samp_order_by {amount?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),positionId?: (order_by | null)}


/** Streaming cursor of the table "claim" */
export interface claim_stream_cursor_input {
/** Stream column input with initial value */
initial_value: claim_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface claim_stream_cursor_value_input {amount?: (Scalars['numeric'] | null),eventId?: (Scalars['bigint'] | null),id?: (Scalars['Int'] | null),poolId?: (Scalars['String'] | null),positionId?: (Scalars['bigint'] | null),userId?: (Scalars['String'] | null),withdrawn?: (Scalars['Boolean'] | null)}


/** order by sum() on columns of table "claim" */
export interface claim_sum_order_by {amount?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),positionId?: (order_by | null)}


/** order by var_pop() on columns of table "claim" */
export interface claim_var_pop_order_by {amount?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),positionId?: (order_by | null)}


/** order by var_samp() on columns of table "claim" */
export interface claim_var_samp_order_by {amount?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),positionId?: (order_by | null)}


/** order by variance() on columns of table "claim" */
export interface claim_variance_order_by {amount?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),positionId?: (order_by | null)}


/** columns and relationships of "currencyPair" */
export interface currencyPairRequest{
    /** An array relationship */
    candles?: [{
    /** distinct select on columns */
    distinct_on?: (candle_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (candle_order_by[] | null),
    /** filter the rows returned */
    where?: (candle_bool_exp | null)},candleRequest] | candleRequest
    /** An array relationship */
    events?: [{
    /** distinct select on columns */
    distinct_on?: (event_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (event_order_by[] | null),
    /** filter the rows returned */
    where?: (event_bool_exp | null)},eventRequest] | eventRequest
    id?: boolean | number
    /** An array relationship */
    poolLines?: [{
    /** distinct select on columns */
    distinct_on?: (pool_line_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (pool_line_order_by[] | null),
    /** filter the rows returned */
    where?: (pool_line_bool_exp | null)},pool_lineRequest] | pool_lineRequest
    symbol?: boolean | number
    totalEvents?: boolean | number
    totalValueLocked?: boolean | number
    totalVolume?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "currencyPair". All fields are combined with a logical 'AND'. */
export interface currencyPair_bool_exp {_and?: (currencyPair_bool_exp[] | null),_not?: (currencyPair_bool_exp | null),_or?: (currencyPair_bool_exp[] | null),candles?: (candle_bool_exp | null),events?: (event_bool_exp | null),id?: (Int_comparison_exp | null),poolLines?: (pool_line_bool_exp | null),symbol?: (String_comparison_exp | null),totalEvents?: (Int_comparison_exp | null),totalValueLocked?: (numeric_comparison_exp | null),totalVolume?: (numeric_comparison_exp | null)}


/** Ordering options when selecting data from "currencyPair". */
export interface currencyPair_order_by {candles_aggregate?: (candle_aggregate_order_by | null),events_aggregate?: (event_aggregate_order_by | null),id?: (order_by | null),poolLines_aggregate?: (pool_line_aggregate_order_by | null),symbol?: (order_by | null),totalEvents?: (order_by | null),totalValueLocked?: (order_by | null),totalVolume?: (order_by | null)}


/** Streaming cursor of the table "currencyPair" */
export interface currencyPair_stream_cursor_input {
/** Stream column input with initial value */
initial_value: currencyPair_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface currencyPair_stream_cursor_value_input {id?: (Scalars['Int'] | null),symbol?: (Scalars['String'] | null),totalEvents?: (Scalars['Int'] | null),totalValueLocked?: (Scalars['numeric'] | null),totalVolume?: (Scalars['numeric'] | null)}


/** columns and relationships of "deposit" */
export interface depositRequest{
    amountAboveEq?: boolean | number
    amountBelow?: boolean | number
    createdTime?: boolean | number
    /** An object relationship */
    event?: eventRequest
    eventId?: boolean | number
    id?: boolean | number
    opgHash?: boolean | number
    shares?: boolean | number
    /** An object relationship */
    user?: userRequest
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "deposit" */
export interface deposit_aggregate_order_by {avg?: (deposit_avg_order_by | null),count?: (order_by | null),max?: (deposit_max_order_by | null),min?: (deposit_min_order_by | null),stddev?: (deposit_stddev_order_by | null),stddev_pop?: (deposit_stddev_pop_order_by | null),stddev_samp?: (deposit_stddev_samp_order_by | null),sum?: (deposit_sum_order_by | null),var_pop?: (deposit_var_pop_order_by | null),var_samp?: (deposit_var_samp_order_by | null),variance?: (deposit_variance_order_by | null)}


/** order by avg() on columns of table "deposit" */
export interface deposit_avg_order_by {amountAboveEq?: (order_by | null),amountBelow?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),shares?: (order_by | null)}


/** Boolean expression to filter rows from the table "deposit". All fields are combined with a logical 'AND'. */
export interface deposit_bool_exp {_and?: (deposit_bool_exp[] | null),_not?: (deposit_bool_exp | null),_or?: (deposit_bool_exp[] | null),amountAboveEq?: (numeric_comparison_exp | null),amountBelow?: (numeric_comparison_exp | null),createdTime?: (timestamptz_comparison_exp | null),event?: (event_bool_exp | null),eventId?: (bigint_comparison_exp | null),id?: (bigint_comparison_exp | null),opgHash?: (String_comparison_exp | null),shares?: (numeric_comparison_exp | null),user?: (user_bool_exp | null),userId?: (String_comparison_exp | null)}


/** order by max() on columns of table "deposit" */
export interface deposit_max_order_by {amountAboveEq?: (order_by | null),amountBelow?: (order_by | null),createdTime?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),opgHash?: (order_by | null),shares?: (order_by | null),userId?: (order_by | null)}


/** order by min() on columns of table "deposit" */
export interface deposit_min_order_by {amountAboveEq?: (order_by | null),amountBelow?: (order_by | null),createdTime?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),opgHash?: (order_by | null),shares?: (order_by | null),userId?: (order_by | null)}


/** Ordering options when selecting data from "deposit". */
export interface deposit_order_by {amountAboveEq?: (order_by | null),amountBelow?: (order_by | null),createdTime?: (order_by | null),event?: (event_order_by | null),eventId?: (order_by | null),id?: (order_by | null),opgHash?: (order_by | null),shares?: (order_by | null),user?: (user_order_by | null),userId?: (order_by | null)}


/** order by stddev() on columns of table "deposit" */
export interface deposit_stddev_order_by {amountAboveEq?: (order_by | null),amountBelow?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),shares?: (order_by | null)}


/** order by stddev_pop() on columns of table "deposit" */
export interface deposit_stddev_pop_order_by {amountAboveEq?: (order_by | null),amountBelow?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),shares?: (order_by | null)}


/** order by stddev_samp() on columns of table "deposit" */
export interface deposit_stddev_samp_order_by {amountAboveEq?: (order_by | null),amountBelow?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),shares?: (order_by | null)}


/** Streaming cursor of the table "deposit" */
export interface deposit_stream_cursor_input {
/** Stream column input with initial value */
initial_value: deposit_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface deposit_stream_cursor_value_input {amountAboveEq?: (Scalars['numeric'] | null),amountBelow?: (Scalars['numeric'] | null),createdTime?: (Scalars['timestamptz'] | null),eventId?: (Scalars['bigint'] | null),id?: (Scalars['bigint'] | null),opgHash?: (Scalars['String'] | null),shares?: (Scalars['numeric'] | null),userId?: (Scalars['String'] | null)}


/** order by sum() on columns of table "deposit" */
export interface deposit_sum_order_by {amountAboveEq?: (order_by | null),amountBelow?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),shares?: (order_by | null)}


/** order by var_pop() on columns of table "deposit" */
export interface deposit_var_pop_order_by {amountAboveEq?: (order_by | null),amountBelow?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),shares?: (order_by | null)}


/** order by var_samp() on columns of table "deposit" */
export interface deposit_var_samp_order_by {amountAboveEq?: (order_by | null),amountBelow?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),shares?: (order_by | null)}


/** order by variance() on columns of table "deposit" */
export interface deposit_variance_order_by {amountAboveEq?: (order_by | null),amountBelow?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),shares?: (order_by | null)}


/** columns and relationships of "dipdup_contract" */
export interface dipdup_contractRequest{
    address?: boolean | number
    createdAt?: boolean | number
    name?: boolean | number
    typename?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_contract". All fields are combined with a logical 'AND'. */
export interface dipdup_contract_bool_exp {_and?: (dipdup_contract_bool_exp[] | null),_not?: (dipdup_contract_bool_exp | null),_or?: (dipdup_contract_bool_exp[] | null),address?: (String_comparison_exp | null),createdAt?: (timestamptz_comparison_exp | null),name?: (String_comparison_exp | null),typename?: (String_comparison_exp | null),updatedAt?: (timestamptz_comparison_exp | null)}


/** columns and relationships of "dipdup_contract_metadata" */
export interface dipdup_contract_metadataRequest{
    contract?: boolean | number
    createdAt?: boolean | number
    id?: boolean | number
    metadata?: [{
    /** JSON select path */
    path?: (Scalars['String'] | null)}] | boolean | number
    network?: boolean | number
    updateId?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_contract_metadata". All fields are combined with a logical 'AND'. */
export interface dipdup_contract_metadata_bool_exp {_and?: (dipdup_contract_metadata_bool_exp[] | null),_not?: (dipdup_contract_metadata_bool_exp | null),_or?: (dipdup_contract_metadata_bool_exp[] | null),contract?: (String_comparison_exp | null),createdAt?: (timestamptz_comparison_exp | null),id?: (Int_comparison_exp | null),metadata?: (jsonb_comparison_exp | null),network?: (String_comparison_exp | null),updateId?: (Int_comparison_exp | null),updatedAt?: (timestamptz_comparison_exp | null)}


/** Ordering options when selecting data from "dipdup_contract_metadata". */
export interface dipdup_contract_metadata_order_by {contract?: (order_by | null),createdAt?: (order_by | null),id?: (order_by | null),metadata?: (order_by | null),network?: (order_by | null),updateId?: (order_by | null),updatedAt?: (order_by | null)}


/** Streaming cursor of the table "dipdup_contract_metadata" */
export interface dipdup_contract_metadata_stream_cursor_input {
/** Stream column input with initial value */
initial_value: dipdup_contract_metadata_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface dipdup_contract_metadata_stream_cursor_value_input {contract?: (Scalars['String'] | null),createdAt?: (Scalars['timestamptz'] | null),id?: (Scalars['Int'] | null),metadata?: (Scalars['jsonb'] | null),network?: (Scalars['String'] | null),updateId?: (Scalars['Int'] | null),updatedAt?: (Scalars['timestamptz'] | null)}


/** Ordering options when selecting data from "dipdup_contract". */
export interface dipdup_contract_order_by {address?: (order_by | null),createdAt?: (order_by | null),name?: (order_by | null),typename?: (order_by | null),updatedAt?: (order_by | null)}


/** Streaming cursor of the table "dipdup_contract" */
export interface dipdup_contract_stream_cursor_input {
/** Stream column input with initial value */
initial_value: dipdup_contract_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface dipdup_contract_stream_cursor_value_input {address?: (Scalars['String'] | null),createdAt?: (Scalars['timestamptz'] | null),name?: (Scalars['String'] | null),typename?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null)}


/** columns and relationships of "dipdup_head" */
export interface dipdup_headRequest{
    createdAt?: boolean | number
    hash?: boolean | number
    level?: boolean | number
    name?: boolean | number
    timestamp?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_head". All fields are combined with a logical 'AND'. */
export interface dipdup_head_bool_exp {_and?: (dipdup_head_bool_exp[] | null),_not?: (dipdup_head_bool_exp | null),_or?: (dipdup_head_bool_exp[] | null),createdAt?: (timestamptz_comparison_exp | null),hash?: (String_comparison_exp | null),level?: (Int_comparison_exp | null),name?: (String_comparison_exp | null),timestamp?: (timestamptz_comparison_exp | null),updatedAt?: (timestamptz_comparison_exp | null)}


/** Ordering options when selecting data from "dipdup_head". */
export interface dipdup_head_order_by {createdAt?: (order_by | null),hash?: (order_by | null),level?: (order_by | null),name?: (order_by | null),timestamp?: (order_by | null),updatedAt?: (order_by | null)}


/** columns and relationships of "dipdup_head_status" */
export interface dipdup_head_statusRequest{
    name?: boolean | number
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_head_status". All fields are combined with a logical 'AND'. */
export interface dipdup_head_status_bool_exp {_and?: (dipdup_head_status_bool_exp[] | null),_not?: (dipdup_head_status_bool_exp | null),_or?: (dipdup_head_status_bool_exp[] | null),name?: (String_comparison_exp | null),status?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "dipdup_head_status". */
export interface dipdup_head_status_order_by {name?: (order_by | null),status?: (order_by | null)}


/** Streaming cursor of the table "dipdup_head_status" */
export interface dipdup_head_status_stream_cursor_input {
/** Stream column input with initial value */
initial_value: dipdup_head_status_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface dipdup_head_status_stream_cursor_value_input {name?: (Scalars['String'] | null),status?: (Scalars['String'] | null)}


/** Streaming cursor of the table "dipdup_head" */
export interface dipdup_head_stream_cursor_input {
/** Stream column input with initial value */
initial_value: dipdup_head_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface dipdup_head_stream_cursor_value_input {createdAt?: (Scalars['timestamptz'] | null),hash?: (Scalars['String'] | null),level?: (Scalars['Int'] | null),name?: (Scalars['String'] | null),timestamp?: (Scalars['timestamptz'] | null),updatedAt?: (Scalars['timestamptz'] | null)}


/** columns and relationships of "dipdup_index" */
export interface dipdup_indexRequest{
    configHash?: boolean | number
    createdAt?: boolean | number
    level?: boolean | number
    name?: boolean | number
    /** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
    status?: boolean | number
    template?: boolean | number
    templateValues?: [{
    /** JSON select path */
    path?: (Scalars['String'] | null)}] | boolean | number
    /** operation: operation\nbig_map: big_map\nhead: head\ntoken_transfer: token_transfer\nevent: event */
    type?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_index". All fields are combined with a logical 'AND'. */
export interface dipdup_index_bool_exp {_and?: (dipdup_index_bool_exp[] | null),_not?: (dipdup_index_bool_exp | null),_or?: (dipdup_index_bool_exp[] | null),configHash?: (String_comparison_exp | null),createdAt?: (timestamptz_comparison_exp | null),level?: (Int_comparison_exp | null),name?: (String_comparison_exp | null),status?: (String_comparison_exp | null),template?: (String_comparison_exp | null),templateValues?: (jsonb_comparison_exp | null),type?: (String_comparison_exp | null),updatedAt?: (timestamptz_comparison_exp | null)}


/** Ordering options when selecting data from "dipdup_index". */
export interface dipdup_index_order_by {configHash?: (order_by | null),createdAt?: (order_by | null),level?: (order_by | null),name?: (order_by | null),status?: (order_by | null),template?: (order_by | null),templateValues?: (order_by | null),type?: (order_by | null),updatedAt?: (order_by | null)}


/** Streaming cursor of the table "dipdup_index" */
export interface dipdup_index_stream_cursor_input {
/** Stream column input with initial value */
initial_value: dipdup_index_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface dipdup_index_stream_cursor_value_input {configHash?: (Scalars['String'] | null),createdAt?: (Scalars['timestamptz'] | null),level?: (Scalars['Int'] | null),name?: (Scalars['String'] | null),
/** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
status?: (Scalars['String'] | null),template?: (Scalars['String'] | null),templateValues?: (Scalars['jsonb'] | null),
/** operation: operation\nbig_map: big_map\nhead: head\ntoken_transfer: token_transfer\nevent: event */
type?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null)}


/** Model update created within versioned transactions */
export interface dipdup_model_updateRequest{
    /** INSERT: INSERT\nUPDATE: UPDATE\nDELETE: DELETE */
    action?: boolean | number
    createdAt?: boolean | number
    data?: [{
    /** JSON select path */
    path?: (Scalars['String'] | null)}] | boolean | number
    id?: boolean | number
    index?: boolean | number
    level?: boolean | number
    modelName?: boolean | number
    modelPk?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_model_update". All fields are combined with a logical 'AND'. */
export interface dipdup_model_update_bool_exp {_and?: (dipdup_model_update_bool_exp[] | null),_not?: (dipdup_model_update_bool_exp | null),_or?: (dipdup_model_update_bool_exp[] | null),action?: (String_comparison_exp | null),createdAt?: (timestamptz_comparison_exp | null),data?: (jsonb_comparison_exp | null),id?: (Int_comparison_exp | null),index?: (String_comparison_exp | null),level?: (Int_comparison_exp | null),modelName?: (String_comparison_exp | null),modelPk?: (String_comparison_exp | null),updatedAt?: (timestamptz_comparison_exp | null)}


/** Ordering options when selecting data from "dipdup_model_update". */
export interface dipdup_model_update_order_by {action?: (order_by | null),createdAt?: (order_by | null),data?: (order_by | null),id?: (order_by | null),index?: (order_by | null),level?: (order_by | null),modelName?: (order_by | null),modelPk?: (order_by | null),updatedAt?: (order_by | null)}


/** Streaming cursor of the table "dipdup_model_update" */
export interface dipdup_model_update_stream_cursor_input {
/** Stream column input with initial value */
initial_value: dipdup_model_update_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface dipdup_model_update_stream_cursor_value_input {
/** INSERT: INSERT\nUPDATE: UPDATE\nDELETE: DELETE */
action?: (Scalars['String'] | null),createdAt?: (Scalars['timestamptz'] | null),data?: (Scalars['jsonb'] | null),id?: (Scalars['Int'] | null),index?: (Scalars['String'] | null),level?: (Scalars['Int'] | null),modelName?: (Scalars['String'] | null),modelPk?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null)}


/** columns and relationships of "dipdup_schema" */
export interface dipdup_schemaRequest{
    createdAt?: boolean | number
    hash?: boolean | number
    name?: boolean | number
    /** manual: manual\nmigration: migration\nrollback: rollback\nconfig_modified: config_modified\nschema_modified: schema_modified */
    reindex?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_schema". All fields are combined with a logical 'AND'. */
export interface dipdup_schema_bool_exp {_and?: (dipdup_schema_bool_exp[] | null),_not?: (dipdup_schema_bool_exp | null),_or?: (dipdup_schema_bool_exp[] | null),createdAt?: (timestamptz_comparison_exp | null),hash?: (String_comparison_exp | null),name?: (String_comparison_exp | null),reindex?: (String_comparison_exp | null),updatedAt?: (timestamptz_comparison_exp | null)}


/** Ordering options when selecting data from "dipdup_schema". */
export interface dipdup_schema_order_by {createdAt?: (order_by | null),hash?: (order_by | null),name?: (order_by | null),reindex?: (order_by | null),updatedAt?: (order_by | null)}


/** Streaming cursor of the table "dipdup_schema" */
export interface dipdup_schema_stream_cursor_input {
/** Stream column input with initial value */
initial_value: dipdup_schema_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface dipdup_schema_stream_cursor_value_input {createdAt?: (Scalars['timestamptz'] | null),hash?: (Scalars['String'] | null),name?: (Scalars['String'] | null),
/** manual: manual\nmigration: migration\nrollback: rollback\nconfig_modified: config_modified\nschema_modified: schema_modified */
reindex?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null)}


/** columns and relationships of "dipdup_token_metadata" */
export interface dipdup_token_metadataRequest{
    contract?: boolean | number
    createdAt?: boolean | number
    id?: boolean | number
    metadata?: [{
    /** JSON select path */
    path?: (Scalars['String'] | null)}] | boolean | number
    network?: boolean | number
    tokenId?: boolean | number
    updateId?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_token_metadata". All fields are combined with a logical 'AND'. */
export interface dipdup_token_metadata_bool_exp {_and?: (dipdup_token_metadata_bool_exp[] | null),_not?: (dipdup_token_metadata_bool_exp | null),_or?: (dipdup_token_metadata_bool_exp[] | null),contract?: (String_comparison_exp | null),createdAt?: (timestamptz_comparison_exp | null),id?: (Int_comparison_exp | null),metadata?: (jsonb_comparison_exp | null),network?: (String_comparison_exp | null),tokenId?: (String_comparison_exp | null),updateId?: (Int_comparison_exp | null),updatedAt?: (timestamptz_comparison_exp | null)}


/** Ordering options when selecting data from "dipdup_token_metadata". */
export interface dipdup_token_metadata_order_by {contract?: (order_by | null),createdAt?: (order_by | null),id?: (order_by | null),metadata?: (order_by | null),network?: (order_by | null),tokenId?: (order_by | null),updateId?: (order_by | null),updatedAt?: (order_by | null)}


/** Streaming cursor of the table "dipdup_token_metadata" */
export interface dipdup_token_metadata_stream_cursor_input {
/** Stream column input with initial value */
initial_value: dipdup_token_metadata_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface dipdup_token_metadata_stream_cursor_value_input {contract?: (Scalars['String'] | null),createdAt?: (Scalars['timestamptz'] | null),id?: (Scalars['Int'] | null),metadata?: (Scalars['jsonb'] | null),network?: (Scalars['String'] | null),tokenId?: (Scalars['String'] | null),updateId?: (Scalars['Int'] | null),updatedAt?: (Scalars['timestamptz'] | null)}


/** columns and relationships of "entry_liquidity" */
export interface entry_liquidityRequest{
    acceptTime?: boolean | number
    amount?: boolean | number
    entryId?: boolean | number
    /** An object relationship */
    pool?: poolRequest
    poolEntryId?: boolean | number
    poolId?: boolean | number
    /** An object relationship */
    position?: pool_positionRequest
    positionId?: boolean | number
    /** An array relationship */
    states?: [{
    /** distinct select on columns */
    distinct_on?: (pool_state_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (pool_state_order_by[] | null),
    /** filter the rows returned */
    where?: (pool_state_bool_exp | null)},pool_stateRequest] | pool_stateRequest
    /** PENDING: PENDING\nAPPROVED: APPROVED\nCANCELED: CANCELED */
    status?: boolean | number
    /** An object relationship */
    user?: userRequest
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "entry_liquidity" */
export interface entry_liquidity_aggregate_order_by {avg?: (entry_liquidity_avg_order_by | null),count?: (order_by | null),max?: (entry_liquidity_max_order_by | null),min?: (entry_liquidity_min_order_by | null),stddev?: (entry_liquidity_stddev_order_by | null),stddev_pop?: (entry_liquidity_stddev_pop_order_by | null),stddev_samp?: (entry_liquidity_stddev_samp_order_by | null),sum?: (entry_liquidity_sum_order_by | null),var_pop?: (entry_liquidity_var_pop_order_by | null),var_samp?: (entry_liquidity_var_samp_order_by | null),variance?: (entry_liquidity_variance_order_by | null)}


/** order by avg() on columns of table "entry_liquidity" */
export interface entry_liquidity_avg_order_by {amount?: (order_by | null),entryId?: (order_by | null),positionId?: (order_by | null)}


/** Boolean expression to filter rows from the table "entry_liquidity". All fields are combined with a logical 'AND'. */
export interface entry_liquidity_bool_exp {_and?: (entry_liquidity_bool_exp[] | null),_not?: (entry_liquidity_bool_exp | null),_or?: (entry_liquidity_bool_exp[] | null),acceptTime?: (timestamptz_comparison_exp | null),amount?: (numeric_comparison_exp | null),entryId?: (Int_comparison_exp | null),pool?: (pool_bool_exp | null),poolEntryId?: (String_comparison_exp | null),poolId?: (String_comparison_exp | null),position?: (pool_position_bool_exp | null),positionId?: (bigint_comparison_exp | null),states?: (pool_state_bool_exp | null),status?: (String_comparison_exp | null),user?: (user_bool_exp | null),userId?: (String_comparison_exp | null)}


/** order by max() on columns of table "entry_liquidity" */
export interface entry_liquidity_max_order_by {acceptTime?: (order_by | null),amount?: (order_by | null),entryId?: (order_by | null),poolEntryId?: (order_by | null),poolId?: (order_by | null),positionId?: (order_by | null),
/** PENDING: PENDING\nAPPROVED: APPROVED\nCANCELED: CANCELED */
status?: (order_by | null),userId?: (order_by | null)}


/** order by min() on columns of table "entry_liquidity" */
export interface entry_liquidity_min_order_by {acceptTime?: (order_by | null),amount?: (order_by | null),entryId?: (order_by | null),poolEntryId?: (order_by | null),poolId?: (order_by | null),positionId?: (order_by | null),
/** PENDING: PENDING\nAPPROVED: APPROVED\nCANCELED: CANCELED */
status?: (order_by | null),userId?: (order_by | null)}


/** Ordering options when selecting data from "entry_liquidity". */
export interface entry_liquidity_order_by {acceptTime?: (order_by | null),amount?: (order_by | null),entryId?: (order_by | null),pool?: (pool_order_by | null),poolEntryId?: (order_by | null),poolId?: (order_by | null),position?: (pool_position_order_by | null),positionId?: (order_by | null),states_aggregate?: (pool_state_aggregate_order_by | null),status?: (order_by | null),user?: (user_order_by | null),userId?: (order_by | null)}


/** order by stddev() on columns of table "entry_liquidity" */
export interface entry_liquidity_stddev_order_by {amount?: (order_by | null),entryId?: (order_by | null),positionId?: (order_by | null)}


/** order by stddev_pop() on columns of table "entry_liquidity" */
export interface entry_liquidity_stddev_pop_order_by {amount?: (order_by | null),entryId?: (order_by | null),positionId?: (order_by | null)}


/** order by stddev_samp() on columns of table "entry_liquidity" */
export interface entry_liquidity_stddev_samp_order_by {amount?: (order_by | null),entryId?: (order_by | null),positionId?: (order_by | null)}


/** Streaming cursor of the table "entry_liquidity" */
export interface entry_liquidity_stream_cursor_input {
/** Stream column input with initial value */
initial_value: entry_liquidity_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface entry_liquidity_stream_cursor_value_input {acceptTime?: (Scalars['timestamptz'] | null),amount?: (Scalars['numeric'] | null),entryId?: (Scalars['Int'] | null),poolEntryId?: (Scalars['String'] | null),poolId?: (Scalars['String'] | null),positionId?: (Scalars['bigint'] | null),
/** PENDING: PENDING\nAPPROVED: APPROVED\nCANCELED: CANCELED */
status?: (Scalars['String'] | null),userId?: (Scalars['String'] | null)}


/** order by sum() on columns of table "entry_liquidity" */
export interface entry_liquidity_sum_order_by {amount?: (order_by | null),entryId?: (order_by | null),positionId?: (order_by | null)}


/** order by var_pop() on columns of table "entry_liquidity" */
export interface entry_liquidity_var_pop_order_by {amount?: (order_by | null),entryId?: (order_by | null),positionId?: (order_by | null)}


/** order by var_samp() on columns of table "entry_liquidity" */
export interface entry_liquidity_var_samp_order_by {amount?: (order_by | null),entryId?: (order_by | null),positionId?: (order_by | null)}


/** order by variance() on columns of table "entry_liquidity" */
export interface entry_liquidity_variance_order_by {amount?: (order_by | null),entryId?: (order_by | null),positionId?: (order_by | null)}


/** columns and relationships of "event" */
export interface eventRequest{
    /** An array relationship */
    bets?: [{
    /** distinct select on columns */
    distinct_on?: (bet_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (bet_order_by[] | null),
    /** filter the rows returned */
    where?: (bet_bool_exp | null)},betRequest] | betRequest
    betsCloseTime?: boolean | number
    closedDynamics?: boolean | number
    closedOracleTime?: boolean | number
    closedRate?: boolean | number
    createdTime?: boolean | number
    /** An object relationship */
    creator?: userRequest
    creatorId?: boolean | number
    /** An object relationship */
    currencyPair?: currencyPairRequest
    currencyPairId?: boolean | number
    /** An array relationship */
    deposits?: [{
    /** distinct select on columns */
    distinct_on?: (deposit_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (deposit_order_by[] | null),
    /** filter the rows returned */
    where?: (deposit_bool_exp | null)},depositRequest] | depositRequest
    id?: boolean | number
    liquidityPercent?: boolean | number
    measureOracleStartTime?: boolean | number
    measurePeriod?: boolean | number
    poolAboveEq?: boolean | number
    poolBelow?: boolean | number
    /** An array relationship */
    poolEventData?: [{
    /** distinct select on columns */
    distinct_on?: (pool_event_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (pool_event_order_by[] | null),
    /** filter the rows returned */
    where?: (pool_event_bool_exp | null)},pool_eventRequest] | pool_eventRequest
    /** An array relationship */
    positions?: [{
    /** distinct select on columns */
    distinct_on?: (position_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (position_order_by[] | null),
    /** filter the rows returned */
    where?: (position_bool_exp | null)},positionRequest] | positionRequest
    startRate?: boolean | number
    /** NEW: NEW\nSTARTED: STARTED\nFINISHED: FINISHED\nCANCELED: CANCELED */
    status?: boolean | number
    targetDynamics?: boolean | number
    totalBetsAmount?: boolean | number
    totalLiquidityProvided?: boolean | number
    totalLiquidityShares?: boolean | number
    totalValueLocked?: boolean | number
    /** ABOVE_EQ: ABOVE_EQ\nBELOW: BELOW */
    winnerBets?: boolean | number
    /** An array relationship */
    withdrawals?: [{
    /** distinct select on columns */
    distinct_on?: (withdrawal_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (withdrawal_order_by[] | null),
    /** filter the rows returned */
    where?: (withdrawal_bool_exp | null)},withdrawalRequest] | withdrawalRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "event" */
export interface event_aggregate_order_by {avg?: (event_avg_order_by | null),count?: (order_by | null),max?: (event_max_order_by | null),min?: (event_min_order_by | null),stddev?: (event_stddev_order_by | null),stddev_pop?: (event_stddev_pop_order_by | null),stddev_samp?: (event_stddev_samp_order_by | null),sum?: (event_sum_order_by | null),var_pop?: (event_var_pop_order_by | null),var_samp?: (event_var_samp_order_by | null),variance?: (event_variance_order_by | null)}


/** order by avg() on columns of table "event" */
export interface event_avg_order_by {closedDynamics?: (order_by | null),closedRate?: (order_by | null),currencyPairId?: (order_by | null),id?: (order_by | null),liquidityPercent?: (order_by | null),measurePeriod?: (order_by | null),poolAboveEq?: (order_by | null),poolBelow?: (order_by | null),startRate?: (order_by | null),targetDynamics?: (order_by | null),totalBetsAmount?: (order_by | null),totalLiquidityProvided?: (order_by | null),totalLiquidityShares?: (order_by | null),totalValueLocked?: (order_by | null)}


/** Boolean expression to filter rows from the table "event". All fields are combined with a logical 'AND'. */
export interface event_bool_exp {_and?: (event_bool_exp[] | null),_not?: (event_bool_exp | null),_or?: (event_bool_exp[] | null),bets?: (bet_bool_exp | null),betsCloseTime?: (timestamptz_comparison_exp | null),closedDynamics?: (numeric_comparison_exp | null),closedOracleTime?: (timestamptz_comparison_exp | null),closedRate?: (numeric_comparison_exp | null),createdTime?: (timestamptz_comparison_exp | null),creator?: (user_bool_exp | null),creatorId?: (String_comparison_exp | null),currencyPair?: (currencyPair_bool_exp | null),currencyPairId?: (Int_comparison_exp | null),deposits?: (deposit_bool_exp | null),id?: (bigint_comparison_exp | null),liquidityPercent?: (numeric_comparison_exp | null),measureOracleStartTime?: (timestamptz_comparison_exp | null),measurePeriod?: (bigint_comparison_exp | null),poolAboveEq?: (numeric_comparison_exp | null),poolBelow?: (numeric_comparison_exp | null),poolEventData?: (pool_event_bool_exp | null),positions?: (position_bool_exp | null),startRate?: (numeric_comparison_exp | null),status?: (String_comparison_exp | null),targetDynamics?: (numeric_comparison_exp | null),totalBetsAmount?: (numeric_comparison_exp | null),totalLiquidityProvided?: (numeric_comparison_exp | null),totalLiquidityShares?: (numeric_comparison_exp | null),totalValueLocked?: (numeric_comparison_exp | null),winnerBets?: (String_comparison_exp | null),withdrawals?: (withdrawal_bool_exp | null)}


/** order by max() on columns of table "event" */
export interface event_max_order_by {betsCloseTime?: (order_by | null),closedDynamics?: (order_by | null),closedOracleTime?: (order_by | null),closedRate?: (order_by | null),createdTime?: (order_by | null),creatorId?: (order_by | null),currencyPairId?: (order_by | null),id?: (order_by | null),liquidityPercent?: (order_by | null),measureOracleStartTime?: (order_by | null),measurePeriod?: (order_by | null),poolAboveEq?: (order_by | null),poolBelow?: (order_by | null),startRate?: (order_by | null),
/** NEW: NEW\nSTARTED: STARTED\nFINISHED: FINISHED\nCANCELED: CANCELED */
status?: (order_by | null),targetDynamics?: (order_by | null),totalBetsAmount?: (order_by | null),totalLiquidityProvided?: (order_by | null),totalLiquidityShares?: (order_by | null),totalValueLocked?: (order_by | null),
/** ABOVE_EQ: ABOVE_EQ\nBELOW: BELOW */
winnerBets?: (order_by | null)}


/** order by min() on columns of table "event" */
export interface event_min_order_by {betsCloseTime?: (order_by | null),closedDynamics?: (order_by | null),closedOracleTime?: (order_by | null),closedRate?: (order_by | null),createdTime?: (order_by | null),creatorId?: (order_by | null),currencyPairId?: (order_by | null),id?: (order_by | null),liquidityPercent?: (order_by | null),measureOracleStartTime?: (order_by | null),measurePeriod?: (order_by | null),poolAboveEq?: (order_by | null),poolBelow?: (order_by | null),startRate?: (order_by | null),
/** NEW: NEW\nSTARTED: STARTED\nFINISHED: FINISHED\nCANCELED: CANCELED */
status?: (order_by | null),targetDynamics?: (order_by | null),totalBetsAmount?: (order_by | null),totalLiquidityProvided?: (order_by | null),totalLiquidityShares?: (order_by | null),totalValueLocked?: (order_by | null),
/** ABOVE_EQ: ABOVE_EQ\nBELOW: BELOW */
winnerBets?: (order_by | null)}


/** Ordering options when selecting data from "event". */
export interface event_order_by {betsCloseTime?: (order_by | null),bets_aggregate?: (bet_aggregate_order_by | null),closedDynamics?: (order_by | null),closedOracleTime?: (order_by | null),closedRate?: (order_by | null),createdTime?: (order_by | null),creator?: (user_order_by | null),creatorId?: (order_by | null),currencyPair?: (currencyPair_order_by | null),currencyPairId?: (order_by | null),deposits_aggregate?: (deposit_aggregate_order_by | null),id?: (order_by | null),liquidityPercent?: (order_by | null),measureOracleStartTime?: (order_by | null),measurePeriod?: (order_by | null),poolAboveEq?: (order_by | null),poolBelow?: (order_by | null),poolEventData_aggregate?: (pool_event_aggregate_order_by | null),positions_aggregate?: (position_aggregate_order_by | null),startRate?: (order_by | null),status?: (order_by | null),targetDynamics?: (order_by | null),totalBetsAmount?: (order_by | null),totalLiquidityProvided?: (order_by | null),totalLiquidityShares?: (order_by | null),totalValueLocked?: (order_by | null),winnerBets?: (order_by | null),withdrawals_aggregate?: (withdrawal_aggregate_order_by | null)}


/** order by stddev() on columns of table "event" */
export interface event_stddev_order_by {closedDynamics?: (order_by | null),closedRate?: (order_by | null),currencyPairId?: (order_by | null),id?: (order_by | null),liquidityPercent?: (order_by | null),measurePeriod?: (order_by | null),poolAboveEq?: (order_by | null),poolBelow?: (order_by | null),startRate?: (order_by | null),targetDynamics?: (order_by | null),totalBetsAmount?: (order_by | null),totalLiquidityProvided?: (order_by | null),totalLiquidityShares?: (order_by | null),totalValueLocked?: (order_by | null)}


/** order by stddev_pop() on columns of table "event" */
export interface event_stddev_pop_order_by {closedDynamics?: (order_by | null),closedRate?: (order_by | null),currencyPairId?: (order_by | null),id?: (order_by | null),liquidityPercent?: (order_by | null),measurePeriod?: (order_by | null),poolAboveEq?: (order_by | null),poolBelow?: (order_by | null),startRate?: (order_by | null),targetDynamics?: (order_by | null),totalBetsAmount?: (order_by | null),totalLiquidityProvided?: (order_by | null),totalLiquidityShares?: (order_by | null),totalValueLocked?: (order_by | null)}


/** order by stddev_samp() on columns of table "event" */
export interface event_stddev_samp_order_by {closedDynamics?: (order_by | null),closedRate?: (order_by | null),currencyPairId?: (order_by | null),id?: (order_by | null),liquidityPercent?: (order_by | null),measurePeriod?: (order_by | null),poolAboveEq?: (order_by | null),poolBelow?: (order_by | null),startRate?: (order_by | null),targetDynamics?: (order_by | null),totalBetsAmount?: (order_by | null),totalLiquidityProvided?: (order_by | null),totalLiquidityShares?: (order_by | null),totalValueLocked?: (order_by | null)}


/** Streaming cursor of the table "event" */
export interface event_stream_cursor_input {
/** Stream column input with initial value */
initial_value: event_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface event_stream_cursor_value_input {betsCloseTime?: (Scalars['timestamptz'] | null),closedDynamics?: (Scalars['numeric'] | null),closedOracleTime?: (Scalars['timestamptz'] | null),closedRate?: (Scalars['numeric'] | null),createdTime?: (Scalars['timestamptz'] | null),creatorId?: (Scalars['String'] | null),currencyPairId?: (Scalars['Int'] | null),id?: (Scalars['bigint'] | null),liquidityPercent?: (Scalars['numeric'] | null),measureOracleStartTime?: (Scalars['timestamptz'] | null),measurePeriod?: (Scalars['bigint'] | null),poolAboveEq?: (Scalars['numeric'] | null),poolBelow?: (Scalars['numeric'] | null),startRate?: (Scalars['numeric'] | null),
/** NEW: NEW\nSTARTED: STARTED\nFINISHED: FINISHED\nCANCELED: CANCELED */
status?: (Scalars['String'] | null),targetDynamics?: (Scalars['numeric'] | null),totalBetsAmount?: (Scalars['numeric'] | null),totalLiquidityProvided?: (Scalars['numeric'] | null),totalLiquidityShares?: (Scalars['numeric'] | null),totalValueLocked?: (Scalars['numeric'] | null),
/** ABOVE_EQ: ABOVE_EQ\nBELOW: BELOW */
winnerBets?: (Scalars['String'] | null)}


/** order by sum() on columns of table "event" */
export interface event_sum_order_by {closedDynamics?: (order_by | null),closedRate?: (order_by | null),currencyPairId?: (order_by | null),id?: (order_by | null),liquidityPercent?: (order_by | null),measurePeriod?: (order_by | null),poolAboveEq?: (order_by | null),poolBelow?: (order_by | null),startRate?: (order_by | null),targetDynamics?: (order_by | null),totalBetsAmount?: (order_by | null),totalLiquidityProvided?: (order_by | null),totalLiquidityShares?: (order_by | null),totalValueLocked?: (order_by | null)}


/** order by var_pop() on columns of table "event" */
export interface event_var_pop_order_by {closedDynamics?: (order_by | null),closedRate?: (order_by | null),currencyPairId?: (order_by | null),id?: (order_by | null),liquidityPercent?: (order_by | null),measurePeriod?: (order_by | null),poolAboveEq?: (order_by | null),poolBelow?: (order_by | null),startRate?: (order_by | null),targetDynamics?: (order_by | null),totalBetsAmount?: (order_by | null),totalLiquidityProvided?: (order_by | null),totalLiquidityShares?: (order_by | null),totalValueLocked?: (order_by | null)}


/** order by var_samp() on columns of table "event" */
export interface event_var_samp_order_by {closedDynamics?: (order_by | null),closedRate?: (order_by | null),currencyPairId?: (order_by | null),id?: (order_by | null),liquidityPercent?: (order_by | null),measurePeriod?: (order_by | null),poolAboveEq?: (order_by | null),poolBelow?: (order_by | null),startRate?: (order_by | null),targetDynamics?: (order_by | null),totalBetsAmount?: (order_by | null),totalLiquidityProvided?: (order_by | null),totalLiquidityShares?: (order_by | null),totalValueLocked?: (order_by | null)}


/** order by variance() on columns of table "event" */
export interface event_variance_order_by {closedDynamics?: (order_by | null),closedRate?: (order_by | null),currencyPairId?: (order_by | null),id?: (order_by | null),liquidityPercent?: (order_by | null),measurePeriod?: (order_by | null),poolAboveEq?: (order_by | null),poolBelow?: (order_by | null),startRate?: (order_by | null),targetDynamics?: (order_by | null),totalBetsAmount?: (order_by | null),totalLiquidityProvided?: (order_by | null),totalLiquidityShares?: (order_by | null),totalValueLocked?: (order_by | null)}

export interface jsonb_cast_exp {String?: (String_comparison_exp | null)}


/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export interface jsonb_comparison_exp {_cast?: (jsonb_cast_exp | null),
/** is the column contained in the given json value */
_contained_in?: (Scalars['jsonb'] | null),
/** does the column contain the given json value at the top level */
_contains?: (Scalars['jsonb'] | null),_eq?: (Scalars['jsonb'] | null),_gt?: (Scalars['jsonb'] | null),_gte?: (Scalars['jsonb'] | null),
/** does the string exist as a top-level key in the column */
_has_key?: (Scalars['String'] | null),
/** do all of these strings exist as top-level keys in the column */
_has_keys_all?: (Scalars['String'][] | null),
/** do any of these strings exist as top-level keys in the column */
_has_keys_any?: (Scalars['String'][] | null),_in?: (Scalars['jsonb'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['jsonb'] | null),_lte?: (Scalars['jsonb'] | null),_neq?: (Scalars['jsonb'] | null),_nin?: (Scalars['jsonb'][] | null)}


/** columns and relationships of "merged_candles" */
export interface merged_candlesRequest{
    close?: boolean | number
    currencyPairId?: boolean | number
    high?: boolean | number
    low?: boolean | number
    open?: boolean | number
    source?: boolean | number
    until?: boolean | number
    volume?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "merged_candles". All fields are combined with a logical 'AND'. */
export interface merged_candles_bool_exp {_and?: (merged_candles_bool_exp[] | null),_not?: (merged_candles_bool_exp | null),_or?: (merged_candles_bool_exp[] | null),close?: (numeric_comparison_exp | null),currencyPairId?: (Int_comparison_exp | null),high?: (numeric_comparison_exp | null),low?: (numeric_comparison_exp | null),open?: (numeric_comparison_exp | null),source?: (String_comparison_exp | null),until?: (timestamptz_comparison_exp | null),volume?: (numeric_comparison_exp | null)}


/** Ordering options when selecting data from "merged_candles". */
export interface merged_candles_order_by {close?: (order_by | null),currencyPairId?: (order_by | null),high?: (order_by | null),low?: (order_by | null),open?: (order_by | null),source?: (order_by | null),until?: (order_by | null),volume?: (order_by | null)}


/** Streaming cursor of the table "merged_candles" */
export interface merged_candles_stream_cursor_input {
/** Stream column input with initial value */
initial_value: merged_candles_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface merged_candles_stream_cursor_value_input {close?: (Scalars['numeric'] | null),currencyPairId?: (Scalars['Int'] | null),high?: (Scalars['numeric'] | null),low?: (Scalars['numeric'] | null),open?: (Scalars['numeric'] | null),source?: (Scalars['String'] | null),until?: (Scalars['timestamptz'] | null),volume?: (Scalars['numeric'] | null)}


/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export interface numeric_comparison_exp {_eq?: (Scalars['numeric'] | null),_gt?: (Scalars['numeric'] | null),_gte?: (Scalars['numeric'] | null),_in?: (Scalars['numeric'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['numeric'] | null),_lte?: (Scalars['numeric'] | null),_neq?: (Scalars['numeric'] | null),_nin?: (Scalars['numeric'][] | null)}


/** columns and relationships of "pool" */
export interface poolRequest{
    address?: boolean | number
    /** An array relationship */
    claims?: [{
    /** distinct select on columns */
    distinct_on?: (claim_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (claim_order_by[] | null),
    /** filter the rows returned */
    where?: (claim_bool_exp | null)},claimRequest] | claimRequest
    /** An array relationship */
    entries?: [{
    /** distinct select on columns */
    distinct_on?: (entry_liquidity_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (entry_liquidity_order_by[] | null),
    /** filter the rows returned */
    where?: (entry_liquidity_bool_exp | null)},entry_liquidityRequest] | entry_liquidityRequest
    entryLockPeriod?: boolean | number
    /** An array relationship */
    events?: [{
    /** distinct select on columns */
    distinct_on?: (pool_event_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (pool_event_order_by[] | null),
    /** filter the rows returned */
    where?: (pool_event_bool_exp | null)},pool_eventRequest] | pool_eventRequest
    isDepositPaused?: boolean | number
    isDisbandAllow?: boolean | number
    name?: boolean | number
    /** An array relationship */
    poolLines?: [{
    /** distinct select on columns */
    distinct_on?: (pool_line_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (pool_line_order_by[] | null),
    /** filter the rows returned */
    where?: (pool_line_bool_exp | null)},pool_lineRequest] | pool_lineRequest
    /** An array relationship */
    poolPositions?: [{
    /** distinct select on columns */
    distinct_on?: (pool_position_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (pool_position_order_by[] | null),
    /** filter the rows returned */
    where?: (pool_position_bool_exp | null)},pool_positionRequest] | pool_positionRequest
    /** An array relationship */
    states?: [{
    /** distinct select on columns */
    distinct_on?: (pool_state_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (pool_state_order_by[] | null),
    /** filter the rows returned */
    where?: (pool_state_bool_exp | null)},pool_stateRequest] | pool_stateRequest
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "pool". All fields are combined with a logical 'AND'. */
export interface pool_bool_exp {_and?: (pool_bool_exp[] | null),_not?: (pool_bool_exp | null),_or?: (pool_bool_exp[] | null),address?: (String_comparison_exp | null),claims?: (claim_bool_exp | null),entries?: (entry_liquidity_bool_exp | null),entryLockPeriod?: (bigint_comparison_exp | null),events?: (pool_event_bool_exp | null),isDepositPaused?: (Boolean_comparison_exp | null),isDisbandAllow?: (Boolean_comparison_exp | null),name?: (String_comparison_exp | null),poolLines?: (pool_line_bool_exp | null),poolPositions?: (pool_position_bool_exp | null),states?: (pool_state_bool_exp | null),version?: (String_comparison_exp | null)}


/** columns and relationships of "pool_event" */
export interface pool_eventRequest{
    claimed?: boolean | number
    /** An array relationship */
    claims?: [{
    /** distinct select on columns */
    distinct_on?: (claim_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (claim_order_by[] | null),
    /** filter the rows returned */
    where?: (claim_bool_exp | null)},claimRequest] | claimRequest
    /** An object relationship */
    event?: eventRequest
    eventId?: boolean | number
    id?: boolean | number
    /** An object relationship */
    line?: pool_lineRequest
    lineId?: boolean | number
    /** An object relationship */
    pool?: poolRequest
    poolId?: boolean | number
    provided?: boolean | number
    result?: boolean | number
    /** An array relationship */
    states?: [{
    /** distinct select on columns */
    distinct_on?: (pool_state_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (pool_state_order_by[] | null),
    /** filter the rows returned */
    where?: (pool_state_bool_exp | null)},pool_stateRequest] | pool_stateRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "pool_event" */
export interface pool_event_aggregate_order_by {avg?: (pool_event_avg_order_by | null),count?: (order_by | null),max?: (pool_event_max_order_by | null),min?: (pool_event_min_order_by | null),stddev?: (pool_event_stddev_order_by | null),stddev_pop?: (pool_event_stddev_pop_order_by | null),stddev_samp?: (pool_event_stddev_samp_order_by | null),sum?: (pool_event_sum_order_by | null),var_pop?: (pool_event_var_pop_order_by | null),var_samp?: (pool_event_var_samp_order_by | null),variance?: (pool_event_variance_order_by | null)}


/** order by avg() on columns of table "pool_event" */
export interface pool_event_avg_order_by {claimed?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),provided?: (order_by | null),result?: (order_by | null)}


/** Boolean expression to filter rows from the table "pool_event". All fields are combined with a logical 'AND'. */
export interface pool_event_bool_exp {_and?: (pool_event_bool_exp[] | null),_not?: (pool_event_bool_exp | null),_or?: (pool_event_bool_exp[] | null),claimed?: (numeric_comparison_exp | null),claims?: (claim_bool_exp | null),event?: (event_bool_exp | null),eventId?: (bigint_comparison_exp | null),id?: (bigint_comparison_exp | null),line?: (pool_line_bool_exp | null),lineId?: (String_comparison_exp | null),pool?: (pool_bool_exp | null),poolId?: (String_comparison_exp | null),provided?: (numeric_comparison_exp | null),result?: (numeric_comparison_exp | null),states?: (pool_state_bool_exp | null)}


/** order by max() on columns of table "pool_event" */
export interface pool_event_max_order_by {claimed?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),lineId?: (order_by | null),poolId?: (order_by | null),provided?: (order_by | null),result?: (order_by | null)}


/** order by min() on columns of table "pool_event" */
export interface pool_event_min_order_by {claimed?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),lineId?: (order_by | null),poolId?: (order_by | null),provided?: (order_by | null),result?: (order_by | null)}


/** Ordering options when selecting data from "pool_event". */
export interface pool_event_order_by {claimed?: (order_by | null),claims_aggregate?: (claim_aggregate_order_by | null),event?: (event_order_by | null),eventId?: (order_by | null),id?: (order_by | null),line?: (pool_line_order_by | null),lineId?: (order_by | null),pool?: (pool_order_by | null),poolId?: (order_by | null),provided?: (order_by | null),result?: (order_by | null),states_aggregate?: (pool_state_aggregate_order_by | null)}


/** order by stddev() on columns of table "pool_event" */
export interface pool_event_stddev_order_by {claimed?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),provided?: (order_by | null),result?: (order_by | null)}


/** order by stddev_pop() on columns of table "pool_event" */
export interface pool_event_stddev_pop_order_by {claimed?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),provided?: (order_by | null),result?: (order_by | null)}


/** order by stddev_samp() on columns of table "pool_event" */
export interface pool_event_stddev_samp_order_by {claimed?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),provided?: (order_by | null),result?: (order_by | null)}


/** Streaming cursor of the table "pool_event" */
export interface pool_event_stream_cursor_input {
/** Stream column input with initial value */
initial_value: pool_event_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface pool_event_stream_cursor_value_input {claimed?: (Scalars['numeric'] | null),eventId?: (Scalars['bigint'] | null),id?: (Scalars['bigint'] | null),lineId?: (Scalars['String'] | null),poolId?: (Scalars['String'] | null),provided?: (Scalars['numeric'] | null),result?: (Scalars['numeric'] | null)}


/** order by sum() on columns of table "pool_event" */
export interface pool_event_sum_order_by {claimed?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),provided?: (order_by | null),result?: (order_by | null)}


/** order by var_pop() on columns of table "pool_event" */
export interface pool_event_var_pop_order_by {claimed?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),provided?: (order_by | null),result?: (order_by | null)}


/** order by var_samp() on columns of table "pool_event" */
export interface pool_event_var_samp_order_by {claimed?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),provided?: (order_by | null),result?: (order_by | null)}


/** order by variance() on columns of table "pool_event" */
export interface pool_event_variance_order_by {claimed?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null),provided?: (order_by | null),result?: (order_by | null)}


/** columns and relationships of "pool_line" */
export interface pool_lineRequest{
    /** An object relationship */
    currencyPair?: currencyPairRequest
    currencyPairId?: boolean | number
    /** An array relationship */
    events?: [{
    /** distinct select on columns */
    distinct_on?: (pool_event_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (pool_event_order_by[] | null),
    /** filter the rows returned */
    where?: (pool_event_bool_exp | null)},pool_eventRequest] | pool_eventRequest
    isPaused?: boolean | number
    lastBetsCloseTime?: boolean | number
    lineId?: boolean | number
    liquidityPercent?: boolean | number
    maxEvents?: boolean | number
    measurePeriod?: boolean | number
    /** An object relationship */
    pool?: poolRequest
    poolId?: boolean | number
    poolLineId?: boolean | number
    rateAboveEq?: boolean | number
    rateBelow?: boolean | number
    targetDynamics?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "pool_line" */
export interface pool_line_aggregate_order_by {avg?: (pool_line_avg_order_by | null),count?: (order_by | null),max?: (pool_line_max_order_by | null),min?: (pool_line_min_order_by | null),stddev?: (pool_line_stddev_order_by | null),stddev_pop?: (pool_line_stddev_pop_order_by | null),stddev_samp?: (pool_line_stddev_samp_order_by | null),sum?: (pool_line_sum_order_by | null),var_pop?: (pool_line_var_pop_order_by | null),var_samp?: (pool_line_var_samp_order_by | null),variance?: (pool_line_variance_order_by | null)}


/** order by avg() on columns of table "pool_line" */
export interface pool_line_avg_order_by {currencyPairId?: (order_by | null),lineId?: (order_by | null),liquidityPercent?: (order_by | null),maxEvents?: (order_by | null),measurePeriod?: (order_by | null),rateAboveEq?: (order_by | null),rateBelow?: (order_by | null),targetDynamics?: (order_by | null)}


/** Boolean expression to filter rows from the table "pool_line". All fields are combined with a logical 'AND'. */
export interface pool_line_bool_exp {_and?: (pool_line_bool_exp[] | null),_not?: (pool_line_bool_exp | null),_or?: (pool_line_bool_exp[] | null),currencyPair?: (currencyPair_bool_exp | null),currencyPairId?: (Int_comparison_exp | null),events?: (pool_event_bool_exp | null),isPaused?: (Boolean_comparison_exp | null),lastBetsCloseTime?: (timestamptz_comparison_exp | null),lineId?: (Int_comparison_exp | null),liquidityPercent?: (numeric_comparison_exp | null),maxEvents?: (Int_comparison_exp | null),measurePeriod?: (bigint_comparison_exp | null),pool?: (pool_bool_exp | null),poolId?: (String_comparison_exp | null),poolLineId?: (String_comparison_exp | null),rateAboveEq?: (numeric_comparison_exp | null),rateBelow?: (numeric_comparison_exp | null),targetDynamics?: (numeric_comparison_exp | null)}


/** order by max() on columns of table "pool_line" */
export interface pool_line_max_order_by {currencyPairId?: (order_by | null),lastBetsCloseTime?: (order_by | null),lineId?: (order_by | null),liquidityPercent?: (order_by | null),maxEvents?: (order_by | null),measurePeriod?: (order_by | null),poolId?: (order_by | null),poolLineId?: (order_by | null),rateAboveEq?: (order_by | null),rateBelow?: (order_by | null),targetDynamics?: (order_by | null)}


/** order by min() on columns of table "pool_line" */
export interface pool_line_min_order_by {currencyPairId?: (order_by | null),lastBetsCloseTime?: (order_by | null),lineId?: (order_by | null),liquidityPercent?: (order_by | null),maxEvents?: (order_by | null),measurePeriod?: (order_by | null),poolId?: (order_by | null),poolLineId?: (order_by | null),rateAboveEq?: (order_by | null),rateBelow?: (order_by | null),targetDynamics?: (order_by | null)}


/** Ordering options when selecting data from "pool_line". */
export interface pool_line_order_by {currencyPair?: (currencyPair_order_by | null),currencyPairId?: (order_by | null),events_aggregate?: (pool_event_aggregate_order_by | null),isPaused?: (order_by | null),lastBetsCloseTime?: (order_by | null),lineId?: (order_by | null),liquidityPercent?: (order_by | null),maxEvents?: (order_by | null),measurePeriod?: (order_by | null),pool?: (pool_order_by | null),poolId?: (order_by | null),poolLineId?: (order_by | null),rateAboveEq?: (order_by | null),rateBelow?: (order_by | null),targetDynamics?: (order_by | null)}


/** order by stddev() on columns of table "pool_line" */
export interface pool_line_stddev_order_by {currencyPairId?: (order_by | null),lineId?: (order_by | null),liquidityPercent?: (order_by | null),maxEvents?: (order_by | null),measurePeriod?: (order_by | null),rateAboveEq?: (order_by | null),rateBelow?: (order_by | null),targetDynamics?: (order_by | null)}


/** order by stddev_pop() on columns of table "pool_line" */
export interface pool_line_stddev_pop_order_by {currencyPairId?: (order_by | null),lineId?: (order_by | null),liquidityPercent?: (order_by | null),maxEvents?: (order_by | null),measurePeriod?: (order_by | null),rateAboveEq?: (order_by | null),rateBelow?: (order_by | null),targetDynamics?: (order_by | null)}


/** order by stddev_samp() on columns of table "pool_line" */
export interface pool_line_stddev_samp_order_by {currencyPairId?: (order_by | null),lineId?: (order_by | null),liquidityPercent?: (order_by | null),maxEvents?: (order_by | null),measurePeriod?: (order_by | null),rateAboveEq?: (order_by | null),rateBelow?: (order_by | null),targetDynamics?: (order_by | null)}


/** Streaming cursor of the table "pool_line" */
export interface pool_line_stream_cursor_input {
/** Stream column input with initial value */
initial_value: pool_line_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface pool_line_stream_cursor_value_input {currencyPairId?: (Scalars['Int'] | null),isPaused?: (Scalars['Boolean'] | null),lastBetsCloseTime?: (Scalars['timestamptz'] | null),lineId?: (Scalars['Int'] | null),liquidityPercent?: (Scalars['numeric'] | null),maxEvents?: (Scalars['Int'] | null),measurePeriod?: (Scalars['bigint'] | null),poolId?: (Scalars['String'] | null),poolLineId?: (Scalars['String'] | null),rateAboveEq?: (Scalars['numeric'] | null),rateBelow?: (Scalars['numeric'] | null),targetDynamics?: (Scalars['numeric'] | null)}


/** order by sum() on columns of table "pool_line" */
export interface pool_line_sum_order_by {currencyPairId?: (order_by | null),lineId?: (order_by | null),liquidityPercent?: (order_by | null),maxEvents?: (order_by | null),measurePeriod?: (order_by | null),rateAboveEq?: (order_by | null),rateBelow?: (order_by | null),targetDynamics?: (order_by | null)}


/** order by var_pop() on columns of table "pool_line" */
export interface pool_line_var_pop_order_by {currencyPairId?: (order_by | null),lineId?: (order_by | null),liquidityPercent?: (order_by | null),maxEvents?: (order_by | null),measurePeriod?: (order_by | null),rateAboveEq?: (order_by | null),rateBelow?: (order_by | null),targetDynamics?: (order_by | null)}


/** order by var_samp() on columns of table "pool_line" */
export interface pool_line_var_samp_order_by {currencyPairId?: (order_by | null),lineId?: (order_by | null),liquidityPercent?: (order_by | null),maxEvents?: (order_by | null),measurePeriod?: (order_by | null),rateAboveEq?: (order_by | null),rateBelow?: (order_by | null),targetDynamics?: (order_by | null)}


/** order by variance() on columns of table "pool_line" */
export interface pool_line_variance_order_by {currencyPairId?: (order_by | null),lineId?: (order_by | null),liquidityPercent?: (order_by | null),maxEvents?: (order_by | null),measurePeriod?: (order_by | null),rateAboveEq?: (order_by | null),rateBelow?: (order_by | null),targetDynamics?: (order_by | null)}


/** Ordering options when selecting data from "pool". */
export interface pool_order_by {address?: (order_by | null),claims_aggregate?: (claim_aggregate_order_by | null),entries_aggregate?: (entry_liquidity_aggregate_order_by | null),entryLockPeriod?: (order_by | null),events_aggregate?: (pool_event_aggregate_order_by | null),isDepositPaused?: (order_by | null),isDisbandAllow?: (order_by | null),name?: (order_by | null),poolLines_aggregate?: (pool_line_aggregate_order_by | null),poolPositions_aggregate?: (pool_position_aggregate_order_by | null),states_aggregate?: (pool_state_aggregate_order_by | null),version?: (order_by | null)}


/** columns and relationships of "pool_position" */
export interface pool_positionRequest{
    /** An array relationship */
    claims?: [{
    /** distinct select on columns */
    distinct_on?: (claim_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (claim_order_by[] | null),
    /** filter the rows returned */
    where?: (claim_bool_exp | null)},claimRequest] | claimRequest
    depositedAmount?: boolean | number
    /** An array relationship */
    entries?: [{
    /** distinct select on columns */
    distinct_on?: (entry_liquidity_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (entry_liquidity_order_by[] | null),
    /** filter the rows returned */
    where?: (entry_liquidity_bool_exp | null)},entry_liquidityRequest] | entry_liquidityRequest
    entrySharePrice?: boolean | number
    id?: boolean | number
    lockedEstimateAmount?: boolean | number
    /** An object relationship */
    pool?: poolRequest
    poolId?: boolean | number
    realizedProfit?: boolean | number
    shares?: boolean | number
    /** An object relationship */
    user?: userRequest
    userId?: boolean | number
    withdrawnAmount?: boolean | number
    withdrawnShares?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "pool_position" */
export interface pool_position_aggregate_order_by {avg?: (pool_position_avg_order_by | null),count?: (order_by | null),max?: (pool_position_max_order_by | null),min?: (pool_position_min_order_by | null),stddev?: (pool_position_stddev_order_by | null),stddev_pop?: (pool_position_stddev_pop_order_by | null),stddev_samp?: (pool_position_stddev_samp_order_by | null),sum?: (pool_position_sum_order_by | null),var_pop?: (pool_position_var_pop_order_by | null),var_samp?: (pool_position_var_samp_order_by | null),variance?: (pool_position_variance_order_by | null)}


/** order by avg() on columns of table "pool_position" */
export interface pool_position_avg_order_by {depositedAmount?: (order_by | null),entrySharePrice?: (order_by | null),id?: (order_by | null),lockedEstimateAmount?: (order_by | null),realizedProfit?: (order_by | null),shares?: (order_by | null),withdrawnAmount?: (order_by | null),withdrawnShares?: (order_by | null)}


/** Boolean expression to filter rows from the table "pool_position". All fields are combined with a logical 'AND'. */
export interface pool_position_bool_exp {_and?: (pool_position_bool_exp[] | null),_not?: (pool_position_bool_exp | null),_or?: (pool_position_bool_exp[] | null),claims?: (claim_bool_exp | null),depositedAmount?: (numeric_comparison_exp | null),entries?: (entry_liquidity_bool_exp | null),entrySharePrice?: (numeric_comparison_exp | null),id?: (bigint_comparison_exp | null),lockedEstimateAmount?: (numeric_comparison_exp | null),pool?: (pool_bool_exp | null),poolId?: (String_comparison_exp | null),realizedProfit?: (numeric_comparison_exp | null),shares?: (numeric_comparison_exp | null),user?: (user_bool_exp | null),userId?: (String_comparison_exp | null),withdrawnAmount?: (numeric_comparison_exp | null),withdrawnShares?: (numeric_comparison_exp | null)}


/** order by max() on columns of table "pool_position" */
export interface pool_position_max_order_by {depositedAmount?: (order_by | null),entrySharePrice?: (order_by | null),id?: (order_by | null),lockedEstimateAmount?: (order_by | null),poolId?: (order_by | null),realizedProfit?: (order_by | null),shares?: (order_by | null),userId?: (order_by | null),withdrawnAmount?: (order_by | null),withdrawnShares?: (order_by | null)}


/** order by min() on columns of table "pool_position" */
export interface pool_position_min_order_by {depositedAmount?: (order_by | null),entrySharePrice?: (order_by | null),id?: (order_by | null),lockedEstimateAmount?: (order_by | null),poolId?: (order_by | null),realizedProfit?: (order_by | null),shares?: (order_by | null),userId?: (order_by | null),withdrawnAmount?: (order_by | null),withdrawnShares?: (order_by | null)}


/** Ordering options when selecting data from "pool_position". */
export interface pool_position_order_by {claims_aggregate?: (claim_aggregate_order_by | null),depositedAmount?: (order_by | null),entries_aggregate?: (entry_liquidity_aggregate_order_by | null),entrySharePrice?: (order_by | null),id?: (order_by | null),lockedEstimateAmount?: (order_by | null),pool?: (pool_order_by | null),poolId?: (order_by | null),realizedProfit?: (order_by | null),shares?: (order_by | null),user?: (user_order_by | null),userId?: (order_by | null),withdrawnAmount?: (order_by | null),withdrawnShares?: (order_by | null)}


/** order by stddev() on columns of table "pool_position" */
export interface pool_position_stddev_order_by {depositedAmount?: (order_by | null),entrySharePrice?: (order_by | null),id?: (order_by | null),lockedEstimateAmount?: (order_by | null),realizedProfit?: (order_by | null),shares?: (order_by | null),withdrawnAmount?: (order_by | null),withdrawnShares?: (order_by | null)}


/** order by stddev_pop() on columns of table "pool_position" */
export interface pool_position_stddev_pop_order_by {depositedAmount?: (order_by | null),entrySharePrice?: (order_by | null),id?: (order_by | null),lockedEstimateAmount?: (order_by | null),realizedProfit?: (order_by | null),shares?: (order_by | null),withdrawnAmount?: (order_by | null),withdrawnShares?: (order_by | null)}


/** order by stddev_samp() on columns of table "pool_position" */
export interface pool_position_stddev_samp_order_by {depositedAmount?: (order_by | null),entrySharePrice?: (order_by | null),id?: (order_by | null),lockedEstimateAmount?: (order_by | null),realizedProfit?: (order_by | null),shares?: (order_by | null),withdrawnAmount?: (order_by | null),withdrawnShares?: (order_by | null)}


/** Streaming cursor of the table "pool_position" */
export interface pool_position_stream_cursor_input {
/** Stream column input with initial value */
initial_value: pool_position_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface pool_position_stream_cursor_value_input {depositedAmount?: (Scalars['numeric'] | null),entrySharePrice?: (Scalars['numeric'] | null),id?: (Scalars['bigint'] | null),lockedEstimateAmount?: (Scalars['numeric'] | null),poolId?: (Scalars['String'] | null),realizedProfit?: (Scalars['numeric'] | null),shares?: (Scalars['numeric'] | null),userId?: (Scalars['String'] | null),withdrawnAmount?: (Scalars['numeric'] | null),withdrawnShares?: (Scalars['numeric'] | null)}


/** order by sum() on columns of table "pool_position" */
export interface pool_position_sum_order_by {depositedAmount?: (order_by | null),entrySharePrice?: (order_by | null),id?: (order_by | null),lockedEstimateAmount?: (order_by | null),realizedProfit?: (order_by | null),shares?: (order_by | null),withdrawnAmount?: (order_by | null),withdrawnShares?: (order_by | null)}


/** order by var_pop() on columns of table "pool_position" */
export interface pool_position_var_pop_order_by {depositedAmount?: (order_by | null),entrySharePrice?: (order_by | null),id?: (order_by | null),lockedEstimateAmount?: (order_by | null),realizedProfit?: (order_by | null),shares?: (order_by | null),withdrawnAmount?: (order_by | null),withdrawnShares?: (order_by | null)}


/** order by var_samp() on columns of table "pool_position" */
export interface pool_position_var_samp_order_by {depositedAmount?: (order_by | null),entrySharePrice?: (order_by | null),id?: (order_by | null),lockedEstimateAmount?: (order_by | null),realizedProfit?: (order_by | null),shares?: (order_by | null),withdrawnAmount?: (order_by | null),withdrawnShares?: (order_by | null)}


/** order by variance() on columns of table "pool_position" */
export interface pool_position_variance_order_by {depositedAmount?: (order_by | null),entrySharePrice?: (order_by | null),id?: (order_by | null),lockedEstimateAmount?: (order_by | null),realizedProfit?: (order_by | null),shares?: (order_by | null),withdrawnAmount?: (order_by | null),withdrawnShares?: (order_by | null)}


/** columns and relationships of "pool_state" */
export interface pool_stateRequest{
    /** EVENT_CREATED: EVENT_CREATED\nEVENT_FINISHED: EVENT_FINISHED\nUSER_DEPOSITED: USER_DEPOSITED\nLIQUIDITY_APPROVED: LIQUIDITY_APPROVED\nLIQUIDITY_CANCELED: LIQUIDITY_CANCELED\nUSER_CLAIMED: USER_CLAIMED\nUSER_WITHDRAWN: USER_WITHDRAWN\nRECEIVED_XTZ: RECEIVED_XTZ\nPOOL_ORIGINATED: POOL_ORIGINATED\nACCUMULATED_DUST: ACCUMULATED_DUST\nPOOL_DISBANDED: POOL_DISBANDED\nDEPOSITS_PAUSED: DEPOSITS_PAUSED\nDEPOSITS_UNPAUSED: DEPOSITS_UNPAUSED */
    action?: boolean | number
    activeLiquidity?: boolean | number
    activeLiquidityDiff?: boolean | number
    /** An object relationship */
    affectedClaim?: claimRequest
    affectedClaimId?: boolean | number
    /** An object relationship */
    affectedEntry?: entry_liquidityRequest
    affectedEntryId?: boolean | number
    /** An object relationship */
    affectedEvent?: pool_eventRequest
    affectedEventId?: boolean | number
    /** An object relationship */
    affectedUser?: userRequest
    affectedUserId?: boolean | number
    counter?: boolean | number
    entryLiquidity?: boolean | number
    entryLiquidityDiff?: boolean | number
    id?: boolean | number
    level?: boolean | number
    opgHash?: boolean | number
    /** An object relationship */
    pool?: poolRequest
    poolId?: boolean | number
    sharePrice?: boolean | number
    timestamp?: boolean | number
    totalLiquidity?: boolean | number
    totalLiquidityDiff?: boolean | number
    totalShares?: boolean | number
    totalSharesDiff?: boolean | number
    withdrawableLiquidity?: boolean | number
    withdrawableLiquidityDiff?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "pool_state" */
export interface pool_state_aggregate_order_by {avg?: (pool_state_avg_order_by | null),count?: (order_by | null),max?: (pool_state_max_order_by | null),min?: (pool_state_min_order_by | null),stddev?: (pool_state_stddev_order_by | null),stddev_pop?: (pool_state_stddev_pop_order_by | null),stddev_samp?: (pool_state_stddev_samp_order_by | null),sum?: (pool_state_sum_order_by | null),var_pop?: (pool_state_var_pop_order_by | null),var_samp?: (pool_state_var_samp_order_by | null),variance?: (pool_state_variance_order_by | null)}


/** order by avg() on columns of table "pool_state" */
export interface pool_state_avg_order_by {activeLiquidity?: (order_by | null),activeLiquidityDiff?: (order_by | null),affectedClaimId?: (order_by | null),affectedEventId?: (order_by | null),counter?: (order_by | null),entryLiquidity?: (order_by | null),entryLiquidityDiff?: (order_by | null),id?: (order_by | null),level?: (order_by | null),sharePrice?: (order_by | null),totalLiquidity?: (order_by | null),totalLiquidityDiff?: (order_by | null),totalShares?: (order_by | null),totalSharesDiff?: (order_by | null),withdrawableLiquidity?: (order_by | null),withdrawableLiquidityDiff?: (order_by | null)}


/** Boolean expression to filter rows from the table "pool_state". All fields are combined with a logical 'AND'. */
export interface pool_state_bool_exp {_and?: (pool_state_bool_exp[] | null),_not?: (pool_state_bool_exp | null),_or?: (pool_state_bool_exp[] | null),action?: (String_comparison_exp | null),activeLiquidity?: (numeric_comparison_exp | null),activeLiquidityDiff?: (numeric_comparison_exp | null),affectedClaim?: (claim_bool_exp | null),affectedClaimId?: (Int_comparison_exp | null),affectedEntry?: (entry_liquidity_bool_exp | null),affectedEntryId?: (String_comparison_exp | null),affectedEvent?: (pool_event_bool_exp | null),affectedEventId?: (bigint_comparison_exp | null),affectedUser?: (user_bool_exp | null),affectedUserId?: (String_comparison_exp | null),counter?: (Int_comparison_exp | null),entryLiquidity?: (numeric_comparison_exp | null),entryLiquidityDiff?: (numeric_comparison_exp | null),id?: (bigint_comparison_exp | null),level?: (Int_comparison_exp | null),opgHash?: (String_comparison_exp | null),pool?: (pool_bool_exp | null),poolId?: (String_comparison_exp | null),sharePrice?: (numeric_comparison_exp | null),timestamp?: (timestamptz_comparison_exp | null),totalLiquidity?: (numeric_comparison_exp | null),totalLiquidityDiff?: (numeric_comparison_exp | null),totalShares?: (numeric_comparison_exp | null),totalSharesDiff?: (numeric_comparison_exp | null),withdrawableLiquidity?: (numeric_comparison_exp | null),withdrawableLiquidityDiff?: (numeric_comparison_exp | null)}


/** order by max() on columns of table "pool_state" */
export interface pool_state_max_order_by {
/** EVENT_CREATED: EVENT_CREATED\nEVENT_FINISHED: EVENT_FINISHED\nUSER_DEPOSITED: USER_DEPOSITED\nLIQUIDITY_APPROVED: LIQUIDITY_APPROVED\nLIQUIDITY_CANCELED: LIQUIDITY_CANCELED\nUSER_CLAIMED: USER_CLAIMED\nUSER_WITHDRAWN: USER_WITHDRAWN\nRECEIVED_XTZ: RECEIVED_XTZ\nPOOL_ORIGINATED: POOL_ORIGINATED\nACCUMULATED_DUST: ACCUMULATED_DUST\nPOOL_DISBANDED: POOL_DISBANDED\nDEPOSITS_PAUSED: DEPOSITS_PAUSED\nDEPOSITS_UNPAUSED: DEPOSITS_UNPAUSED */
action?: (order_by | null),activeLiquidity?: (order_by | null),activeLiquidityDiff?: (order_by | null),affectedClaimId?: (order_by | null),affectedEntryId?: (order_by | null),affectedEventId?: (order_by | null),affectedUserId?: (order_by | null),counter?: (order_by | null),entryLiquidity?: (order_by | null),entryLiquidityDiff?: (order_by | null),id?: (order_by | null),level?: (order_by | null),opgHash?: (order_by | null),poolId?: (order_by | null),sharePrice?: (order_by | null),timestamp?: (order_by | null),totalLiquidity?: (order_by | null),totalLiquidityDiff?: (order_by | null),totalShares?: (order_by | null),totalSharesDiff?: (order_by | null),withdrawableLiquidity?: (order_by | null),withdrawableLiquidityDiff?: (order_by | null)}


/** order by min() on columns of table "pool_state" */
export interface pool_state_min_order_by {
/** EVENT_CREATED: EVENT_CREATED\nEVENT_FINISHED: EVENT_FINISHED\nUSER_DEPOSITED: USER_DEPOSITED\nLIQUIDITY_APPROVED: LIQUIDITY_APPROVED\nLIQUIDITY_CANCELED: LIQUIDITY_CANCELED\nUSER_CLAIMED: USER_CLAIMED\nUSER_WITHDRAWN: USER_WITHDRAWN\nRECEIVED_XTZ: RECEIVED_XTZ\nPOOL_ORIGINATED: POOL_ORIGINATED\nACCUMULATED_DUST: ACCUMULATED_DUST\nPOOL_DISBANDED: POOL_DISBANDED\nDEPOSITS_PAUSED: DEPOSITS_PAUSED\nDEPOSITS_UNPAUSED: DEPOSITS_UNPAUSED */
action?: (order_by | null),activeLiquidity?: (order_by | null),activeLiquidityDiff?: (order_by | null),affectedClaimId?: (order_by | null),affectedEntryId?: (order_by | null),affectedEventId?: (order_by | null),affectedUserId?: (order_by | null),counter?: (order_by | null),entryLiquidity?: (order_by | null),entryLiquidityDiff?: (order_by | null),id?: (order_by | null),level?: (order_by | null),opgHash?: (order_by | null),poolId?: (order_by | null),sharePrice?: (order_by | null),timestamp?: (order_by | null),totalLiquidity?: (order_by | null),totalLiquidityDiff?: (order_by | null),totalShares?: (order_by | null),totalSharesDiff?: (order_by | null),withdrawableLiquidity?: (order_by | null),withdrawableLiquidityDiff?: (order_by | null)}


/** Ordering options when selecting data from "pool_state". */
export interface pool_state_order_by {action?: (order_by | null),activeLiquidity?: (order_by | null),activeLiquidityDiff?: (order_by | null),affectedClaim?: (claim_order_by | null),affectedClaimId?: (order_by | null),affectedEntry?: (entry_liquidity_order_by | null),affectedEntryId?: (order_by | null),affectedEvent?: (pool_event_order_by | null),affectedEventId?: (order_by | null),affectedUser?: (user_order_by | null),affectedUserId?: (order_by | null),counter?: (order_by | null),entryLiquidity?: (order_by | null),entryLiquidityDiff?: (order_by | null),id?: (order_by | null),level?: (order_by | null),opgHash?: (order_by | null),pool?: (pool_order_by | null),poolId?: (order_by | null),sharePrice?: (order_by | null),timestamp?: (order_by | null),totalLiquidity?: (order_by | null),totalLiquidityDiff?: (order_by | null),totalShares?: (order_by | null),totalSharesDiff?: (order_by | null),withdrawableLiquidity?: (order_by | null),withdrawableLiquidityDiff?: (order_by | null)}


/** order by stddev() on columns of table "pool_state" */
export interface pool_state_stddev_order_by {activeLiquidity?: (order_by | null),activeLiquidityDiff?: (order_by | null),affectedClaimId?: (order_by | null),affectedEventId?: (order_by | null),counter?: (order_by | null),entryLiquidity?: (order_by | null),entryLiquidityDiff?: (order_by | null),id?: (order_by | null),level?: (order_by | null),sharePrice?: (order_by | null),totalLiquidity?: (order_by | null),totalLiquidityDiff?: (order_by | null),totalShares?: (order_by | null),totalSharesDiff?: (order_by | null),withdrawableLiquidity?: (order_by | null),withdrawableLiquidityDiff?: (order_by | null)}


/** order by stddev_pop() on columns of table "pool_state" */
export interface pool_state_stddev_pop_order_by {activeLiquidity?: (order_by | null),activeLiquidityDiff?: (order_by | null),affectedClaimId?: (order_by | null),affectedEventId?: (order_by | null),counter?: (order_by | null),entryLiquidity?: (order_by | null),entryLiquidityDiff?: (order_by | null),id?: (order_by | null),level?: (order_by | null),sharePrice?: (order_by | null),totalLiquidity?: (order_by | null),totalLiquidityDiff?: (order_by | null),totalShares?: (order_by | null),totalSharesDiff?: (order_by | null),withdrawableLiquidity?: (order_by | null),withdrawableLiquidityDiff?: (order_by | null)}


/** order by stddev_samp() on columns of table "pool_state" */
export interface pool_state_stddev_samp_order_by {activeLiquidity?: (order_by | null),activeLiquidityDiff?: (order_by | null),affectedClaimId?: (order_by | null),affectedEventId?: (order_by | null),counter?: (order_by | null),entryLiquidity?: (order_by | null),entryLiquidityDiff?: (order_by | null),id?: (order_by | null),level?: (order_by | null),sharePrice?: (order_by | null),totalLiquidity?: (order_by | null),totalLiquidityDiff?: (order_by | null),totalShares?: (order_by | null),totalSharesDiff?: (order_by | null),withdrawableLiquidity?: (order_by | null),withdrawableLiquidityDiff?: (order_by | null)}


/** Streaming cursor of the table "pool_state" */
export interface pool_state_stream_cursor_input {
/** Stream column input with initial value */
initial_value: pool_state_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface pool_state_stream_cursor_value_input {
/** EVENT_CREATED: EVENT_CREATED\nEVENT_FINISHED: EVENT_FINISHED\nUSER_DEPOSITED: USER_DEPOSITED\nLIQUIDITY_APPROVED: LIQUIDITY_APPROVED\nLIQUIDITY_CANCELED: LIQUIDITY_CANCELED\nUSER_CLAIMED: USER_CLAIMED\nUSER_WITHDRAWN: USER_WITHDRAWN\nRECEIVED_XTZ: RECEIVED_XTZ\nPOOL_ORIGINATED: POOL_ORIGINATED\nACCUMULATED_DUST: ACCUMULATED_DUST\nPOOL_DISBANDED: POOL_DISBANDED\nDEPOSITS_PAUSED: DEPOSITS_PAUSED\nDEPOSITS_UNPAUSED: DEPOSITS_UNPAUSED */
action?: (Scalars['String'] | null),activeLiquidity?: (Scalars['numeric'] | null),activeLiquidityDiff?: (Scalars['numeric'] | null),affectedClaimId?: (Scalars['Int'] | null),affectedEntryId?: (Scalars['String'] | null),affectedEventId?: (Scalars['bigint'] | null),affectedUserId?: (Scalars['String'] | null),counter?: (Scalars['Int'] | null),entryLiquidity?: (Scalars['numeric'] | null),entryLiquidityDiff?: (Scalars['numeric'] | null),id?: (Scalars['bigint'] | null),level?: (Scalars['Int'] | null),opgHash?: (Scalars['String'] | null),poolId?: (Scalars['String'] | null),sharePrice?: (Scalars['numeric'] | null),timestamp?: (Scalars['timestamptz'] | null),totalLiquidity?: (Scalars['numeric'] | null),totalLiquidityDiff?: (Scalars['numeric'] | null),totalShares?: (Scalars['numeric'] | null),totalSharesDiff?: (Scalars['numeric'] | null),withdrawableLiquidity?: (Scalars['numeric'] | null),withdrawableLiquidityDiff?: (Scalars['numeric'] | null)}


/** order by sum() on columns of table "pool_state" */
export interface pool_state_sum_order_by {activeLiquidity?: (order_by | null),activeLiquidityDiff?: (order_by | null),affectedClaimId?: (order_by | null),affectedEventId?: (order_by | null),counter?: (order_by | null),entryLiquidity?: (order_by | null),entryLiquidityDiff?: (order_by | null),id?: (order_by | null),level?: (order_by | null),sharePrice?: (order_by | null),totalLiquidity?: (order_by | null),totalLiquidityDiff?: (order_by | null),totalShares?: (order_by | null),totalSharesDiff?: (order_by | null),withdrawableLiquidity?: (order_by | null),withdrawableLiquidityDiff?: (order_by | null)}


/** order by var_pop() on columns of table "pool_state" */
export interface pool_state_var_pop_order_by {activeLiquidity?: (order_by | null),activeLiquidityDiff?: (order_by | null),affectedClaimId?: (order_by | null),affectedEventId?: (order_by | null),counter?: (order_by | null),entryLiquidity?: (order_by | null),entryLiquidityDiff?: (order_by | null),id?: (order_by | null),level?: (order_by | null),sharePrice?: (order_by | null),totalLiquidity?: (order_by | null),totalLiquidityDiff?: (order_by | null),totalShares?: (order_by | null),totalSharesDiff?: (order_by | null),withdrawableLiquidity?: (order_by | null),withdrawableLiquidityDiff?: (order_by | null)}


/** order by var_samp() on columns of table "pool_state" */
export interface pool_state_var_samp_order_by {activeLiquidity?: (order_by | null),activeLiquidityDiff?: (order_by | null),affectedClaimId?: (order_by | null),affectedEventId?: (order_by | null),counter?: (order_by | null),entryLiquidity?: (order_by | null),entryLiquidityDiff?: (order_by | null),id?: (order_by | null),level?: (order_by | null),sharePrice?: (order_by | null),totalLiquidity?: (order_by | null),totalLiquidityDiff?: (order_by | null),totalShares?: (order_by | null),totalSharesDiff?: (order_by | null),withdrawableLiquidity?: (order_by | null),withdrawableLiquidityDiff?: (order_by | null)}


/** order by variance() on columns of table "pool_state" */
export interface pool_state_variance_order_by {activeLiquidity?: (order_by | null),activeLiquidityDiff?: (order_by | null),affectedClaimId?: (order_by | null),affectedEventId?: (order_by | null),counter?: (order_by | null),entryLiquidity?: (order_by | null),entryLiquidityDiff?: (order_by | null),id?: (order_by | null),level?: (order_by | null),sharePrice?: (order_by | null),totalLiquidity?: (order_by | null),totalLiquidityDiff?: (order_by | null),totalShares?: (order_by | null),totalSharesDiff?: (order_by | null),withdrawableLiquidity?: (order_by | null),withdrawableLiquidityDiff?: (order_by | null)}


/** Streaming cursor of the table "pool" */
export interface pool_stream_cursor_input {
/** Stream column input with initial value */
initial_value: pool_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface pool_stream_cursor_value_input {address?: (Scalars['String'] | null),entryLockPeriod?: (Scalars['bigint'] | null),isDepositPaused?: (Scalars['Boolean'] | null),isDisbandAllow?: (Scalars['Boolean'] | null),name?: (Scalars['String'] | null),version?: (Scalars['String'] | null)}


/** columns and relationships of "position" */
export interface positionRequest{
    /** An object relationship */
    event?: eventRequest
    eventId?: boolean | number
    id?: boolean | number
    liquidityProvidedAboveEq?: boolean | number
    liquidityProvidedBelow?: boolean | number
    rewardAboveEq?: boolean | number
    rewardBelow?: boolean | number
    shares?: boolean | number
    /** An object relationship */
    user?: userRequest
    userId?: boolean | number
    value?: boolean | number
    withdrawn?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "position" */
export interface position_aggregate_order_by {avg?: (position_avg_order_by | null),count?: (order_by | null),max?: (position_max_order_by | null),min?: (position_min_order_by | null),stddev?: (position_stddev_order_by | null),stddev_pop?: (position_stddev_pop_order_by | null),stddev_samp?: (position_stddev_samp_order_by | null),sum?: (position_sum_order_by | null),var_pop?: (position_var_pop_order_by | null),var_samp?: (position_var_samp_order_by | null),variance?: (position_variance_order_by | null)}


/** order by avg() on columns of table "position" */
export interface position_avg_order_by {eventId?: (order_by | null),id?: (order_by | null),liquidityProvidedAboveEq?: (order_by | null),liquidityProvidedBelow?: (order_by | null),rewardAboveEq?: (order_by | null),rewardBelow?: (order_by | null),shares?: (order_by | null),value?: (order_by | null)}


/** Boolean expression to filter rows from the table "position". All fields are combined with a logical 'AND'. */
export interface position_bool_exp {_and?: (position_bool_exp[] | null),_not?: (position_bool_exp | null),_or?: (position_bool_exp[] | null),event?: (event_bool_exp | null),eventId?: (bigint_comparison_exp | null),id?: (bigint_comparison_exp | null),liquidityProvidedAboveEq?: (numeric_comparison_exp | null),liquidityProvidedBelow?: (numeric_comparison_exp | null),rewardAboveEq?: (numeric_comparison_exp | null),rewardBelow?: (numeric_comparison_exp | null),shares?: (numeric_comparison_exp | null),user?: (user_bool_exp | null),userId?: (String_comparison_exp | null),value?: (numeric_comparison_exp | null),withdrawn?: (Boolean_comparison_exp | null)}


/** order by max() on columns of table "position" */
export interface position_max_order_by {eventId?: (order_by | null),id?: (order_by | null),liquidityProvidedAboveEq?: (order_by | null),liquidityProvidedBelow?: (order_by | null),rewardAboveEq?: (order_by | null),rewardBelow?: (order_by | null),shares?: (order_by | null),userId?: (order_by | null),value?: (order_by | null)}


/** order by min() on columns of table "position" */
export interface position_min_order_by {eventId?: (order_by | null),id?: (order_by | null),liquidityProvidedAboveEq?: (order_by | null),liquidityProvidedBelow?: (order_by | null),rewardAboveEq?: (order_by | null),rewardBelow?: (order_by | null),shares?: (order_by | null),userId?: (order_by | null),value?: (order_by | null)}


/** Ordering options when selecting data from "position". */
export interface position_order_by {event?: (event_order_by | null),eventId?: (order_by | null),id?: (order_by | null),liquidityProvidedAboveEq?: (order_by | null),liquidityProvidedBelow?: (order_by | null),rewardAboveEq?: (order_by | null),rewardBelow?: (order_by | null),shares?: (order_by | null),user?: (user_order_by | null),userId?: (order_by | null),value?: (order_by | null),withdrawn?: (order_by | null)}


/** order by stddev() on columns of table "position" */
export interface position_stddev_order_by {eventId?: (order_by | null),id?: (order_by | null),liquidityProvidedAboveEq?: (order_by | null),liquidityProvidedBelow?: (order_by | null),rewardAboveEq?: (order_by | null),rewardBelow?: (order_by | null),shares?: (order_by | null),value?: (order_by | null)}


/** order by stddev_pop() on columns of table "position" */
export interface position_stddev_pop_order_by {eventId?: (order_by | null),id?: (order_by | null),liquidityProvidedAboveEq?: (order_by | null),liquidityProvidedBelow?: (order_by | null),rewardAboveEq?: (order_by | null),rewardBelow?: (order_by | null),shares?: (order_by | null),value?: (order_by | null)}


/** order by stddev_samp() on columns of table "position" */
export interface position_stddev_samp_order_by {eventId?: (order_by | null),id?: (order_by | null),liquidityProvidedAboveEq?: (order_by | null),liquidityProvidedBelow?: (order_by | null),rewardAboveEq?: (order_by | null),rewardBelow?: (order_by | null),shares?: (order_by | null),value?: (order_by | null)}


/** Streaming cursor of the table "position" */
export interface position_stream_cursor_input {
/** Stream column input with initial value */
initial_value: position_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface position_stream_cursor_value_input {eventId?: (Scalars['bigint'] | null),id?: (Scalars['bigint'] | null),liquidityProvidedAboveEq?: (Scalars['numeric'] | null),liquidityProvidedBelow?: (Scalars['numeric'] | null),rewardAboveEq?: (Scalars['numeric'] | null),rewardBelow?: (Scalars['numeric'] | null),shares?: (Scalars['numeric'] | null),userId?: (Scalars['String'] | null),value?: (Scalars['numeric'] | null),withdrawn?: (Scalars['Boolean'] | null)}


/** order by sum() on columns of table "position" */
export interface position_sum_order_by {eventId?: (order_by | null),id?: (order_by | null),liquidityProvidedAboveEq?: (order_by | null),liquidityProvidedBelow?: (order_by | null),rewardAboveEq?: (order_by | null),rewardBelow?: (order_by | null),shares?: (order_by | null),value?: (order_by | null)}


/** order by var_pop() on columns of table "position" */
export interface position_var_pop_order_by {eventId?: (order_by | null),id?: (order_by | null),liquidityProvidedAboveEq?: (order_by | null),liquidityProvidedBelow?: (order_by | null),rewardAboveEq?: (order_by | null),rewardBelow?: (order_by | null),shares?: (order_by | null),value?: (order_by | null)}


/** order by var_samp() on columns of table "position" */
export interface position_var_samp_order_by {eventId?: (order_by | null),id?: (order_by | null),liquidityProvidedAboveEq?: (order_by | null),liquidityProvidedBelow?: (order_by | null),rewardAboveEq?: (order_by | null),rewardBelow?: (order_by | null),shares?: (order_by | null),value?: (order_by | null)}


/** order by variance() on columns of table "position" */
export interface position_variance_order_by {eventId?: (order_by | null),id?: (order_by | null),liquidityProvidedAboveEq?: (order_by | null),liquidityProvidedBelow?: (order_by | null),rewardAboveEq?: (order_by | null),rewardBelow?: (order_by | null),shares?: (order_by | null),value?: (order_by | null)}

export interface query_rootRequest{
    /** fetch data from the table: "bet" */
    bet?: [{
    /** distinct select on columns */
    distinct_on?: (bet_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (bet_order_by[] | null),
    /** filter the rows returned */
    where?: (bet_bool_exp | null)},betRequest] | betRequest
    /** fetch data from the table: "bet" using primary key columns */
    betByPk?: [{id: Scalars['bigint']},betRequest]
    /** fetch data from the table: "candle" */
    candle?: [{
    /** distinct select on columns */
    distinct_on?: (candle_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (candle_order_by[] | null),
    /** filter the rows returned */
    where?: (candle_bool_exp | null)},candleRequest] | candleRequest
    /** fetch data from the table: "candle" using primary key columns */
    candleByPk?: [{id: Scalars['bigint']},candleRequest]
    /** fetch data from the table: "claim" */
    claim?: [{
    /** distinct select on columns */
    distinct_on?: (claim_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (claim_order_by[] | null),
    /** filter the rows returned */
    where?: (claim_bool_exp | null)},claimRequest] | claimRequest
    /** fetch data from the table: "claim" using primary key columns */
    claimByPk?: [{id: Scalars['Int']},claimRequest]
    /** fetch data from the table: "currencyPair" */
    currencyPair?: [{
    /** distinct select on columns */
    distinct_on?: (currencyPair_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (currencyPair_order_by[] | null),
    /** filter the rows returned */
    where?: (currencyPair_bool_exp | null)},currencyPairRequest] | currencyPairRequest
    /** fetch data from the table: "currencyPair" using primary key columns */
    currencyPairByPk?: [{id: Scalars['Int']},currencyPairRequest]
    /** fetch data from the table: "deposit" */
    deposit?: [{
    /** distinct select on columns */
    distinct_on?: (deposit_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (deposit_order_by[] | null),
    /** filter the rows returned */
    where?: (deposit_bool_exp | null)},depositRequest] | depositRequest
    /** fetch data from the table: "deposit" using primary key columns */
    depositByPk?: [{id: Scalars['bigint']},depositRequest]
    /** fetch data from the table: "dipdup_contract" */
    dipdupContract?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_contract_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_contract_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_contract_bool_exp | null)},dipdup_contractRequest] | dipdup_contractRequest
    /** fetch data from the table: "dipdup_contract" using primary key columns */
    dipdupContractByPk?: [{name: Scalars['String']},dipdup_contractRequest]
    /** fetch data from the table: "dipdup_contract_metadata" */
    dipdupContractMetadata?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_contract_metadata_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_contract_metadata_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_contract_metadata_bool_exp | null)},dipdup_contract_metadataRequest] | dipdup_contract_metadataRequest
    /** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
    dipdupContractMetadataByPk?: [{id: Scalars['Int']},dipdup_contract_metadataRequest]
    /** fetch data from the table: "dipdup_head" */
    dipdupHead?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_head_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_head_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_head_bool_exp | null)},dipdup_headRequest] | dipdup_headRequest
    /** fetch data from the table: "dipdup_head" using primary key columns */
    dipdupHeadByPk?: [{name: Scalars['String']},dipdup_headRequest]
    /** fetch data from the table: "dipdup_head_status" */
    dipdupHeadStatus?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_head_status_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_head_status_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_head_status_bool_exp | null)},dipdup_head_statusRequest] | dipdup_head_statusRequest
    /** fetch data from the table: "dipdup_index" */
    dipdupIndex?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_index_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_index_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_index_bool_exp | null)},dipdup_indexRequest] | dipdup_indexRequest
    /** fetch data from the table: "dipdup_index" using primary key columns */
    dipdupIndexByPk?: [{name: Scalars['String']},dipdup_indexRequest]
    /** fetch data from the table: "dipdup_model_update" */
    dipdupModelUpdate?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_model_update_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_model_update_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_model_update_bool_exp | null)},dipdup_model_updateRequest] | dipdup_model_updateRequest
    /** fetch data from the table: "dipdup_model_update" using primary key columns */
    dipdupModelUpdateByPk?: [{id: Scalars['Int']},dipdup_model_updateRequest]
    /** fetch data from the table: "dipdup_schema" */
    dipdupSchema?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_schema_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_schema_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_schema_bool_exp | null)},dipdup_schemaRequest] | dipdup_schemaRequest
    /** fetch data from the table: "dipdup_schema" using primary key columns */
    dipdupSchemaByPk?: [{name: Scalars['String']},dipdup_schemaRequest]
    /** fetch data from the table: "dipdup_token_metadata" */
    dipdupTokenMetadata?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_token_metadata_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_token_metadata_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_token_metadata_bool_exp | null)},dipdup_token_metadataRequest] | dipdup_token_metadataRequest
    /** fetch data from the table: "dipdup_token_metadata" using primary key columns */
    dipdupTokenMetadataByPk?: [{id: Scalars['Int']},dipdup_token_metadataRequest]
    /** fetch data from the table: "entry_liquidity" */
    entryLiquidity?: [{
    /** distinct select on columns */
    distinct_on?: (entry_liquidity_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (entry_liquidity_order_by[] | null),
    /** filter the rows returned */
    where?: (entry_liquidity_bool_exp | null)},entry_liquidityRequest] | entry_liquidityRequest
    /** fetch data from the table: "entry_liquidity" using primary key columns */
    entryLiquidityByPk?: [{poolEntryId: Scalars['String']},entry_liquidityRequest]
    /** fetch data from the table: "event" */
    event?: [{
    /** distinct select on columns */
    distinct_on?: (event_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (event_order_by[] | null),
    /** filter the rows returned */
    where?: (event_bool_exp | null)},eventRequest] | eventRequest
    /** fetch data from the table: "event" using primary key columns */
    eventByPk?: [{id: Scalars['bigint']},eventRequest]
    /** fetch data from the table: "merged_candles" */
    mergedCandles?: [{
    /** distinct select on columns */
    distinct_on?: (merged_candles_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (merged_candles_order_by[] | null),
    /** filter the rows returned */
    where?: (merged_candles_bool_exp | null)},merged_candlesRequest] | merged_candlesRequest
    /** fetch data from the table: "pool" */
    pool?: [{
    /** distinct select on columns */
    distinct_on?: (pool_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (pool_order_by[] | null),
    /** filter the rows returned */
    where?: (pool_bool_exp | null)},poolRequest] | poolRequest
    /** fetch data from the table: "pool" using primary key columns */
    poolByPk?: [{address: Scalars['String']},poolRequest]
    /** fetch data from the table: "pool_event" */
    poolEvent?: [{
    /** distinct select on columns */
    distinct_on?: (pool_event_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (pool_event_order_by[] | null),
    /** filter the rows returned */
    where?: (pool_event_bool_exp | null)},pool_eventRequest] | pool_eventRequest
    /** fetch data from the table: "pool_event" using primary key columns */
    poolEventByPk?: [{id: Scalars['bigint']},pool_eventRequest]
    /** fetch data from the table: "pool_line" */
    poolLine?: [{
    /** distinct select on columns */
    distinct_on?: (pool_line_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (pool_line_order_by[] | null),
    /** filter the rows returned */
    where?: (pool_line_bool_exp | null)},pool_lineRequest] | pool_lineRequest
    /** fetch data from the table: "pool_line" using primary key columns */
    poolLineByPk?: [{poolLineId: Scalars['String']},pool_lineRequest]
    /** fetch data from the table: "pool_position" */
    poolPosition?: [{
    /** distinct select on columns */
    distinct_on?: (pool_position_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (pool_position_order_by[] | null),
    /** filter the rows returned */
    where?: (pool_position_bool_exp | null)},pool_positionRequest] | pool_positionRequest
    /** fetch data from the table: "pool_position" using primary key columns */
    poolPositionByPk?: [{id: Scalars['bigint']},pool_positionRequest]
    /** fetch data from the table: "pool_state" */
    poolState?: [{
    /** distinct select on columns */
    distinct_on?: (pool_state_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (pool_state_order_by[] | null),
    /** filter the rows returned */
    where?: (pool_state_bool_exp | null)},pool_stateRequest] | pool_stateRequest
    /** fetch data from the table: "pool_state" using primary key columns */
    poolStateByPk?: [{id: Scalars['bigint']},pool_stateRequest]
    /** fetch data from the table: "position" */
    position?: [{
    /** distinct select on columns */
    distinct_on?: (position_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (position_order_by[] | null),
    /** filter the rows returned */
    where?: (position_bool_exp | null)},positionRequest] | positionRequest
    /** fetch data from the table: "position" using primary key columns */
    positionByPk?: [{id: Scalars['bigint']},positionRequest]
    /** fetch data from the table: "quotesWma" */
    quotesWma?: [{
    /** distinct select on columns */
    distinct_on?: (quotesWma_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (quotesWma_order_by[] | null),
    /** filter the rows returned */
    where?: (quotesWma_bool_exp | null)},quotesWmaRequest] | quotesWmaRequest
    /** fetch data from the table: "quotesWma_15m" */
    quotesWma15m?: [{
    /** distinct select on columns */
    distinct_on?: (quotesWma_15m_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (quotesWma_15m_order_by[] | null),
    /** filter the rows returned */
    where?: (quotesWma_15m_bool_exp | null)},quotesWma_15mRequest] | quotesWma_15mRequest
    /** fetch data from the table: "total_value_locked" */
    totalValueLocked?: [{
    /** distinct select on columns */
    distinct_on?: (total_value_locked_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (total_value_locked_order_by[] | null),
    /** filter the rows returned */
    where?: (total_value_locked_bool_exp | null)},total_value_lockedRequest] | total_value_lockedRequest
    /** fetch data from the table: "user" */
    user?: [{
    /** distinct select on columns */
    distinct_on?: (user_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (user_order_by[] | null),
    /** filter the rows returned */
    where?: (user_bool_exp | null)},userRequest] | userRequest
    /** fetch data from the table: "user" using primary key columns */
    userByPk?: [{address: Scalars['String']},userRequest]
    /** fetch data from the table: "withdrawal" */
    withdrawal?: [{
    /** distinct select on columns */
    distinct_on?: (withdrawal_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (withdrawal_order_by[] | null),
    /** filter the rows returned */
    where?: (withdrawal_bool_exp | null)},withdrawalRequest] | withdrawalRequest
    /** fetch data from the table: "withdrawal" using primary key columns */
    withdrawalByPk?: [{id: Scalars['bigint']},withdrawalRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "quotesWma" */
export interface quotesWmaRequest{
    currencyPairId?: boolean | number
    price?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "quotesWma_15m" */
export interface quotesWma_15mRequest{
    currencyPairId?: boolean | number
    price?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "quotesWma_15m". All fields are combined with a logical 'AND'. */
export interface quotesWma_15m_bool_exp {_and?: (quotesWma_15m_bool_exp[] | null),_not?: (quotesWma_15m_bool_exp | null),_or?: (quotesWma_15m_bool_exp[] | null),currencyPairId?: (Int_comparison_exp | null),price?: (numeric_comparison_exp | null),timestamp?: (timestamptz_comparison_exp | null)}


/** Ordering options when selecting data from "quotesWma_15m". */
export interface quotesWma_15m_order_by {currencyPairId?: (order_by | null),price?: (order_by | null),timestamp?: (order_by | null)}


/** Streaming cursor of the table "quotesWma_15m" */
export interface quotesWma_15m_stream_cursor_input {
/** Stream column input with initial value */
initial_value: quotesWma_15m_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface quotesWma_15m_stream_cursor_value_input {currencyPairId?: (Scalars['Int'] | null),price?: (Scalars['numeric'] | null),timestamp?: (Scalars['timestamptz'] | null)}


/** Boolean expression to filter rows from the table "quotesWma". All fields are combined with a logical 'AND'. */
export interface quotesWma_bool_exp {_and?: (quotesWma_bool_exp[] | null),_not?: (quotesWma_bool_exp | null),_or?: (quotesWma_bool_exp[] | null),currencyPairId?: (Int_comparison_exp | null),price?: (numeric_comparison_exp | null),timestamp?: (timestamptz_comparison_exp | null)}


/** Ordering options when selecting data from "quotesWma". */
export interface quotesWma_order_by {currencyPairId?: (order_by | null),price?: (order_by | null),timestamp?: (order_by | null)}


/** Streaming cursor of the table "quotesWma" */
export interface quotesWma_stream_cursor_input {
/** Stream column input with initial value */
initial_value: quotesWma_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface quotesWma_stream_cursor_value_input {currencyPairId?: (Scalars['Int'] | null),price?: (Scalars['numeric'] | null),timestamp?: (Scalars['timestamptz'] | null)}

export interface subscription_rootRequest{
    /** fetch data from the table: "bet" */
    bet?: [{
    /** distinct select on columns */
    distinct_on?: (bet_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (bet_order_by[] | null),
    /** filter the rows returned */
    where?: (bet_bool_exp | null)},betRequest] | betRequest
    /** fetch data from the table: "bet" using primary key columns */
    betByPk?: [{id: Scalars['bigint']},betRequest]
    /** fetch data from the table in a streaming manner: "bet" */
    bet_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (bet_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (bet_bool_exp | null)},betRequest]
    /** fetch data from the table: "candle" */
    candle?: [{
    /** distinct select on columns */
    distinct_on?: (candle_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (candle_order_by[] | null),
    /** filter the rows returned */
    where?: (candle_bool_exp | null)},candleRequest] | candleRequest
    /** fetch data from the table: "candle" using primary key columns */
    candleByPk?: [{id: Scalars['bigint']},candleRequest]
    /** fetch data from the table in a streaming manner: "candle" */
    candle_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (candle_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (candle_bool_exp | null)},candleRequest]
    /** fetch data from the table: "claim" */
    claim?: [{
    /** distinct select on columns */
    distinct_on?: (claim_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (claim_order_by[] | null),
    /** filter the rows returned */
    where?: (claim_bool_exp | null)},claimRequest] | claimRequest
    /** fetch data from the table: "claim" using primary key columns */
    claimByPk?: [{id: Scalars['Int']},claimRequest]
    /** fetch data from the table in a streaming manner: "claim" */
    claim_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (claim_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (claim_bool_exp | null)},claimRequest]
    /** fetch data from the table: "currencyPair" */
    currencyPair?: [{
    /** distinct select on columns */
    distinct_on?: (currencyPair_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (currencyPair_order_by[] | null),
    /** filter the rows returned */
    where?: (currencyPair_bool_exp | null)},currencyPairRequest] | currencyPairRequest
    /** fetch data from the table: "currencyPair" using primary key columns */
    currencyPairByPk?: [{id: Scalars['Int']},currencyPairRequest]
    /** fetch data from the table in a streaming manner: "currencyPair" */
    currencyPair_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (currencyPair_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (currencyPair_bool_exp | null)},currencyPairRequest]
    /** fetch data from the table: "deposit" */
    deposit?: [{
    /** distinct select on columns */
    distinct_on?: (deposit_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (deposit_order_by[] | null),
    /** filter the rows returned */
    where?: (deposit_bool_exp | null)},depositRequest] | depositRequest
    /** fetch data from the table: "deposit" using primary key columns */
    depositByPk?: [{id: Scalars['bigint']},depositRequest]
    /** fetch data from the table in a streaming manner: "deposit" */
    deposit_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (deposit_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (deposit_bool_exp | null)},depositRequest]
    /** fetch data from the table: "dipdup_contract" */
    dipdupContract?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_contract_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_contract_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_contract_bool_exp | null)},dipdup_contractRequest] | dipdup_contractRequest
    /** fetch data from the table: "dipdup_contract" using primary key columns */
    dipdupContractByPk?: [{name: Scalars['String']},dipdup_contractRequest]
    /** fetch data from the table: "dipdup_contract_metadata" */
    dipdupContractMetadata?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_contract_metadata_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_contract_metadata_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_contract_metadata_bool_exp | null)},dipdup_contract_metadataRequest] | dipdup_contract_metadataRequest
    /** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
    dipdupContractMetadataByPk?: [{id: Scalars['Int']},dipdup_contract_metadataRequest]
    /** fetch data from the table: "dipdup_head" */
    dipdupHead?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_head_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_head_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_head_bool_exp | null)},dipdup_headRequest] | dipdup_headRequest
    /** fetch data from the table: "dipdup_head" using primary key columns */
    dipdupHeadByPk?: [{name: Scalars['String']},dipdup_headRequest]
    /** fetch data from the table: "dipdup_head_status" */
    dipdupHeadStatus?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_head_status_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_head_status_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_head_status_bool_exp | null)},dipdup_head_statusRequest] | dipdup_head_statusRequest
    /** fetch data from the table: "dipdup_index" */
    dipdupIndex?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_index_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_index_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_index_bool_exp | null)},dipdup_indexRequest] | dipdup_indexRequest
    /** fetch data from the table: "dipdup_index" using primary key columns */
    dipdupIndexByPk?: [{name: Scalars['String']},dipdup_indexRequest]
    /** fetch data from the table: "dipdup_model_update" */
    dipdupModelUpdate?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_model_update_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_model_update_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_model_update_bool_exp | null)},dipdup_model_updateRequest] | dipdup_model_updateRequest
    /** fetch data from the table: "dipdup_model_update" using primary key columns */
    dipdupModelUpdateByPk?: [{id: Scalars['Int']},dipdup_model_updateRequest]
    /** fetch data from the table: "dipdup_schema" */
    dipdupSchema?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_schema_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_schema_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_schema_bool_exp | null)},dipdup_schemaRequest] | dipdup_schemaRequest
    /** fetch data from the table: "dipdup_schema" using primary key columns */
    dipdupSchemaByPk?: [{name: Scalars['String']},dipdup_schemaRequest]
    /** fetch data from the table: "dipdup_token_metadata" */
    dipdupTokenMetadata?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_token_metadata_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_token_metadata_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_token_metadata_bool_exp | null)},dipdup_token_metadataRequest] | dipdup_token_metadataRequest
    /** fetch data from the table: "dipdup_token_metadata" using primary key columns */
    dipdupTokenMetadataByPk?: [{id: Scalars['Int']},dipdup_token_metadataRequest]
    /** fetch data from the table in a streaming manner: "dipdup_contract_metadata" */
    dipdup_contract_metadata_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (dipdup_contract_metadata_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (dipdup_contract_metadata_bool_exp | null)},dipdup_contract_metadataRequest]
    /** fetch data from the table in a streaming manner: "dipdup_contract" */
    dipdup_contract_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (dipdup_contract_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (dipdup_contract_bool_exp | null)},dipdup_contractRequest]
    /** fetch data from the table in a streaming manner: "dipdup_head_status" */
    dipdup_head_status_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (dipdup_head_status_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (dipdup_head_status_bool_exp | null)},dipdup_head_statusRequest]
    /** fetch data from the table in a streaming manner: "dipdup_head" */
    dipdup_head_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (dipdup_head_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (dipdup_head_bool_exp | null)},dipdup_headRequest]
    /** fetch data from the table in a streaming manner: "dipdup_index" */
    dipdup_index_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (dipdup_index_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (dipdup_index_bool_exp | null)},dipdup_indexRequest]
    /** fetch data from the table in a streaming manner: "dipdup_model_update" */
    dipdup_model_update_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (dipdup_model_update_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (dipdup_model_update_bool_exp | null)},dipdup_model_updateRequest]
    /** fetch data from the table in a streaming manner: "dipdup_schema" */
    dipdup_schema_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (dipdup_schema_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (dipdup_schema_bool_exp | null)},dipdup_schemaRequest]
    /** fetch data from the table in a streaming manner: "dipdup_token_metadata" */
    dipdup_token_metadata_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (dipdup_token_metadata_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (dipdup_token_metadata_bool_exp | null)},dipdup_token_metadataRequest]
    /** fetch data from the table: "entry_liquidity" */
    entryLiquidity?: [{
    /** distinct select on columns */
    distinct_on?: (entry_liquidity_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (entry_liquidity_order_by[] | null),
    /** filter the rows returned */
    where?: (entry_liquidity_bool_exp | null)},entry_liquidityRequest] | entry_liquidityRequest
    /** fetch data from the table: "entry_liquidity" using primary key columns */
    entryLiquidityByPk?: [{poolEntryId: Scalars['String']},entry_liquidityRequest]
    /** fetch data from the table in a streaming manner: "entry_liquidity" */
    entry_liquidity_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (entry_liquidity_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (entry_liquidity_bool_exp | null)},entry_liquidityRequest]
    /** fetch data from the table: "event" */
    event?: [{
    /** distinct select on columns */
    distinct_on?: (event_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (event_order_by[] | null),
    /** filter the rows returned */
    where?: (event_bool_exp | null)},eventRequest] | eventRequest
    /** fetch data from the table: "event" using primary key columns */
    eventByPk?: [{id: Scalars['bigint']},eventRequest]
    /** fetch data from the table in a streaming manner: "event" */
    event_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (event_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (event_bool_exp | null)},eventRequest]
    /** fetch data from the table: "merged_candles" */
    mergedCandles?: [{
    /** distinct select on columns */
    distinct_on?: (merged_candles_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (merged_candles_order_by[] | null),
    /** filter the rows returned */
    where?: (merged_candles_bool_exp | null)},merged_candlesRequest] | merged_candlesRequest
    /** fetch data from the table in a streaming manner: "merged_candles" */
    merged_candles_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (merged_candles_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (merged_candles_bool_exp | null)},merged_candlesRequest]
    /** fetch data from the table: "pool" */
    pool?: [{
    /** distinct select on columns */
    distinct_on?: (pool_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (pool_order_by[] | null),
    /** filter the rows returned */
    where?: (pool_bool_exp | null)},poolRequest] | poolRequest
    /** fetch data from the table: "pool" using primary key columns */
    poolByPk?: [{address: Scalars['String']},poolRequest]
    /** fetch data from the table: "pool_event" */
    poolEvent?: [{
    /** distinct select on columns */
    distinct_on?: (pool_event_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (pool_event_order_by[] | null),
    /** filter the rows returned */
    where?: (pool_event_bool_exp | null)},pool_eventRequest] | pool_eventRequest
    /** fetch data from the table: "pool_event" using primary key columns */
    poolEventByPk?: [{id: Scalars['bigint']},pool_eventRequest]
    /** fetch data from the table: "pool_line" */
    poolLine?: [{
    /** distinct select on columns */
    distinct_on?: (pool_line_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (pool_line_order_by[] | null),
    /** filter the rows returned */
    where?: (pool_line_bool_exp | null)},pool_lineRequest] | pool_lineRequest
    /** fetch data from the table: "pool_line" using primary key columns */
    poolLineByPk?: [{poolLineId: Scalars['String']},pool_lineRequest]
    /** fetch data from the table: "pool_position" */
    poolPosition?: [{
    /** distinct select on columns */
    distinct_on?: (pool_position_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (pool_position_order_by[] | null),
    /** filter the rows returned */
    where?: (pool_position_bool_exp | null)},pool_positionRequest] | pool_positionRequest
    /** fetch data from the table: "pool_position" using primary key columns */
    poolPositionByPk?: [{id: Scalars['bigint']},pool_positionRequest]
    /** fetch data from the table: "pool_state" */
    poolState?: [{
    /** distinct select on columns */
    distinct_on?: (pool_state_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (pool_state_order_by[] | null),
    /** filter the rows returned */
    where?: (pool_state_bool_exp | null)},pool_stateRequest] | pool_stateRequest
    /** fetch data from the table: "pool_state" using primary key columns */
    poolStateByPk?: [{id: Scalars['bigint']},pool_stateRequest]
    /** fetch data from the table in a streaming manner: "pool_event" */
    pool_event_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (pool_event_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (pool_event_bool_exp | null)},pool_eventRequest]
    /** fetch data from the table in a streaming manner: "pool_line" */
    pool_line_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (pool_line_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (pool_line_bool_exp | null)},pool_lineRequest]
    /** fetch data from the table in a streaming manner: "pool_position" */
    pool_position_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (pool_position_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (pool_position_bool_exp | null)},pool_positionRequest]
    /** fetch data from the table in a streaming manner: "pool_state" */
    pool_state_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (pool_state_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (pool_state_bool_exp | null)},pool_stateRequest]
    /** fetch data from the table in a streaming manner: "pool" */
    pool_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (pool_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (pool_bool_exp | null)},poolRequest]
    /** fetch data from the table: "position" */
    position?: [{
    /** distinct select on columns */
    distinct_on?: (position_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (position_order_by[] | null),
    /** filter the rows returned */
    where?: (position_bool_exp | null)},positionRequest] | positionRequest
    /** fetch data from the table: "position" using primary key columns */
    positionByPk?: [{id: Scalars['bigint']},positionRequest]
    /** fetch data from the table in a streaming manner: "position" */
    position_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (position_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (position_bool_exp | null)},positionRequest]
    /** fetch data from the table: "quotesWma" */
    quotesWma?: [{
    /** distinct select on columns */
    distinct_on?: (quotesWma_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (quotesWma_order_by[] | null),
    /** filter the rows returned */
    where?: (quotesWma_bool_exp | null)},quotesWmaRequest] | quotesWmaRequest
    /** fetch data from the table: "quotesWma_15m" */
    quotesWma15m?: [{
    /** distinct select on columns */
    distinct_on?: (quotesWma_15m_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (quotesWma_15m_order_by[] | null),
    /** filter the rows returned */
    where?: (quotesWma_15m_bool_exp | null)},quotesWma_15mRequest] | quotesWma_15mRequest
    /** fetch data from the table in a streaming manner: "quotesWma_15m" */
    quotesWma_15m_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (quotesWma_15m_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (quotesWma_15m_bool_exp | null)},quotesWma_15mRequest]
    /** fetch data from the table in a streaming manner: "quotesWma" */
    quotesWma_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (quotesWma_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (quotesWma_bool_exp | null)},quotesWmaRequest]
    /** fetch data from the table: "total_value_locked" */
    totalValueLocked?: [{
    /** distinct select on columns */
    distinct_on?: (total_value_locked_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (total_value_locked_order_by[] | null),
    /** filter the rows returned */
    where?: (total_value_locked_bool_exp | null)},total_value_lockedRequest] | total_value_lockedRequest
    /** fetch data from the table in a streaming manner: "total_value_locked" */
    total_value_locked_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (total_value_locked_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (total_value_locked_bool_exp | null)},total_value_lockedRequest]
    /** fetch data from the table: "user" */
    user?: [{
    /** distinct select on columns */
    distinct_on?: (user_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (user_order_by[] | null),
    /** filter the rows returned */
    where?: (user_bool_exp | null)},userRequest] | userRequest
    /** fetch data from the table: "user" using primary key columns */
    userByPk?: [{address: Scalars['String']},userRequest]
    /** fetch data from the table in a streaming manner: "user" */
    user_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (user_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (user_bool_exp | null)},userRequest]
    /** fetch data from the table: "withdrawal" */
    withdrawal?: [{
    /** distinct select on columns */
    distinct_on?: (withdrawal_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (withdrawal_order_by[] | null),
    /** filter the rows returned */
    where?: (withdrawal_bool_exp | null)},withdrawalRequest] | withdrawalRequest
    /** fetch data from the table: "withdrawal" using primary key columns */
    withdrawalByPk?: [{id: Scalars['bigint']},withdrawalRequest]
    /** fetch data from the table in a streaming manner: "withdrawal" */
    withdrawal_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (withdrawal_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (withdrawal_bool_exp | null)},withdrawalRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {_eq?: (Scalars['timestamptz'] | null),_gt?: (Scalars['timestamptz'] | null),_gte?: (Scalars['timestamptz'] | null),_in?: (Scalars['timestamptz'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['timestamptz'] | null),_lte?: (Scalars['timestamptz'] | null),_neq?: (Scalars['timestamptz'] | null),_nin?: (Scalars['timestamptz'][] | null)}


/** columns and relationships of "total_value_locked" */
export interface total_value_lockedRequest{
    amount?: boolean | number
    createdTime?: boolean | number
    cumSum?: boolean | number
    eventId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "total_value_locked". All fields are combined with a logical 'AND'. */
export interface total_value_locked_bool_exp {_and?: (total_value_locked_bool_exp[] | null),_not?: (total_value_locked_bool_exp | null),_or?: (total_value_locked_bool_exp[] | null),amount?: (numeric_comparison_exp | null),createdTime?: (timestamptz_comparison_exp | null),cumSum?: (numeric_comparison_exp | null),eventId?: (bigint_comparison_exp | null)}


/** Ordering options when selecting data from "total_value_locked". */
export interface total_value_locked_order_by {amount?: (order_by | null),createdTime?: (order_by | null),cumSum?: (order_by | null),eventId?: (order_by | null)}


/** Streaming cursor of the table "total_value_locked" */
export interface total_value_locked_stream_cursor_input {
/** Stream column input with initial value */
initial_value: total_value_locked_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface total_value_locked_stream_cursor_value_input {amount?: (Scalars['numeric'] | null),createdTime?: (Scalars['timestamptz'] | null),cumSum?: (Scalars['numeric'] | null),eventId?: (Scalars['bigint'] | null)}


/** columns and relationships of "user" */
export interface userRequest{
    address?: boolean | number
    /** An array relationship */
    bets?: [{
    /** distinct select on columns */
    distinct_on?: (bet_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (bet_order_by[] | null),
    /** filter the rows returned */
    where?: (bet_bool_exp | null)},betRequest] | betRequest
    /** An array relationship */
    claims?: [{
    /** distinct select on columns */
    distinct_on?: (claim_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (claim_order_by[] | null),
    /** filter the rows returned */
    where?: (claim_bool_exp | null)},claimRequest] | claimRequest
    /** An array relationship */
    deposits?: [{
    /** distinct select on columns */
    distinct_on?: (deposit_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (deposit_order_by[] | null),
    /** filter the rows returned */
    where?: (deposit_bool_exp | null)},depositRequest] | depositRequest
    /** An array relationship */
    entries?: [{
    /** distinct select on columns */
    distinct_on?: (entry_liquidity_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (entry_liquidity_order_by[] | null),
    /** filter the rows returned */
    where?: (entry_liquidity_bool_exp | null)},entry_liquidityRequest] | entry_liquidityRequest
    /** An array relationship */
    events?: [{
    /** distinct select on columns */
    distinct_on?: (event_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (event_order_by[] | null),
    /** filter the rows returned */
    where?: (event_bool_exp | null)},eventRequest] | eventRequest
    /** An array relationship */
    poolPositions?: [{
    /** distinct select on columns */
    distinct_on?: (pool_position_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (pool_position_order_by[] | null),
    /** filter the rows returned */
    where?: (pool_position_bool_exp | null)},pool_positionRequest] | pool_positionRequest
    /** An array relationship */
    poolStates?: [{
    /** distinct select on columns */
    distinct_on?: (pool_state_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (pool_state_order_by[] | null),
    /** filter the rows returned */
    where?: (pool_state_bool_exp | null)},pool_stateRequest] | pool_stateRequest
    /** An array relationship */
    positions?: [{
    /** distinct select on columns */
    distinct_on?: (position_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (position_order_by[] | null),
    /** filter the rows returned */
    where?: (position_bool_exp | null)},positionRequest] | positionRequest
    /** An array relationship */
    thirdPartyWithdrawals?: [{
    /** distinct select on columns */
    distinct_on?: (withdrawal_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (withdrawal_order_by[] | null),
    /** filter the rows returned */
    where?: (withdrawal_bool_exp | null)},withdrawalRequest] | withdrawalRequest
    totalBetsAmount?: boolean | number
    totalBetsCount?: boolean | number
    totalFeesCollected?: boolean | number
    totalLiquidityProvided?: boolean | number
    totalProviderReward?: boolean | number
    totalReward?: boolean | number
    totalWithdrawn?: boolean | number
    /** An array relationship */
    withdrawals?: [{
    /** distinct select on columns */
    distinct_on?: (withdrawal_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (withdrawal_order_by[] | null),
    /** filter the rows returned */
    where?: (withdrawal_bool_exp | null)},withdrawalRequest] | withdrawalRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export interface user_bool_exp {_and?: (user_bool_exp[] | null),_not?: (user_bool_exp | null),_or?: (user_bool_exp[] | null),address?: (String_comparison_exp | null),bets?: (bet_bool_exp | null),claims?: (claim_bool_exp | null),deposits?: (deposit_bool_exp | null),entries?: (entry_liquidity_bool_exp | null),events?: (event_bool_exp | null),poolPositions?: (pool_position_bool_exp | null),poolStates?: (pool_state_bool_exp | null),positions?: (position_bool_exp | null),thirdPartyWithdrawals?: (withdrawal_bool_exp | null),totalBetsAmount?: (numeric_comparison_exp | null),totalBetsCount?: (Int_comparison_exp | null),totalFeesCollected?: (numeric_comparison_exp | null),totalLiquidityProvided?: (numeric_comparison_exp | null),totalProviderReward?: (numeric_comparison_exp | null),totalReward?: (numeric_comparison_exp | null),totalWithdrawn?: (numeric_comparison_exp | null),withdrawals?: (withdrawal_bool_exp | null)}


/** Ordering options when selecting data from "user". */
export interface user_order_by {address?: (order_by | null),bets_aggregate?: (bet_aggregate_order_by | null),claims_aggregate?: (claim_aggregate_order_by | null),deposits_aggregate?: (deposit_aggregate_order_by | null),entries_aggregate?: (entry_liquidity_aggregate_order_by | null),events_aggregate?: (event_aggregate_order_by | null),poolPositions_aggregate?: (pool_position_aggregate_order_by | null),poolStates_aggregate?: (pool_state_aggregate_order_by | null),positions_aggregate?: (position_aggregate_order_by | null),thirdPartyWithdrawals_aggregate?: (withdrawal_aggregate_order_by | null),totalBetsAmount?: (order_by | null),totalBetsCount?: (order_by | null),totalFeesCollected?: (order_by | null),totalLiquidityProvided?: (order_by | null),totalProviderReward?: (order_by | null),totalReward?: (order_by | null),totalWithdrawn?: (order_by | null),withdrawals_aggregate?: (withdrawal_aggregate_order_by | null)}


/** Streaming cursor of the table "user" */
export interface user_stream_cursor_input {
/** Stream column input with initial value */
initial_value: user_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface user_stream_cursor_value_input {address?: (Scalars['String'] | null),totalBetsAmount?: (Scalars['numeric'] | null),totalBetsCount?: (Scalars['Int'] | null),totalFeesCollected?: (Scalars['numeric'] | null),totalLiquidityProvided?: (Scalars['numeric'] | null),totalProviderReward?: (Scalars['numeric'] | null),totalReward?: (Scalars['numeric'] | null),totalWithdrawn?: (Scalars['numeric'] | null)}


/** columns and relationships of "withdrawal" */
export interface withdrawalRequest{
    amount?: boolean | number
    createdTime?: boolean | number
    /** An object relationship */
    event?: eventRequest
    eventId?: boolean | number
    /** An object relationship */
    feeCollector?: userRequest
    feeCollectorId?: boolean | number
    id?: boolean | number
    opgHash?: boolean | number
    /** MANUAL: MANUAL\nTHIRD_PARTY: THIRD_PARTY */
    type?: boolean | number
    /** An object relationship */
    user?: userRequest
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "withdrawal" */
export interface withdrawal_aggregate_order_by {avg?: (withdrawal_avg_order_by | null),count?: (order_by | null),max?: (withdrawal_max_order_by | null),min?: (withdrawal_min_order_by | null),stddev?: (withdrawal_stddev_order_by | null),stddev_pop?: (withdrawal_stddev_pop_order_by | null),stddev_samp?: (withdrawal_stddev_samp_order_by | null),sum?: (withdrawal_sum_order_by | null),var_pop?: (withdrawal_var_pop_order_by | null),var_samp?: (withdrawal_var_samp_order_by | null),variance?: (withdrawal_variance_order_by | null)}


/** order by avg() on columns of table "withdrawal" */
export interface withdrawal_avg_order_by {amount?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null)}


/** Boolean expression to filter rows from the table "withdrawal". All fields are combined with a logical 'AND'. */
export interface withdrawal_bool_exp {_and?: (withdrawal_bool_exp[] | null),_not?: (withdrawal_bool_exp | null),_or?: (withdrawal_bool_exp[] | null),amount?: (numeric_comparison_exp | null),createdTime?: (timestamptz_comparison_exp | null),event?: (event_bool_exp | null),eventId?: (bigint_comparison_exp | null),feeCollector?: (user_bool_exp | null),feeCollectorId?: (String_comparison_exp | null),id?: (bigint_comparison_exp | null),opgHash?: (String_comparison_exp | null),type?: (String_comparison_exp | null),user?: (user_bool_exp | null),userId?: (String_comparison_exp | null)}


/** order by max() on columns of table "withdrawal" */
export interface withdrawal_max_order_by {amount?: (order_by | null),createdTime?: (order_by | null),eventId?: (order_by | null),feeCollectorId?: (order_by | null),id?: (order_by | null),opgHash?: (order_by | null),
/** MANUAL: MANUAL\nTHIRD_PARTY: THIRD_PARTY */
type?: (order_by | null),userId?: (order_by | null)}


/** order by min() on columns of table "withdrawal" */
export interface withdrawal_min_order_by {amount?: (order_by | null),createdTime?: (order_by | null),eventId?: (order_by | null),feeCollectorId?: (order_by | null),id?: (order_by | null),opgHash?: (order_by | null),
/** MANUAL: MANUAL\nTHIRD_PARTY: THIRD_PARTY */
type?: (order_by | null),userId?: (order_by | null)}


/** Ordering options when selecting data from "withdrawal". */
export interface withdrawal_order_by {amount?: (order_by | null),createdTime?: (order_by | null),event?: (event_order_by | null),eventId?: (order_by | null),feeCollector?: (user_order_by | null),feeCollectorId?: (order_by | null),id?: (order_by | null),opgHash?: (order_by | null),type?: (order_by | null),user?: (user_order_by | null),userId?: (order_by | null)}


/** order by stddev() on columns of table "withdrawal" */
export interface withdrawal_stddev_order_by {amount?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null)}


/** order by stddev_pop() on columns of table "withdrawal" */
export interface withdrawal_stddev_pop_order_by {amount?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null)}


/** order by stddev_samp() on columns of table "withdrawal" */
export interface withdrawal_stddev_samp_order_by {amount?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null)}


/** Streaming cursor of the table "withdrawal" */
export interface withdrawal_stream_cursor_input {
/** Stream column input with initial value */
initial_value: withdrawal_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface withdrawal_stream_cursor_value_input {amount?: (Scalars['numeric'] | null),createdTime?: (Scalars['timestamptz'] | null),eventId?: (Scalars['bigint'] | null),feeCollectorId?: (Scalars['String'] | null),id?: (Scalars['bigint'] | null),opgHash?: (Scalars['String'] | null),
/** MANUAL: MANUAL\nTHIRD_PARTY: THIRD_PARTY */
type?: (Scalars['String'] | null),userId?: (Scalars['String'] | null)}


/** order by sum() on columns of table "withdrawal" */
export interface withdrawal_sum_order_by {amount?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null)}


/** order by var_pop() on columns of table "withdrawal" */
export interface withdrawal_var_pop_order_by {amount?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null)}


/** order by var_samp() on columns of table "withdrawal" */
export interface withdrawal_var_samp_order_by {amount?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null)}


/** order by variance() on columns of table "withdrawal" */
export interface withdrawal_variance_order_by {amount?: (order_by | null),eventId?: (order_by | null),id?: (order_by | null)}

export type QueryRequest = query_rootRequest
export type SubscriptionRequest = subscription_rootRequest


const bet_possibleTypes: string[] = ['bet']
export const isbet = (obj?: { __typename?: any } | null): obj is bet => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isbet"')
  return bet_possibleTypes.includes(obj.__typename)
}



const candle_possibleTypes: string[] = ['candle']
export const iscandle = (obj?: { __typename?: any } | null): obj is candle => {
  if (!obj?.__typename) throw new Error('__typename is missing in "iscandle"')
  return candle_possibleTypes.includes(obj.__typename)
}



const claim_possibleTypes: string[] = ['claim']
export const isclaim = (obj?: { __typename?: any } | null): obj is claim => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isclaim"')
  return claim_possibleTypes.includes(obj.__typename)
}



const currencyPair_possibleTypes: string[] = ['currencyPair']
export const iscurrencyPair = (obj?: { __typename?: any } | null): obj is currencyPair => {
  if (!obj?.__typename) throw new Error('__typename is missing in "iscurrencyPair"')
  return currencyPair_possibleTypes.includes(obj.__typename)
}



const deposit_possibleTypes: string[] = ['deposit']
export const isdeposit = (obj?: { __typename?: any } | null): obj is deposit => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdeposit"')
  return deposit_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_possibleTypes: string[] = ['dipdup_contract']
export const isdipdup_contract = (obj?: { __typename?: any } | null): obj is dipdup_contract => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract"')
  return dipdup_contract_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_metadata_possibleTypes: string[] = ['dipdup_contract_metadata']
export const isdipdup_contract_metadata = (obj?: { __typename?: any } | null): obj is dipdup_contract_metadata => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract_metadata"')
  return dipdup_contract_metadata_possibleTypes.includes(obj.__typename)
}



const dipdup_head_possibleTypes: string[] = ['dipdup_head']
export const isdipdup_head = (obj?: { __typename?: any } | null): obj is dipdup_head => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head"')
  return dipdup_head_possibleTypes.includes(obj.__typename)
}



const dipdup_head_status_possibleTypes: string[] = ['dipdup_head_status']
export const isdipdup_head_status = (obj?: { __typename?: any } | null): obj is dipdup_head_status => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_status"')
  return dipdup_head_status_possibleTypes.includes(obj.__typename)
}



const dipdup_index_possibleTypes: string[] = ['dipdup_index']
export const isdipdup_index = (obj?: { __typename?: any } | null): obj is dipdup_index => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index"')
  return dipdup_index_possibleTypes.includes(obj.__typename)
}



const dipdup_model_update_possibleTypes: string[] = ['dipdup_model_update']
export const isdipdup_model_update = (obj?: { __typename?: any } | null): obj is dipdup_model_update => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_model_update"')
  return dipdup_model_update_possibleTypes.includes(obj.__typename)
}



const dipdup_schema_possibleTypes: string[] = ['dipdup_schema']
export const isdipdup_schema = (obj?: { __typename?: any } | null): obj is dipdup_schema => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_schema"')
  return dipdup_schema_possibleTypes.includes(obj.__typename)
}



const dipdup_token_metadata_possibleTypes: string[] = ['dipdup_token_metadata']
export const isdipdup_token_metadata = (obj?: { __typename?: any } | null): obj is dipdup_token_metadata => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_token_metadata"')
  return dipdup_token_metadata_possibleTypes.includes(obj.__typename)
}



const entry_liquidity_possibleTypes: string[] = ['entry_liquidity']
export const isentry_liquidity = (obj?: { __typename?: any } | null): obj is entry_liquidity => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isentry_liquidity"')
  return entry_liquidity_possibleTypes.includes(obj.__typename)
}



const event_possibleTypes: string[] = ['event']
export const isevent = (obj?: { __typename?: any } | null): obj is event => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isevent"')
  return event_possibleTypes.includes(obj.__typename)
}



const merged_candles_possibleTypes: string[] = ['merged_candles']
export const ismerged_candles = (obj?: { __typename?: any } | null): obj is merged_candles => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismerged_candles"')
  return merged_candles_possibleTypes.includes(obj.__typename)
}



const pool_possibleTypes: string[] = ['pool']
export const ispool = (obj?: { __typename?: any } | null): obj is pool => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ispool"')
  return pool_possibleTypes.includes(obj.__typename)
}



const pool_event_possibleTypes: string[] = ['pool_event']
export const ispool_event = (obj?: { __typename?: any } | null): obj is pool_event => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ispool_event"')
  return pool_event_possibleTypes.includes(obj.__typename)
}



const pool_line_possibleTypes: string[] = ['pool_line']
export const ispool_line = (obj?: { __typename?: any } | null): obj is pool_line => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ispool_line"')
  return pool_line_possibleTypes.includes(obj.__typename)
}



const pool_position_possibleTypes: string[] = ['pool_position']
export const ispool_position = (obj?: { __typename?: any } | null): obj is pool_position => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ispool_position"')
  return pool_position_possibleTypes.includes(obj.__typename)
}



const pool_state_possibleTypes: string[] = ['pool_state']
export const ispool_state = (obj?: { __typename?: any } | null): obj is pool_state => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ispool_state"')
  return pool_state_possibleTypes.includes(obj.__typename)
}



const position_possibleTypes: string[] = ['position']
export const isposition = (obj?: { __typename?: any } | null): obj is position => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isposition"')
  return position_possibleTypes.includes(obj.__typename)
}



const query_root_possibleTypes: string[] = ['query_root']
export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"')
  return query_root_possibleTypes.includes(obj.__typename)
}



const quotesWma_possibleTypes: string[] = ['quotesWma']
export const isquotesWma = (obj?: { __typename?: any } | null): obj is quotesWma => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isquotesWma"')
  return quotesWma_possibleTypes.includes(obj.__typename)
}



const quotesWma_15m_possibleTypes: string[] = ['quotesWma_15m']
export const isquotesWma_15m = (obj?: { __typename?: any } | null): obj is quotesWma_15m => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isquotesWma_15m"')
  return quotesWma_15m_possibleTypes.includes(obj.__typename)
}



const subscription_root_possibleTypes: string[] = ['subscription_root']
export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"')
  return subscription_root_possibleTypes.includes(obj.__typename)
}



const total_value_locked_possibleTypes: string[] = ['total_value_locked']
export const istotal_value_locked = (obj?: { __typename?: any } | null): obj is total_value_locked => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istotal_value_locked"')
  return total_value_locked_possibleTypes.includes(obj.__typename)
}



const user_possibleTypes: string[] = ['user']
export const isuser = (obj?: { __typename?: any } | null): obj is user => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser"')
  return user_possibleTypes.includes(obj.__typename)
}



const withdrawal_possibleTypes: string[] = ['withdrawal']
export const iswithdrawal = (obj?: { __typename?: any } | null): obj is withdrawal => {
  if (!obj?.__typename) throw new Error('__typename is missing in "iswithdrawal"')
  return withdrawal_possibleTypes.includes(obj.__typename)
}



/** columns and relationships of "bet" */
export interface betPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    createdTime: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    
/** An object relationship */
event: (eventPromiseChain & {get: <R extends eventRequest>(request: R, defaultValue?: FieldsSelection<event, R>) => Promise<FieldsSelection<event, R>>}),
    eventId: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    opgHash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    reward: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    
/** ABOVE_EQ: ABOVE_EQ\nBELOW: BELOW */
side: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An object relationship */
user: (userPromiseChain & {get: <R extends userRequest>(request: R, defaultValue?: FieldsSelection<user, R>) => Promise<FieldsSelection<user, R>>}),
    userId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "bet" */
export interface betObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    createdTime: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    
/** An object relationship */
event: (eventObservableChain & {get: <R extends eventRequest>(request: R, defaultValue?: FieldsSelection<event, R>) => Observable<FieldsSelection<event, R>>}),
    eventId: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    opgHash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    reward: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    
/** ABOVE_EQ: ABOVE_EQ\nBELOW: BELOW */
side: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An object relationship */
user: (userObservableChain & {get: <R extends userRequest>(request: R, defaultValue?: FieldsSelection<user, R>) => Observable<FieldsSelection<user, R>>}),
    userId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** columns and relationships of "candle" */
export interface candlePromiseChain{
    close: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    
/** An object relationship */
currencyPair: (currencyPairPromiseChain & {get: <R extends currencyPairRequest>(request: R, defaultValue?: FieldsSelection<currencyPair, R>) => Promise<FieldsSelection<currencyPair, R>>}),
    currencyPairId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    high: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    
/** ONE_MINUTE: ONE_MINUTE\nFIVE_MINUTES: FIVE_MINUTES\nFIFTEEN_MINUTES: FIFTEEN_MINUTES\nONE_HOUR: ONE_HOUR\nSIX_HOURS: SIX_HOURS\nONE_DAY: ONE_DAY */
interval: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    low: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    open: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    since: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    
/** HARBINGER: HARBINGER\nCOINBASE: COINBASE\nMERGED: MERGED */
source: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    until: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    volume: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>})
}


/** columns and relationships of "candle" */
export interface candleObservableChain{
    close: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    
/** An object relationship */
currencyPair: (currencyPairObservableChain & {get: <R extends currencyPairRequest>(request: R, defaultValue?: FieldsSelection<currencyPair, R>) => Observable<FieldsSelection<currencyPair, R>>}),
    currencyPairId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    high: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    
/** ONE_MINUTE: ONE_MINUTE\nFIVE_MINUTES: FIVE_MINUTES\nFIFTEEN_MINUTES: FIFTEEN_MINUTES\nONE_HOUR: ONE_HOUR\nSIX_HOURS: SIX_HOURS\nONE_DAY: ONE_DAY */
interval: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    low: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    open: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    since: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    
/** HARBINGER: HARBINGER\nCOINBASE: COINBASE\nMERGED: MERGED */
source: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    until: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    volume: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>})
}


/** columns and relationships of "claim" */
export interface claimPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    
/** An object relationship */
event: (pool_eventPromiseChain & {get: <R extends pool_eventRequest>(request: R, defaultValue?: FieldsSelection<pool_event, R>) => Promise<FieldsSelection<pool_event, R>>}),
    eventId: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** An object relationship */
pool: (poolPromiseChain & {get: <R extends poolRequest>(request: R, defaultValue?: FieldsSelection<pool, R>) => Promise<FieldsSelection<pool, R>>}),
    poolId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An object relationship */
position: (pool_positionPromiseChain & {get: <R extends pool_positionRequest>(request: R, defaultValue?: FieldsSelection<pool_position, R>) => Promise<FieldsSelection<pool_position, R>>}),
    positionId: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    
/** An array relationship */
states: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_state_order_by[] | null),
/** filter the rows returned */
where?: (pool_state_bool_exp | null)}) => {get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Promise<FieldsSelection<pool_state, R>[]>})&({get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Promise<FieldsSelection<pool_state, R>[]>}),
    
/** An object relationship */
user: (userPromiseChain & {get: <R extends userRequest>(request: R, defaultValue?: FieldsSelection<user, R>) => Promise<FieldsSelection<user, R>>}),
    userId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    withdrawn: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>})
}


/** columns and relationships of "claim" */
export interface claimObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    
/** An object relationship */
event: (pool_eventObservableChain & {get: <R extends pool_eventRequest>(request: R, defaultValue?: FieldsSelection<pool_event, R>) => Observable<FieldsSelection<pool_event, R>>}),
    eventId: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** An object relationship */
pool: (poolObservableChain & {get: <R extends poolRequest>(request: R, defaultValue?: FieldsSelection<pool, R>) => Observable<FieldsSelection<pool, R>>}),
    poolId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An object relationship */
position: (pool_positionObservableChain & {get: <R extends pool_positionRequest>(request: R, defaultValue?: FieldsSelection<pool_position, R>) => Observable<FieldsSelection<pool_position, R>>}),
    positionId: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    
/** An array relationship */
states: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_state_order_by[] | null),
/** filter the rows returned */
where?: (pool_state_bool_exp | null)}) => {get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Observable<FieldsSelection<pool_state, R>[]>})&({get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Observable<FieldsSelection<pool_state, R>[]>}),
    
/** An object relationship */
user: (userObservableChain & {get: <R extends userRequest>(request: R, defaultValue?: FieldsSelection<user, R>) => Observable<FieldsSelection<user, R>>}),
    userId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    withdrawn: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>})
}


/** columns and relationships of "currencyPair" */
export interface currencyPairPromiseChain{
    
/** An array relationship */
candles: ((args?: {
/** distinct select on columns */
distinct_on?: (candle_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (candle_order_by[] | null),
/** filter the rows returned */
where?: (candle_bool_exp | null)}) => {get: <R extends candleRequest>(request: R, defaultValue?: FieldsSelection<candle, R>[]) => Promise<FieldsSelection<candle, R>[]>})&({get: <R extends candleRequest>(request: R, defaultValue?: FieldsSelection<candle, R>[]) => Promise<FieldsSelection<candle, R>[]>}),
    
/** An array relationship */
events: ((args?: {
/** distinct select on columns */
distinct_on?: (event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (event_order_by[] | null),
/** filter the rows returned */
where?: (event_bool_exp | null)}) => {get: <R extends eventRequest>(request: R, defaultValue?: FieldsSelection<event, R>[]) => Promise<FieldsSelection<event, R>[]>})&({get: <R extends eventRequest>(request: R, defaultValue?: FieldsSelection<event, R>[]) => Promise<FieldsSelection<event, R>[]>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** An array relationship */
poolLines: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_line_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_line_order_by[] | null),
/** filter the rows returned */
where?: (pool_line_bool_exp | null)}) => {get: <R extends pool_lineRequest>(request: R, defaultValue?: FieldsSelection<pool_line, R>[]) => Promise<FieldsSelection<pool_line, R>[]>})&({get: <R extends pool_lineRequest>(request: R, defaultValue?: FieldsSelection<pool_line, R>[]) => Promise<FieldsSelection<pool_line, R>[]>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    totalEvents: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    totalValueLocked: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    totalVolume: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>})
}


/** columns and relationships of "currencyPair" */
export interface currencyPairObservableChain{
    
/** An array relationship */
candles: ((args?: {
/** distinct select on columns */
distinct_on?: (candle_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (candle_order_by[] | null),
/** filter the rows returned */
where?: (candle_bool_exp | null)}) => {get: <R extends candleRequest>(request: R, defaultValue?: FieldsSelection<candle, R>[]) => Observable<FieldsSelection<candle, R>[]>})&({get: <R extends candleRequest>(request: R, defaultValue?: FieldsSelection<candle, R>[]) => Observable<FieldsSelection<candle, R>[]>}),
    
/** An array relationship */
events: ((args?: {
/** distinct select on columns */
distinct_on?: (event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (event_order_by[] | null),
/** filter the rows returned */
where?: (event_bool_exp | null)}) => {get: <R extends eventRequest>(request: R, defaultValue?: FieldsSelection<event, R>[]) => Observable<FieldsSelection<event, R>[]>})&({get: <R extends eventRequest>(request: R, defaultValue?: FieldsSelection<event, R>[]) => Observable<FieldsSelection<event, R>[]>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** An array relationship */
poolLines: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_line_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_line_order_by[] | null),
/** filter the rows returned */
where?: (pool_line_bool_exp | null)}) => {get: <R extends pool_lineRequest>(request: R, defaultValue?: FieldsSelection<pool_line, R>[]) => Observable<FieldsSelection<pool_line, R>[]>})&({get: <R extends pool_lineRequest>(request: R, defaultValue?: FieldsSelection<pool_line, R>[]) => Observable<FieldsSelection<pool_line, R>[]>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    totalEvents: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    totalValueLocked: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    totalVolume: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>})
}


/** columns and relationships of "deposit" */
export interface depositPromiseChain{
    amountAboveEq: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    amountBelow: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    createdTime: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    
/** An object relationship */
event: (eventPromiseChain & {get: <R extends eventRequest>(request: R, defaultValue?: FieldsSelection<event, R>) => Promise<FieldsSelection<event, R>>}),
    eventId: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    opgHash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    shares: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    
/** An object relationship */
user: (userPromiseChain & {get: <R extends userRequest>(request: R, defaultValue?: FieldsSelection<user, R>) => Promise<FieldsSelection<user, R>>}),
    userId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "deposit" */
export interface depositObservableChain{
    amountAboveEq: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    amountBelow: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    createdTime: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    
/** An object relationship */
event: (eventObservableChain & {get: <R extends eventRequest>(request: R, defaultValue?: FieldsSelection<event, R>) => Observable<FieldsSelection<event, R>>}),
    eventId: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    opgHash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    shares: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    
/** An object relationship */
user: (userObservableChain & {get: <R extends userRequest>(request: R, defaultValue?: FieldsSelection<user, R>) => Observable<FieldsSelection<user, R>>}),
    userId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** columns and relationships of "dipdup_contract" */
export interface dipdup_contractPromiseChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    typename: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_contract" */
export interface dipdup_contractObservableChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    typename: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_contract_metadata" */
export interface dipdup_contract_metadataPromiseChain{
    contract: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    metadata: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Promise<Scalars['jsonb']>})&({get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Promise<Scalars['jsonb']>}),
    network: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updateId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_contract_metadata" */
export interface dipdup_contract_metadataObservableChain{
    contract: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    metadata: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Observable<Scalars['jsonb']>})&({get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Observable<Scalars['jsonb']>}),
    network: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updateId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_head" */
export interface dipdup_headPromiseChain{
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_head" */
export interface dipdup_headObservableChain{
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_head_status" */
export interface dipdup_head_statusPromiseChain{
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** columns and relationships of "dipdup_head_status" */
export interface dipdup_head_statusObservableChain{
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** columns and relationships of "dipdup_index" */
export interface dipdup_indexPromiseChain{
    configHash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
status: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    template: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    templateValues: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Promise<(Scalars['jsonb'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Promise<(Scalars['jsonb'] | undefined)>}),
    
/** operation: operation\nbig_map: big_map\nhead: head\ntoken_transfer: token_transfer\nevent: event */
type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_index" */
export interface dipdup_indexObservableChain{
    configHash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
status: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    template: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    templateValues: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Observable<(Scalars['jsonb'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Observable<(Scalars['jsonb'] | undefined)>}),
    
/** operation: operation\nbig_map: big_map\nhead: head\ntoken_transfer: token_transfer\nevent: event */
type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** Model update created within versioned transactions */
export interface dipdup_model_updatePromiseChain{
    
/** INSERT: INSERT\nUPDATE: UPDATE\nDELETE: DELETE */
action: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    data: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Promise<(Scalars['jsonb'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Promise<(Scalars['jsonb'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    index: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    modelName: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    modelPk: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** Model update created within versioned transactions */
export interface dipdup_model_updateObservableChain{
    
/** INSERT: INSERT\nUPDATE: UPDATE\nDELETE: DELETE */
action: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    data: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Observable<(Scalars['jsonb'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Observable<(Scalars['jsonb'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    index: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    modelName: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    modelPk: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_schema" */
export interface dipdup_schemaPromiseChain{
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** manual: manual\nmigration: migration\nrollback: rollback\nconfig_modified: config_modified\nschema_modified: schema_modified */
reindex: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_schema" */
export interface dipdup_schemaObservableChain{
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** manual: manual\nmigration: migration\nrollback: rollback\nconfig_modified: config_modified\nschema_modified: schema_modified */
reindex: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_token_metadata" */
export interface dipdup_token_metadataPromiseChain{
    contract: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    metadata: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Promise<Scalars['jsonb']>})&({get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Promise<Scalars['jsonb']>}),
    network: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updateId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_token_metadata" */
export interface dipdup_token_metadataObservableChain{
    contract: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    metadata: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Observable<Scalars['jsonb']>})&({get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Observable<Scalars['jsonb']>}),
    network: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updateId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** columns and relationships of "entry_liquidity" */
export interface entry_liquidityPromiseChain{
    acceptTime: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    entryId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** An object relationship */
pool: (poolPromiseChain & {get: <R extends poolRequest>(request: R, defaultValue?: FieldsSelection<pool, R>) => Promise<FieldsSelection<pool, R>>}),
    poolEntryId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    poolId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An object relationship */
position: (pool_positionPromiseChain & {get: <R extends pool_positionRequest>(request: R, defaultValue?: (FieldsSelection<pool_position, R> | undefined)) => Promise<(FieldsSelection<pool_position, R> | undefined)>}),
    positionId: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>}),
    
/** An array relationship */
states: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_state_order_by[] | null),
/** filter the rows returned */
where?: (pool_state_bool_exp | null)}) => {get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Promise<FieldsSelection<pool_state, R>[]>})&({get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Promise<FieldsSelection<pool_state, R>[]>}),
    
/** PENDING: PENDING\nAPPROVED: APPROVED\nCANCELED: CANCELED */
status: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An object relationship */
user: (userPromiseChain & {get: <R extends userRequest>(request: R, defaultValue?: FieldsSelection<user, R>) => Promise<FieldsSelection<user, R>>}),
    userId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "entry_liquidity" */
export interface entry_liquidityObservableChain{
    acceptTime: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    entryId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** An object relationship */
pool: (poolObservableChain & {get: <R extends poolRequest>(request: R, defaultValue?: FieldsSelection<pool, R>) => Observable<FieldsSelection<pool, R>>}),
    poolEntryId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    poolId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An object relationship */
position: (pool_positionObservableChain & {get: <R extends pool_positionRequest>(request: R, defaultValue?: (FieldsSelection<pool_position, R> | undefined)) => Observable<(FieldsSelection<pool_position, R> | undefined)>}),
    positionId: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>}),
    
/** An array relationship */
states: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_state_order_by[] | null),
/** filter the rows returned */
where?: (pool_state_bool_exp | null)}) => {get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Observable<FieldsSelection<pool_state, R>[]>})&({get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Observable<FieldsSelection<pool_state, R>[]>}),
    
/** PENDING: PENDING\nAPPROVED: APPROVED\nCANCELED: CANCELED */
status: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An object relationship */
user: (userObservableChain & {get: <R extends userRequest>(request: R, defaultValue?: FieldsSelection<user, R>) => Observable<FieldsSelection<user, R>>}),
    userId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** columns and relationships of "event" */
export interface eventPromiseChain{
    
/** An array relationship */
bets: ((args?: {
/** distinct select on columns */
distinct_on?: (bet_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (bet_order_by[] | null),
/** filter the rows returned */
where?: (bet_bool_exp | null)}) => {get: <R extends betRequest>(request: R, defaultValue?: FieldsSelection<bet, R>[]) => Promise<FieldsSelection<bet, R>[]>})&({get: <R extends betRequest>(request: R, defaultValue?: FieldsSelection<bet, R>[]) => Promise<FieldsSelection<bet, R>[]>}),
    betsCloseTime: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    closedDynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    closedOracleTime: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    closedRate: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    createdTime: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    
/** An object relationship */
creator: (userPromiseChain & {get: <R extends userRequest>(request: R, defaultValue?: FieldsSelection<user, R>) => Promise<FieldsSelection<user, R>>}),
    creatorId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An object relationship */
currencyPair: (currencyPairPromiseChain & {get: <R extends currencyPairRequest>(request: R, defaultValue?: FieldsSelection<currencyPair, R>) => Promise<FieldsSelection<currencyPair, R>>}),
    currencyPairId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** An array relationship */
deposits: ((args?: {
/** distinct select on columns */
distinct_on?: (deposit_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (deposit_order_by[] | null),
/** filter the rows returned */
where?: (deposit_bool_exp | null)}) => {get: <R extends depositRequest>(request: R, defaultValue?: FieldsSelection<deposit, R>[]) => Promise<FieldsSelection<deposit, R>[]>})&({get: <R extends depositRequest>(request: R, defaultValue?: FieldsSelection<deposit, R>[]) => Promise<FieldsSelection<deposit, R>[]>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    liquidityPercent: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    measureOracleStartTime: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    measurePeriod: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    poolAboveEq: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    poolBelow: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    
/** An array relationship */
poolEventData: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_event_order_by[] | null),
/** filter the rows returned */
where?: (pool_event_bool_exp | null)}) => {get: <R extends pool_eventRequest>(request: R, defaultValue?: FieldsSelection<pool_event, R>[]) => Promise<FieldsSelection<pool_event, R>[]>})&({get: <R extends pool_eventRequest>(request: R, defaultValue?: FieldsSelection<pool_event, R>[]) => Promise<FieldsSelection<pool_event, R>[]>}),
    
/** An array relationship */
positions: ((args?: {
/** distinct select on columns */
distinct_on?: (position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (position_order_by[] | null),
/** filter the rows returned */
where?: (position_bool_exp | null)}) => {get: <R extends positionRequest>(request: R, defaultValue?: FieldsSelection<position, R>[]) => Promise<FieldsSelection<position, R>[]>})&({get: <R extends positionRequest>(request: R, defaultValue?: FieldsSelection<position, R>[]) => Promise<FieldsSelection<position, R>[]>}),
    startRate: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    
/** NEW: NEW\nSTARTED: STARTED\nFINISHED: FINISHED\nCANCELED: CANCELED */
status: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    targetDynamics: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    totalBetsAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    totalLiquidityProvided: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    totalLiquidityShares: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    totalValueLocked: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    
/** ABOVE_EQ: ABOVE_EQ\nBELOW: BELOW */
winnerBets: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** An array relationship */
withdrawals: ((args?: {
/** distinct select on columns */
distinct_on?: (withdrawal_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (withdrawal_order_by[] | null),
/** filter the rows returned */
where?: (withdrawal_bool_exp | null)}) => {get: <R extends withdrawalRequest>(request: R, defaultValue?: FieldsSelection<withdrawal, R>[]) => Promise<FieldsSelection<withdrawal, R>[]>})&({get: <R extends withdrawalRequest>(request: R, defaultValue?: FieldsSelection<withdrawal, R>[]) => Promise<FieldsSelection<withdrawal, R>[]>})
}


/** columns and relationships of "event" */
export interface eventObservableChain{
    
/** An array relationship */
bets: ((args?: {
/** distinct select on columns */
distinct_on?: (bet_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (bet_order_by[] | null),
/** filter the rows returned */
where?: (bet_bool_exp | null)}) => {get: <R extends betRequest>(request: R, defaultValue?: FieldsSelection<bet, R>[]) => Observable<FieldsSelection<bet, R>[]>})&({get: <R extends betRequest>(request: R, defaultValue?: FieldsSelection<bet, R>[]) => Observable<FieldsSelection<bet, R>[]>}),
    betsCloseTime: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    closedDynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    closedOracleTime: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    closedRate: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    createdTime: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    
/** An object relationship */
creator: (userObservableChain & {get: <R extends userRequest>(request: R, defaultValue?: FieldsSelection<user, R>) => Observable<FieldsSelection<user, R>>}),
    creatorId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An object relationship */
currencyPair: (currencyPairObservableChain & {get: <R extends currencyPairRequest>(request: R, defaultValue?: FieldsSelection<currencyPair, R>) => Observable<FieldsSelection<currencyPair, R>>}),
    currencyPairId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** An array relationship */
deposits: ((args?: {
/** distinct select on columns */
distinct_on?: (deposit_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (deposit_order_by[] | null),
/** filter the rows returned */
where?: (deposit_bool_exp | null)}) => {get: <R extends depositRequest>(request: R, defaultValue?: FieldsSelection<deposit, R>[]) => Observable<FieldsSelection<deposit, R>[]>})&({get: <R extends depositRequest>(request: R, defaultValue?: FieldsSelection<deposit, R>[]) => Observable<FieldsSelection<deposit, R>[]>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    liquidityPercent: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    measureOracleStartTime: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    measurePeriod: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    poolAboveEq: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    poolBelow: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    
/** An array relationship */
poolEventData: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_event_order_by[] | null),
/** filter the rows returned */
where?: (pool_event_bool_exp | null)}) => {get: <R extends pool_eventRequest>(request: R, defaultValue?: FieldsSelection<pool_event, R>[]) => Observable<FieldsSelection<pool_event, R>[]>})&({get: <R extends pool_eventRequest>(request: R, defaultValue?: FieldsSelection<pool_event, R>[]) => Observable<FieldsSelection<pool_event, R>[]>}),
    
/** An array relationship */
positions: ((args?: {
/** distinct select on columns */
distinct_on?: (position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (position_order_by[] | null),
/** filter the rows returned */
where?: (position_bool_exp | null)}) => {get: <R extends positionRequest>(request: R, defaultValue?: FieldsSelection<position, R>[]) => Observable<FieldsSelection<position, R>[]>})&({get: <R extends positionRequest>(request: R, defaultValue?: FieldsSelection<position, R>[]) => Observable<FieldsSelection<position, R>[]>}),
    startRate: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    
/** NEW: NEW\nSTARTED: STARTED\nFINISHED: FINISHED\nCANCELED: CANCELED */
status: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    targetDynamics: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    totalBetsAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    totalLiquidityProvided: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    totalLiquidityShares: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    totalValueLocked: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    
/** ABOVE_EQ: ABOVE_EQ\nBELOW: BELOW */
winnerBets: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** An array relationship */
withdrawals: ((args?: {
/** distinct select on columns */
distinct_on?: (withdrawal_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (withdrawal_order_by[] | null),
/** filter the rows returned */
where?: (withdrawal_bool_exp | null)}) => {get: <R extends withdrawalRequest>(request: R, defaultValue?: FieldsSelection<withdrawal, R>[]) => Observable<FieldsSelection<withdrawal, R>[]>})&({get: <R extends withdrawalRequest>(request: R, defaultValue?: FieldsSelection<withdrawal, R>[]) => Observable<FieldsSelection<withdrawal, R>[]>})
}


/** columns and relationships of "merged_candles" */
export interface merged_candlesPromiseChain{
    close: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    currencyPairId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    high: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    low: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    open: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    source: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    until: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    volume: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>})
}


/** columns and relationships of "merged_candles" */
export interface merged_candlesObservableChain{
    close: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    currencyPairId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    high: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    low: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    open: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    source: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    until: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    volume: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>})
}


/** columns and relationships of "pool" */
export interface poolPromiseChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An array relationship */
claims: ((args?: {
/** distinct select on columns */
distinct_on?: (claim_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (claim_order_by[] | null),
/** filter the rows returned */
where?: (claim_bool_exp | null)}) => {get: <R extends claimRequest>(request: R, defaultValue?: FieldsSelection<claim, R>[]) => Promise<FieldsSelection<claim, R>[]>})&({get: <R extends claimRequest>(request: R, defaultValue?: FieldsSelection<claim, R>[]) => Promise<FieldsSelection<claim, R>[]>}),
    
/** An array relationship */
entries: ((args?: {
/** distinct select on columns */
distinct_on?: (entry_liquidity_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (entry_liquidity_order_by[] | null),
/** filter the rows returned */
where?: (entry_liquidity_bool_exp | null)}) => {get: <R extends entry_liquidityRequest>(request: R, defaultValue?: FieldsSelection<entry_liquidity, R>[]) => Promise<FieldsSelection<entry_liquidity, R>[]>})&({get: <R extends entry_liquidityRequest>(request: R, defaultValue?: FieldsSelection<entry_liquidity, R>[]) => Promise<FieldsSelection<entry_liquidity, R>[]>}),
    entryLockPeriod: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    
/** An array relationship */
events: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_event_order_by[] | null),
/** filter the rows returned */
where?: (pool_event_bool_exp | null)}) => {get: <R extends pool_eventRequest>(request: R, defaultValue?: FieldsSelection<pool_event, R>[]) => Promise<FieldsSelection<pool_event, R>[]>})&({get: <R extends pool_eventRequest>(request: R, defaultValue?: FieldsSelection<pool_event, R>[]) => Promise<FieldsSelection<pool_event, R>[]>}),
    isDepositPaused: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    isDisbandAllow: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** An array relationship */
poolLines: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_line_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_line_order_by[] | null),
/** filter the rows returned */
where?: (pool_line_bool_exp | null)}) => {get: <R extends pool_lineRequest>(request: R, defaultValue?: FieldsSelection<pool_line, R>[]) => Promise<FieldsSelection<pool_line, R>[]>})&({get: <R extends pool_lineRequest>(request: R, defaultValue?: FieldsSelection<pool_line, R>[]) => Promise<FieldsSelection<pool_line, R>[]>}),
    
/** An array relationship */
poolPositions: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_position_order_by[] | null),
/** filter the rows returned */
where?: (pool_position_bool_exp | null)}) => {get: <R extends pool_positionRequest>(request: R, defaultValue?: FieldsSelection<pool_position, R>[]) => Promise<FieldsSelection<pool_position, R>[]>})&({get: <R extends pool_positionRequest>(request: R, defaultValue?: FieldsSelection<pool_position, R>[]) => Promise<FieldsSelection<pool_position, R>[]>}),
    
/** An array relationship */
states: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_state_order_by[] | null),
/** filter the rows returned */
where?: (pool_state_bool_exp | null)}) => {get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Promise<FieldsSelection<pool_state, R>[]>})&({get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Promise<FieldsSelection<pool_state, R>[]>}),
    version: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** columns and relationships of "pool" */
export interface poolObservableChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An array relationship */
claims: ((args?: {
/** distinct select on columns */
distinct_on?: (claim_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (claim_order_by[] | null),
/** filter the rows returned */
where?: (claim_bool_exp | null)}) => {get: <R extends claimRequest>(request: R, defaultValue?: FieldsSelection<claim, R>[]) => Observable<FieldsSelection<claim, R>[]>})&({get: <R extends claimRequest>(request: R, defaultValue?: FieldsSelection<claim, R>[]) => Observable<FieldsSelection<claim, R>[]>}),
    
/** An array relationship */
entries: ((args?: {
/** distinct select on columns */
distinct_on?: (entry_liquidity_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (entry_liquidity_order_by[] | null),
/** filter the rows returned */
where?: (entry_liquidity_bool_exp | null)}) => {get: <R extends entry_liquidityRequest>(request: R, defaultValue?: FieldsSelection<entry_liquidity, R>[]) => Observable<FieldsSelection<entry_liquidity, R>[]>})&({get: <R extends entry_liquidityRequest>(request: R, defaultValue?: FieldsSelection<entry_liquidity, R>[]) => Observable<FieldsSelection<entry_liquidity, R>[]>}),
    entryLockPeriod: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    
/** An array relationship */
events: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_event_order_by[] | null),
/** filter the rows returned */
where?: (pool_event_bool_exp | null)}) => {get: <R extends pool_eventRequest>(request: R, defaultValue?: FieldsSelection<pool_event, R>[]) => Observable<FieldsSelection<pool_event, R>[]>})&({get: <R extends pool_eventRequest>(request: R, defaultValue?: FieldsSelection<pool_event, R>[]) => Observable<FieldsSelection<pool_event, R>[]>}),
    isDepositPaused: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    isDisbandAllow: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** An array relationship */
poolLines: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_line_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_line_order_by[] | null),
/** filter the rows returned */
where?: (pool_line_bool_exp | null)}) => {get: <R extends pool_lineRequest>(request: R, defaultValue?: FieldsSelection<pool_line, R>[]) => Observable<FieldsSelection<pool_line, R>[]>})&({get: <R extends pool_lineRequest>(request: R, defaultValue?: FieldsSelection<pool_line, R>[]) => Observable<FieldsSelection<pool_line, R>[]>}),
    
/** An array relationship */
poolPositions: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_position_order_by[] | null),
/** filter the rows returned */
where?: (pool_position_bool_exp | null)}) => {get: <R extends pool_positionRequest>(request: R, defaultValue?: FieldsSelection<pool_position, R>[]) => Observable<FieldsSelection<pool_position, R>[]>})&({get: <R extends pool_positionRequest>(request: R, defaultValue?: FieldsSelection<pool_position, R>[]) => Observable<FieldsSelection<pool_position, R>[]>}),
    
/** An array relationship */
states: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_state_order_by[] | null),
/** filter the rows returned */
where?: (pool_state_bool_exp | null)}) => {get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Observable<FieldsSelection<pool_state, R>[]>})&({get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Observable<FieldsSelection<pool_state, R>[]>}),
    version: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** columns and relationships of "pool_event" */
export interface pool_eventPromiseChain{
    claimed: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    
/** An array relationship */
claims: ((args?: {
/** distinct select on columns */
distinct_on?: (claim_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (claim_order_by[] | null),
/** filter the rows returned */
where?: (claim_bool_exp | null)}) => {get: <R extends claimRequest>(request: R, defaultValue?: FieldsSelection<claim, R>[]) => Promise<FieldsSelection<claim, R>[]>})&({get: <R extends claimRequest>(request: R, defaultValue?: FieldsSelection<claim, R>[]) => Promise<FieldsSelection<claim, R>[]>}),
    
/** An object relationship */
event: (eventPromiseChain & {get: <R extends eventRequest>(request: R, defaultValue?: (FieldsSelection<event, R> | undefined)) => Promise<(FieldsSelection<event, R> | undefined)>}),
    eventId: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    
/** An object relationship */
line: (pool_linePromiseChain & {get: <R extends pool_lineRequest>(request: R, defaultValue?: FieldsSelection<pool_line, R>) => Promise<FieldsSelection<pool_line, R>>}),
    lineId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An object relationship */
pool: (poolPromiseChain & {get: <R extends poolRequest>(request: R, defaultValue?: FieldsSelection<pool, R>) => Promise<FieldsSelection<pool, R>>}),
    poolId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    provided: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    result: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    
/** An array relationship */
states: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_state_order_by[] | null),
/** filter the rows returned */
where?: (pool_state_bool_exp | null)}) => {get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Promise<FieldsSelection<pool_state, R>[]>})&({get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Promise<FieldsSelection<pool_state, R>[]>})
}


/** columns and relationships of "pool_event" */
export interface pool_eventObservableChain{
    claimed: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    
/** An array relationship */
claims: ((args?: {
/** distinct select on columns */
distinct_on?: (claim_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (claim_order_by[] | null),
/** filter the rows returned */
where?: (claim_bool_exp | null)}) => {get: <R extends claimRequest>(request: R, defaultValue?: FieldsSelection<claim, R>[]) => Observable<FieldsSelection<claim, R>[]>})&({get: <R extends claimRequest>(request: R, defaultValue?: FieldsSelection<claim, R>[]) => Observable<FieldsSelection<claim, R>[]>}),
    
/** An object relationship */
event: (eventObservableChain & {get: <R extends eventRequest>(request: R, defaultValue?: (FieldsSelection<event, R> | undefined)) => Observable<(FieldsSelection<event, R> | undefined)>}),
    eventId: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    
/** An object relationship */
line: (pool_lineObservableChain & {get: <R extends pool_lineRequest>(request: R, defaultValue?: FieldsSelection<pool_line, R>) => Observable<FieldsSelection<pool_line, R>>}),
    lineId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An object relationship */
pool: (poolObservableChain & {get: <R extends poolRequest>(request: R, defaultValue?: FieldsSelection<pool, R>) => Observable<FieldsSelection<pool, R>>}),
    poolId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    provided: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    result: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    
/** An array relationship */
states: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_state_order_by[] | null),
/** filter the rows returned */
where?: (pool_state_bool_exp | null)}) => {get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Observable<FieldsSelection<pool_state, R>[]>})&({get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Observable<FieldsSelection<pool_state, R>[]>})
}


/** columns and relationships of "pool_line" */
export interface pool_linePromiseChain{
    
/** An object relationship */
currencyPair: (currencyPairPromiseChain & {get: <R extends currencyPairRequest>(request: R, defaultValue?: FieldsSelection<currencyPair, R>) => Promise<FieldsSelection<currencyPair, R>>}),
    currencyPairId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** An array relationship */
events: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_event_order_by[] | null),
/** filter the rows returned */
where?: (pool_event_bool_exp | null)}) => {get: <R extends pool_eventRequest>(request: R, defaultValue?: FieldsSelection<pool_event, R>[]) => Promise<FieldsSelection<pool_event, R>[]>})&({get: <R extends pool_eventRequest>(request: R, defaultValue?: FieldsSelection<pool_event, R>[]) => Promise<FieldsSelection<pool_event, R>[]>}),
    isPaused: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    lastBetsCloseTime: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    lineId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    liquidityPercent: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    maxEvents: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    measurePeriod: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    
/** An object relationship */
pool: (poolPromiseChain & {get: <R extends poolRequest>(request: R, defaultValue?: FieldsSelection<pool, R>) => Promise<FieldsSelection<pool, R>>}),
    poolId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    poolLineId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    rateAboveEq: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    rateBelow: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    targetDynamics: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>})
}


/** columns and relationships of "pool_line" */
export interface pool_lineObservableChain{
    
/** An object relationship */
currencyPair: (currencyPairObservableChain & {get: <R extends currencyPairRequest>(request: R, defaultValue?: FieldsSelection<currencyPair, R>) => Observable<FieldsSelection<currencyPair, R>>}),
    currencyPairId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** An array relationship */
events: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_event_order_by[] | null),
/** filter the rows returned */
where?: (pool_event_bool_exp | null)}) => {get: <R extends pool_eventRequest>(request: R, defaultValue?: FieldsSelection<pool_event, R>[]) => Observable<FieldsSelection<pool_event, R>[]>})&({get: <R extends pool_eventRequest>(request: R, defaultValue?: FieldsSelection<pool_event, R>[]) => Observable<FieldsSelection<pool_event, R>[]>}),
    isPaused: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    lastBetsCloseTime: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    lineId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    liquidityPercent: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    maxEvents: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    measurePeriod: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    
/** An object relationship */
pool: (poolObservableChain & {get: <R extends poolRequest>(request: R, defaultValue?: FieldsSelection<pool, R>) => Observable<FieldsSelection<pool, R>>}),
    poolId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    poolLineId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    rateAboveEq: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    rateBelow: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    targetDynamics: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>})
}


/** columns and relationships of "pool_position" */
export interface pool_positionPromiseChain{
    
/** An array relationship */
claims: ((args?: {
/** distinct select on columns */
distinct_on?: (claim_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (claim_order_by[] | null),
/** filter the rows returned */
where?: (claim_bool_exp | null)}) => {get: <R extends claimRequest>(request: R, defaultValue?: FieldsSelection<claim, R>[]) => Promise<FieldsSelection<claim, R>[]>})&({get: <R extends claimRequest>(request: R, defaultValue?: FieldsSelection<claim, R>[]) => Promise<FieldsSelection<claim, R>[]>}),
    depositedAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    
/** An array relationship */
entries: ((args?: {
/** distinct select on columns */
distinct_on?: (entry_liquidity_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (entry_liquidity_order_by[] | null),
/** filter the rows returned */
where?: (entry_liquidity_bool_exp | null)}) => {get: <R extends entry_liquidityRequest>(request: R, defaultValue?: FieldsSelection<entry_liquidity, R>[]) => Promise<FieldsSelection<entry_liquidity, R>[]>})&({get: <R extends entry_liquidityRequest>(request: R, defaultValue?: FieldsSelection<entry_liquidity, R>[]) => Promise<FieldsSelection<entry_liquidity, R>[]>}),
    entrySharePrice: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    lockedEstimateAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    
/** An object relationship */
pool: (poolPromiseChain & {get: <R extends poolRequest>(request: R, defaultValue?: FieldsSelection<pool, R>) => Promise<FieldsSelection<pool, R>>}),
    poolId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    realizedProfit: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    shares: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    
/** An object relationship */
user: (userPromiseChain & {get: <R extends userRequest>(request: R, defaultValue?: FieldsSelection<user, R>) => Promise<FieldsSelection<user, R>>}),
    userId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    withdrawnAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    withdrawnShares: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>})
}


/** columns and relationships of "pool_position" */
export interface pool_positionObservableChain{
    
/** An array relationship */
claims: ((args?: {
/** distinct select on columns */
distinct_on?: (claim_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (claim_order_by[] | null),
/** filter the rows returned */
where?: (claim_bool_exp | null)}) => {get: <R extends claimRequest>(request: R, defaultValue?: FieldsSelection<claim, R>[]) => Observable<FieldsSelection<claim, R>[]>})&({get: <R extends claimRequest>(request: R, defaultValue?: FieldsSelection<claim, R>[]) => Observable<FieldsSelection<claim, R>[]>}),
    depositedAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    
/** An array relationship */
entries: ((args?: {
/** distinct select on columns */
distinct_on?: (entry_liquidity_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (entry_liquidity_order_by[] | null),
/** filter the rows returned */
where?: (entry_liquidity_bool_exp | null)}) => {get: <R extends entry_liquidityRequest>(request: R, defaultValue?: FieldsSelection<entry_liquidity, R>[]) => Observable<FieldsSelection<entry_liquidity, R>[]>})&({get: <R extends entry_liquidityRequest>(request: R, defaultValue?: FieldsSelection<entry_liquidity, R>[]) => Observable<FieldsSelection<entry_liquidity, R>[]>}),
    entrySharePrice: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    lockedEstimateAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    
/** An object relationship */
pool: (poolObservableChain & {get: <R extends poolRequest>(request: R, defaultValue?: FieldsSelection<pool, R>) => Observable<FieldsSelection<pool, R>>}),
    poolId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    realizedProfit: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    shares: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    
/** An object relationship */
user: (userObservableChain & {get: <R extends userRequest>(request: R, defaultValue?: FieldsSelection<user, R>) => Observable<FieldsSelection<user, R>>}),
    userId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    withdrawnAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    withdrawnShares: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>})
}


/** columns and relationships of "pool_state" */
export interface pool_statePromiseChain{
    
/** EVENT_CREATED: EVENT_CREATED\nEVENT_FINISHED: EVENT_FINISHED\nUSER_DEPOSITED: USER_DEPOSITED\nLIQUIDITY_APPROVED: LIQUIDITY_APPROVED\nLIQUIDITY_CANCELED: LIQUIDITY_CANCELED\nUSER_CLAIMED: USER_CLAIMED\nUSER_WITHDRAWN: USER_WITHDRAWN\nRECEIVED_XTZ: RECEIVED_XTZ\nPOOL_ORIGINATED: POOL_ORIGINATED\nACCUMULATED_DUST: ACCUMULATED_DUST\nPOOL_DISBANDED: POOL_DISBANDED\nDEPOSITS_PAUSED: DEPOSITS_PAUSED\nDEPOSITS_UNPAUSED: DEPOSITS_UNPAUSED */
action: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    activeLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    activeLiquidityDiff: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    
/** An object relationship */
affectedClaim: (claimPromiseChain & {get: <R extends claimRequest>(request: R, defaultValue?: (FieldsSelection<claim, R> | undefined)) => Promise<(FieldsSelection<claim, R> | undefined)>}),
    affectedClaimId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    
/** An object relationship */
affectedEntry: (entry_liquidityPromiseChain & {get: <R extends entry_liquidityRequest>(request: R, defaultValue?: (FieldsSelection<entry_liquidity, R> | undefined)) => Promise<(FieldsSelection<entry_liquidity, R> | undefined)>}),
    affectedEntryId: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** An object relationship */
affectedEvent: (pool_eventPromiseChain & {get: <R extends pool_eventRequest>(request: R, defaultValue?: (FieldsSelection<pool_event, R> | undefined)) => Promise<(FieldsSelection<pool_event, R> | undefined)>}),
    affectedEventId: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>}),
    
/** An object relationship */
affectedUser: (userPromiseChain & {get: <R extends userRequest>(request: R, defaultValue?: (FieldsSelection<user, R> | undefined)) => Promise<(FieldsSelection<user, R> | undefined)>}),
    affectedUserId: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    counter: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    entryLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    entryLiquidityDiff: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    opgHash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An object relationship */
pool: (poolPromiseChain & {get: <R extends poolRequest>(request: R, defaultValue?: FieldsSelection<pool, R>) => Promise<FieldsSelection<pool, R>>}),
    poolId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    sharePrice: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    totalLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    totalLiquidityDiff: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    totalShares: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    totalSharesDiff: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    withdrawableLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    withdrawableLiquidityDiff: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>})
}


/** columns and relationships of "pool_state" */
export interface pool_stateObservableChain{
    
/** EVENT_CREATED: EVENT_CREATED\nEVENT_FINISHED: EVENT_FINISHED\nUSER_DEPOSITED: USER_DEPOSITED\nLIQUIDITY_APPROVED: LIQUIDITY_APPROVED\nLIQUIDITY_CANCELED: LIQUIDITY_CANCELED\nUSER_CLAIMED: USER_CLAIMED\nUSER_WITHDRAWN: USER_WITHDRAWN\nRECEIVED_XTZ: RECEIVED_XTZ\nPOOL_ORIGINATED: POOL_ORIGINATED\nACCUMULATED_DUST: ACCUMULATED_DUST\nPOOL_DISBANDED: POOL_DISBANDED\nDEPOSITS_PAUSED: DEPOSITS_PAUSED\nDEPOSITS_UNPAUSED: DEPOSITS_UNPAUSED */
action: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    activeLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    activeLiquidityDiff: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    
/** An object relationship */
affectedClaim: (claimObservableChain & {get: <R extends claimRequest>(request: R, defaultValue?: (FieldsSelection<claim, R> | undefined)) => Observable<(FieldsSelection<claim, R> | undefined)>}),
    affectedClaimId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    
/** An object relationship */
affectedEntry: (entry_liquidityObservableChain & {get: <R extends entry_liquidityRequest>(request: R, defaultValue?: (FieldsSelection<entry_liquidity, R> | undefined)) => Observable<(FieldsSelection<entry_liquidity, R> | undefined)>}),
    affectedEntryId: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** An object relationship */
affectedEvent: (pool_eventObservableChain & {get: <R extends pool_eventRequest>(request: R, defaultValue?: (FieldsSelection<pool_event, R> | undefined)) => Observable<(FieldsSelection<pool_event, R> | undefined)>}),
    affectedEventId: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>}),
    
/** An object relationship */
affectedUser: (userObservableChain & {get: <R extends userRequest>(request: R, defaultValue?: (FieldsSelection<user, R> | undefined)) => Observable<(FieldsSelection<user, R> | undefined)>}),
    affectedUserId: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    counter: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    entryLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    entryLiquidityDiff: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    opgHash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An object relationship */
pool: (poolObservableChain & {get: <R extends poolRequest>(request: R, defaultValue?: FieldsSelection<pool, R>) => Observable<FieldsSelection<pool, R>>}),
    poolId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    sharePrice: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    totalLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    totalLiquidityDiff: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    totalShares: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    totalSharesDiff: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    withdrawableLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    withdrawableLiquidityDiff: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>})
}


/** columns and relationships of "position" */
export interface positionPromiseChain{
    
/** An object relationship */
event: (eventPromiseChain & {get: <R extends eventRequest>(request: R, defaultValue?: FieldsSelection<event, R>) => Promise<FieldsSelection<event, R>>}),
    eventId: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    liquidityProvidedAboveEq: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    liquidityProvidedBelow: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    rewardAboveEq: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    rewardBelow: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    shares: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    
/** An object relationship */
user: (userPromiseChain & {get: <R extends userRequest>(request: R, defaultValue?: FieldsSelection<user, R>) => Promise<FieldsSelection<user, R>>}),
    userId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    value: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    withdrawn: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>})
}


/** columns and relationships of "position" */
export interface positionObservableChain{
    
/** An object relationship */
event: (eventObservableChain & {get: <R extends eventRequest>(request: R, defaultValue?: FieldsSelection<event, R>) => Observable<FieldsSelection<event, R>>}),
    eventId: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    liquidityProvidedAboveEq: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    liquidityProvidedBelow: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    rewardAboveEq: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    rewardBelow: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    shares: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    
/** An object relationship */
user: (userObservableChain & {get: <R extends userRequest>(request: R, defaultValue?: FieldsSelection<user, R>) => Observable<FieldsSelection<user, R>>}),
    userId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    value: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    withdrawn: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>})
}

export interface query_rootPromiseChain{
    
/** fetch data from the table: "bet" */
bet: ((args?: {
/** distinct select on columns */
distinct_on?: (bet_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (bet_order_by[] | null),
/** filter the rows returned */
where?: (bet_bool_exp | null)}) => {get: <R extends betRequest>(request: R, defaultValue?: FieldsSelection<bet, R>[]) => Promise<FieldsSelection<bet, R>[]>})&({get: <R extends betRequest>(request: R, defaultValue?: FieldsSelection<bet, R>[]) => Promise<FieldsSelection<bet, R>[]>}),
    
/** fetch data from the table: "bet" using primary key columns */
betByPk: ((args: {id: Scalars['bigint']}) => betPromiseChain & {get: <R extends betRequest>(request: R, defaultValue?: (FieldsSelection<bet, R> | undefined)) => Promise<(FieldsSelection<bet, R> | undefined)>}),
    
/** fetch data from the table: "candle" */
candle: ((args?: {
/** distinct select on columns */
distinct_on?: (candle_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (candle_order_by[] | null),
/** filter the rows returned */
where?: (candle_bool_exp | null)}) => {get: <R extends candleRequest>(request: R, defaultValue?: FieldsSelection<candle, R>[]) => Promise<FieldsSelection<candle, R>[]>})&({get: <R extends candleRequest>(request: R, defaultValue?: FieldsSelection<candle, R>[]) => Promise<FieldsSelection<candle, R>[]>}),
    
/** fetch data from the table: "candle" using primary key columns */
candleByPk: ((args: {id: Scalars['bigint']}) => candlePromiseChain & {get: <R extends candleRequest>(request: R, defaultValue?: (FieldsSelection<candle, R> | undefined)) => Promise<(FieldsSelection<candle, R> | undefined)>}),
    
/** fetch data from the table: "claim" */
claim: ((args?: {
/** distinct select on columns */
distinct_on?: (claim_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (claim_order_by[] | null),
/** filter the rows returned */
where?: (claim_bool_exp | null)}) => {get: <R extends claimRequest>(request: R, defaultValue?: FieldsSelection<claim, R>[]) => Promise<FieldsSelection<claim, R>[]>})&({get: <R extends claimRequest>(request: R, defaultValue?: FieldsSelection<claim, R>[]) => Promise<FieldsSelection<claim, R>[]>}),
    
/** fetch data from the table: "claim" using primary key columns */
claimByPk: ((args: {id: Scalars['Int']}) => claimPromiseChain & {get: <R extends claimRequest>(request: R, defaultValue?: (FieldsSelection<claim, R> | undefined)) => Promise<(FieldsSelection<claim, R> | undefined)>}),
    
/** fetch data from the table: "currencyPair" */
currencyPair: ((args?: {
/** distinct select on columns */
distinct_on?: (currencyPair_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (currencyPair_order_by[] | null),
/** filter the rows returned */
where?: (currencyPair_bool_exp | null)}) => {get: <R extends currencyPairRequest>(request: R, defaultValue?: FieldsSelection<currencyPair, R>[]) => Promise<FieldsSelection<currencyPair, R>[]>})&({get: <R extends currencyPairRequest>(request: R, defaultValue?: FieldsSelection<currencyPair, R>[]) => Promise<FieldsSelection<currencyPair, R>[]>}),
    
/** fetch data from the table: "currencyPair" using primary key columns */
currencyPairByPk: ((args: {id: Scalars['Int']}) => currencyPairPromiseChain & {get: <R extends currencyPairRequest>(request: R, defaultValue?: (FieldsSelection<currencyPair, R> | undefined)) => Promise<(FieldsSelection<currencyPair, R> | undefined)>}),
    
/** fetch data from the table: "deposit" */
deposit: ((args?: {
/** distinct select on columns */
distinct_on?: (deposit_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (deposit_order_by[] | null),
/** filter the rows returned */
where?: (deposit_bool_exp | null)}) => {get: <R extends depositRequest>(request: R, defaultValue?: FieldsSelection<deposit, R>[]) => Promise<FieldsSelection<deposit, R>[]>})&({get: <R extends depositRequest>(request: R, defaultValue?: FieldsSelection<deposit, R>[]) => Promise<FieldsSelection<deposit, R>[]>}),
    
/** fetch data from the table: "deposit" using primary key columns */
depositByPk: ((args: {id: Scalars['bigint']}) => depositPromiseChain & {get: <R extends depositRequest>(request: R, defaultValue?: (FieldsSelection<deposit, R> | undefined)) => Promise<(FieldsSelection<deposit, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_contract" */
dipdupContract: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>})&({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>}),
    
/** fetch data from the table: "dipdup_contract" using primary key columns */
dipdupContractByPk: ((args: {name: Scalars['String']}) => dipdup_contractPromiseChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_contract_metadata" */
dipdupContractMetadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_metadata_bool_exp | null)}) => {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Promise<FieldsSelection<dipdup_contract_metadata, R>[]>})&({get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Promise<FieldsSelection<dipdup_contract_metadata, R>[]>}),
    
/** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
dipdupContractMetadataByPk: ((args: {id: Scalars['Int']}) => dipdup_contract_metadataPromiseChain & {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_metadata, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head" */
dipdupHead: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => {get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>})&({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>}),
    
/** fetch data from the table: "dipdup_head" using primary key columns */
dipdupHeadByPk: ((args: {name: Scalars['String']}) => dipdup_headPromiseChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Promise<(FieldsSelection<dipdup_head, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head_status" */
dipdupHeadStatus: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_status_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_status_bool_exp | null)}) => {get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Promise<FieldsSelection<dipdup_head_status, R>[]>})&({get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Promise<FieldsSelection<dipdup_head_status, R>[]>}),
    
/** fetch data from the table: "dipdup_index" */
dipdupIndex: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>})&({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>}),
    
/** fetch data from the table: "dipdup_index" using primary key columns */
dipdupIndexByPk: ((args: {name: Scalars['String']}) => dipdup_indexPromiseChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Promise<(FieldsSelection<dipdup_index, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_model_update" */
dipdupModelUpdate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_model_update_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_model_update_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_model_update_bool_exp | null)}) => {get: <R extends dipdup_model_updateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_model_update, R>[]) => Promise<FieldsSelection<dipdup_model_update, R>[]>})&({get: <R extends dipdup_model_updateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_model_update, R>[]) => Promise<FieldsSelection<dipdup_model_update, R>[]>}),
    
/** fetch data from the table: "dipdup_model_update" using primary key columns */
dipdupModelUpdateByPk: ((args: {id: Scalars['Int']}) => dipdup_model_updatePromiseChain & {get: <R extends dipdup_model_updateRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_model_update, R> | undefined)) => Promise<(FieldsSelection<dipdup_model_update, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_schema" */
dipdupSchema: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>})&({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>}),
    
/** fetch data from the table: "dipdup_schema" using primary key columns */
dipdupSchemaByPk: ((args: {name: Scalars['String']}) => dipdup_schemaPromiseChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Promise<(FieldsSelection<dipdup_schema, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_token_metadata" */
dipdupTokenMetadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_token_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_token_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_token_metadata_bool_exp | null)}) => {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Promise<FieldsSelection<dipdup_token_metadata, R>[]>})&({get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Promise<FieldsSelection<dipdup_token_metadata, R>[]>}),
    
/** fetch data from the table: "dipdup_token_metadata" using primary key columns */
dipdupTokenMetadataByPk: ((args: {id: Scalars['Int']}) => dipdup_token_metadataPromiseChain & {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata, R> | undefined)) => Promise<(FieldsSelection<dipdup_token_metadata, R> | undefined)>}),
    
/** fetch data from the table: "entry_liquidity" */
entryLiquidity: ((args?: {
/** distinct select on columns */
distinct_on?: (entry_liquidity_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (entry_liquidity_order_by[] | null),
/** filter the rows returned */
where?: (entry_liquidity_bool_exp | null)}) => {get: <R extends entry_liquidityRequest>(request: R, defaultValue?: FieldsSelection<entry_liquidity, R>[]) => Promise<FieldsSelection<entry_liquidity, R>[]>})&({get: <R extends entry_liquidityRequest>(request: R, defaultValue?: FieldsSelection<entry_liquidity, R>[]) => Promise<FieldsSelection<entry_liquidity, R>[]>}),
    
/** fetch data from the table: "entry_liquidity" using primary key columns */
entryLiquidityByPk: ((args: {poolEntryId: Scalars['String']}) => entry_liquidityPromiseChain & {get: <R extends entry_liquidityRequest>(request: R, defaultValue?: (FieldsSelection<entry_liquidity, R> | undefined)) => Promise<(FieldsSelection<entry_liquidity, R> | undefined)>}),
    
/** fetch data from the table: "event" */
event: ((args?: {
/** distinct select on columns */
distinct_on?: (event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (event_order_by[] | null),
/** filter the rows returned */
where?: (event_bool_exp | null)}) => {get: <R extends eventRequest>(request: R, defaultValue?: FieldsSelection<event, R>[]) => Promise<FieldsSelection<event, R>[]>})&({get: <R extends eventRequest>(request: R, defaultValue?: FieldsSelection<event, R>[]) => Promise<FieldsSelection<event, R>[]>}),
    
/** fetch data from the table: "event" using primary key columns */
eventByPk: ((args: {id: Scalars['bigint']}) => eventPromiseChain & {get: <R extends eventRequest>(request: R, defaultValue?: (FieldsSelection<event, R> | undefined)) => Promise<(FieldsSelection<event, R> | undefined)>}),
    
/** fetch data from the table: "merged_candles" */
mergedCandles: ((args?: {
/** distinct select on columns */
distinct_on?: (merged_candles_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (merged_candles_order_by[] | null),
/** filter the rows returned */
where?: (merged_candles_bool_exp | null)}) => {get: <R extends merged_candlesRequest>(request: R, defaultValue?: FieldsSelection<merged_candles, R>[]) => Promise<FieldsSelection<merged_candles, R>[]>})&({get: <R extends merged_candlesRequest>(request: R, defaultValue?: FieldsSelection<merged_candles, R>[]) => Promise<FieldsSelection<merged_candles, R>[]>}),
    
/** fetch data from the table: "pool" */
pool: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_order_by[] | null),
/** filter the rows returned */
where?: (pool_bool_exp | null)}) => {get: <R extends poolRequest>(request: R, defaultValue?: FieldsSelection<pool, R>[]) => Promise<FieldsSelection<pool, R>[]>})&({get: <R extends poolRequest>(request: R, defaultValue?: FieldsSelection<pool, R>[]) => Promise<FieldsSelection<pool, R>[]>}),
    
/** fetch data from the table: "pool" using primary key columns */
poolByPk: ((args: {address: Scalars['String']}) => poolPromiseChain & {get: <R extends poolRequest>(request: R, defaultValue?: (FieldsSelection<pool, R> | undefined)) => Promise<(FieldsSelection<pool, R> | undefined)>}),
    
/** fetch data from the table: "pool_event" */
poolEvent: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_event_order_by[] | null),
/** filter the rows returned */
where?: (pool_event_bool_exp | null)}) => {get: <R extends pool_eventRequest>(request: R, defaultValue?: FieldsSelection<pool_event, R>[]) => Promise<FieldsSelection<pool_event, R>[]>})&({get: <R extends pool_eventRequest>(request: R, defaultValue?: FieldsSelection<pool_event, R>[]) => Promise<FieldsSelection<pool_event, R>[]>}),
    
/** fetch data from the table: "pool_event" using primary key columns */
poolEventByPk: ((args: {id: Scalars['bigint']}) => pool_eventPromiseChain & {get: <R extends pool_eventRequest>(request: R, defaultValue?: (FieldsSelection<pool_event, R> | undefined)) => Promise<(FieldsSelection<pool_event, R> | undefined)>}),
    
/** fetch data from the table: "pool_line" */
poolLine: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_line_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_line_order_by[] | null),
/** filter the rows returned */
where?: (pool_line_bool_exp | null)}) => {get: <R extends pool_lineRequest>(request: R, defaultValue?: FieldsSelection<pool_line, R>[]) => Promise<FieldsSelection<pool_line, R>[]>})&({get: <R extends pool_lineRequest>(request: R, defaultValue?: FieldsSelection<pool_line, R>[]) => Promise<FieldsSelection<pool_line, R>[]>}),
    
/** fetch data from the table: "pool_line" using primary key columns */
poolLineByPk: ((args: {poolLineId: Scalars['String']}) => pool_linePromiseChain & {get: <R extends pool_lineRequest>(request: R, defaultValue?: (FieldsSelection<pool_line, R> | undefined)) => Promise<(FieldsSelection<pool_line, R> | undefined)>}),
    
/** fetch data from the table: "pool_position" */
poolPosition: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_position_order_by[] | null),
/** filter the rows returned */
where?: (pool_position_bool_exp | null)}) => {get: <R extends pool_positionRequest>(request: R, defaultValue?: FieldsSelection<pool_position, R>[]) => Promise<FieldsSelection<pool_position, R>[]>})&({get: <R extends pool_positionRequest>(request: R, defaultValue?: FieldsSelection<pool_position, R>[]) => Promise<FieldsSelection<pool_position, R>[]>}),
    
/** fetch data from the table: "pool_position" using primary key columns */
poolPositionByPk: ((args: {id: Scalars['bigint']}) => pool_positionPromiseChain & {get: <R extends pool_positionRequest>(request: R, defaultValue?: (FieldsSelection<pool_position, R> | undefined)) => Promise<(FieldsSelection<pool_position, R> | undefined)>}),
    
/** fetch data from the table: "pool_state" */
poolState: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_state_order_by[] | null),
/** filter the rows returned */
where?: (pool_state_bool_exp | null)}) => {get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Promise<FieldsSelection<pool_state, R>[]>})&({get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Promise<FieldsSelection<pool_state, R>[]>}),
    
/** fetch data from the table: "pool_state" using primary key columns */
poolStateByPk: ((args: {id: Scalars['bigint']}) => pool_statePromiseChain & {get: <R extends pool_stateRequest>(request: R, defaultValue?: (FieldsSelection<pool_state, R> | undefined)) => Promise<(FieldsSelection<pool_state, R> | undefined)>}),
    
/** fetch data from the table: "position" */
position: ((args?: {
/** distinct select on columns */
distinct_on?: (position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (position_order_by[] | null),
/** filter the rows returned */
where?: (position_bool_exp | null)}) => {get: <R extends positionRequest>(request: R, defaultValue?: FieldsSelection<position, R>[]) => Promise<FieldsSelection<position, R>[]>})&({get: <R extends positionRequest>(request: R, defaultValue?: FieldsSelection<position, R>[]) => Promise<FieldsSelection<position, R>[]>}),
    
/** fetch data from the table: "position" using primary key columns */
positionByPk: ((args: {id: Scalars['bigint']}) => positionPromiseChain & {get: <R extends positionRequest>(request: R, defaultValue?: (FieldsSelection<position, R> | undefined)) => Promise<(FieldsSelection<position, R> | undefined)>}),
    
/** fetch data from the table: "quotesWma" */
quotesWma: ((args?: {
/** distinct select on columns */
distinct_on?: (quotesWma_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (quotesWma_order_by[] | null),
/** filter the rows returned */
where?: (quotesWma_bool_exp | null)}) => {get: <R extends quotesWmaRequest>(request: R, defaultValue?: FieldsSelection<quotesWma, R>[]) => Promise<FieldsSelection<quotesWma, R>[]>})&({get: <R extends quotesWmaRequest>(request: R, defaultValue?: FieldsSelection<quotesWma, R>[]) => Promise<FieldsSelection<quotesWma, R>[]>}),
    
/** fetch data from the table: "quotesWma_15m" */
quotesWma15m: ((args?: {
/** distinct select on columns */
distinct_on?: (quotesWma_15m_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (quotesWma_15m_order_by[] | null),
/** filter the rows returned */
where?: (quotesWma_15m_bool_exp | null)}) => {get: <R extends quotesWma_15mRequest>(request: R, defaultValue?: FieldsSelection<quotesWma_15m, R>[]) => Promise<FieldsSelection<quotesWma_15m, R>[]>})&({get: <R extends quotesWma_15mRequest>(request: R, defaultValue?: FieldsSelection<quotesWma_15m, R>[]) => Promise<FieldsSelection<quotesWma_15m, R>[]>}),
    
/** fetch data from the table: "total_value_locked" */
totalValueLocked: ((args?: {
/** distinct select on columns */
distinct_on?: (total_value_locked_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (total_value_locked_order_by[] | null),
/** filter the rows returned */
where?: (total_value_locked_bool_exp | null)}) => {get: <R extends total_value_lockedRequest>(request: R, defaultValue?: FieldsSelection<total_value_locked, R>[]) => Promise<FieldsSelection<total_value_locked, R>[]>})&({get: <R extends total_value_lockedRequest>(request: R, defaultValue?: FieldsSelection<total_value_locked, R>[]) => Promise<FieldsSelection<total_value_locked, R>[]>}),
    
/** fetch data from the table: "user" */
user: ((args?: {
/** distinct select on columns */
distinct_on?: (user_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (user_order_by[] | null),
/** filter the rows returned */
where?: (user_bool_exp | null)}) => {get: <R extends userRequest>(request: R, defaultValue?: FieldsSelection<user, R>[]) => Promise<FieldsSelection<user, R>[]>})&({get: <R extends userRequest>(request: R, defaultValue?: FieldsSelection<user, R>[]) => Promise<FieldsSelection<user, R>[]>}),
    
/** fetch data from the table: "user" using primary key columns */
userByPk: ((args: {address: Scalars['String']}) => userPromiseChain & {get: <R extends userRequest>(request: R, defaultValue?: (FieldsSelection<user, R> | undefined)) => Promise<(FieldsSelection<user, R> | undefined)>}),
    
/** fetch data from the table: "withdrawal" */
withdrawal: ((args?: {
/** distinct select on columns */
distinct_on?: (withdrawal_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (withdrawal_order_by[] | null),
/** filter the rows returned */
where?: (withdrawal_bool_exp | null)}) => {get: <R extends withdrawalRequest>(request: R, defaultValue?: FieldsSelection<withdrawal, R>[]) => Promise<FieldsSelection<withdrawal, R>[]>})&({get: <R extends withdrawalRequest>(request: R, defaultValue?: FieldsSelection<withdrawal, R>[]) => Promise<FieldsSelection<withdrawal, R>[]>}),
    
/** fetch data from the table: "withdrawal" using primary key columns */
withdrawalByPk: ((args: {id: Scalars['bigint']}) => withdrawalPromiseChain & {get: <R extends withdrawalRequest>(request: R, defaultValue?: (FieldsSelection<withdrawal, R> | undefined)) => Promise<(FieldsSelection<withdrawal, R> | undefined)>})
}

export interface query_rootObservableChain{
    
/** fetch data from the table: "bet" */
bet: ((args?: {
/** distinct select on columns */
distinct_on?: (bet_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (bet_order_by[] | null),
/** filter the rows returned */
where?: (bet_bool_exp | null)}) => {get: <R extends betRequest>(request: R, defaultValue?: FieldsSelection<bet, R>[]) => Observable<FieldsSelection<bet, R>[]>})&({get: <R extends betRequest>(request: R, defaultValue?: FieldsSelection<bet, R>[]) => Observable<FieldsSelection<bet, R>[]>}),
    
/** fetch data from the table: "bet" using primary key columns */
betByPk: ((args: {id: Scalars['bigint']}) => betObservableChain & {get: <R extends betRequest>(request: R, defaultValue?: (FieldsSelection<bet, R> | undefined)) => Observable<(FieldsSelection<bet, R> | undefined)>}),
    
/** fetch data from the table: "candle" */
candle: ((args?: {
/** distinct select on columns */
distinct_on?: (candle_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (candle_order_by[] | null),
/** filter the rows returned */
where?: (candle_bool_exp | null)}) => {get: <R extends candleRequest>(request: R, defaultValue?: FieldsSelection<candle, R>[]) => Observable<FieldsSelection<candle, R>[]>})&({get: <R extends candleRequest>(request: R, defaultValue?: FieldsSelection<candle, R>[]) => Observable<FieldsSelection<candle, R>[]>}),
    
/** fetch data from the table: "candle" using primary key columns */
candleByPk: ((args: {id: Scalars['bigint']}) => candleObservableChain & {get: <R extends candleRequest>(request: R, defaultValue?: (FieldsSelection<candle, R> | undefined)) => Observable<(FieldsSelection<candle, R> | undefined)>}),
    
/** fetch data from the table: "claim" */
claim: ((args?: {
/** distinct select on columns */
distinct_on?: (claim_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (claim_order_by[] | null),
/** filter the rows returned */
where?: (claim_bool_exp | null)}) => {get: <R extends claimRequest>(request: R, defaultValue?: FieldsSelection<claim, R>[]) => Observable<FieldsSelection<claim, R>[]>})&({get: <R extends claimRequest>(request: R, defaultValue?: FieldsSelection<claim, R>[]) => Observable<FieldsSelection<claim, R>[]>}),
    
/** fetch data from the table: "claim" using primary key columns */
claimByPk: ((args: {id: Scalars['Int']}) => claimObservableChain & {get: <R extends claimRequest>(request: R, defaultValue?: (FieldsSelection<claim, R> | undefined)) => Observable<(FieldsSelection<claim, R> | undefined)>}),
    
/** fetch data from the table: "currencyPair" */
currencyPair: ((args?: {
/** distinct select on columns */
distinct_on?: (currencyPair_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (currencyPair_order_by[] | null),
/** filter the rows returned */
where?: (currencyPair_bool_exp | null)}) => {get: <R extends currencyPairRequest>(request: R, defaultValue?: FieldsSelection<currencyPair, R>[]) => Observable<FieldsSelection<currencyPair, R>[]>})&({get: <R extends currencyPairRequest>(request: R, defaultValue?: FieldsSelection<currencyPair, R>[]) => Observable<FieldsSelection<currencyPair, R>[]>}),
    
/** fetch data from the table: "currencyPair" using primary key columns */
currencyPairByPk: ((args: {id: Scalars['Int']}) => currencyPairObservableChain & {get: <R extends currencyPairRequest>(request: R, defaultValue?: (FieldsSelection<currencyPair, R> | undefined)) => Observable<(FieldsSelection<currencyPair, R> | undefined)>}),
    
/** fetch data from the table: "deposit" */
deposit: ((args?: {
/** distinct select on columns */
distinct_on?: (deposit_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (deposit_order_by[] | null),
/** filter the rows returned */
where?: (deposit_bool_exp | null)}) => {get: <R extends depositRequest>(request: R, defaultValue?: FieldsSelection<deposit, R>[]) => Observable<FieldsSelection<deposit, R>[]>})&({get: <R extends depositRequest>(request: R, defaultValue?: FieldsSelection<deposit, R>[]) => Observable<FieldsSelection<deposit, R>[]>}),
    
/** fetch data from the table: "deposit" using primary key columns */
depositByPk: ((args: {id: Scalars['bigint']}) => depositObservableChain & {get: <R extends depositRequest>(request: R, defaultValue?: (FieldsSelection<deposit, R> | undefined)) => Observable<(FieldsSelection<deposit, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_contract" */
dipdupContract: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>})&({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>}),
    
/** fetch data from the table: "dipdup_contract" using primary key columns */
dipdupContractByPk: ((args: {name: Scalars['String']}) => dipdup_contractObservableChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_contract_metadata" */
dipdupContractMetadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_metadata_bool_exp | null)}) => {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Observable<FieldsSelection<dipdup_contract_metadata, R>[]>})&({get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Observable<FieldsSelection<dipdup_contract_metadata, R>[]>}),
    
/** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
dipdupContractMetadataByPk: ((args: {id: Scalars['Int']}) => dipdup_contract_metadataObservableChain & {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_metadata, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head" */
dipdupHead: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => {get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>})&({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>}),
    
/** fetch data from the table: "dipdup_head" using primary key columns */
dipdupHeadByPk: ((args: {name: Scalars['String']}) => dipdup_headObservableChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Observable<(FieldsSelection<dipdup_head, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head_status" */
dipdupHeadStatus: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_status_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_status_bool_exp | null)}) => {get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Observable<FieldsSelection<dipdup_head_status, R>[]>})&({get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Observable<FieldsSelection<dipdup_head_status, R>[]>}),
    
/** fetch data from the table: "dipdup_index" */
dipdupIndex: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>})&({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>}),
    
/** fetch data from the table: "dipdup_index" using primary key columns */
dipdupIndexByPk: ((args: {name: Scalars['String']}) => dipdup_indexObservableChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Observable<(FieldsSelection<dipdup_index, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_model_update" */
dipdupModelUpdate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_model_update_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_model_update_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_model_update_bool_exp | null)}) => {get: <R extends dipdup_model_updateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_model_update, R>[]) => Observable<FieldsSelection<dipdup_model_update, R>[]>})&({get: <R extends dipdup_model_updateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_model_update, R>[]) => Observable<FieldsSelection<dipdup_model_update, R>[]>}),
    
/** fetch data from the table: "dipdup_model_update" using primary key columns */
dipdupModelUpdateByPk: ((args: {id: Scalars['Int']}) => dipdup_model_updateObservableChain & {get: <R extends dipdup_model_updateRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_model_update, R> | undefined)) => Observable<(FieldsSelection<dipdup_model_update, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_schema" */
dipdupSchema: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>})&({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>}),
    
/** fetch data from the table: "dipdup_schema" using primary key columns */
dipdupSchemaByPk: ((args: {name: Scalars['String']}) => dipdup_schemaObservableChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Observable<(FieldsSelection<dipdup_schema, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_token_metadata" */
dipdupTokenMetadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_token_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_token_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_token_metadata_bool_exp | null)}) => {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Observable<FieldsSelection<dipdup_token_metadata, R>[]>})&({get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Observable<FieldsSelection<dipdup_token_metadata, R>[]>}),
    
/** fetch data from the table: "dipdup_token_metadata" using primary key columns */
dipdupTokenMetadataByPk: ((args: {id: Scalars['Int']}) => dipdup_token_metadataObservableChain & {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata, R> | undefined)) => Observable<(FieldsSelection<dipdup_token_metadata, R> | undefined)>}),
    
/** fetch data from the table: "entry_liquidity" */
entryLiquidity: ((args?: {
/** distinct select on columns */
distinct_on?: (entry_liquidity_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (entry_liquidity_order_by[] | null),
/** filter the rows returned */
where?: (entry_liquidity_bool_exp | null)}) => {get: <R extends entry_liquidityRequest>(request: R, defaultValue?: FieldsSelection<entry_liquidity, R>[]) => Observable<FieldsSelection<entry_liquidity, R>[]>})&({get: <R extends entry_liquidityRequest>(request: R, defaultValue?: FieldsSelection<entry_liquidity, R>[]) => Observable<FieldsSelection<entry_liquidity, R>[]>}),
    
/** fetch data from the table: "entry_liquidity" using primary key columns */
entryLiquidityByPk: ((args: {poolEntryId: Scalars['String']}) => entry_liquidityObservableChain & {get: <R extends entry_liquidityRequest>(request: R, defaultValue?: (FieldsSelection<entry_liquidity, R> | undefined)) => Observable<(FieldsSelection<entry_liquidity, R> | undefined)>}),
    
/** fetch data from the table: "event" */
event: ((args?: {
/** distinct select on columns */
distinct_on?: (event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (event_order_by[] | null),
/** filter the rows returned */
where?: (event_bool_exp | null)}) => {get: <R extends eventRequest>(request: R, defaultValue?: FieldsSelection<event, R>[]) => Observable<FieldsSelection<event, R>[]>})&({get: <R extends eventRequest>(request: R, defaultValue?: FieldsSelection<event, R>[]) => Observable<FieldsSelection<event, R>[]>}),
    
/** fetch data from the table: "event" using primary key columns */
eventByPk: ((args: {id: Scalars['bigint']}) => eventObservableChain & {get: <R extends eventRequest>(request: R, defaultValue?: (FieldsSelection<event, R> | undefined)) => Observable<(FieldsSelection<event, R> | undefined)>}),
    
/** fetch data from the table: "merged_candles" */
mergedCandles: ((args?: {
/** distinct select on columns */
distinct_on?: (merged_candles_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (merged_candles_order_by[] | null),
/** filter the rows returned */
where?: (merged_candles_bool_exp | null)}) => {get: <R extends merged_candlesRequest>(request: R, defaultValue?: FieldsSelection<merged_candles, R>[]) => Observable<FieldsSelection<merged_candles, R>[]>})&({get: <R extends merged_candlesRequest>(request: R, defaultValue?: FieldsSelection<merged_candles, R>[]) => Observable<FieldsSelection<merged_candles, R>[]>}),
    
/** fetch data from the table: "pool" */
pool: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_order_by[] | null),
/** filter the rows returned */
where?: (pool_bool_exp | null)}) => {get: <R extends poolRequest>(request: R, defaultValue?: FieldsSelection<pool, R>[]) => Observable<FieldsSelection<pool, R>[]>})&({get: <R extends poolRequest>(request: R, defaultValue?: FieldsSelection<pool, R>[]) => Observable<FieldsSelection<pool, R>[]>}),
    
/** fetch data from the table: "pool" using primary key columns */
poolByPk: ((args: {address: Scalars['String']}) => poolObservableChain & {get: <R extends poolRequest>(request: R, defaultValue?: (FieldsSelection<pool, R> | undefined)) => Observable<(FieldsSelection<pool, R> | undefined)>}),
    
/** fetch data from the table: "pool_event" */
poolEvent: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_event_order_by[] | null),
/** filter the rows returned */
where?: (pool_event_bool_exp | null)}) => {get: <R extends pool_eventRequest>(request: R, defaultValue?: FieldsSelection<pool_event, R>[]) => Observable<FieldsSelection<pool_event, R>[]>})&({get: <R extends pool_eventRequest>(request: R, defaultValue?: FieldsSelection<pool_event, R>[]) => Observable<FieldsSelection<pool_event, R>[]>}),
    
/** fetch data from the table: "pool_event" using primary key columns */
poolEventByPk: ((args: {id: Scalars['bigint']}) => pool_eventObservableChain & {get: <R extends pool_eventRequest>(request: R, defaultValue?: (FieldsSelection<pool_event, R> | undefined)) => Observable<(FieldsSelection<pool_event, R> | undefined)>}),
    
/** fetch data from the table: "pool_line" */
poolLine: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_line_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_line_order_by[] | null),
/** filter the rows returned */
where?: (pool_line_bool_exp | null)}) => {get: <R extends pool_lineRequest>(request: R, defaultValue?: FieldsSelection<pool_line, R>[]) => Observable<FieldsSelection<pool_line, R>[]>})&({get: <R extends pool_lineRequest>(request: R, defaultValue?: FieldsSelection<pool_line, R>[]) => Observable<FieldsSelection<pool_line, R>[]>}),
    
/** fetch data from the table: "pool_line" using primary key columns */
poolLineByPk: ((args: {poolLineId: Scalars['String']}) => pool_lineObservableChain & {get: <R extends pool_lineRequest>(request: R, defaultValue?: (FieldsSelection<pool_line, R> | undefined)) => Observable<(FieldsSelection<pool_line, R> | undefined)>}),
    
/** fetch data from the table: "pool_position" */
poolPosition: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_position_order_by[] | null),
/** filter the rows returned */
where?: (pool_position_bool_exp | null)}) => {get: <R extends pool_positionRequest>(request: R, defaultValue?: FieldsSelection<pool_position, R>[]) => Observable<FieldsSelection<pool_position, R>[]>})&({get: <R extends pool_positionRequest>(request: R, defaultValue?: FieldsSelection<pool_position, R>[]) => Observable<FieldsSelection<pool_position, R>[]>}),
    
/** fetch data from the table: "pool_position" using primary key columns */
poolPositionByPk: ((args: {id: Scalars['bigint']}) => pool_positionObservableChain & {get: <R extends pool_positionRequest>(request: R, defaultValue?: (FieldsSelection<pool_position, R> | undefined)) => Observable<(FieldsSelection<pool_position, R> | undefined)>}),
    
/** fetch data from the table: "pool_state" */
poolState: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_state_order_by[] | null),
/** filter the rows returned */
where?: (pool_state_bool_exp | null)}) => {get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Observable<FieldsSelection<pool_state, R>[]>})&({get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Observable<FieldsSelection<pool_state, R>[]>}),
    
/** fetch data from the table: "pool_state" using primary key columns */
poolStateByPk: ((args: {id: Scalars['bigint']}) => pool_stateObservableChain & {get: <R extends pool_stateRequest>(request: R, defaultValue?: (FieldsSelection<pool_state, R> | undefined)) => Observable<(FieldsSelection<pool_state, R> | undefined)>}),
    
/** fetch data from the table: "position" */
position: ((args?: {
/** distinct select on columns */
distinct_on?: (position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (position_order_by[] | null),
/** filter the rows returned */
where?: (position_bool_exp | null)}) => {get: <R extends positionRequest>(request: R, defaultValue?: FieldsSelection<position, R>[]) => Observable<FieldsSelection<position, R>[]>})&({get: <R extends positionRequest>(request: R, defaultValue?: FieldsSelection<position, R>[]) => Observable<FieldsSelection<position, R>[]>}),
    
/** fetch data from the table: "position" using primary key columns */
positionByPk: ((args: {id: Scalars['bigint']}) => positionObservableChain & {get: <R extends positionRequest>(request: R, defaultValue?: (FieldsSelection<position, R> | undefined)) => Observable<(FieldsSelection<position, R> | undefined)>}),
    
/** fetch data from the table: "quotesWma" */
quotesWma: ((args?: {
/** distinct select on columns */
distinct_on?: (quotesWma_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (quotesWma_order_by[] | null),
/** filter the rows returned */
where?: (quotesWma_bool_exp | null)}) => {get: <R extends quotesWmaRequest>(request: R, defaultValue?: FieldsSelection<quotesWma, R>[]) => Observable<FieldsSelection<quotesWma, R>[]>})&({get: <R extends quotesWmaRequest>(request: R, defaultValue?: FieldsSelection<quotesWma, R>[]) => Observable<FieldsSelection<quotesWma, R>[]>}),
    
/** fetch data from the table: "quotesWma_15m" */
quotesWma15m: ((args?: {
/** distinct select on columns */
distinct_on?: (quotesWma_15m_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (quotesWma_15m_order_by[] | null),
/** filter the rows returned */
where?: (quotesWma_15m_bool_exp | null)}) => {get: <R extends quotesWma_15mRequest>(request: R, defaultValue?: FieldsSelection<quotesWma_15m, R>[]) => Observable<FieldsSelection<quotesWma_15m, R>[]>})&({get: <R extends quotesWma_15mRequest>(request: R, defaultValue?: FieldsSelection<quotesWma_15m, R>[]) => Observable<FieldsSelection<quotesWma_15m, R>[]>}),
    
/** fetch data from the table: "total_value_locked" */
totalValueLocked: ((args?: {
/** distinct select on columns */
distinct_on?: (total_value_locked_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (total_value_locked_order_by[] | null),
/** filter the rows returned */
where?: (total_value_locked_bool_exp | null)}) => {get: <R extends total_value_lockedRequest>(request: R, defaultValue?: FieldsSelection<total_value_locked, R>[]) => Observable<FieldsSelection<total_value_locked, R>[]>})&({get: <R extends total_value_lockedRequest>(request: R, defaultValue?: FieldsSelection<total_value_locked, R>[]) => Observable<FieldsSelection<total_value_locked, R>[]>}),
    
/** fetch data from the table: "user" */
user: ((args?: {
/** distinct select on columns */
distinct_on?: (user_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (user_order_by[] | null),
/** filter the rows returned */
where?: (user_bool_exp | null)}) => {get: <R extends userRequest>(request: R, defaultValue?: FieldsSelection<user, R>[]) => Observable<FieldsSelection<user, R>[]>})&({get: <R extends userRequest>(request: R, defaultValue?: FieldsSelection<user, R>[]) => Observable<FieldsSelection<user, R>[]>}),
    
/** fetch data from the table: "user" using primary key columns */
userByPk: ((args: {address: Scalars['String']}) => userObservableChain & {get: <R extends userRequest>(request: R, defaultValue?: (FieldsSelection<user, R> | undefined)) => Observable<(FieldsSelection<user, R> | undefined)>}),
    
/** fetch data from the table: "withdrawal" */
withdrawal: ((args?: {
/** distinct select on columns */
distinct_on?: (withdrawal_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (withdrawal_order_by[] | null),
/** filter the rows returned */
where?: (withdrawal_bool_exp | null)}) => {get: <R extends withdrawalRequest>(request: R, defaultValue?: FieldsSelection<withdrawal, R>[]) => Observable<FieldsSelection<withdrawal, R>[]>})&({get: <R extends withdrawalRequest>(request: R, defaultValue?: FieldsSelection<withdrawal, R>[]) => Observable<FieldsSelection<withdrawal, R>[]>}),
    
/** fetch data from the table: "withdrawal" using primary key columns */
withdrawalByPk: ((args: {id: Scalars['bigint']}) => withdrawalObservableChain & {get: <R extends withdrawalRequest>(request: R, defaultValue?: (FieldsSelection<withdrawal, R> | undefined)) => Observable<(FieldsSelection<withdrawal, R> | undefined)>})
}


/** columns and relationships of "quotesWma" */
export interface quotesWmaPromiseChain{
    currencyPairId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** columns and relationships of "quotesWma" */
export interface quotesWmaObservableChain{
    currencyPairId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** columns and relationships of "quotesWma_15m" */
export interface quotesWma_15mPromiseChain{
    currencyPairId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** columns and relationships of "quotesWma_15m" */
export interface quotesWma_15mObservableChain{
    currencyPairId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}

export interface subscription_rootPromiseChain{
    
/** fetch data from the table: "bet" */
bet: ((args?: {
/** distinct select on columns */
distinct_on?: (bet_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (bet_order_by[] | null),
/** filter the rows returned */
where?: (bet_bool_exp | null)}) => {get: <R extends betRequest>(request: R, defaultValue?: FieldsSelection<bet, R>[]) => Promise<FieldsSelection<bet, R>[]>})&({get: <R extends betRequest>(request: R, defaultValue?: FieldsSelection<bet, R>[]) => Promise<FieldsSelection<bet, R>[]>}),
    
/** fetch data from the table: "bet" using primary key columns */
betByPk: ((args: {id: Scalars['bigint']}) => betPromiseChain & {get: <R extends betRequest>(request: R, defaultValue?: (FieldsSelection<bet, R> | undefined)) => Promise<(FieldsSelection<bet, R> | undefined)>}),
    
/** fetch data from the table in a streaming manner: "bet" */
bet_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (bet_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (bet_bool_exp | null)}) => {get: <R extends betRequest>(request: R, defaultValue?: FieldsSelection<bet, R>[]) => Promise<FieldsSelection<bet, R>[]>}),
    
/** fetch data from the table: "candle" */
candle: ((args?: {
/** distinct select on columns */
distinct_on?: (candle_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (candle_order_by[] | null),
/** filter the rows returned */
where?: (candle_bool_exp | null)}) => {get: <R extends candleRequest>(request: R, defaultValue?: FieldsSelection<candle, R>[]) => Promise<FieldsSelection<candle, R>[]>})&({get: <R extends candleRequest>(request: R, defaultValue?: FieldsSelection<candle, R>[]) => Promise<FieldsSelection<candle, R>[]>}),
    
/** fetch data from the table: "candle" using primary key columns */
candleByPk: ((args: {id: Scalars['bigint']}) => candlePromiseChain & {get: <R extends candleRequest>(request: R, defaultValue?: (FieldsSelection<candle, R> | undefined)) => Promise<(FieldsSelection<candle, R> | undefined)>}),
    
/** fetch data from the table in a streaming manner: "candle" */
candle_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (candle_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (candle_bool_exp | null)}) => {get: <R extends candleRequest>(request: R, defaultValue?: FieldsSelection<candle, R>[]) => Promise<FieldsSelection<candle, R>[]>}),
    
/** fetch data from the table: "claim" */
claim: ((args?: {
/** distinct select on columns */
distinct_on?: (claim_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (claim_order_by[] | null),
/** filter the rows returned */
where?: (claim_bool_exp | null)}) => {get: <R extends claimRequest>(request: R, defaultValue?: FieldsSelection<claim, R>[]) => Promise<FieldsSelection<claim, R>[]>})&({get: <R extends claimRequest>(request: R, defaultValue?: FieldsSelection<claim, R>[]) => Promise<FieldsSelection<claim, R>[]>}),
    
/** fetch data from the table: "claim" using primary key columns */
claimByPk: ((args: {id: Scalars['Int']}) => claimPromiseChain & {get: <R extends claimRequest>(request: R, defaultValue?: (FieldsSelection<claim, R> | undefined)) => Promise<(FieldsSelection<claim, R> | undefined)>}),
    
/** fetch data from the table in a streaming manner: "claim" */
claim_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (claim_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (claim_bool_exp | null)}) => {get: <R extends claimRequest>(request: R, defaultValue?: FieldsSelection<claim, R>[]) => Promise<FieldsSelection<claim, R>[]>}),
    
/** fetch data from the table: "currencyPair" */
currencyPair: ((args?: {
/** distinct select on columns */
distinct_on?: (currencyPair_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (currencyPair_order_by[] | null),
/** filter the rows returned */
where?: (currencyPair_bool_exp | null)}) => {get: <R extends currencyPairRequest>(request: R, defaultValue?: FieldsSelection<currencyPair, R>[]) => Promise<FieldsSelection<currencyPair, R>[]>})&({get: <R extends currencyPairRequest>(request: R, defaultValue?: FieldsSelection<currencyPair, R>[]) => Promise<FieldsSelection<currencyPair, R>[]>}),
    
/** fetch data from the table: "currencyPair" using primary key columns */
currencyPairByPk: ((args: {id: Scalars['Int']}) => currencyPairPromiseChain & {get: <R extends currencyPairRequest>(request: R, defaultValue?: (FieldsSelection<currencyPair, R> | undefined)) => Promise<(FieldsSelection<currencyPair, R> | undefined)>}),
    
/** fetch data from the table in a streaming manner: "currencyPair" */
currencyPair_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (currencyPair_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (currencyPair_bool_exp | null)}) => {get: <R extends currencyPairRequest>(request: R, defaultValue?: FieldsSelection<currencyPair, R>[]) => Promise<FieldsSelection<currencyPair, R>[]>}),
    
/** fetch data from the table: "deposit" */
deposit: ((args?: {
/** distinct select on columns */
distinct_on?: (deposit_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (deposit_order_by[] | null),
/** filter the rows returned */
where?: (deposit_bool_exp | null)}) => {get: <R extends depositRequest>(request: R, defaultValue?: FieldsSelection<deposit, R>[]) => Promise<FieldsSelection<deposit, R>[]>})&({get: <R extends depositRequest>(request: R, defaultValue?: FieldsSelection<deposit, R>[]) => Promise<FieldsSelection<deposit, R>[]>}),
    
/** fetch data from the table: "deposit" using primary key columns */
depositByPk: ((args: {id: Scalars['bigint']}) => depositPromiseChain & {get: <R extends depositRequest>(request: R, defaultValue?: (FieldsSelection<deposit, R> | undefined)) => Promise<(FieldsSelection<deposit, R> | undefined)>}),
    
/** fetch data from the table in a streaming manner: "deposit" */
deposit_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (deposit_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (deposit_bool_exp | null)}) => {get: <R extends depositRequest>(request: R, defaultValue?: FieldsSelection<deposit, R>[]) => Promise<FieldsSelection<deposit, R>[]>}),
    
/** fetch data from the table: "dipdup_contract" */
dipdupContract: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>})&({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>}),
    
/** fetch data from the table: "dipdup_contract" using primary key columns */
dipdupContractByPk: ((args: {name: Scalars['String']}) => dipdup_contractPromiseChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_contract_metadata" */
dipdupContractMetadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_metadata_bool_exp | null)}) => {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Promise<FieldsSelection<dipdup_contract_metadata, R>[]>})&({get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Promise<FieldsSelection<dipdup_contract_metadata, R>[]>}),
    
/** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
dipdupContractMetadataByPk: ((args: {id: Scalars['Int']}) => dipdup_contract_metadataPromiseChain & {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_metadata, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head" */
dipdupHead: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => {get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>})&({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>}),
    
/** fetch data from the table: "dipdup_head" using primary key columns */
dipdupHeadByPk: ((args: {name: Scalars['String']}) => dipdup_headPromiseChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Promise<(FieldsSelection<dipdup_head, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head_status" */
dipdupHeadStatus: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_status_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_status_bool_exp | null)}) => {get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Promise<FieldsSelection<dipdup_head_status, R>[]>})&({get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Promise<FieldsSelection<dipdup_head_status, R>[]>}),
    
/** fetch data from the table: "dipdup_index" */
dipdupIndex: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>})&({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>}),
    
/** fetch data from the table: "dipdup_index" using primary key columns */
dipdupIndexByPk: ((args: {name: Scalars['String']}) => dipdup_indexPromiseChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Promise<(FieldsSelection<dipdup_index, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_model_update" */
dipdupModelUpdate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_model_update_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_model_update_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_model_update_bool_exp | null)}) => {get: <R extends dipdup_model_updateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_model_update, R>[]) => Promise<FieldsSelection<dipdup_model_update, R>[]>})&({get: <R extends dipdup_model_updateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_model_update, R>[]) => Promise<FieldsSelection<dipdup_model_update, R>[]>}),
    
/** fetch data from the table: "dipdup_model_update" using primary key columns */
dipdupModelUpdateByPk: ((args: {id: Scalars['Int']}) => dipdup_model_updatePromiseChain & {get: <R extends dipdup_model_updateRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_model_update, R> | undefined)) => Promise<(FieldsSelection<dipdup_model_update, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_schema" */
dipdupSchema: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>})&({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>}),
    
/** fetch data from the table: "dipdup_schema" using primary key columns */
dipdupSchemaByPk: ((args: {name: Scalars['String']}) => dipdup_schemaPromiseChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Promise<(FieldsSelection<dipdup_schema, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_token_metadata" */
dipdupTokenMetadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_token_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_token_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_token_metadata_bool_exp | null)}) => {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Promise<FieldsSelection<dipdup_token_metadata, R>[]>})&({get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Promise<FieldsSelection<dipdup_token_metadata, R>[]>}),
    
/** fetch data from the table: "dipdup_token_metadata" using primary key columns */
dipdupTokenMetadataByPk: ((args: {id: Scalars['Int']}) => dipdup_token_metadataPromiseChain & {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata, R> | undefined)) => Promise<(FieldsSelection<dipdup_token_metadata, R> | undefined)>}),
    
/** fetch data from the table in a streaming manner: "dipdup_contract_metadata" */
dipdup_contract_metadata_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (dipdup_contract_metadata_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (dipdup_contract_metadata_bool_exp | null)}) => {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Promise<FieldsSelection<dipdup_contract_metadata, R>[]>}),
    
/** fetch data from the table in a streaming manner: "dipdup_contract" */
dipdup_contract_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (dipdup_contract_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>}),
    
/** fetch data from the table in a streaming manner: "dipdup_head_status" */
dipdup_head_status_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (dipdup_head_status_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (dipdup_head_status_bool_exp | null)}) => {get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Promise<FieldsSelection<dipdup_head_status, R>[]>}),
    
/** fetch data from the table in a streaming manner: "dipdup_head" */
dipdup_head_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (dipdup_head_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => {get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>}),
    
/** fetch data from the table in a streaming manner: "dipdup_index" */
dipdup_index_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (dipdup_index_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>}),
    
/** fetch data from the table in a streaming manner: "dipdup_model_update" */
dipdup_model_update_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (dipdup_model_update_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (dipdup_model_update_bool_exp | null)}) => {get: <R extends dipdup_model_updateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_model_update, R>[]) => Promise<FieldsSelection<dipdup_model_update, R>[]>}),
    
/** fetch data from the table in a streaming manner: "dipdup_schema" */
dipdup_schema_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (dipdup_schema_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>}),
    
/** fetch data from the table in a streaming manner: "dipdup_token_metadata" */
dipdup_token_metadata_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (dipdup_token_metadata_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (dipdup_token_metadata_bool_exp | null)}) => {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Promise<FieldsSelection<dipdup_token_metadata, R>[]>}),
    
/** fetch data from the table: "entry_liquidity" */
entryLiquidity: ((args?: {
/** distinct select on columns */
distinct_on?: (entry_liquidity_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (entry_liquidity_order_by[] | null),
/** filter the rows returned */
where?: (entry_liquidity_bool_exp | null)}) => {get: <R extends entry_liquidityRequest>(request: R, defaultValue?: FieldsSelection<entry_liquidity, R>[]) => Promise<FieldsSelection<entry_liquidity, R>[]>})&({get: <R extends entry_liquidityRequest>(request: R, defaultValue?: FieldsSelection<entry_liquidity, R>[]) => Promise<FieldsSelection<entry_liquidity, R>[]>}),
    
/** fetch data from the table: "entry_liquidity" using primary key columns */
entryLiquidityByPk: ((args: {poolEntryId: Scalars['String']}) => entry_liquidityPromiseChain & {get: <R extends entry_liquidityRequest>(request: R, defaultValue?: (FieldsSelection<entry_liquidity, R> | undefined)) => Promise<(FieldsSelection<entry_liquidity, R> | undefined)>}),
    
/** fetch data from the table in a streaming manner: "entry_liquidity" */
entry_liquidity_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (entry_liquidity_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (entry_liquidity_bool_exp | null)}) => {get: <R extends entry_liquidityRequest>(request: R, defaultValue?: FieldsSelection<entry_liquidity, R>[]) => Promise<FieldsSelection<entry_liquidity, R>[]>}),
    
/** fetch data from the table: "event" */
event: ((args?: {
/** distinct select on columns */
distinct_on?: (event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (event_order_by[] | null),
/** filter the rows returned */
where?: (event_bool_exp | null)}) => {get: <R extends eventRequest>(request: R, defaultValue?: FieldsSelection<event, R>[]) => Promise<FieldsSelection<event, R>[]>})&({get: <R extends eventRequest>(request: R, defaultValue?: FieldsSelection<event, R>[]) => Promise<FieldsSelection<event, R>[]>}),
    
/** fetch data from the table: "event" using primary key columns */
eventByPk: ((args: {id: Scalars['bigint']}) => eventPromiseChain & {get: <R extends eventRequest>(request: R, defaultValue?: (FieldsSelection<event, R> | undefined)) => Promise<(FieldsSelection<event, R> | undefined)>}),
    
/** fetch data from the table in a streaming manner: "event" */
event_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (event_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (event_bool_exp | null)}) => {get: <R extends eventRequest>(request: R, defaultValue?: FieldsSelection<event, R>[]) => Promise<FieldsSelection<event, R>[]>}),
    
/** fetch data from the table: "merged_candles" */
mergedCandles: ((args?: {
/** distinct select on columns */
distinct_on?: (merged_candles_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (merged_candles_order_by[] | null),
/** filter the rows returned */
where?: (merged_candles_bool_exp | null)}) => {get: <R extends merged_candlesRequest>(request: R, defaultValue?: FieldsSelection<merged_candles, R>[]) => Promise<FieldsSelection<merged_candles, R>[]>})&({get: <R extends merged_candlesRequest>(request: R, defaultValue?: FieldsSelection<merged_candles, R>[]) => Promise<FieldsSelection<merged_candles, R>[]>}),
    
/** fetch data from the table in a streaming manner: "merged_candles" */
merged_candles_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (merged_candles_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (merged_candles_bool_exp | null)}) => {get: <R extends merged_candlesRequest>(request: R, defaultValue?: FieldsSelection<merged_candles, R>[]) => Promise<FieldsSelection<merged_candles, R>[]>}),
    
/** fetch data from the table: "pool" */
pool: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_order_by[] | null),
/** filter the rows returned */
where?: (pool_bool_exp | null)}) => {get: <R extends poolRequest>(request: R, defaultValue?: FieldsSelection<pool, R>[]) => Promise<FieldsSelection<pool, R>[]>})&({get: <R extends poolRequest>(request: R, defaultValue?: FieldsSelection<pool, R>[]) => Promise<FieldsSelection<pool, R>[]>}),
    
/** fetch data from the table: "pool" using primary key columns */
poolByPk: ((args: {address: Scalars['String']}) => poolPromiseChain & {get: <R extends poolRequest>(request: R, defaultValue?: (FieldsSelection<pool, R> | undefined)) => Promise<(FieldsSelection<pool, R> | undefined)>}),
    
/** fetch data from the table: "pool_event" */
poolEvent: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_event_order_by[] | null),
/** filter the rows returned */
where?: (pool_event_bool_exp | null)}) => {get: <R extends pool_eventRequest>(request: R, defaultValue?: FieldsSelection<pool_event, R>[]) => Promise<FieldsSelection<pool_event, R>[]>})&({get: <R extends pool_eventRequest>(request: R, defaultValue?: FieldsSelection<pool_event, R>[]) => Promise<FieldsSelection<pool_event, R>[]>}),
    
/** fetch data from the table: "pool_event" using primary key columns */
poolEventByPk: ((args: {id: Scalars['bigint']}) => pool_eventPromiseChain & {get: <R extends pool_eventRequest>(request: R, defaultValue?: (FieldsSelection<pool_event, R> | undefined)) => Promise<(FieldsSelection<pool_event, R> | undefined)>}),
    
/** fetch data from the table: "pool_line" */
poolLine: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_line_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_line_order_by[] | null),
/** filter the rows returned */
where?: (pool_line_bool_exp | null)}) => {get: <R extends pool_lineRequest>(request: R, defaultValue?: FieldsSelection<pool_line, R>[]) => Promise<FieldsSelection<pool_line, R>[]>})&({get: <R extends pool_lineRequest>(request: R, defaultValue?: FieldsSelection<pool_line, R>[]) => Promise<FieldsSelection<pool_line, R>[]>}),
    
/** fetch data from the table: "pool_line" using primary key columns */
poolLineByPk: ((args: {poolLineId: Scalars['String']}) => pool_linePromiseChain & {get: <R extends pool_lineRequest>(request: R, defaultValue?: (FieldsSelection<pool_line, R> | undefined)) => Promise<(FieldsSelection<pool_line, R> | undefined)>}),
    
/** fetch data from the table: "pool_position" */
poolPosition: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_position_order_by[] | null),
/** filter the rows returned */
where?: (pool_position_bool_exp | null)}) => {get: <R extends pool_positionRequest>(request: R, defaultValue?: FieldsSelection<pool_position, R>[]) => Promise<FieldsSelection<pool_position, R>[]>})&({get: <R extends pool_positionRequest>(request: R, defaultValue?: FieldsSelection<pool_position, R>[]) => Promise<FieldsSelection<pool_position, R>[]>}),
    
/** fetch data from the table: "pool_position" using primary key columns */
poolPositionByPk: ((args: {id: Scalars['bigint']}) => pool_positionPromiseChain & {get: <R extends pool_positionRequest>(request: R, defaultValue?: (FieldsSelection<pool_position, R> | undefined)) => Promise<(FieldsSelection<pool_position, R> | undefined)>}),
    
/** fetch data from the table: "pool_state" */
poolState: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_state_order_by[] | null),
/** filter the rows returned */
where?: (pool_state_bool_exp | null)}) => {get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Promise<FieldsSelection<pool_state, R>[]>})&({get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Promise<FieldsSelection<pool_state, R>[]>}),
    
/** fetch data from the table: "pool_state" using primary key columns */
poolStateByPk: ((args: {id: Scalars['bigint']}) => pool_statePromiseChain & {get: <R extends pool_stateRequest>(request: R, defaultValue?: (FieldsSelection<pool_state, R> | undefined)) => Promise<(FieldsSelection<pool_state, R> | undefined)>}),
    
/** fetch data from the table in a streaming manner: "pool_event" */
pool_event_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (pool_event_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (pool_event_bool_exp | null)}) => {get: <R extends pool_eventRequest>(request: R, defaultValue?: FieldsSelection<pool_event, R>[]) => Promise<FieldsSelection<pool_event, R>[]>}),
    
/** fetch data from the table in a streaming manner: "pool_line" */
pool_line_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (pool_line_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (pool_line_bool_exp | null)}) => {get: <R extends pool_lineRequest>(request: R, defaultValue?: FieldsSelection<pool_line, R>[]) => Promise<FieldsSelection<pool_line, R>[]>}),
    
/** fetch data from the table in a streaming manner: "pool_position" */
pool_position_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (pool_position_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (pool_position_bool_exp | null)}) => {get: <R extends pool_positionRequest>(request: R, defaultValue?: FieldsSelection<pool_position, R>[]) => Promise<FieldsSelection<pool_position, R>[]>}),
    
/** fetch data from the table in a streaming manner: "pool_state" */
pool_state_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (pool_state_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (pool_state_bool_exp | null)}) => {get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Promise<FieldsSelection<pool_state, R>[]>}),
    
/** fetch data from the table in a streaming manner: "pool" */
pool_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (pool_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (pool_bool_exp | null)}) => {get: <R extends poolRequest>(request: R, defaultValue?: FieldsSelection<pool, R>[]) => Promise<FieldsSelection<pool, R>[]>}),
    
/** fetch data from the table: "position" */
position: ((args?: {
/** distinct select on columns */
distinct_on?: (position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (position_order_by[] | null),
/** filter the rows returned */
where?: (position_bool_exp | null)}) => {get: <R extends positionRequest>(request: R, defaultValue?: FieldsSelection<position, R>[]) => Promise<FieldsSelection<position, R>[]>})&({get: <R extends positionRequest>(request: R, defaultValue?: FieldsSelection<position, R>[]) => Promise<FieldsSelection<position, R>[]>}),
    
/** fetch data from the table: "position" using primary key columns */
positionByPk: ((args: {id: Scalars['bigint']}) => positionPromiseChain & {get: <R extends positionRequest>(request: R, defaultValue?: (FieldsSelection<position, R> | undefined)) => Promise<(FieldsSelection<position, R> | undefined)>}),
    
/** fetch data from the table in a streaming manner: "position" */
position_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (position_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (position_bool_exp | null)}) => {get: <R extends positionRequest>(request: R, defaultValue?: FieldsSelection<position, R>[]) => Promise<FieldsSelection<position, R>[]>}),
    
/** fetch data from the table: "quotesWma" */
quotesWma: ((args?: {
/** distinct select on columns */
distinct_on?: (quotesWma_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (quotesWma_order_by[] | null),
/** filter the rows returned */
where?: (quotesWma_bool_exp | null)}) => {get: <R extends quotesWmaRequest>(request: R, defaultValue?: FieldsSelection<quotesWma, R>[]) => Promise<FieldsSelection<quotesWma, R>[]>})&({get: <R extends quotesWmaRequest>(request: R, defaultValue?: FieldsSelection<quotesWma, R>[]) => Promise<FieldsSelection<quotesWma, R>[]>}),
    
/** fetch data from the table: "quotesWma_15m" */
quotesWma15m: ((args?: {
/** distinct select on columns */
distinct_on?: (quotesWma_15m_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (quotesWma_15m_order_by[] | null),
/** filter the rows returned */
where?: (quotesWma_15m_bool_exp | null)}) => {get: <R extends quotesWma_15mRequest>(request: R, defaultValue?: FieldsSelection<quotesWma_15m, R>[]) => Promise<FieldsSelection<quotesWma_15m, R>[]>})&({get: <R extends quotesWma_15mRequest>(request: R, defaultValue?: FieldsSelection<quotesWma_15m, R>[]) => Promise<FieldsSelection<quotesWma_15m, R>[]>}),
    
/** fetch data from the table in a streaming manner: "quotesWma_15m" */
quotesWma_15m_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (quotesWma_15m_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (quotesWma_15m_bool_exp | null)}) => {get: <R extends quotesWma_15mRequest>(request: R, defaultValue?: FieldsSelection<quotesWma_15m, R>[]) => Promise<FieldsSelection<quotesWma_15m, R>[]>}),
    
/** fetch data from the table in a streaming manner: "quotesWma" */
quotesWma_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (quotesWma_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (quotesWma_bool_exp | null)}) => {get: <R extends quotesWmaRequest>(request: R, defaultValue?: FieldsSelection<quotesWma, R>[]) => Promise<FieldsSelection<quotesWma, R>[]>}),
    
/** fetch data from the table: "total_value_locked" */
totalValueLocked: ((args?: {
/** distinct select on columns */
distinct_on?: (total_value_locked_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (total_value_locked_order_by[] | null),
/** filter the rows returned */
where?: (total_value_locked_bool_exp | null)}) => {get: <R extends total_value_lockedRequest>(request: R, defaultValue?: FieldsSelection<total_value_locked, R>[]) => Promise<FieldsSelection<total_value_locked, R>[]>})&({get: <R extends total_value_lockedRequest>(request: R, defaultValue?: FieldsSelection<total_value_locked, R>[]) => Promise<FieldsSelection<total_value_locked, R>[]>}),
    
/** fetch data from the table in a streaming manner: "total_value_locked" */
total_value_locked_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (total_value_locked_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (total_value_locked_bool_exp | null)}) => {get: <R extends total_value_lockedRequest>(request: R, defaultValue?: FieldsSelection<total_value_locked, R>[]) => Promise<FieldsSelection<total_value_locked, R>[]>}),
    
/** fetch data from the table: "user" */
user: ((args?: {
/** distinct select on columns */
distinct_on?: (user_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (user_order_by[] | null),
/** filter the rows returned */
where?: (user_bool_exp | null)}) => {get: <R extends userRequest>(request: R, defaultValue?: FieldsSelection<user, R>[]) => Promise<FieldsSelection<user, R>[]>})&({get: <R extends userRequest>(request: R, defaultValue?: FieldsSelection<user, R>[]) => Promise<FieldsSelection<user, R>[]>}),
    
/** fetch data from the table: "user" using primary key columns */
userByPk: ((args: {address: Scalars['String']}) => userPromiseChain & {get: <R extends userRequest>(request: R, defaultValue?: (FieldsSelection<user, R> | undefined)) => Promise<(FieldsSelection<user, R> | undefined)>}),
    
/** fetch data from the table in a streaming manner: "user" */
user_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (user_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (user_bool_exp | null)}) => {get: <R extends userRequest>(request: R, defaultValue?: FieldsSelection<user, R>[]) => Promise<FieldsSelection<user, R>[]>}),
    
/** fetch data from the table: "withdrawal" */
withdrawal: ((args?: {
/** distinct select on columns */
distinct_on?: (withdrawal_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (withdrawal_order_by[] | null),
/** filter the rows returned */
where?: (withdrawal_bool_exp | null)}) => {get: <R extends withdrawalRequest>(request: R, defaultValue?: FieldsSelection<withdrawal, R>[]) => Promise<FieldsSelection<withdrawal, R>[]>})&({get: <R extends withdrawalRequest>(request: R, defaultValue?: FieldsSelection<withdrawal, R>[]) => Promise<FieldsSelection<withdrawal, R>[]>}),
    
/** fetch data from the table: "withdrawal" using primary key columns */
withdrawalByPk: ((args: {id: Scalars['bigint']}) => withdrawalPromiseChain & {get: <R extends withdrawalRequest>(request: R, defaultValue?: (FieldsSelection<withdrawal, R> | undefined)) => Promise<(FieldsSelection<withdrawal, R> | undefined)>}),
    
/** fetch data from the table in a streaming manner: "withdrawal" */
withdrawal_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (withdrawal_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (withdrawal_bool_exp | null)}) => {get: <R extends withdrawalRequest>(request: R, defaultValue?: FieldsSelection<withdrawal, R>[]) => Promise<FieldsSelection<withdrawal, R>[]>})
}

export interface subscription_rootObservableChain{
    
/** fetch data from the table: "bet" */
bet: ((args?: {
/** distinct select on columns */
distinct_on?: (bet_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (bet_order_by[] | null),
/** filter the rows returned */
where?: (bet_bool_exp | null)}) => {get: <R extends betRequest>(request: R, defaultValue?: FieldsSelection<bet, R>[]) => Observable<FieldsSelection<bet, R>[]>})&({get: <R extends betRequest>(request: R, defaultValue?: FieldsSelection<bet, R>[]) => Observable<FieldsSelection<bet, R>[]>}),
    
/** fetch data from the table: "bet" using primary key columns */
betByPk: ((args: {id: Scalars['bigint']}) => betObservableChain & {get: <R extends betRequest>(request: R, defaultValue?: (FieldsSelection<bet, R> | undefined)) => Observable<(FieldsSelection<bet, R> | undefined)>}),
    
/** fetch data from the table in a streaming manner: "bet" */
bet_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (bet_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (bet_bool_exp | null)}) => {get: <R extends betRequest>(request: R, defaultValue?: FieldsSelection<bet, R>[]) => Observable<FieldsSelection<bet, R>[]>}),
    
/** fetch data from the table: "candle" */
candle: ((args?: {
/** distinct select on columns */
distinct_on?: (candle_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (candle_order_by[] | null),
/** filter the rows returned */
where?: (candle_bool_exp | null)}) => {get: <R extends candleRequest>(request: R, defaultValue?: FieldsSelection<candle, R>[]) => Observable<FieldsSelection<candle, R>[]>})&({get: <R extends candleRequest>(request: R, defaultValue?: FieldsSelection<candle, R>[]) => Observable<FieldsSelection<candle, R>[]>}),
    
/** fetch data from the table: "candle" using primary key columns */
candleByPk: ((args: {id: Scalars['bigint']}) => candleObservableChain & {get: <R extends candleRequest>(request: R, defaultValue?: (FieldsSelection<candle, R> | undefined)) => Observable<(FieldsSelection<candle, R> | undefined)>}),
    
/** fetch data from the table in a streaming manner: "candle" */
candle_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (candle_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (candle_bool_exp | null)}) => {get: <R extends candleRequest>(request: R, defaultValue?: FieldsSelection<candle, R>[]) => Observable<FieldsSelection<candle, R>[]>}),
    
/** fetch data from the table: "claim" */
claim: ((args?: {
/** distinct select on columns */
distinct_on?: (claim_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (claim_order_by[] | null),
/** filter the rows returned */
where?: (claim_bool_exp | null)}) => {get: <R extends claimRequest>(request: R, defaultValue?: FieldsSelection<claim, R>[]) => Observable<FieldsSelection<claim, R>[]>})&({get: <R extends claimRequest>(request: R, defaultValue?: FieldsSelection<claim, R>[]) => Observable<FieldsSelection<claim, R>[]>}),
    
/** fetch data from the table: "claim" using primary key columns */
claimByPk: ((args: {id: Scalars['Int']}) => claimObservableChain & {get: <R extends claimRequest>(request: R, defaultValue?: (FieldsSelection<claim, R> | undefined)) => Observable<(FieldsSelection<claim, R> | undefined)>}),
    
/** fetch data from the table in a streaming manner: "claim" */
claim_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (claim_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (claim_bool_exp | null)}) => {get: <R extends claimRequest>(request: R, defaultValue?: FieldsSelection<claim, R>[]) => Observable<FieldsSelection<claim, R>[]>}),
    
/** fetch data from the table: "currencyPair" */
currencyPair: ((args?: {
/** distinct select on columns */
distinct_on?: (currencyPair_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (currencyPair_order_by[] | null),
/** filter the rows returned */
where?: (currencyPair_bool_exp | null)}) => {get: <R extends currencyPairRequest>(request: R, defaultValue?: FieldsSelection<currencyPair, R>[]) => Observable<FieldsSelection<currencyPair, R>[]>})&({get: <R extends currencyPairRequest>(request: R, defaultValue?: FieldsSelection<currencyPair, R>[]) => Observable<FieldsSelection<currencyPair, R>[]>}),
    
/** fetch data from the table: "currencyPair" using primary key columns */
currencyPairByPk: ((args: {id: Scalars['Int']}) => currencyPairObservableChain & {get: <R extends currencyPairRequest>(request: R, defaultValue?: (FieldsSelection<currencyPair, R> | undefined)) => Observable<(FieldsSelection<currencyPair, R> | undefined)>}),
    
/** fetch data from the table in a streaming manner: "currencyPair" */
currencyPair_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (currencyPair_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (currencyPair_bool_exp | null)}) => {get: <R extends currencyPairRequest>(request: R, defaultValue?: FieldsSelection<currencyPair, R>[]) => Observable<FieldsSelection<currencyPair, R>[]>}),
    
/** fetch data from the table: "deposit" */
deposit: ((args?: {
/** distinct select on columns */
distinct_on?: (deposit_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (deposit_order_by[] | null),
/** filter the rows returned */
where?: (deposit_bool_exp | null)}) => {get: <R extends depositRequest>(request: R, defaultValue?: FieldsSelection<deposit, R>[]) => Observable<FieldsSelection<deposit, R>[]>})&({get: <R extends depositRequest>(request: R, defaultValue?: FieldsSelection<deposit, R>[]) => Observable<FieldsSelection<deposit, R>[]>}),
    
/** fetch data from the table: "deposit" using primary key columns */
depositByPk: ((args: {id: Scalars['bigint']}) => depositObservableChain & {get: <R extends depositRequest>(request: R, defaultValue?: (FieldsSelection<deposit, R> | undefined)) => Observable<(FieldsSelection<deposit, R> | undefined)>}),
    
/** fetch data from the table in a streaming manner: "deposit" */
deposit_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (deposit_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (deposit_bool_exp | null)}) => {get: <R extends depositRequest>(request: R, defaultValue?: FieldsSelection<deposit, R>[]) => Observable<FieldsSelection<deposit, R>[]>}),
    
/** fetch data from the table: "dipdup_contract" */
dipdupContract: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>})&({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>}),
    
/** fetch data from the table: "dipdup_contract" using primary key columns */
dipdupContractByPk: ((args: {name: Scalars['String']}) => dipdup_contractObservableChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_contract_metadata" */
dipdupContractMetadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_metadata_bool_exp | null)}) => {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Observable<FieldsSelection<dipdup_contract_metadata, R>[]>})&({get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Observable<FieldsSelection<dipdup_contract_metadata, R>[]>}),
    
/** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
dipdupContractMetadataByPk: ((args: {id: Scalars['Int']}) => dipdup_contract_metadataObservableChain & {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_metadata, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head" */
dipdupHead: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => {get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>})&({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>}),
    
/** fetch data from the table: "dipdup_head" using primary key columns */
dipdupHeadByPk: ((args: {name: Scalars['String']}) => dipdup_headObservableChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Observable<(FieldsSelection<dipdup_head, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head_status" */
dipdupHeadStatus: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_status_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_status_bool_exp | null)}) => {get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Observable<FieldsSelection<dipdup_head_status, R>[]>})&({get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Observable<FieldsSelection<dipdup_head_status, R>[]>}),
    
/** fetch data from the table: "dipdup_index" */
dipdupIndex: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>})&({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>}),
    
/** fetch data from the table: "dipdup_index" using primary key columns */
dipdupIndexByPk: ((args: {name: Scalars['String']}) => dipdup_indexObservableChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Observable<(FieldsSelection<dipdup_index, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_model_update" */
dipdupModelUpdate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_model_update_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_model_update_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_model_update_bool_exp | null)}) => {get: <R extends dipdup_model_updateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_model_update, R>[]) => Observable<FieldsSelection<dipdup_model_update, R>[]>})&({get: <R extends dipdup_model_updateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_model_update, R>[]) => Observable<FieldsSelection<dipdup_model_update, R>[]>}),
    
/** fetch data from the table: "dipdup_model_update" using primary key columns */
dipdupModelUpdateByPk: ((args: {id: Scalars['Int']}) => dipdup_model_updateObservableChain & {get: <R extends dipdup_model_updateRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_model_update, R> | undefined)) => Observable<(FieldsSelection<dipdup_model_update, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_schema" */
dipdupSchema: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>})&({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>}),
    
/** fetch data from the table: "dipdup_schema" using primary key columns */
dipdupSchemaByPk: ((args: {name: Scalars['String']}) => dipdup_schemaObservableChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Observable<(FieldsSelection<dipdup_schema, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_token_metadata" */
dipdupTokenMetadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_token_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_token_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_token_metadata_bool_exp | null)}) => {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Observable<FieldsSelection<dipdup_token_metadata, R>[]>})&({get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Observable<FieldsSelection<dipdup_token_metadata, R>[]>}),
    
/** fetch data from the table: "dipdup_token_metadata" using primary key columns */
dipdupTokenMetadataByPk: ((args: {id: Scalars['Int']}) => dipdup_token_metadataObservableChain & {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata, R> | undefined)) => Observable<(FieldsSelection<dipdup_token_metadata, R> | undefined)>}),
    
/** fetch data from the table in a streaming manner: "dipdup_contract_metadata" */
dipdup_contract_metadata_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (dipdup_contract_metadata_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (dipdup_contract_metadata_bool_exp | null)}) => {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Observable<FieldsSelection<dipdup_contract_metadata, R>[]>}),
    
/** fetch data from the table in a streaming manner: "dipdup_contract" */
dipdup_contract_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (dipdup_contract_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>}),
    
/** fetch data from the table in a streaming manner: "dipdup_head_status" */
dipdup_head_status_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (dipdup_head_status_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (dipdup_head_status_bool_exp | null)}) => {get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Observable<FieldsSelection<dipdup_head_status, R>[]>}),
    
/** fetch data from the table in a streaming manner: "dipdup_head" */
dipdup_head_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (dipdup_head_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => {get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>}),
    
/** fetch data from the table in a streaming manner: "dipdup_index" */
dipdup_index_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (dipdup_index_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>}),
    
/** fetch data from the table in a streaming manner: "dipdup_model_update" */
dipdup_model_update_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (dipdup_model_update_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (dipdup_model_update_bool_exp | null)}) => {get: <R extends dipdup_model_updateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_model_update, R>[]) => Observable<FieldsSelection<dipdup_model_update, R>[]>}),
    
/** fetch data from the table in a streaming manner: "dipdup_schema" */
dipdup_schema_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (dipdup_schema_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>}),
    
/** fetch data from the table in a streaming manner: "dipdup_token_metadata" */
dipdup_token_metadata_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (dipdup_token_metadata_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (dipdup_token_metadata_bool_exp | null)}) => {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Observable<FieldsSelection<dipdup_token_metadata, R>[]>}),
    
/** fetch data from the table: "entry_liquidity" */
entryLiquidity: ((args?: {
/** distinct select on columns */
distinct_on?: (entry_liquidity_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (entry_liquidity_order_by[] | null),
/** filter the rows returned */
where?: (entry_liquidity_bool_exp | null)}) => {get: <R extends entry_liquidityRequest>(request: R, defaultValue?: FieldsSelection<entry_liquidity, R>[]) => Observable<FieldsSelection<entry_liquidity, R>[]>})&({get: <R extends entry_liquidityRequest>(request: R, defaultValue?: FieldsSelection<entry_liquidity, R>[]) => Observable<FieldsSelection<entry_liquidity, R>[]>}),
    
/** fetch data from the table: "entry_liquidity" using primary key columns */
entryLiquidityByPk: ((args: {poolEntryId: Scalars['String']}) => entry_liquidityObservableChain & {get: <R extends entry_liquidityRequest>(request: R, defaultValue?: (FieldsSelection<entry_liquidity, R> | undefined)) => Observable<(FieldsSelection<entry_liquidity, R> | undefined)>}),
    
/** fetch data from the table in a streaming manner: "entry_liquidity" */
entry_liquidity_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (entry_liquidity_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (entry_liquidity_bool_exp | null)}) => {get: <R extends entry_liquidityRequest>(request: R, defaultValue?: FieldsSelection<entry_liquidity, R>[]) => Observable<FieldsSelection<entry_liquidity, R>[]>}),
    
/** fetch data from the table: "event" */
event: ((args?: {
/** distinct select on columns */
distinct_on?: (event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (event_order_by[] | null),
/** filter the rows returned */
where?: (event_bool_exp | null)}) => {get: <R extends eventRequest>(request: R, defaultValue?: FieldsSelection<event, R>[]) => Observable<FieldsSelection<event, R>[]>})&({get: <R extends eventRequest>(request: R, defaultValue?: FieldsSelection<event, R>[]) => Observable<FieldsSelection<event, R>[]>}),
    
/** fetch data from the table: "event" using primary key columns */
eventByPk: ((args: {id: Scalars['bigint']}) => eventObservableChain & {get: <R extends eventRequest>(request: R, defaultValue?: (FieldsSelection<event, R> | undefined)) => Observable<(FieldsSelection<event, R> | undefined)>}),
    
/** fetch data from the table in a streaming manner: "event" */
event_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (event_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (event_bool_exp | null)}) => {get: <R extends eventRequest>(request: R, defaultValue?: FieldsSelection<event, R>[]) => Observable<FieldsSelection<event, R>[]>}),
    
/** fetch data from the table: "merged_candles" */
mergedCandles: ((args?: {
/** distinct select on columns */
distinct_on?: (merged_candles_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (merged_candles_order_by[] | null),
/** filter the rows returned */
where?: (merged_candles_bool_exp | null)}) => {get: <R extends merged_candlesRequest>(request: R, defaultValue?: FieldsSelection<merged_candles, R>[]) => Observable<FieldsSelection<merged_candles, R>[]>})&({get: <R extends merged_candlesRequest>(request: R, defaultValue?: FieldsSelection<merged_candles, R>[]) => Observable<FieldsSelection<merged_candles, R>[]>}),
    
/** fetch data from the table in a streaming manner: "merged_candles" */
merged_candles_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (merged_candles_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (merged_candles_bool_exp | null)}) => {get: <R extends merged_candlesRequest>(request: R, defaultValue?: FieldsSelection<merged_candles, R>[]) => Observable<FieldsSelection<merged_candles, R>[]>}),
    
/** fetch data from the table: "pool" */
pool: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_order_by[] | null),
/** filter the rows returned */
where?: (pool_bool_exp | null)}) => {get: <R extends poolRequest>(request: R, defaultValue?: FieldsSelection<pool, R>[]) => Observable<FieldsSelection<pool, R>[]>})&({get: <R extends poolRequest>(request: R, defaultValue?: FieldsSelection<pool, R>[]) => Observable<FieldsSelection<pool, R>[]>}),
    
/** fetch data from the table: "pool" using primary key columns */
poolByPk: ((args: {address: Scalars['String']}) => poolObservableChain & {get: <R extends poolRequest>(request: R, defaultValue?: (FieldsSelection<pool, R> | undefined)) => Observable<(FieldsSelection<pool, R> | undefined)>}),
    
/** fetch data from the table: "pool_event" */
poolEvent: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_event_order_by[] | null),
/** filter the rows returned */
where?: (pool_event_bool_exp | null)}) => {get: <R extends pool_eventRequest>(request: R, defaultValue?: FieldsSelection<pool_event, R>[]) => Observable<FieldsSelection<pool_event, R>[]>})&({get: <R extends pool_eventRequest>(request: R, defaultValue?: FieldsSelection<pool_event, R>[]) => Observable<FieldsSelection<pool_event, R>[]>}),
    
/** fetch data from the table: "pool_event" using primary key columns */
poolEventByPk: ((args: {id: Scalars['bigint']}) => pool_eventObservableChain & {get: <R extends pool_eventRequest>(request: R, defaultValue?: (FieldsSelection<pool_event, R> | undefined)) => Observable<(FieldsSelection<pool_event, R> | undefined)>}),
    
/** fetch data from the table: "pool_line" */
poolLine: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_line_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_line_order_by[] | null),
/** filter the rows returned */
where?: (pool_line_bool_exp | null)}) => {get: <R extends pool_lineRequest>(request: R, defaultValue?: FieldsSelection<pool_line, R>[]) => Observable<FieldsSelection<pool_line, R>[]>})&({get: <R extends pool_lineRequest>(request: R, defaultValue?: FieldsSelection<pool_line, R>[]) => Observable<FieldsSelection<pool_line, R>[]>}),
    
/** fetch data from the table: "pool_line" using primary key columns */
poolLineByPk: ((args: {poolLineId: Scalars['String']}) => pool_lineObservableChain & {get: <R extends pool_lineRequest>(request: R, defaultValue?: (FieldsSelection<pool_line, R> | undefined)) => Observable<(FieldsSelection<pool_line, R> | undefined)>}),
    
/** fetch data from the table: "pool_position" */
poolPosition: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_position_order_by[] | null),
/** filter the rows returned */
where?: (pool_position_bool_exp | null)}) => {get: <R extends pool_positionRequest>(request: R, defaultValue?: FieldsSelection<pool_position, R>[]) => Observable<FieldsSelection<pool_position, R>[]>})&({get: <R extends pool_positionRequest>(request: R, defaultValue?: FieldsSelection<pool_position, R>[]) => Observable<FieldsSelection<pool_position, R>[]>}),
    
/** fetch data from the table: "pool_position" using primary key columns */
poolPositionByPk: ((args: {id: Scalars['bigint']}) => pool_positionObservableChain & {get: <R extends pool_positionRequest>(request: R, defaultValue?: (FieldsSelection<pool_position, R> | undefined)) => Observable<(FieldsSelection<pool_position, R> | undefined)>}),
    
/** fetch data from the table: "pool_state" */
poolState: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_state_order_by[] | null),
/** filter the rows returned */
where?: (pool_state_bool_exp | null)}) => {get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Observable<FieldsSelection<pool_state, R>[]>})&({get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Observable<FieldsSelection<pool_state, R>[]>}),
    
/** fetch data from the table: "pool_state" using primary key columns */
poolStateByPk: ((args: {id: Scalars['bigint']}) => pool_stateObservableChain & {get: <R extends pool_stateRequest>(request: R, defaultValue?: (FieldsSelection<pool_state, R> | undefined)) => Observable<(FieldsSelection<pool_state, R> | undefined)>}),
    
/** fetch data from the table in a streaming manner: "pool_event" */
pool_event_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (pool_event_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (pool_event_bool_exp | null)}) => {get: <R extends pool_eventRequest>(request: R, defaultValue?: FieldsSelection<pool_event, R>[]) => Observable<FieldsSelection<pool_event, R>[]>}),
    
/** fetch data from the table in a streaming manner: "pool_line" */
pool_line_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (pool_line_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (pool_line_bool_exp | null)}) => {get: <R extends pool_lineRequest>(request: R, defaultValue?: FieldsSelection<pool_line, R>[]) => Observable<FieldsSelection<pool_line, R>[]>}),
    
/** fetch data from the table in a streaming manner: "pool_position" */
pool_position_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (pool_position_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (pool_position_bool_exp | null)}) => {get: <R extends pool_positionRequest>(request: R, defaultValue?: FieldsSelection<pool_position, R>[]) => Observable<FieldsSelection<pool_position, R>[]>}),
    
/** fetch data from the table in a streaming manner: "pool_state" */
pool_state_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (pool_state_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (pool_state_bool_exp | null)}) => {get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Observable<FieldsSelection<pool_state, R>[]>}),
    
/** fetch data from the table in a streaming manner: "pool" */
pool_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (pool_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (pool_bool_exp | null)}) => {get: <R extends poolRequest>(request: R, defaultValue?: FieldsSelection<pool, R>[]) => Observable<FieldsSelection<pool, R>[]>}),
    
/** fetch data from the table: "position" */
position: ((args?: {
/** distinct select on columns */
distinct_on?: (position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (position_order_by[] | null),
/** filter the rows returned */
where?: (position_bool_exp | null)}) => {get: <R extends positionRequest>(request: R, defaultValue?: FieldsSelection<position, R>[]) => Observable<FieldsSelection<position, R>[]>})&({get: <R extends positionRequest>(request: R, defaultValue?: FieldsSelection<position, R>[]) => Observable<FieldsSelection<position, R>[]>}),
    
/** fetch data from the table: "position" using primary key columns */
positionByPk: ((args: {id: Scalars['bigint']}) => positionObservableChain & {get: <R extends positionRequest>(request: R, defaultValue?: (FieldsSelection<position, R> | undefined)) => Observable<(FieldsSelection<position, R> | undefined)>}),
    
/** fetch data from the table in a streaming manner: "position" */
position_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (position_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (position_bool_exp | null)}) => {get: <R extends positionRequest>(request: R, defaultValue?: FieldsSelection<position, R>[]) => Observable<FieldsSelection<position, R>[]>}),
    
/** fetch data from the table: "quotesWma" */
quotesWma: ((args?: {
/** distinct select on columns */
distinct_on?: (quotesWma_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (quotesWma_order_by[] | null),
/** filter the rows returned */
where?: (quotesWma_bool_exp | null)}) => {get: <R extends quotesWmaRequest>(request: R, defaultValue?: FieldsSelection<quotesWma, R>[]) => Observable<FieldsSelection<quotesWma, R>[]>})&({get: <R extends quotesWmaRequest>(request: R, defaultValue?: FieldsSelection<quotesWma, R>[]) => Observable<FieldsSelection<quotesWma, R>[]>}),
    
/** fetch data from the table: "quotesWma_15m" */
quotesWma15m: ((args?: {
/** distinct select on columns */
distinct_on?: (quotesWma_15m_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (quotesWma_15m_order_by[] | null),
/** filter the rows returned */
where?: (quotesWma_15m_bool_exp | null)}) => {get: <R extends quotesWma_15mRequest>(request: R, defaultValue?: FieldsSelection<quotesWma_15m, R>[]) => Observable<FieldsSelection<quotesWma_15m, R>[]>})&({get: <R extends quotesWma_15mRequest>(request: R, defaultValue?: FieldsSelection<quotesWma_15m, R>[]) => Observable<FieldsSelection<quotesWma_15m, R>[]>}),
    
/** fetch data from the table in a streaming manner: "quotesWma_15m" */
quotesWma_15m_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (quotesWma_15m_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (quotesWma_15m_bool_exp | null)}) => {get: <R extends quotesWma_15mRequest>(request: R, defaultValue?: FieldsSelection<quotesWma_15m, R>[]) => Observable<FieldsSelection<quotesWma_15m, R>[]>}),
    
/** fetch data from the table in a streaming manner: "quotesWma" */
quotesWma_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (quotesWma_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (quotesWma_bool_exp | null)}) => {get: <R extends quotesWmaRequest>(request: R, defaultValue?: FieldsSelection<quotesWma, R>[]) => Observable<FieldsSelection<quotesWma, R>[]>}),
    
/** fetch data from the table: "total_value_locked" */
totalValueLocked: ((args?: {
/** distinct select on columns */
distinct_on?: (total_value_locked_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (total_value_locked_order_by[] | null),
/** filter the rows returned */
where?: (total_value_locked_bool_exp | null)}) => {get: <R extends total_value_lockedRequest>(request: R, defaultValue?: FieldsSelection<total_value_locked, R>[]) => Observable<FieldsSelection<total_value_locked, R>[]>})&({get: <R extends total_value_lockedRequest>(request: R, defaultValue?: FieldsSelection<total_value_locked, R>[]) => Observable<FieldsSelection<total_value_locked, R>[]>}),
    
/** fetch data from the table in a streaming manner: "total_value_locked" */
total_value_locked_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (total_value_locked_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (total_value_locked_bool_exp | null)}) => {get: <R extends total_value_lockedRequest>(request: R, defaultValue?: FieldsSelection<total_value_locked, R>[]) => Observable<FieldsSelection<total_value_locked, R>[]>}),
    
/** fetch data from the table: "user" */
user: ((args?: {
/** distinct select on columns */
distinct_on?: (user_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (user_order_by[] | null),
/** filter the rows returned */
where?: (user_bool_exp | null)}) => {get: <R extends userRequest>(request: R, defaultValue?: FieldsSelection<user, R>[]) => Observable<FieldsSelection<user, R>[]>})&({get: <R extends userRequest>(request: R, defaultValue?: FieldsSelection<user, R>[]) => Observable<FieldsSelection<user, R>[]>}),
    
/** fetch data from the table: "user" using primary key columns */
userByPk: ((args: {address: Scalars['String']}) => userObservableChain & {get: <R extends userRequest>(request: R, defaultValue?: (FieldsSelection<user, R> | undefined)) => Observable<(FieldsSelection<user, R> | undefined)>}),
    
/** fetch data from the table in a streaming manner: "user" */
user_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (user_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (user_bool_exp | null)}) => {get: <R extends userRequest>(request: R, defaultValue?: FieldsSelection<user, R>[]) => Observable<FieldsSelection<user, R>[]>}),
    
/** fetch data from the table: "withdrawal" */
withdrawal: ((args?: {
/** distinct select on columns */
distinct_on?: (withdrawal_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (withdrawal_order_by[] | null),
/** filter the rows returned */
where?: (withdrawal_bool_exp | null)}) => {get: <R extends withdrawalRequest>(request: R, defaultValue?: FieldsSelection<withdrawal, R>[]) => Observable<FieldsSelection<withdrawal, R>[]>})&({get: <R extends withdrawalRequest>(request: R, defaultValue?: FieldsSelection<withdrawal, R>[]) => Observable<FieldsSelection<withdrawal, R>[]>}),
    
/** fetch data from the table: "withdrawal" using primary key columns */
withdrawalByPk: ((args: {id: Scalars['bigint']}) => withdrawalObservableChain & {get: <R extends withdrawalRequest>(request: R, defaultValue?: (FieldsSelection<withdrawal, R> | undefined)) => Observable<(FieldsSelection<withdrawal, R> | undefined)>}),
    
/** fetch data from the table in a streaming manner: "withdrawal" */
withdrawal_stream: ((args: {
/** maximum number of rows returned in a single batch */
batch_size: Scalars['Int'],
/** cursor to stream the results returned by the query */
cursor: (withdrawal_stream_cursor_input | null)[],
/** filter the rows returned */
where?: (withdrawal_bool_exp | null)}) => {get: <R extends withdrawalRequest>(request: R, defaultValue?: FieldsSelection<withdrawal, R>[]) => Observable<FieldsSelection<withdrawal, R>[]>})
}


/** columns and relationships of "total_value_locked" */
export interface total_value_lockedPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    createdTime: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    cumSum: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    eventId: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>})
}


/** columns and relationships of "total_value_locked" */
export interface total_value_lockedObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    createdTime: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    cumSum: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    eventId: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>})
}


/** columns and relationships of "user" */
export interface userPromiseChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An array relationship */
bets: ((args?: {
/** distinct select on columns */
distinct_on?: (bet_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (bet_order_by[] | null),
/** filter the rows returned */
where?: (bet_bool_exp | null)}) => {get: <R extends betRequest>(request: R, defaultValue?: FieldsSelection<bet, R>[]) => Promise<FieldsSelection<bet, R>[]>})&({get: <R extends betRequest>(request: R, defaultValue?: FieldsSelection<bet, R>[]) => Promise<FieldsSelection<bet, R>[]>}),
    
/** An array relationship */
claims: ((args?: {
/** distinct select on columns */
distinct_on?: (claim_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (claim_order_by[] | null),
/** filter the rows returned */
where?: (claim_bool_exp | null)}) => {get: <R extends claimRequest>(request: R, defaultValue?: FieldsSelection<claim, R>[]) => Promise<FieldsSelection<claim, R>[]>})&({get: <R extends claimRequest>(request: R, defaultValue?: FieldsSelection<claim, R>[]) => Promise<FieldsSelection<claim, R>[]>}),
    
/** An array relationship */
deposits: ((args?: {
/** distinct select on columns */
distinct_on?: (deposit_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (deposit_order_by[] | null),
/** filter the rows returned */
where?: (deposit_bool_exp | null)}) => {get: <R extends depositRequest>(request: R, defaultValue?: FieldsSelection<deposit, R>[]) => Promise<FieldsSelection<deposit, R>[]>})&({get: <R extends depositRequest>(request: R, defaultValue?: FieldsSelection<deposit, R>[]) => Promise<FieldsSelection<deposit, R>[]>}),
    
/** An array relationship */
entries: ((args?: {
/** distinct select on columns */
distinct_on?: (entry_liquidity_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (entry_liquidity_order_by[] | null),
/** filter the rows returned */
where?: (entry_liquidity_bool_exp | null)}) => {get: <R extends entry_liquidityRequest>(request: R, defaultValue?: FieldsSelection<entry_liquidity, R>[]) => Promise<FieldsSelection<entry_liquidity, R>[]>})&({get: <R extends entry_liquidityRequest>(request: R, defaultValue?: FieldsSelection<entry_liquidity, R>[]) => Promise<FieldsSelection<entry_liquidity, R>[]>}),
    
/** An array relationship */
events: ((args?: {
/** distinct select on columns */
distinct_on?: (event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (event_order_by[] | null),
/** filter the rows returned */
where?: (event_bool_exp | null)}) => {get: <R extends eventRequest>(request: R, defaultValue?: FieldsSelection<event, R>[]) => Promise<FieldsSelection<event, R>[]>})&({get: <R extends eventRequest>(request: R, defaultValue?: FieldsSelection<event, R>[]) => Promise<FieldsSelection<event, R>[]>}),
    
/** An array relationship */
poolPositions: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_position_order_by[] | null),
/** filter the rows returned */
where?: (pool_position_bool_exp | null)}) => {get: <R extends pool_positionRequest>(request: R, defaultValue?: FieldsSelection<pool_position, R>[]) => Promise<FieldsSelection<pool_position, R>[]>})&({get: <R extends pool_positionRequest>(request: R, defaultValue?: FieldsSelection<pool_position, R>[]) => Promise<FieldsSelection<pool_position, R>[]>}),
    
/** An array relationship */
poolStates: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_state_order_by[] | null),
/** filter the rows returned */
where?: (pool_state_bool_exp | null)}) => {get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Promise<FieldsSelection<pool_state, R>[]>})&({get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Promise<FieldsSelection<pool_state, R>[]>}),
    
/** An array relationship */
positions: ((args?: {
/** distinct select on columns */
distinct_on?: (position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (position_order_by[] | null),
/** filter the rows returned */
where?: (position_bool_exp | null)}) => {get: <R extends positionRequest>(request: R, defaultValue?: FieldsSelection<position, R>[]) => Promise<FieldsSelection<position, R>[]>})&({get: <R extends positionRequest>(request: R, defaultValue?: FieldsSelection<position, R>[]) => Promise<FieldsSelection<position, R>[]>}),
    
/** An array relationship */
thirdPartyWithdrawals: ((args?: {
/** distinct select on columns */
distinct_on?: (withdrawal_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (withdrawal_order_by[] | null),
/** filter the rows returned */
where?: (withdrawal_bool_exp | null)}) => {get: <R extends withdrawalRequest>(request: R, defaultValue?: FieldsSelection<withdrawal, R>[]) => Promise<FieldsSelection<withdrawal, R>[]>})&({get: <R extends withdrawalRequest>(request: R, defaultValue?: FieldsSelection<withdrawal, R>[]) => Promise<FieldsSelection<withdrawal, R>[]>}),
    totalBetsAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    totalBetsCount: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    totalFeesCollected: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    totalLiquidityProvided: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    totalProviderReward: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    totalReward: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    totalWithdrawn: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    
/** An array relationship */
withdrawals: ((args?: {
/** distinct select on columns */
distinct_on?: (withdrawal_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (withdrawal_order_by[] | null),
/** filter the rows returned */
where?: (withdrawal_bool_exp | null)}) => {get: <R extends withdrawalRequest>(request: R, defaultValue?: FieldsSelection<withdrawal, R>[]) => Promise<FieldsSelection<withdrawal, R>[]>})&({get: <R extends withdrawalRequest>(request: R, defaultValue?: FieldsSelection<withdrawal, R>[]) => Promise<FieldsSelection<withdrawal, R>[]>})
}


/** columns and relationships of "user" */
export interface userObservableChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An array relationship */
bets: ((args?: {
/** distinct select on columns */
distinct_on?: (bet_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (bet_order_by[] | null),
/** filter the rows returned */
where?: (bet_bool_exp | null)}) => {get: <R extends betRequest>(request: R, defaultValue?: FieldsSelection<bet, R>[]) => Observable<FieldsSelection<bet, R>[]>})&({get: <R extends betRequest>(request: R, defaultValue?: FieldsSelection<bet, R>[]) => Observable<FieldsSelection<bet, R>[]>}),
    
/** An array relationship */
claims: ((args?: {
/** distinct select on columns */
distinct_on?: (claim_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (claim_order_by[] | null),
/** filter the rows returned */
where?: (claim_bool_exp | null)}) => {get: <R extends claimRequest>(request: R, defaultValue?: FieldsSelection<claim, R>[]) => Observable<FieldsSelection<claim, R>[]>})&({get: <R extends claimRequest>(request: R, defaultValue?: FieldsSelection<claim, R>[]) => Observable<FieldsSelection<claim, R>[]>}),
    
/** An array relationship */
deposits: ((args?: {
/** distinct select on columns */
distinct_on?: (deposit_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (deposit_order_by[] | null),
/** filter the rows returned */
where?: (deposit_bool_exp | null)}) => {get: <R extends depositRequest>(request: R, defaultValue?: FieldsSelection<deposit, R>[]) => Observable<FieldsSelection<deposit, R>[]>})&({get: <R extends depositRequest>(request: R, defaultValue?: FieldsSelection<deposit, R>[]) => Observable<FieldsSelection<deposit, R>[]>}),
    
/** An array relationship */
entries: ((args?: {
/** distinct select on columns */
distinct_on?: (entry_liquidity_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (entry_liquidity_order_by[] | null),
/** filter the rows returned */
where?: (entry_liquidity_bool_exp | null)}) => {get: <R extends entry_liquidityRequest>(request: R, defaultValue?: FieldsSelection<entry_liquidity, R>[]) => Observable<FieldsSelection<entry_liquidity, R>[]>})&({get: <R extends entry_liquidityRequest>(request: R, defaultValue?: FieldsSelection<entry_liquidity, R>[]) => Observable<FieldsSelection<entry_liquidity, R>[]>}),
    
/** An array relationship */
events: ((args?: {
/** distinct select on columns */
distinct_on?: (event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (event_order_by[] | null),
/** filter the rows returned */
where?: (event_bool_exp | null)}) => {get: <R extends eventRequest>(request: R, defaultValue?: FieldsSelection<event, R>[]) => Observable<FieldsSelection<event, R>[]>})&({get: <R extends eventRequest>(request: R, defaultValue?: FieldsSelection<event, R>[]) => Observable<FieldsSelection<event, R>[]>}),
    
/** An array relationship */
poolPositions: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_position_order_by[] | null),
/** filter the rows returned */
where?: (pool_position_bool_exp | null)}) => {get: <R extends pool_positionRequest>(request: R, defaultValue?: FieldsSelection<pool_position, R>[]) => Observable<FieldsSelection<pool_position, R>[]>})&({get: <R extends pool_positionRequest>(request: R, defaultValue?: FieldsSelection<pool_position, R>[]) => Observable<FieldsSelection<pool_position, R>[]>}),
    
/** An array relationship */
poolStates: ((args?: {
/** distinct select on columns */
distinct_on?: (pool_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (pool_state_order_by[] | null),
/** filter the rows returned */
where?: (pool_state_bool_exp | null)}) => {get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Observable<FieldsSelection<pool_state, R>[]>})&({get: <R extends pool_stateRequest>(request: R, defaultValue?: FieldsSelection<pool_state, R>[]) => Observable<FieldsSelection<pool_state, R>[]>}),
    
/** An array relationship */
positions: ((args?: {
/** distinct select on columns */
distinct_on?: (position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (position_order_by[] | null),
/** filter the rows returned */
where?: (position_bool_exp | null)}) => {get: <R extends positionRequest>(request: R, defaultValue?: FieldsSelection<position, R>[]) => Observable<FieldsSelection<position, R>[]>})&({get: <R extends positionRequest>(request: R, defaultValue?: FieldsSelection<position, R>[]) => Observable<FieldsSelection<position, R>[]>}),
    
/** An array relationship */
thirdPartyWithdrawals: ((args?: {
/** distinct select on columns */
distinct_on?: (withdrawal_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (withdrawal_order_by[] | null),
/** filter the rows returned */
where?: (withdrawal_bool_exp | null)}) => {get: <R extends withdrawalRequest>(request: R, defaultValue?: FieldsSelection<withdrawal, R>[]) => Observable<FieldsSelection<withdrawal, R>[]>})&({get: <R extends withdrawalRequest>(request: R, defaultValue?: FieldsSelection<withdrawal, R>[]) => Observable<FieldsSelection<withdrawal, R>[]>}),
    totalBetsAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    totalBetsCount: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    totalFeesCollected: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    totalLiquidityProvided: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    totalProviderReward: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    totalReward: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    totalWithdrawn: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    
/** An array relationship */
withdrawals: ((args?: {
/** distinct select on columns */
distinct_on?: (withdrawal_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (withdrawal_order_by[] | null),
/** filter the rows returned */
where?: (withdrawal_bool_exp | null)}) => {get: <R extends withdrawalRequest>(request: R, defaultValue?: FieldsSelection<withdrawal, R>[]) => Observable<FieldsSelection<withdrawal, R>[]>})&({get: <R extends withdrawalRequest>(request: R, defaultValue?: FieldsSelection<withdrawal, R>[]) => Observable<FieldsSelection<withdrawal, R>[]>})
}


/** columns and relationships of "withdrawal" */
export interface withdrawalPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    createdTime: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    
/** An object relationship */
event: (eventPromiseChain & {get: <R extends eventRequest>(request: R, defaultValue?: FieldsSelection<event, R>) => Promise<FieldsSelection<event, R>>}),
    eventId: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    
/** An object relationship */
feeCollector: (userPromiseChain & {get: <R extends userRequest>(request: R, defaultValue?: (FieldsSelection<user, R> | undefined)) => Promise<(FieldsSelection<user, R> | undefined)>}),
    feeCollectorId: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    opgHash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** MANUAL: MANUAL\nTHIRD_PARTY: THIRD_PARTY */
type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An object relationship */
user: (userPromiseChain & {get: <R extends userRequest>(request: R, defaultValue?: FieldsSelection<user, R>) => Promise<FieldsSelection<user, R>>}),
    userId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "withdrawal" */
export interface withdrawalObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    createdTime: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    
/** An object relationship */
event: (eventObservableChain & {get: <R extends eventRequest>(request: R, defaultValue?: FieldsSelection<event, R>) => Observable<FieldsSelection<event, R>>}),
    eventId: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    
/** An object relationship */
feeCollector: (userObservableChain & {get: <R extends userRequest>(request: R, defaultValue?: (FieldsSelection<user, R> | undefined)) => Observable<(FieldsSelection<user, R> | undefined)>}),
    feeCollectorId: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    opgHash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** MANUAL: MANUAL\nTHIRD_PARTY: THIRD_PARTY */
type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An object relationship */
user: (userObservableChain & {get: <R extends userRequest>(request: R, defaultValue?: FieldsSelection<user, R>) => Observable<FieldsSelection<user, R>>}),
    userId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}