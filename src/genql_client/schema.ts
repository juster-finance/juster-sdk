import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    Boolean: boolean,
    Float: number,
    ID: string,
    Int: number,
    String: string,
    bigint: any,
    numeric: any,
    timestamptz: any,
}


/** columns and relationships of "juster.bet" */
export interface juster_bet {
    amount: Scalars['numeric']
    /** An object relationship */
    event: juster_event
    event_id: Scalars['Int']
    id: Scalars['Int']
    reward: Scalars['numeric']
    /** ABOVE_EQ: ABOVE_EQ\nBELOW: BELOW */
    side: Scalars['String']
    /** An object relationship */
    user: juster_user
    user_id: Scalars['String']
    __typename: 'juster_bet'
}


/** aggregated selection of "juster.bet" */
export interface juster_bet_aggregate {
    aggregate?: juster_bet_aggregate_fields
    nodes: juster_bet[]
    __typename: 'juster_bet_aggregate'
}


/** aggregate fields of "juster.bet" */
export interface juster_bet_aggregate_fields {
    avg?: juster_bet_avg_fields
    count?: Scalars['Int']
    max?: juster_bet_max_fields
    min?: juster_bet_min_fields
    stddev?: juster_bet_stddev_fields
    stddev_pop?: juster_bet_stddev_pop_fields
    stddev_samp?: juster_bet_stddev_samp_fields
    sum?: juster_bet_sum_fields
    var_pop?: juster_bet_var_pop_fields
    var_samp?: juster_bet_var_samp_fields
    variance?: juster_bet_variance_fields
    __typename: 'juster_bet_aggregate_fields'
}


/** aggregate avg on columns */
export interface juster_bet_avg_fields {
    amount?: Scalars['Float']
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    reward?: Scalars['Float']
    __typename: 'juster_bet_avg_fields'
}


/** aggregate max on columns */
export interface juster_bet_max_fields {
    amount?: Scalars['numeric']
    event_id?: Scalars['Int']
    id?: Scalars['Int']
    reward?: Scalars['numeric']
    side?: Scalars['String']
    user_id?: Scalars['String']
    __typename: 'juster_bet_max_fields'
}


/** aggregate min on columns */
export interface juster_bet_min_fields {
    amount?: Scalars['numeric']
    event_id?: Scalars['Int']
    id?: Scalars['Int']
    reward?: Scalars['numeric']
    side?: Scalars['String']
    user_id?: Scalars['String']
    __typename: 'juster_bet_min_fields'
}


/** select columns of table "juster.bet" */
export type juster_bet_select_column = 'amount' | 'event_id' | 'id' | 'reward' | 'side' | 'user_id'


/** aggregate stddev on columns */
export interface juster_bet_stddev_fields {
    amount?: Scalars['Float']
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    reward?: Scalars['Float']
    __typename: 'juster_bet_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface juster_bet_stddev_pop_fields {
    amount?: Scalars['Float']
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    reward?: Scalars['Float']
    __typename: 'juster_bet_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface juster_bet_stddev_samp_fields {
    amount?: Scalars['Float']
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    reward?: Scalars['Float']
    __typename: 'juster_bet_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface juster_bet_sum_fields {
    amount?: Scalars['numeric']
    event_id?: Scalars['Int']
    id?: Scalars['Int']
    reward?: Scalars['numeric']
    __typename: 'juster_bet_sum_fields'
}


/** aggregate var_pop on columns */
export interface juster_bet_var_pop_fields {
    amount?: Scalars['Float']
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    reward?: Scalars['Float']
    __typename: 'juster_bet_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface juster_bet_var_samp_fields {
    amount?: Scalars['Float']
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    reward?: Scalars['Float']
    __typename: 'juster_bet_var_samp_fields'
}


/** aggregate variance on columns */
export interface juster_bet_variance_fields {
    amount?: Scalars['Float']
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    reward?: Scalars['Float']
    __typename: 'juster_bet_variance_fields'
}


/** columns and relationships of "juster.currencypair" */
export interface juster_currencypair {
    /** An array relationship */
    events: juster_event[]
    /** An aggregated array relationship */
    events_aggregate: juster_event_aggregate
    id: Scalars['Int']
    /** An array relationship */
    quotes: juster_quote[]
    /** An aggregated array relationship */
    quotes_aggregate: juster_quote_aggregate
    symbol: Scalars['String']
    __typename: 'juster_currencypair'
}


/** aggregated selection of "juster.currencypair" */
export interface juster_currencypair_aggregate {
    aggregate?: juster_currencypair_aggregate_fields
    nodes: juster_currencypair[]
    __typename: 'juster_currencypair_aggregate'
}


/** aggregate fields of "juster.currencypair" */
export interface juster_currencypair_aggregate_fields {
    avg?: juster_currencypair_avg_fields
    count?: Scalars['Int']
    max?: juster_currencypair_max_fields
    min?: juster_currencypair_min_fields
    stddev?: juster_currencypair_stddev_fields
    stddev_pop?: juster_currencypair_stddev_pop_fields
    stddev_samp?: juster_currencypair_stddev_samp_fields
    sum?: juster_currencypair_sum_fields
    var_pop?: juster_currencypair_var_pop_fields
    var_samp?: juster_currencypair_var_samp_fields
    variance?: juster_currencypair_variance_fields
    __typename: 'juster_currencypair_aggregate_fields'
}


/** aggregate avg on columns */
export interface juster_currencypair_avg_fields {
    id?: Scalars['Float']
    __typename: 'juster_currencypair_avg_fields'
}


/** aggregate max on columns */
export interface juster_currencypair_max_fields {
    id?: Scalars['Int']
    symbol?: Scalars['String']
    __typename: 'juster_currencypair_max_fields'
}


/** aggregate min on columns */
export interface juster_currencypair_min_fields {
    id?: Scalars['Int']
    symbol?: Scalars['String']
    __typename: 'juster_currencypair_min_fields'
}


/** select columns of table "juster.currencypair" */
export type juster_currencypair_select_column = 'id' | 'symbol'


/** aggregate stddev on columns */
export interface juster_currencypair_stddev_fields {
    id?: Scalars['Float']
    __typename: 'juster_currencypair_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface juster_currencypair_stddev_pop_fields {
    id?: Scalars['Float']
    __typename: 'juster_currencypair_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface juster_currencypair_stddev_samp_fields {
    id?: Scalars['Float']
    __typename: 'juster_currencypair_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface juster_currencypair_sum_fields {
    id?: Scalars['Int']
    __typename: 'juster_currencypair_sum_fields'
}


/** aggregate var_pop on columns */
export interface juster_currencypair_var_pop_fields {
    id?: Scalars['Float']
    __typename: 'juster_currencypair_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface juster_currencypair_var_samp_fields {
    id?: Scalars['Float']
    __typename: 'juster_currencypair_var_samp_fields'
}


/** aggregate variance on columns */
export interface juster_currencypair_variance_fields {
    id?: Scalars['Float']
    __typename: 'juster_currencypair_variance_fields'
}


/** columns and relationships of "juster.deposit" */
export interface juster_deposit {
    amount_above_eq: Scalars['numeric']
    amount_below: Scalars['numeric']
    /** An object relationship */
    event: juster_event
    event_id: Scalars['Int']
    id: Scalars['Int']
    shares: Scalars['numeric']
    /** An object relationship */
    user: juster_user
    user_id: Scalars['String']
    __typename: 'juster_deposit'
}


/** aggregated selection of "juster.deposit" */
export interface juster_deposit_aggregate {
    aggregate?: juster_deposit_aggregate_fields
    nodes: juster_deposit[]
    __typename: 'juster_deposit_aggregate'
}


/** aggregate fields of "juster.deposit" */
export interface juster_deposit_aggregate_fields {
    avg?: juster_deposit_avg_fields
    count?: Scalars['Int']
    max?: juster_deposit_max_fields
    min?: juster_deposit_min_fields
    stddev?: juster_deposit_stddev_fields
    stddev_pop?: juster_deposit_stddev_pop_fields
    stddev_samp?: juster_deposit_stddev_samp_fields
    sum?: juster_deposit_sum_fields
    var_pop?: juster_deposit_var_pop_fields
    var_samp?: juster_deposit_var_samp_fields
    variance?: juster_deposit_variance_fields
    __typename: 'juster_deposit_aggregate_fields'
}


/** aggregate avg on columns */
export interface juster_deposit_avg_fields {
    amount_above_eq?: Scalars['Float']
    amount_below?: Scalars['Float']
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    shares?: Scalars['Float']
    __typename: 'juster_deposit_avg_fields'
}


/** aggregate max on columns */
export interface juster_deposit_max_fields {
    amount_above_eq?: Scalars['numeric']
    amount_below?: Scalars['numeric']
    event_id?: Scalars['Int']
    id?: Scalars['Int']
    shares?: Scalars['numeric']
    user_id?: Scalars['String']
    __typename: 'juster_deposit_max_fields'
}


/** aggregate min on columns */
export interface juster_deposit_min_fields {
    amount_above_eq?: Scalars['numeric']
    amount_below?: Scalars['numeric']
    event_id?: Scalars['Int']
    id?: Scalars['Int']
    shares?: Scalars['numeric']
    user_id?: Scalars['String']
    __typename: 'juster_deposit_min_fields'
}


/** select columns of table "juster.deposit" */
export type juster_deposit_select_column = 'amount_above_eq' | 'amount_below' | 'event_id' | 'id' | 'shares' | 'user_id'


/** aggregate stddev on columns */
export interface juster_deposit_stddev_fields {
    amount_above_eq?: Scalars['Float']
    amount_below?: Scalars['Float']
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    shares?: Scalars['Float']
    __typename: 'juster_deposit_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface juster_deposit_stddev_pop_fields {
    amount_above_eq?: Scalars['Float']
    amount_below?: Scalars['Float']
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    shares?: Scalars['Float']
    __typename: 'juster_deposit_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface juster_deposit_stddev_samp_fields {
    amount_above_eq?: Scalars['Float']
    amount_below?: Scalars['Float']
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    shares?: Scalars['Float']
    __typename: 'juster_deposit_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface juster_deposit_sum_fields {
    amount_above_eq?: Scalars['numeric']
    amount_below?: Scalars['numeric']
    event_id?: Scalars['Int']
    id?: Scalars['Int']
    shares?: Scalars['numeric']
    __typename: 'juster_deposit_sum_fields'
}


/** aggregate var_pop on columns */
export interface juster_deposit_var_pop_fields {
    amount_above_eq?: Scalars['Float']
    amount_below?: Scalars['Float']
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    shares?: Scalars['Float']
    __typename: 'juster_deposit_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface juster_deposit_var_samp_fields {
    amount_above_eq?: Scalars['Float']
    amount_below?: Scalars['Float']
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    shares?: Scalars['Float']
    __typename: 'juster_deposit_var_samp_fields'
}


/** aggregate variance on columns */
export interface juster_deposit_variance_fields {
    amount_above_eq?: Scalars['Float']
    amount_below?: Scalars['Float']
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    shares?: Scalars['Float']
    __typename: 'juster_deposit_variance_fields'
}


/**
 * Stores current level of index and hash of it's config
 * 
 * 
 * columns and relationships of "juster.dipdup_state"
 * 
 */
export interface juster_dipdup_state {
    hash: Scalars['String']
    id: Scalars['Int']
    index_name: Scalars['String']
    /** operation: operation\nbig_map: big_map\nblock: block\nschema: schema */
    index_type: Scalars['String']
    level: Scalars['Int']
    __typename: 'juster_dipdup_state'
}


/** aggregated selection of "juster.dipdup_state" */
export interface juster_dipdup_state_aggregate {
    aggregate?: juster_dipdup_state_aggregate_fields
    nodes: juster_dipdup_state[]
    __typename: 'juster_dipdup_state_aggregate'
}


/** aggregate fields of "juster.dipdup_state" */
export interface juster_dipdup_state_aggregate_fields {
    avg?: juster_dipdup_state_avg_fields
    count?: Scalars['Int']
    max?: juster_dipdup_state_max_fields
    min?: juster_dipdup_state_min_fields
    stddev?: juster_dipdup_state_stddev_fields
    stddev_pop?: juster_dipdup_state_stddev_pop_fields
    stddev_samp?: juster_dipdup_state_stddev_samp_fields
    sum?: juster_dipdup_state_sum_fields
    var_pop?: juster_dipdup_state_var_pop_fields
    var_samp?: juster_dipdup_state_var_samp_fields
    variance?: juster_dipdup_state_variance_fields
    __typename: 'juster_dipdup_state_aggregate_fields'
}


/** aggregate avg on columns */
export interface juster_dipdup_state_avg_fields {
    id?: Scalars['Float']
    level?: Scalars['Float']
    __typename: 'juster_dipdup_state_avg_fields'
}


/** aggregate max on columns */
export interface juster_dipdup_state_max_fields {
    hash?: Scalars['String']
    id?: Scalars['Int']
    index_name?: Scalars['String']
    index_type?: Scalars['String']
    level?: Scalars['Int']
    __typename: 'juster_dipdup_state_max_fields'
}


/** aggregate min on columns */
export interface juster_dipdup_state_min_fields {
    hash?: Scalars['String']
    id?: Scalars['Int']
    index_name?: Scalars['String']
    index_type?: Scalars['String']
    level?: Scalars['Int']
    __typename: 'juster_dipdup_state_min_fields'
}


/** select columns of table "juster.dipdup_state" */
export type juster_dipdup_state_select_column = 'hash' | 'id' | 'index_name' | 'index_type' | 'level'


/** aggregate stddev on columns */
export interface juster_dipdup_state_stddev_fields {
    id?: Scalars['Float']
    level?: Scalars['Float']
    __typename: 'juster_dipdup_state_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface juster_dipdup_state_stddev_pop_fields {
    id?: Scalars['Float']
    level?: Scalars['Float']
    __typename: 'juster_dipdup_state_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface juster_dipdup_state_stddev_samp_fields {
    id?: Scalars['Float']
    level?: Scalars['Float']
    __typename: 'juster_dipdup_state_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface juster_dipdup_state_sum_fields {
    id?: Scalars['Int']
    level?: Scalars['Int']
    __typename: 'juster_dipdup_state_sum_fields'
}


/** aggregate var_pop on columns */
export interface juster_dipdup_state_var_pop_fields {
    id?: Scalars['Float']
    level?: Scalars['Float']
    __typename: 'juster_dipdup_state_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface juster_dipdup_state_var_samp_fields {
    id?: Scalars['Float']
    level?: Scalars['Float']
    __typename: 'juster_dipdup_state_var_samp_fields'
}


/** aggregate variance on columns */
export interface juster_dipdup_state_variance_fields {
    id?: Scalars['Float']
    level?: Scalars['Float']
    __typename: 'juster_dipdup_state_variance_fields'
}


/** columns and relationships of "juster.event" */
export interface juster_event {
    /** An array relationship */
    bets: juster_bet[]
    /** An aggregated array relationship */
    bets_aggregate: juster_bet_aggregate
    bets_close_time: Scalars['timestamptz']
    closed_dynamics?: Scalars['numeric']
    closed_oracle_time?: Scalars['timestamptz']
    closed_rate?: Scalars['numeric']
    created_time: Scalars['timestamptz']
    /** An object relationship */
    currency_pair: juster_currencypair
    currency_pair_id: Scalars['Int']
    /** An array relationship */
    deposits: juster_deposit[]
    /** An aggregated array relationship */
    deposits_aggregate: juster_deposit_aggregate
    id: Scalars['Int']
    liquidity_percent: Scalars['numeric']
    measure_oracle_start_time?: Scalars['timestamptz']
    measure_period: Scalars['bigint']
    pool_above_eq: Scalars['numeric']
    pool_below: Scalars['numeric']
    /** An array relationship */
    positions: juster_position[]
    /** An aggregated array relationship */
    positions_aggregate: juster_position_aggregate
    start_rate?: Scalars['numeric']
    /** NEW: NEW\nSTARTED: STARTED\nFINISHED: FINISHED\nCANCELED: CANCELED */
    status: Scalars['String']
    target_dynamics: Scalars['numeric']
    total_bets_amount: Scalars['numeric']
    total_liquidity_provided: Scalars['numeric']
    total_liquidity_shares: Scalars['numeric']
    /** ABOVE_EQ: ABOVE_EQ\nBELOW: BELOW */
    winner_bets?: Scalars['String']
    /** An array relationship */
    withdrawals: juster_withdrawal[]
    /** An aggregated array relationship */
    withdrawals_aggregate: juster_withdrawal_aggregate
    __typename: 'juster_event'
}


/** aggregated selection of "juster.event" */
export interface juster_event_aggregate {
    aggregate?: juster_event_aggregate_fields
    nodes: juster_event[]
    __typename: 'juster_event_aggregate'
}


/** aggregate fields of "juster.event" */
export interface juster_event_aggregate_fields {
    avg?: juster_event_avg_fields
    count?: Scalars['Int']
    max?: juster_event_max_fields
    min?: juster_event_min_fields
    stddev?: juster_event_stddev_fields
    stddev_pop?: juster_event_stddev_pop_fields
    stddev_samp?: juster_event_stddev_samp_fields
    sum?: juster_event_sum_fields
    var_pop?: juster_event_var_pop_fields
    var_samp?: juster_event_var_samp_fields
    variance?: juster_event_variance_fields
    __typename: 'juster_event_aggregate_fields'
}


/** aggregate avg on columns */
export interface juster_event_avg_fields {
    closed_dynamics?: Scalars['Float']
    closed_rate?: Scalars['Float']
    currency_pair_id?: Scalars['Float']
    id?: Scalars['Float']
    liquidity_percent?: Scalars['Float']
    measure_period?: Scalars['Float']
    pool_above_eq?: Scalars['Float']
    pool_below?: Scalars['Float']
    start_rate?: Scalars['Float']
    target_dynamics?: Scalars['Float']
    total_bets_amount?: Scalars['Float']
    total_liquidity_provided?: Scalars['Float']
    total_liquidity_shares?: Scalars['Float']
    __typename: 'juster_event_avg_fields'
}


/** aggregate max on columns */
export interface juster_event_max_fields {
    bets_close_time?: Scalars['timestamptz']
    closed_dynamics?: Scalars['numeric']
    closed_oracle_time?: Scalars['timestamptz']
    closed_rate?: Scalars['numeric']
    created_time?: Scalars['timestamptz']
    currency_pair_id?: Scalars['Int']
    id?: Scalars['Int']
    liquidity_percent?: Scalars['numeric']
    measure_oracle_start_time?: Scalars['timestamptz']
    measure_period?: Scalars['bigint']
    pool_above_eq?: Scalars['numeric']
    pool_below?: Scalars['numeric']
    start_rate?: Scalars['numeric']
    status?: Scalars['String']
    target_dynamics?: Scalars['numeric']
    total_bets_amount?: Scalars['numeric']
    total_liquidity_provided?: Scalars['numeric']
    total_liquidity_shares?: Scalars['numeric']
    winner_bets?: Scalars['String']
    __typename: 'juster_event_max_fields'
}


/** aggregate min on columns */
export interface juster_event_min_fields {
    bets_close_time?: Scalars['timestamptz']
    closed_dynamics?: Scalars['numeric']
    closed_oracle_time?: Scalars['timestamptz']
    closed_rate?: Scalars['numeric']
    created_time?: Scalars['timestamptz']
    currency_pair_id?: Scalars['Int']
    id?: Scalars['Int']
    liquidity_percent?: Scalars['numeric']
    measure_oracle_start_time?: Scalars['timestamptz']
    measure_period?: Scalars['bigint']
    pool_above_eq?: Scalars['numeric']
    pool_below?: Scalars['numeric']
    start_rate?: Scalars['numeric']
    status?: Scalars['String']
    target_dynamics?: Scalars['numeric']
    total_bets_amount?: Scalars['numeric']
    total_liquidity_provided?: Scalars['numeric']
    total_liquidity_shares?: Scalars['numeric']
    winner_bets?: Scalars['String']
    __typename: 'juster_event_min_fields'
}


/** select columns of table "juster.event" */
export type juster_event_select_column = 'bets_close_time' | 'closed_dynamics' | 'closed_oracle_time' | 'closed_rate' | 'created_time' | 'currency_pair_id' | 'id' | 'liquidity_percent' | 'measure_oracle_start_time' | 'measure_period' | 'pool_above_eq' | 'pool_below' | 'start_rate' | 'status' | 'target_dynamics' | 'total_bets_amount' | 'total_liquidity_provided' | 'total_liquidity_shares' | 'winner_bets'


/** aggregate stddev on columns */
export interface juster_event_stddev_fields {
    closed_dynamics?: Scalars['Float']
    closed_rate?: Scalars['Float']
    currency_pair_id?: Scalars['Float']
    id?: Scalars['Float']
    liquidity_percent?: Scalars['Float']
    measure_period?: Scalars['Float']
    pool_above_eq?: Scalars['Float']
    pool_below?: Scalars['Float']
    start_rate?: Scalars['Float']
    target_dynamics?: Scalars['Float']
    total_bets_amount?: Scalars['Float']
    total_liquidity_provided?: Scalars['Float']
    total_liquidity_shares?: Scalars['Float']
    __typename: 'juster_event_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface juster_event_stddev_pop_fields {
    closed_dynamics?: Scalars['Float']
    closed_rate?: Scalars['Float']
    currency_pair_id?: Scalars['Float']
    id?: Scalars['Float']
    liquidity_percent?: Scalars['Float']
    measure_period?: Scalars['Float']
    pool_above_eq?: Scalars['Float']
    pool_below?: Scalars['Float']
    start_rate?: Scalars['Float']
    target_dynamics?: Scalars['Float']
    total_bets_amount?: Scalars['Float']
    total_liquidity_provided?: Scalars['Float']
    total_liquidity_shares?: Scalars['Float']
    __typename: 'juster_event_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface juster_event_stddev_samp_fields {
    closed_dynamics?: Scalars['Float']
    closed_rate?: Scalars['Float']
    currency_pair_id?: Scalars['Float']
    id?: Scalars['Float']
    liquidity_percent?: Scalars['Float']
    measure_period?: Scalars['Float']
    pool_above_eq?: Scalars['Float']
    pool_below?: Scalars['Float']
    start_rate?: Scalars['Float']
    target_dynamics?: Scalars['Float']
    total_bets_amount?: Scalars['Float']
    total_liquidity_provided?: Scalars['Float']
    total_liquidity_shares?: Scalars['Float']
    __typename: 'juster_event_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface juster_event_sum_fields {
    closed_dynamics?: Scalars['numeric']
    closed_rate?: Scalars['numeric']
    currency_pair_id?: Scalars['Int']
    id?: Scalars['Int']
    liquidity_percent?: Scalars['numeric']
    measure_period?: Scalars['bigint']
    pool_above_eq?: Scalars['numeric']
    pool_below?: Scalars['numeric']
    start_rate?: Scalars['numeric']
    target_dynamics?: Scalars['numeric']
    total_bets_amount?: Scalars['numeric']
    total_liquidity_provided?: Scalars['numeric']
    total_liquidity_shares?: Scalars['numeric']
    __typename: 'juster_event_sum_fields'
}


/** aggregate var_pop on columns */
export interface juster_event_var_pop_fields {
    closed_dynamics?: Scalars['Float']
    closed_rate?: Scalars['Float']
    currency_pair_id?: Scalars['Float']
    id?: Scalars['Float']
    liquidity_percent?: Scalars['Float']
    measure_period?: Scalars['Float']
    pool_above_eq?: Scalars['Float']
    pool_below?: Scalars['Float']
    start_rate?: Scalars['Float']
    target_dynamics?: Scalars['Float']
    total_bets_amount?: Scalars['Float']
    total_liquidity_provided?: Scalars['Float']
    total_liquidity_shares?: Scalars['Float']
    __typename: 'juster_event_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface juster_event_var_samp_fields {
    closed_dynamics?: Scalars['Float']
    closed_rate?: Scalars['Float']
    currency_pair_id?: Scalars['Float']
    id?: Scalars['Float']
    liquidity_percent?: Scalars['Float']
    measure_period?: Scalars['Float']
    pool_above_eq?: Scalars['Float']
    pool_below?: Scalars['Float']
    start_rate?: Scalars['Float']
    target_dynamics?: Scalars['Float']
    total_bets_amount?: Scalars['Float']
    total_liquidity_provided?: Scalars['Float']
    total_liquidity_shares?: Scalars['Float']
    __typename: 'juster_event_var_samp_fields'
}


/** aggregate variance on columns */
export interface juster_event_variance_fields {
    closed_dynamics?: Scalars['Float']
    closed_rate?: Scalars['Float']
    currency_pair_id?: Scalars['Float']
    id?: Scalars['Float']
    liquidity_percent?: Scalars['Float']
    measure_period?: Scalars['Float']
    pool_above_eq?: Scalars['Float']
    pool_below?: Scalars['Float']
    start_rate?: Scalars['Float']
    target_dynamics?: Scalars['Float']
    total_bets_amount?: Scalars['Float']
    total_liquidity_provided?: Scalars['Float']
    total_liquidity_shares?: Scalars['Float']
    __typename: 'juster_event_variance_fields'
}


/** columns and relationships of "juster.position" */
export interface juster_position {
    /** An object relationship */
    event: juster_event
    event_id: Scalars['Int']
    id: Scalars['Int']
    liquidity_provided_above_eq: Scalars['numeric']
    liquidity_provided_below: Scalars['numeric']
    reward_above_eq: Scalars['numeric']
    reward_below: Scalars['numeric']
    shares: Scalars['numeric']
    /** An object relationship */
    user: juster_user
    user_id: Scalars['String']
    withdrawn: Scalars['Boolean']
    __typename: 'juster_position'
}


/** aggregated selection of "juster.position" */
export interface juster_position_aggregate {
    aggregate?: juster_position_aggregate_fields
    nodes: juster_position[]
    __typename: 'juster_position_aggregate'
}


/** aggregate fields of "juster.position" */
export interface juster_position_aggregate_fields {
    avg?: juster_position_avg_fields
    count?: Scalars['Int']
    max?: juster_position_max_fields
    min?: juster_position_min_fields
    stddev?: juster_position_stddev_fields
    stddev_pop?: juster_position_stddev_pop_fields
    stddev_samp?: juster_position_stddev_samp_fields
    sum?: juster_position_sum_fields
    var_pop?: juster_position_var_pop_fields
    var_samp?: juster_position_var_samp_fields
    variance?: juster_position_variance_fields
    __typename: 'juster_position_aggregate_fields'
}


/** aggregate avg on columns */
export interface juster_position_avg_fields {
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    liquidity_provided_above_eq?: Scalars['Float']
    liquidity_provided_below?: Scalars['Float']
    reward_above_eq?: Scalars['Float']
    reward_below?: Scalars['Float']
    shares?: Scalars['Float']
    __typename: 'juster_position_avg_fields'
}


/** aggregate max on columns */
export interface juster_position_max_fields {
    event_id?: Scalars['Int']
    id?: Scalars['Int']
    liquidity_provided_above_eq?: Scalars['numeric']
    liquidity_provided_below?: Scalars['numeric']
    reward_above_eq?: Scalars['numeric']
    reward_below?: Scalars['numeric']
    shares?: Scalars['numeric']
    user_id?: Scalars['String']
    __typename: 'juster_position_max_fields'
}


/** aggregate min on columns */
export interface juster_position_min_fields {
    event_id?: Scalars['Int']
    id?: Scalars['Int']
    liquidity_provided_above_eq?: Scalars['numeric']
    liquidity_provided_below?: Scalars['numeric']
    reward_above_eq?: Scalars['numeric']
    reward_below?: Scalars['numeric']
    shares?: Scalars['numeric']
    user_id?: Scalars['String']
    __typename: 'juster_position_min_fields'
}


/** select columns of table "juster.position" */
export type juster_position_select_column = 'event_id' | 'id' | 'liquidity_provided_above_eq' | 'liquidity_provided_below' | 'reward_above_eq' | 'reward_below' | 'shares' | 'user_id' | 'withdrawn'


/** aggregate stddev on columns */
export interface juster_position_stddev_fields {
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    liquidity_provided_above_eq?: Scalars['Float']
    liquidity_provided_below?: Scalars['Float']
    reward_above_eq?: Scalars['Float']
    reward_below?: Scalars['Float']
    shares?: Scalars['Float']
    __typename: 'juster_position_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface juster_position_stddev_pop_fields {
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    liquidity_provided_above_eq?: Scalars['Float']
    liquidity_provided_below?: Scalars['Float']
    reward_above_eq?: Scalars['Float']
    reward_below?: Scalars['Float']
    shares?: Scalars['Float']
    __typename: 'juster_position_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface juster_position_stddev_samp_fields {
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    liquidity_provided_above_eq?: Scalars['Float']
    liquidity_provided_below?: Scalars['Float']
    reward_above_eq?: Scalars['Float']
    reward_below?: Scalars['Float']
    shares?: Scalars['Float']
    __typename: 'juster_position_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface juster_position_sum_fields {
    event_id?: Scalars['Int']
    id?: Scalars['Int']
    liquidity_provided_above_eq?: Scalars['numeric']
    liquidity_provided_below?: Scalars['numeric']
    reward_above_eq?: Scalars['numeric']
    reward_below?: Scalars['numeric']
    shares?: Scalars['numeric']
    __typename: 'juster_position_sum_fields'
}


/** aggregate var_pop on columns */
export interface juster_position_var_pop_fields {
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    liquidity_provided_above_eq?: Scalars['Float']
    liquidity_provided_below?: Scalars['Float']
    reward_above_eq?: Scalars['Float']
    reward_below?: Scalars['Float']
    shares?: Scalars['Float']
    __typename: 'juster_position_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface juster_position_var_samp_fields {
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    liquidity_provided_above_eq?: Scalars['Float']
    liquidity_provided_below?: Scalars['Float']
    reward_above_eq?: Scalars['Float']
    reward_below?: Scalars['Float']
    shares?: Scalars['Float']
    __typename: 'juster_position_var_samp_fields'
}


/** aggregate variance on columns */
export interface juster_position_variance_fields {
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    liquidity_provided_above_eq?: Scalars['Float']
    liquidity_provided_below?: Scalars['Float']
    reward_above_eq?: Scalars['Float']
    reward_below?: Scalars['Float']
    shares?: Scalars['Float']
    __typename: 'juster_position_variance_fields'
}


/** columns and relationships of "juster.quote" */
export interface juster_quote {
    /** An object relationship */
    currency_pair: juster_currencypair
    currency_pair_id: Scalars['Int']
    id: Scalars['Int']
    price: Scalars['bigint']
    timestamp: Scalars['timestamptz']
    __typename: 'juster_quote'
}


/** aggregated selection of "juster.quote" */
export interface juster_quote_aggregate {
    aggregate?: juster_quote_aggregate_fields
    nodes: juster_quote[]
    __typename: 'juster_quote_aggregate'
}


/** aggregate fields of "juster.quote" */
export interface juster_quote_aggregate_fields {
    avg?: juster_quote_avg_fields
    count?: Scalars['Int']
    max?: juster_quote_max_fields
    min?: juster_quote_min_fields
    stddev?: juster_quote_stddev_fields
    stddev_pop?: juster_quote_stddev_pop_fields
    stddev_samp?: juster_quote_stddev_samp_fields
    sum?: juster_quote_sum_fields
    var_pop?: juster_quote_var_pop_fields
    var_samp?: juster_quote_var_samp_fields
    variance?: juster_quote_variance_fields
    __typename: 'juster_quote_aggregate_fields'
}


/** aggregate avg on columns */
export interface juster_quote_avg_fields {
    currency_pair_id?: Scalars['Float']
    id?: Scalars['Float']
    price?: Scalars['Float']
    __typename: 'juster_quote_avg_fields'
}


/** aggregate max on columns */
export interface juster_quote_max_fields {
    currency_pair_id?: Scalars['Int']
    id?: Scalars['Int']
    price?: Scalars['bigint']
    timestamp?: Scalars['timestamptz']
    __typename: 'juster_quote_max_fields'
}


/** aggregate min on columns */
export interface juster_quote_min_fields {
    currency_pair_id?: Scalars['Int']
    id?: Scalars['Int']
    price?: Scalars['bigint']
    timestamp?: Scalars['timestamptz']
    __typename: 'juster_quote_min_fields'
}


/** select columns of table "juster.quote" */
export type juster_quote_select_column = 'currency_pair_id' | 'id' | 'price' | 'timestamp'


/** aggregate stddev on columns */
export interface juster_quote_stddev_fields {
    currency_pair_id?: Scalars['Float']
    id?: Scalars['Float']
    price?: Scalars['Float']
    __typename: 'juster_quote_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface juster_quote_stddev_pop_fields {
    currency_pair_id?: Scalars['Float']
    id?: Scalars['Float']
    price?: Scalars['Float']
    __typename: 'juster_quote_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface juster_quote_stddev_samp_fields {
    currency_pair_id?: Scalars['Float']
    id?: Scalars['Float']
    price?: Scalars['Float']
    __typename: 'juster_quote_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface juster_quote_sum_fields {
    currency_pair_id?: Scalars['Int']
    id?: Scalars['Int']
    price?: Scalars['bigint']
    __typename: 'juster_quote_sum_fields'
}


/** aggregate var_pop on columns */
export interface juster_quote_var_pop_fields {
    currency_pair_id?: Scalars['Float']
    id?: Scalars['Float']
    price?: Scalars['Float']
    __typename: 'juster_quote_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface juster_quote_var_samp_fields {
    currency_pair_id?: Scalars['Float']
    id?: Scalars['Float']
    price?: Scalars['Float']
    __typename: 'juster_quote_var_samp_fields'
}


/** aggregate variance on columns */
export interface juster_quote_variance_fields {
    currency_pair_id?: Scalars['Float']
    id?: Scalars['Float']
    price?: Scalars['Float']
    __typename: 'juster_quote_variance_fields'
}


/** columns and relationships of "juster.user" */
export interface juster_user {
    address: Scalars['String']
    /** An array relationship */
    bets: juster_bet[]
    /** An aggregated array relationship */
    bets_aggregate: juster_bet_aggregate
    /** An array relationship */
    deposits: juster_deposit[]
    /** An aggregated array relationship */
    deposits_aggregate: juster_deposit_aggregate
    /** An array relationship */
    positions: juster_position[]
    /** An aggregated array relationship */
    positions_aggregate: juster_position_aggregate
    total_bets_amount: Scalars['numeric']
    total_bets_count: Scalars['Int']
    total_fees_collected: Scalars['numeric']
    total_liquidity_provided: Scalars['numeric']
    total_reward: Scalars['numeric']
    total_withdrawn: Scalars['numeric']
    /** An array relationship */
    withdrawals: juster_withdrawal[]
    /** An aggregated array relationship */
    withdrawals_aggregate: juster_withdrawal_aggregate
    __typename: 'juster_user'
}


/** aggregated selection of "juster.user" */
export interface juster_user_aggregate {
    aggregate?: juster_user_aggregate_fields
    nodes: juster_user[]
    __typename: 'juster_user_aggregate'
}


/** aggregate fields of "juster.user" */
export interface juster_user_aggregate_fields {
    avg?: juster_user_avg_fields
    count?: Scalars['Int']
    max?: juster_user_max_fields
    min?: juster_user_min_fields
    stddev?: juster_user_stddev_fields
    stddev_pop?: juster_user_stddev_pop_fields
    stddev_samp?: juster_user_stddev_samp_fields
    sum?: juster_user_sum_fields
    var_pop?: juster_user_var_pop_fields
    var_samp?: juster_user_var_samp_fields
    variance?: juster_user_variance_fields
    __typename: 'juster_user_aggregate_fields'
}


/** aggregate avg on columns */
export interface juster_user_avg_fields {
    total_bets_amount?: Scalars['Float']
    total_bets_count?: Scalars['Float']
    total_fees_collected?: Scalars['Float']
    total_liquidity_provided?: Scalars['Float']
    total_reward?: Scalars['Float']
    total_withdrawn?: Scalars['Float']
    __typename: 'juster_user_avg_fields'
}


/** aggregate max on columns */
export interface juster_user_max_fields {
    address?: Scalars['String']
    total_bets_amount?: Scalars['numeric']
    total_bets_count?: Scalars['Int']
    total_fees_collected?: Scalars['numeric']
    total_liquidity_provided?: Scalars['numeric']
    total_reward?: Scalars['numeric']
    total_withdrawn?: Scalars['numeric']
    __typename: 'juster_user_max_fields'
}


/** aggregate min on columns */
export interface juster_user_min_fields {
    address?: Scalars['String']
    total_bets_amount?: Scalars['numeric']
    total_bets_count?: Scalars['Int']
    total_fees_collected?: Scalars['numeric']
    total_liquidity_provided?: Scalars['numeric']
    total_reward?: Scalars['numeric']
    total_withdrawn?: Scalars['numeric']
    __typename: 'juster_user_min_fields'
}


/** select columns of table "juster.user" */
export type juster_user_select_column = 'address' | 'total_bets_amount' | 'total_bets_count' | 'total_fees_collected' | 'total_liquidity_provided' | 'total_reward' | 'total_withdrawn'


/** aggregate stddev on columns */
export interface juster_user_stddev_fields {
    total_bets_amount?: Scalars['Float']
    total_bets_count?: Scalars['Float']
    total_fees_collected?: Scalars['Float']
    total_liquidity_provided?: Scalars['Float']
    total_reward?: Scalars['Float']
    total_withdrawn?: Scalars['Float']
    __typename: 'juster_user_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface juster_user_stddev_pop_fields {
    total_bets_amount?: Scalars['Float']
    total_bets_count?: Scalars['Float']
    total_fees_collected?: Scalars['Float']
    total_liquidity_provided?: Scalars['Float']
    total_reward?: Scalars['Float']
    total_withdrawn?: Scalars['Float']
    __typename: 'juster_user_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface juster_user_stddev_samp_fields {
    total_bets_amount?: Scalars['Float']
    total_bets_count?: Scalars['Float']
    total_fees_collected?: Scalars['Float']
    total_liquidity_provided?: Scalars['Float']
    total_reward?: Scalars['Float']
    total_withdrawn?: Scalars['Float']
    __typename: 'juster_user_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface juster_user_sum_fields {
    total_bets_amount?: Scalars['numeric']
    total_bets_count?: Scalars['Int']
    total_fees_collected?: Scalars['numeric']
    total_liquidity_provided?: Scalars['numeric']
    total_reward?: Scalars['numeric']
    total_withdrawn?: Scalars['numeric']
    __typename: 'juster_user_sum_fields'
}


/** aggregate var_pop on columns */
export interface juster_user_var_pop_fields {
    total_bets_amount?: Scalars['Float']
    total_bets_count?: Scalars['Float']
    total_fees_collected?: Scalars['Float']
    total_liquidity_provided?: Scalars['Float']
    total_reward?: Scalars['Float']
    total_withdrawn?: Scalars['Float']
    __typename: 'juster_user_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface juster_user_var_samp_fields {
    total_bets_amount?: Scalars['Float']
    total_bets_count?: Scalars['Float']
    total_fees_collected?: Scalars['Float']
    total_liquidity_provided?: Scalars['Float']
    total_reward?: Scalars['Float']
    total_withdrawn?: Scalars['Float']
    __typename: 'juster_user_var_samp_fields'
}


/** aggregate variance on columns */
export interface juster_user_variance_fields {
    total_bets_amount?: Scalars['Float']
    total_bets_count?: Scalars['Float']
    total_fees_collected?: Scalars['Float']
    total_liquidity_provided?: Scalars['Float']
    total_reward?: Scalars['Float']
    total_withdrawn?: Scalars['Float']
    __typename: 'juster_user_variance_fields'
}


/** columns and relationships of "juster.withdrawal" */
export interface juster_withdrawal {
    amount: Scalars['numeric']
    /** An object relationship */
    event: juster_event
    event_id: Scalars['Int']
    id: Scalars['Int']
    /** An object relationship */
    user: juster_user
    user_id: Scalars['String']
    __typename: 'juster_withdrawal'
}


/** aggregated selection of "juster.withdrawal" */
export interface juster_withdrawal_aggregate {
    aggregate?: juster_withdrawal_aggregate_fields
    nodes: juster_withdrawal[]
    __typename: 'juster_withdrawal_aggregate'
}


/** aggregate fields of "juster.withdrawal" */
export interface juster_withdrawal_aggregate_fields {
    avg?: juster_withdrawal_avg_fields
    count?: Scalars['Int']
    max?: juster_withdrawal_max_fields
    min?: juster_withdrawal_min_fields
    stddev?: juster_withdrawal_stddev_fields
    stddev_pop?: juster_withdrawal_stddev_pop_fields
    stddev_samp?: juster_withdrawal_stddev_samp_fields
    sum?: juster_withdrawal_sum_fields
    var_pop?: juster_withdrawal_var_pop_fields
    var_samp?: juster_withdrawal_var_samp_fields
    variance?: juster_withdrawal_variance_fields
    __typename: 'juster_withdrawal_aggregate_fields'
}


/** aggregate avg on columns */
export interface juster_withdrawal_avg_fields {
    amount?: Scalars['Float']
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    __typename: 'juster_withdrawal_avg_fields'
}


/** aggregate max on columns */
export interface juster_withdrawal_max_fields {
    amount?: Scalars['numeric']
    event_id?: Scalars['Int']
    id?: Scalars['Int']
    user_id?: Scalars['String']
    __typename: 'juster_withdrawal_max_fields'
}


/** aggregate min on columns */
export interface juster_withdrawal_min_fields {
    amount?: Scalars['numeric']
    event_id?: Scalars['Int']
    id?: Scalars['Int']
    user_id?: Scalars['String']
    __typename: 'juster_withdrawal_min_fields'
}


/** select columns of table "juster.withdrawal" */
export type juster_withdrawal_select_column = 'amount' | 'event_id' | 'id' | 'user_id'


/** aggregate stddev on columns */
export interface juster_withdrawal_stddev_fields {
    amount?: Scalars['Float']
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    __typename: 'juster_withdrawal_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface juster_withdrawal_stddev_pop_fields {
    amount?: Scalars['Float']
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    __typename: 'juster_withdrawal_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface juster_withdrawal_stddev_samp_fields {
    amount?: Scalars['Float']
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    __typename: 'juster_withdrawal_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface juster_withdrawal_sum_fields {
    amount?: Scalars['numeric']
    event_id?: Scalars['Int']
    id?: Scalars['Int']
    __typename: 'juster_withdrawal_sum_fields'
}


/** aggregate var_pop on columns */
export interface juster_withdrawal_var_pop_fields {
    amount?: Scalars['Float']
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    __typename: 'juster_withdrawal_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface juster_withdrawal_var_samp_fields {
    amount?: Scalars['Float']
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    __typename: 'juster_withdrawal_var_samp_fields'
}


/** aggregate variance on columns */
export interface juster_withdrawal_variance_fields {
    amount?: Scalars['Float']
    event_id?: Scalars['Float']
    id?: Scalars['Float']
    __typename: 'juster_withdrawal_variance_fields'
}


/** column ordering options */
export type order_by = 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last'


/** query root */
export interface query_root {
    /** fetch data from the table: "juster.bet" */
    juster_bet: juster_bet[]
    /** fetch aggregated fields from the table: "juster.bet" */
    juster_bet_aggregate: juster_bet_aggregate
    /** fetch data from the table: "juster.bet" using primary key columns */
    juster_bet_by_pk?: juster_bet
    /** fetch data from the table: "juster.currencypair" */
    juster_currencypair: juster_currencypair[]
    /** fetch aggregated fields from the table: "juster.currencypair" */
    juster_currencypair_aggregate: juster_currencypair_aggregate
    /** fetch data from the table: "juster.currencypair" using primary key columns */
    juster_currencypair_by_pk?: juster_currencypair
    /** fetch data from the table: "juster.deposit" */
    juster_deposit: juster_deposit[]
    /** fetch aggregated fields from the table: "juster.deposit" */
    juster_deposit_aggregate: juster_deposit_aggregate
    /** fetch data from the table: "juster.deposit" using primary key columns */
    juster_deposit_by_pk?: juster_deposit
    /** fetch data from the table: "juster.dipdup_state" */
    juster_dipdup_state: juster_dipdup_state[]
    /** fetch aggregated fields from the table: "juster.dipdup_state" */
    juster_dipdup_state_aggregate: juster_dipdup_state_aggregate
    /** fetch data from the table: "juster.dipdup_state" using primary key columns */
    juster_dipdup_state_by_pk?: juster_dipdup_state
    /** fetch data from the table: "juster.event" */
    juster_event: juster_event[]
    /** fetch aggregated fields from the table: "juster.event" */
    juster_event_aggregate: juster_event_aggregate
    /** fetch data from the table: "juster.event" using primary key columns */
    juster_event_by_pk?: juster_event
    /** fetch data from the table: "juster.position" */
    juster_position: juster_position[]
    /** fetch aggregated fields from the table: "juster.position" */
    juster_position_aggregate: juster_position_aggregate
    /** fetch data from the table: "juster.position" using primary key columns */
    juster_position_by_pk?: juster_position
    /** fetch data from the table: "juster.quote" */
    juster_quote: juster_quote[]
    /** fetch aggregated fields from the table: "juster.quote" */
    juster_quote_aggregate: juster_quote_aggregate
    /** fetch data from the table: "juster.quote" using primary key columns */
    juster_quote_by_pk?: juster_quote
    /** fetch data from the table: "juster.user" */
    juster_user: juster_user[]
    /** fetch aggregated fields from the table: "juster.user" */
    juster_user_aggregate: juster_user_aggregate
    /** fetch data from the table: "juster.user" using primary key columns */
    juster_user_by_pk?: juster_user
    /** fetch data from the table: "juster.withdrawal" */
    juster_withdrawal: juster_withdrawal[]
    /** fetch aggregated fields from the table: "juster.withdrawal" */
    juster_withdrawal_aggregate: juster_withdrawal_aggregate
    /** fetch data from the table: "juster.withdrawal" using primary key columns */
    juster_withdrawal_by_pk?: juster_withdrawal
    __typename: 'query_root'
}


/** subscription root */
export interface subscription_root {
    /** fetch data from the table: "juster.bet" */
    juster_bet: juster_bet[]
    /** fetch aggregated fields from the table: "juster.bet" */
    juster_bet_aggregate: juster_bet_aggregate
    /** fetch data from the table: "juster.bet" using primary key columns */
    juster_bet_by_pk?: juster_bet
    /** fetch data from the table: "juster.currencypair" */
    juster_currencypair: juster_currencypair[]
    /** fetch aggregated fields from the table: "juster.currencypair" */
    juster_currencypair_aggregate: juster_currencypair_aggregate
    /** fetch data from the table: "juster.currencypair" using primary key columns */
    juster_currencypair_by_pk?: juster_currencypair
    /** fetch data from the table: "juster.deposit" */
    juster_deposit: juster_deposit[]
    /** fetch aggregated fields from the table: "juster.deposit" */
    juster_deposit_aggregate: juster_deposit_aggregate
    /** fetch data from the table: "juster.deposit" using primary key columns */
    juster_deposit_by_pk?: juster_deposit
    /** fetch data from the table: "juster.dipdup_state" */
    juster_dipdup_state: juster_dipdup_state[]
    /** fetch aggregated fields from the table: "juster.dipdup_state" */
    juster_dipdup_state_aggregate: juster_dipdup_state_aggregate
    /** fetch data from the table: "juster.dipdup_state" using primary key columns */
    juster_dipdup_state_by_pk?: juster_dipdup_state
    /** fetch data from the table: "juster.event" */
    juster_event: juster_event[]
    /** fetch aggregated fields from the table: "juster.event" */
    juster_event_aggregate: juster_event_aggregate
    /** fetch data from the table: "juster.event" using primary key columns */
    juster_event_by_pk?: juster_event
    /** fetch data from the table: "juster.position" */
    juster_position: juster_position[]
    /** fetch aggregated fields from the table: "juster.position" */
    juster_position_aggregate: juster_position_aggregate
    /** fetch data from the table: "juster.position" using primary key columns */
    juster_position_by_pk?: juster_position
    /** fetch data from the table: "juster.quote" */
    juster_quote: juster_quote[]
    /** fetch aggregated fields from the table: "juster.quote" */
    juster_quote_aggregate: juster_quote_aggregate
    /** fetch data from the table: "juster.quote" using primary key columns */
    juster_quote_by_pk?: juster_quote
    /** fetch data from the table: "juster.user" */
    juster_user: juster_user[]
    /** fetch aggregated fields from the table: "juster.user" */
    juster_user_aggregate: juster_user_aggregate
    /** fetch data from the table: "juster.user" using primary key columns */
    juster_user_by_pk?: juster_user
    /** fetch data from the table: "juster.withdrawal" */
    juster_withdrawal: juster_withdrawal[]
    /** fetch aggregated fields from the table: "juster.withdrawal" */
    juster_withdrawal_aggregate: juster_withdrawal_aggregate
    /** fetch data from the table: "juster.withdrawal" using primary key columns */
    juster_withdrawal_by_pk?: juster_withdrawal
    __typename: 'subscription_root'
}

export type Query = query_root
export type Subscription = subscription_root


/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export interface Boolean_comparison_exp {_eq?: (Scalars['Boolean'] | null),_gt?: (Scalars['Boolean'] | null),_gte?: (Scalars['Boolean'] | null),_in?: (Scalars['Boolean'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Boolean'] | null),_lte?: (Scalars['Boolean'] | null),_neq?: (Scalars['Boolean'] | null),_nin?: (Scalars['Boolean'][] | null)}


/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {_eq?: (Scalars['Int'] | null),_gt?: (Scalars['Int'] | null),_gte?: (Scalars['Int'] | null),_in?: (Scalars['Int'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Int'] | null),_lte?: (Scalars['Int'] | null),_neq?: (Scalars['Int'] | null),_nin?: (Scalars['Int'][] | null)}


/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export interface String_comparison_exp {_eq?: (Scalars['String'] | null),_gt?: (Scalars['String'] | null),_gte?: (Scalars['String'] | null),_ilike?: (Scalars['String'] | null),_in?: (Scalars['String'][] | null),_is_null?: (Scalars['Boolean'] | null),_like?: (Scalars['String'] | null),_lt?: (Scalars['String'] | null),_lte?: (Scalars['String'] | null),_neq?: (Scalars['String'] | null),_nilike?: (Scalars['String'] | null),_nin?: (Scalars['String'][] | null),_nlike?: (Scalars['String'] | null),_nsimilar?: (Scalars['String'] | null),_similar?: (Scalars['String'] | null)}


/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export interface bigint_comparison_exp {_eq?: (Scalars['bigint'] | null),_gt?: (Scalars['bigint'] | null),_gte?: (Scalars['bigint'] | null),_in?: (Scalars['bigint'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['bigint'] | null),_lte?: (Scalars['bigint'] | null),_neq?: (Scalars['bigint'] | null),_nin?: (Scalars['bigint'][] | null)}


/** columns and relationships of "juster.bet" */
export interface juster_betRequest{
    amount?: boolean | number
    /** An object relationship */
    event?: juster_eventRequest
    event_id?: boolean | number
    id?: boolean | number
    reward?: boolean | number
    /** ABOVE_EQ: ABOVE_EQ\nBELOW: BELOW */
    side?: boolean | number
    /** An object relationship */
    user?: juster_userRequest
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "juster.bet" */
export interface juster_bet_aggregateRequest{
    aggregate?: juster_bet_aggregate_fieldsRequest
    nodes?: juster_betRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "juster.bet" */
export interface juster_bet_aggregate_fieldsRequest{
    avg?: juster_bet_avg_fieldsRequest
    count?: [{columns?: (juster_bet_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: juster_bet_max_fieldsRequest
    min?: juster_bet_min_fieldsRequest
    stddev?: juster_bet_stddev_fieldsRequest
    stddev_pop?: juster_bet_stddev_pop_fieldsRequest
    stddev_samp?: juster_bet_stddev_samp_fieldsRequest
    sum?: juster_bet_sum_fieldsRequest
    var_pop?: juster_bet_var_pop_fieldsRequest
    var_samp?: juster_bet_var_samp_fieldsRequest
    variance?: juster_bet_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "juster.bet" */
export interface juster_bet_aggregate_order_by {avg?: (juster_bet_avg_order_by | null),count?: (order_by | null),max?: (juster_bet_max_order_by | null),min?: (juster_bet_min_order_by | null),stddev?: (juster_bet_stddev_order_by | null),stddev_pop?: (juster_bet_stddev_pop_order_by | null),stddev_samp?: (juster_bet_stddev_samp_order_by | null),sum?: (juster_bet_sum_order_by | null),var_pop?: (juster_bet_var_pop_order_by | null),var_samp?: (juster_bet_var_samp_order_by | null),variance?: (juster_bet_variance_order_by | null)}


/** aggregate avg on columns */
export interface juster_bet_avg_fieldsRequest{
    amount?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    reward?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "juster.bet" */
export interface juster_bet_avg_order_by {amount?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null),reward?: (order_by | null)}


/** Boolean expression to filter rows from the table "juster.bet". All fields are combined with a logical 'AND'. */
export interface juster_bet_bool_exp {_and?: ((juster_bet_bool_exp | null)[] | null),_not?: (juster_bet_bool_exp | null),_or?: ((juster_bet_bool_exp | null)[] | null),amount?: (numeric_comparison_exp | null),event?: (juster_event_bool_exp | null),event_id?: (Int_comparison_exp | null),id?: (Int_comparison_exp | null),reward?: (numeric_comparison_exp | null),side?: (String_comparison_exp | null),user?: (juster_user_bool_exp | null),user_id?: (String_comparison_exp | null)}


/** aggregate max on columns */
export interface juster_bet_max_fieldsRequest{
    amount?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    reward?: boolean | number
    side?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "juster.bet" */
export interface juster_bet_max_order_by {amount?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null),reward?: (order_by | null),side?: (order_by | null),user_id?: (order_by | null)}


/** aggregate min on columns */
export interface juster_bet_min_fieldsRequest{
    amount?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    reward?: boolean | number
    side?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "juster.bet" */
export interface juster_bet_min_order_by {amount?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null),reward?: (order_by | null),side?: (order_by | null),user_id?: (order_by | null)}


/** ordering options when selecting data from "juster.bet" */
export interface juster_bet_order_by {amount?: (order_by | null),event?: (juster_event_order_by | null),event_id?: (order_by | null),id?: (order_by | null),reward?: (order_by | null),side?: (order_by | null),user?: (juster_user_order_by | null),user_id?: (order_by | null)}


/** primary key columns input for table: "juster.bet" */
export interface juster_bet_pk_columns_input {id: Scalars['Int']}


/** aggregate stddev on columns */
export interface juster_bet_stddev_fieldsRequest{
    amount?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    reward?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "juster.bet" */
export interface juster_bet_stddev_order_by {amount?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null),reward?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface juster_bet_stddev_pop_fieldsRequest{
    amount?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    reward?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "juster.bet" */
export interface juster_bet_stddev_pop_order_by {amount?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null),reward?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface juster_bet_stddev_samp_fieldsRequest{
    amount?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    reward?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "juster.bet" */
export interface juster_bet_stddev_samp_order_by {amount?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null),reward?: (order_by | null)}


/** aggregate sum on columns */
export interface juster_bet_sum_fieldsRequest{
    amount?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    reward?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "juster.bet" */
export interface juster_bet_sum_order_by {amount?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null),reward?: (order_by | null)}


/** aggregate var_pop on columns */
export interface juster_bet_var_pop_fieldsRequest{
    amount?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    reward?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "juster.bet" */
export interface juster_bet_var_pop_order_by {amount?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null),reward?: (order_by | null)}


/** aggregate var_samp on columns */
export interface juster_bet_var_samp_fieldsRequest{
    amount?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    reward?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "juster.bet" */
export interface juster_bet_var_samp_order_by {amount?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null),reward?: (order_by | null)}


/** aggregate variance on columns */
export interface juster_bet_variance_fieldsRequest{
    amount?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    reward?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "juster.bet" */
export interface juster_bet_variance_order_by {amount?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null),reward?: (order_by | null)}


/** columns and relationships of "juster.currencypair" */
export interface juster_currencypairRequest{
    /** An array relationship */
    events?: [{
    /** distinct select on columns */
    distinct_on?: (juster_event_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_event_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_event_bool_exp | null)},juster_eventRequest] | juster_eventRequest
    /** An aggregated array relationship */
    events_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_event_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_event_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_event_bool_exp | null)},juster_event_aggregateRequest] | juster_event_aggregateRequest
    id?: boolean | number
    /** An array relationship */
    quotes?: [{
    /** distinct select on columns */
    distinct_on?: (juster_quote_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_quote_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_quote_bool_exp | null)},juster_quoteRequest] | juster_quoteRequest
    /** An aggregated array relationship */
    quotes_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_quote_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_quote_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_quote_bool_exp | null)},juster_quote_aggregateRequest] | juster_quote_aggregateRequest
    symbol?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "juster.currencypair" */
export interface juster_currencypair_aggregateRequest{
    aggregate?: juster_currencypair_aggregate_fieldsRequest
    nodes?: juster_currencypairRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "juster.currencypair" */
export interface juster_currencypair_aggregate_fieldsRequest{
    avg?: juster_currencypair_avg_fieldsRequest
    count?: [{columns?: (juster_currencypair_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: juster_currencypair_max_fieldsRequest
    min?: juster_currencypair_min_fieldsRequest
    stddev?: juster_currencypair_stddev_fieldsRequest
    stddev_pop?: juster_currencypair_stddev_pop_fieldsRequest
    stddev_samp?: juster_currencypair_stddev_samp_fieldsRequest
    sum?: juster_currencypair_sum_fieldsRequest
    var_pop?: juster_currencypair_var_pop_fieldsRequest
    var_samp?: juster_currencypair_var_samp_fieldsRequest
    variance?: juster_currencypair_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "juster.currencypair" */
export interface juster_currencypair_aggregate_order_by {avg?: (juster_currencypair_avg_order_by | null),count?: (order_by | null),max?: (juster_currencypair_max_order_by | null),min?: (juster_currencypair_min_order_by | null),stddev?: (juster_currencypair_stddev_order_by | null),stddev_pop?: (juster_currencypair_stddev_pop_order_by | null),stddev_samp?: (juster_currencypair_stddev_samp_order_by | null),sum?: (juster_currencypair_sum_order_by | null),var_pop?: (juster_currencypair_var_pop_order_by | null),var_samp?: (juster_currencypair_var_samp_order_by | null),variance?: (juster_currencypair_variance_order_by | null)}


/** aggregate avg on columns */
export interface juster_currencypair_avg_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "juster.currencypair" */
export interface juster_currencypair_avg_order_by {id?: (order_by | null)}


/** Boolean expression to filter rows from the table "juster.currencypair". All fields are combined with a logical 'AND'. */
export interface juster_currencypair_bool_exp {_and?: ((juster_currencypair_bool_exp | null)[] | null),_not?: (juster_currencypair_bool_exp | null),_or?: ((juster_currencypair_bool_exp | null)[] | null),events?: (juster_event_bool_exp | null),id?: (Int_comparison_exp | null),quotes?: (juster_quote_bool_exp | null),symbol?: (String_comparison_exp | null)}


/** aggregate max on columns */
export interface juster_currencypair_max_fieldsRequest{
    id?: boolean | number
    symbol?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "juster.currencypair" */
export interface juster_currencypair_max_order_by {id?: (order_by | null),symbol?: (order_by | null)}


/** aggregate min on columns */
export interface juster_currencypair_min_fieldsRequest{
    id?: boolean | number
    symbol?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "juster.currencypair" */
export interface juster_currencypair_min_order_by {id?: (order_by | null),symbol?: (order_by | null)}


/** ordering options when selecting data from "juster.currencypair" */
export interface juster_currencypair_order_by {events_aggregate?: (juster_event_aggregate_order_by | null),id?: (order_by | null),quotes_aggregate?: (juster_quote_aggregate_order_by | null),symbol?: (order_by | null)}


/** primary key columns input for table: "juster.currencypair" */
export interface juster_currencypair_pk_columns_input {id: Scalars['Int']}


/** aggregate stddev on columns */
export interface juster_currencypair_stddev_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "juster.currencypair" */
export interface juster_currencypair_stddev_order_by {id?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface juster_currencypair_stddev_pop_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "juster.currencypair" */
export interface juster_currencypair_stddev_pop_order_by {id?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface juster_currencypair_stddev_samp_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "juster.currencypair" */
export interface juster_currencypair_stddev_samp_order_by {id?: (order_by | null)}


/** aggregate sum on columns */
export interface juster_currencypair_sum_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "juster.currencypair" */
export interface juster_currencypair_sum_order_by {id?: (order_by | null)}


/** aggregate var_pop on columns */
export interface juster_currencypair_var_pop_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "juster.currencypair" */
export interface juster_currencypair_var_pop_order_by {id?: (order_by | null)}


/** aggregate var_samp on columns */
export interface juster_currencypair_var_samp_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "juster.currencypair" */
export interface juster_currencypair_var_samp_order_by {id?: (order_by | null)}


/** aggregate variance on columns */
export interface juster_currencypair_variance_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "juster.currencypair" */
export interface juster_currencypair_variance_order_by {id?: (order_by | null)}


/** columns and relationships of "juster.deposit" */
export interface juster_depositRequest{
    amount_above_eq?: boolean | number
    amount_below?: boolean | number
    /** An object relationship */
    event?: juster_eventRequest
    event_id?: boolean | number
    id?: boolean | number
    shares?: boolean | number
    /** An object relationship */
    user?: juster_userRequest
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "juster.deposit" */
export interface juster_deposit_aggregateRequest{
    aggregate?: juster_deposit_aggregate_fieldsRequest
    nodes?: juster_depositRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "juster.deposit" */
export interface juster_deposit_aggregate_fieldsRequest{
    avg?: juster_deposit_avg_fieldsRequest
    count?: [{columns?: (juster_deposit_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: juster_deposit_max_fieldsRequest
    min?: juster_deposit_min_fieldsRequest
    stddev?: juster_deposit_stddev_fieldsRequest
    stddev_pop?: juster_deposit_stddev_pop_fieldsRequest
    stddev_samp?: juster_deposit_stddev_samp_fieldsRequest
    sum?: juster_deposit_sum_fieldsRequest
    var_pop?: juster_deposit_var_pop_fieldsRequest
    var_samp?: juster_deposit_var_samp_fieldsRequest
    variance?: juster_deposit_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "juster.deposit" */
export interface juster_deposit_aggregate_order_by {avg?: (juster_deposit_avg_order_by | null),count?: (order_by | null),max?: (juster_deposit_max_order_by | null),min?: (juster_deposit_min_order_by | null),stddev?: (juster_deposit_stddev_order_by | null),stddev_pop?: (juster_deposit_stddev_pop_order_by | null),stddev_samp?: (juster_deposit_stddev_samp_order_by | null),sum?: (juster_deposit_sum_order_by | null),var_pop?: (juster_deposit_var_pop_order_by | null),var_samp?: (juster_deposit_var_samp_order_by | null),variance?: (juster_deposit_variance_order_by | null)}


/** aggregate avg on columns */
export interface juster_deposit_avg_fieldsRequest{
    amount_above_eq?: boolean | number
    amount_below?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    shares?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "juster.deposit" */
export interface juster_deposit_avg_order_by {amount_above_eq?: (order_by | null),amount_below?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null),shares?: (order_by | null)}


/** Boolean expression to filter rows from the table "juster.deposit". All fields are combined with a logical 'AND'. */
export interface juster_deposit_bool_exp {_and?: ((juster_deposit_bool_exp | null)[] | null),_not?: (juster_deposit_bool_exp | null),_or?: ((juster_deposit_bool_exp | null)[] | null),amount_above_eq?: (numeric_comparison_exp | null),amount_below?: (numeric_comparison_exp | null),event?: (juster_event_bool_exp | null),event_id?: (Int_comparison_exp | null),id?: (Int_comparison_exp | null),shares?: (numeric_comparison_exp | null),user?: (juster_user_bool_exp | null),user_id?: (String_comparison_exp | null)}


/** aggregate max on columns */
export interface juster_deposit_max_fieldsRequest{
    amount_above_eq?: boolean | number
    amount_below?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    shares?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "juster.deposit" */
export interface juster_deposit_max_order_by {amount_above_eq?: (order_by | null),amount_below?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null),shares?: (order_by | null),user_id?: (order_by | null)}


/** aggregate min on columns */
export interface juster_deposit_min_fieldsRequest{
    amount_above_eq?: boolean | number
    amount_below?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    shares?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "juster.deposit" */
export interface juster_deposit_min_order_by {amount_above_eq?: (order_by | null),amount_below?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null),shares?: (order_by | null),user_id?: (order_by | null)}


/** ordering options when selecting data from "juster.deposit" */
export interface juster_deposit_order_by {amount_above_eq?: (order_by | null),amount_below?: (order_by | null),event?: (juster_event_order_by | null),event_id?: (order_by | null),id?: (order_by | null),shares?: (order_by | null),user?: (juster_user_order_by | null),user_id?: (order_by | null)}


/** primary key columns input for table: "juster.deposit" */
export interface juster_deposit_pk_columns_input {id: Scalars['Int']}


/** aggregate stddev on columns */
export interface juster_deposit_stddev_fieldsRequest{
    amount_above_eq?: boolean | number
    amount_below?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    shares?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "juster.deposit" */
export interface juster_deposit_stddev_order_by {amount_above_eq?: (order_by | null),amount_below?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null),shares?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface juster_deposit_stddev_pop_fieldsRequest{
    amount_above_eq?: boolean | number
    amount_below?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    shares?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "juster.deposit" */
export interface juster_deposit_stddev_pop_order_by {amount_above_eq?: (order_by | null),amount_below?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null),shares?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface juster_deposit_stddev_samp_fieldsRequest{
    amount_above_eq?: boolean | number
    amount_below?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    shares?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "juster.deposit" */
export interface juster_deposit_stddev_samp_order_by {amount_above_eq?: (order_by | null),amount_below?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null),shares?: (order_by | null)}


/** aggregate sum on columns */
export interface juster_deposit_sum_fieldsRequest{
    amount_above_eq?: boolean | number
    amount_below?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    shares?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "juster.deposit" */
export interface juster_deposit_sum_order_by {amount_above_eq?: (order_by | null),amount_below?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null),shares?: (order_by | null)}


/** aggregate var_pop on columns */
export interface juster_deposit_var_pop_fieldsRequest{
    amount_above_eq?: boolean | number
    amount_below?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    shares?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "juster.deposit" */
export interface juster_deposit_var_pop_order_by {amount_above_eq?: (order_by | null),amount_below?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null),shares?: (order_by | null)}


/** aggregate var_samp on columns */
export interface juster_deposit_var_samp_fieldsRequest{
    amount_above_eq?: boolean | number
    amount_below?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    shares?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "juster.deposit" */
export interface juster_deposit_var_samp_order_by {amount_above_eq?: (order_by | null),amount_below?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null),shares?: (order_by | null)}


/** aggregate variance on columns */
export interface juster_deposit_variance_fieldsRequest{
    amount_above_eq?: boolean | number
    amount_below?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    shares?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "juster.deposit" */
export interface juster_deposit_variance_order_by {amount_above_eq?: (order_by | null),amount_below?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null),shares?: (order_by | null)}


/**
 * Stores current level of index and hash of it's config
 * 
 * 
 * columns and relationships of "juster.dipdup_state"
 * 
 */
export interface juster_dipdup_stateRequest{
    hash?: boolean | number
    id?: boolean | number
    index_name?: boolean | number
    /** operation: operation\nbig_map: big_map\nblock: block\nschema: schema */
    index_type?: boolean | number
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "juster.dipdup_state" */
export interface juster_dipdup_state_aggregateRequest{
    aggregate?: juster_dipdup_state_aggregate_fieldsRequest
    nodes?: juster_dipdup_stateRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "juster.dipdup_state" */
export interface juster_dipdup_state_aggregate_fieldsRequest{
    avg?: juster_dipdup_state_avg_fieldsRequest
    count?: [{columns?: (juster_dipdup_state_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: juster_dipdup_state_max_fieldsRequest
    min?: juster_dipdup_state_min_fieldsRequest
    stddev?: juster_dipdup_state_stddev_fieldsRequest
    stddev_pop?: juster_dipdup_state_stddev_pop_fieldsRequest
    stddev_samp?: juster_dipdup_state_stddev_samp_fieldsRequest
    sum?: juster_dipdup_state_sum_fieldsRequest
    var_pop?: juster_dipdup_state_var_pop_fieldsRequest
    var_samp?: juster_dipdup_state_var_samp_fieldsRequest
    variance?: juster_dipdup_state_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "juster.dipdup_state" */
export interface juster_dipdup_state_aggregate_order_by {avg?: (juster_dipdup_state_avg_order_by | null),count?: (order_by | null),max?: (juster_dipdup_state_max_order_by | null),min?: (juster_dipdup_state_min_order_by | null),stddev?: (juster_dipdup_state_stddev_order_by | null),stddev_pop?: (juster_dipdup_state_stddev_pop_order_by | null),stddev_samp?: (juster_dipdup_state_stddev_samp_order_by | null),sum?: (juster_dipdup_state_sum_order_by | null),var_pop?: (juster_dipdup_state_var_pop_order_by | null),var_samp?: (juster_dipdup_state_var_samp_order_by | null),variance?: (juster_dipdup_state_variance_order_by | null)}


/** aggregate avg on columns */
export interface juster_dipdup_state_avg_fieldsRequest{
    id?: boolean | number
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "juster.dipdup_state" */
export interface juster_dipdup_state_avg_order_by {id?: (order_by | null),level?: (order_by | null)}


/** Boolean expression to filter rows from the table "juster.dipdup_state". All fields are combined with a logical 'AND'. */
export interface juster_dipdup_state_bool_exp {_and?: ((juster_dipdup_state_bool_exp | null)[] | null),_not?: (juster_dipdup_state_bool_exp | null),_or?: ((juster_dipdup_state_bool_exp | null)[] | null),hash?: (String_comparison_exp | null),id?: (Int_comparison_exp | null),index_name?: (String_comparison_exp | null),index_type?: (String_comparison_exp | null),level?: (Int_comparison_exp | null)}


/** aggregate max on columns */
export interface juster_dipdup_state_max_fieldsRequest{
    hash?: boolean | number
    id?: boolean | number
    index_name?: boolean | number
    index_type?: boolean | number
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "juster.dipdup_state" */
export interface juster_dipdup_state_max_order_by {hash?: (order_by | null),id?: (order_by | null),index_name?: (order_by | null),index_type?: (order_by | null),level?: (order_by | null)}


/** aggregate min on columns */
export interface juster_dipdup_state_min_fieldsRequest{
    hash?: boolean | number
    id?: boolean | number
    index_name?: boolean | number
    index_type?: boolean | number
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "juster.dipdup_state" */
export interface juster_dipdup_state_min_order_by {hash?: (order_by | null),id?: (order_by | null),index_name?: (order_by | null),index_type?: (order_by | null),level?: (order_by | null)}


/** ordering options when selecting data from "juster.dipdup_state" */
export interface juster_dipdup_state_order_by {hash?: (order_by | null),id?: (order_by | null),index_name?: (order_by | null),index_type?: (order_by | null),level?: (order_by | null)}


/** primary key columns input for table: "juster.dipdup_state" */
export interface juster_dipdup_state_pk_columns_input {id: Scalars['Int']}


/** aggregate stddev on columns */
export interface juster_dipdup_state_stddev_fieldsRequest{
    id?: boolean | number
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "juster.dipdup_state" */
export interface juster_dipdup_state_stddev_order_by {id?: (order_by | null),level?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface juster_dipdup_state_stddev_pop_fieldsRequest{
    id?: boolean | number
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "juster.dipdup_state" */
export interface juster_dipdup_state_stddev_pop_order_by {id?: (order_by | null),level?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface juster_dipdup_state_stddev_samp_fieldsRequest{
    id?: boolean | number
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "juster.dipdup_state" */
export interface juster_dipdup_state_stddev_samp_order_by {id?: (order_by | null),level?: (order_by | null)}


/** aggregate sum on columns */
export interface juster_dipdup_state_sum_fieldsRequest{
    id?: boolean | number
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "juster.dipdup_state" */
export interface juster_dipdup_state_sum_order_by {id?: (order_by | null),level?: (order_by | null)}


/** aggregate var_pop on columns */
export interface juster_dipdup_state_var_pop_fieldsRequest{
    id?: boolean | number
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "juster.dipdup_state" */
export interface juster_dipdup_state_var_pop_order_by {id?: (order_by | null),level?: (order_by | null)}


/** aggregate var_samp on columns */
export interface juster_dipdup_state_var_samp_fieldsRequest{
    id?: boolean | number
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "juster.dipdup_state" */
export interface juster_dipdup_state_var_samp_order_by {id?: (order_by | null),level?: (order_by | null)}


/** aggregate variance on columns */
export interface juster_dipdup_state_variance_fieldsRequest{
    id?: boolean | number
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "juster.dipdup_state" */
export interface juster_dipdup_state_variance_order_by {id?: (order_by | null),level?: (order_by | null)}


/** columns and relationships of "juster.event" */
export interface juster_eventRequest{
    /** An array relationship */
    bets?: [{
    /** distinct select on columns */
    distinct_on?: (juster_bet_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_bet_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_bet_bool_exp | null)},juster_betRequest] | juster_betRequest
    /** An aggregated array relationship */
    bets_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_bet_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_bet_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_bet_bool_exp | null)},juster_bet_aggregateRequest] | juster_bet_aggregateRequest
    bets_close_time?: boolean | number
    closed_dynamics?: boolean | number
    closed_oracle_time?: boolean | number
    closed_rate?: boolean | number
    created_time?: boolean | number
    /** An object relationship */
    currency_pair?: juster_currencypairRequest
    currency_pair_id?: boolean | number
    /** An array relationship */
    deposits?: [{
    /** distinct select on columns */
    distinct_on?: (juster_deposit_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_deposit_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_deposit_bool_exp | null)},juster_depositRequest] | juster_depositRequest
    /** An aggregated array relationship */
    deposits_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_deposit_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_deposit_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_deposit_bool_exp | null)},juster_deposit_aggregateRequest] | juster_deposit_aggregateRequest
    id?: boolean | number
    liquidity_percent?: boolean | number
    measure_oracle_start_time?: boolean | number
    measure_period?: boolean | number
    pool_above_eq?: boolean | number
    pool_below?: boolean | number
    /** An array relationship */
    positions?: [{
    /** distinct select on columns */
    distinct_on?: (juster_position_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_position_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_position_bool_exp | null)},juster_positionRequest] | juster_positionRequest
    /** An aggregated array relationship */
    positions_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_position_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_position_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_position_bool_exp | null)},juster_position_aggregateRequest] | juster_position_aggregateRequest
    start_rate?: boolean | number
    /** NEW: NEW\nSTARTED: STARTED\nFINISHED: FINISHED\nCANCELED: CANCELED */
    status?: boolean | number
    target_dynamics?: boolean | number
    total_bets_amount?: boolean | number
    total_liquidity_provided?: boolean | number
    total_liquidity_shares?: boolean | number
    /** ABOVE_EQ: ABOVE_EQ\nBELOW: BELOW */
    winner_bets?: boolean | number
    /** An array relationship */
    withdrawals?: [{
    /** distinct select on columns */
    distinct_on?: (juster_withdrawal_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_withdrawal_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_withdrawal_bool_exp | null)},juster_withdrawalRequest] | juster_withdrawalRequest
    /** An aggregated array relationship */
    withdrawals_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_withdrawal_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_withdrawal_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_withdrawal_bool_exp | null)},juster_withdrawal_aggregateRequest] | juster_withdrawal_aggregateRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "juster.event" */
export interface juster_event_aggregateRequest{
    aggregate?: juster_event_aggregate_fieldsRequest
    nodes?: juster_eventRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "juster.event" */
export interface juster_event_aggregate_fieldsRequest{
    avg?: juster_event_avg_fieldsRequest
    count?: [{columns?: (juster_event_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: juster_event_max_fieldsRequest
    min?: juster_event_min_fieldsRequest
    stddev?: juster_event_stddev_fieldsRequest
    stddev_pop?: juster_event_stddev_pop_fieldsRequest
    stddev_samp?: juster_event_stddev_samp_fieldsRequest
    sum?: juster_event_sum_fieldsRequest
    var_pop?: juster_event_var_pop_fieldsRequest
    var_samp?: juster_event_var_samp_fieldsRequest
    variance?: juster_event_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "juster.event" */
export interface juster_event_aggregate_order_by {avg?: (juster_event_avg_order_by | null),count?: (order_by | null),max?: (juster_event_max_order_by | null),min?: (juster_event_min_order_by | null),stddev?: (juster_event_stddev_order_by | null),stddev_pop?: (juster_event_stddev_pop_order_by | null),stddev_samp?: (juster_event_stddev_samp_order_by | null),sum?: (juster_event_sum_order_by | null),var_pop?: (juster_event_var_pop_order_by | null),var_samp?: (juster_event_var_samp_order_by | null),variance?: (juster_event_variance_order_by | null)}


/** aggregate avg on columns */
export interface juster_event_avg_fieldsRequest{
    closed_dynamics?: boolean | number
    closed_rate?: boolean | number
    currency_pair_id?: boolean | number
    id?: boolean | number
    liquidity_percent?: boolean | number
    measure_period?: boolean | number
    pool_above_eq?: boolean | number
    pool_below?: boolean | number
    start_rate?: boolean | number
    target_dynamics?: boolean | number
    total_bets_amount?: boolean | number
    total_liquidity_provided?: boolean | number
    total_liquidity_shares?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "juster.event" */
export interface juster_event_avg_order_by {closed_dynamics?: (order_by | null),closed_rate?: (order_by | null),currency_pair_id?: (order_by | null),id?: (order_by | null),liquidity_percent?: (order_by | null),measure_period?: (order_by | null),pool_above_eq?: (order_by | null),pool_below?: (order_by | null),start_rate?: (order_by | null),target_dynamics?: (order_by | null),total_bets_amount?: (order_by | null),total_liquidity_provided?: (order_by | null),total_liquidity_shares?: (order_by | null)}


/** Boolean expression to filter rows from the table "juster.event". All fields are combined with a logical 'AND'. */
export interface juster_event_bool_exp {_and?: ((juster_event_bool_exp | null)[] | null),_not?: (juster_event_bool_exp | null),_or?: ((juster_event_bool_exp | null)[] | null),bets?: (juster_bet_bool_exp | null),bets_close_time?: (timestamptz_comparison_exp | null),closed_dynamics?: (numeric_comparison_exp | null),closed_oracle_time?: (timestamptz_comparison_exp | null),closed_rate?: (numeric_comparison_exp | null),created_time?: (timestamptz_comparison_exp | null),currency_pair?: (juster_currencypair_bool_exp | null),currency_pair_id?: (Int_comparison_exp | null),deposits?: (juster_deposit_bool_exp | null),id?: (Int_comparison_exp | null),liquidity_percent?: (numeric_comparison_exp | null),measure_oracle_start_time?: (timestamptz_comparison_exp | null),measure_period?: (bigint_comparison_exp | null),pool_above_eq?: (numeric_comparison_exp | null),pool_below?: (numeric_comparison_exp | null),positions?: (juster_position_bool_exp | null),start_rate?: (numeric_comparison_exp | null),status?: (String_comparison_exp | null),target_dynamics?: (numeric_comparison_exp | null),total_bets_amount?: (numeric_comparison_exp | null),total_liquidity_provided?: (numeric_comparison_exp | null),total_liquidity_shares?: (numeric_comparison_exp | null),winner_bets?: (String_comparison_exp | null),withdrawals?: (juster_withdrawal_bool_exp | null)}


/** aggregate max on columns */
export interface juster_event_max_fieldsRequest{
    bets_close_time?: boolean | number
    closed_dynamics?: boolean | number
    closed_oracle_time?: boolean | number
    closed_rate?: boolean | number
    created_time?: boolean | number
    currency_pair_id?: boolean | number
    id?: boolean | number
    liquidity_percent?: boolean | number
    measure_oracle_start_time?: boolean | number
    measure_period?: boolean | number
    pool_above_eq?: boolean | number
    pool_below?: boolean | number
    start_rate?: boolean | number
    status?: boolean | number
    target_dynamics?: boolean | number
    total_bets_amount?: boolean | number
    total_liquidity_provided?: boolean | number
    total_liquidity_shares?: boolean | number
    winner_bets?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "juster.event" */
export interface juster_event_max_order_by {bets_close_time?: (order_by | null),closed_dynamics?: (order_by | null),closed_oracle_time?: (order_by | null),closed_rate?: (order_by | null),created_time?: (order_by | null),currency_pair_id?: (order_by | null),id?: (order_by | null),liquidity_percent?: (order_by | null),measure_oracle_start_time?: (order_by | null),measure_period?: (order_by | null),pool_above_eq?: (order_by | null),pool_below?: (order_by | null),start_rate?: (order_by | null),status?: (order_by | null),target_dynamics?: (order_by | null),total_bets_amount?: (order_by | null),total_liquidity_provided?: (order_by | null),total_liquidity_shares?: (order_by | null),winner_bets?: (order_by | null)}


/** aggregate min on columns */
export interface juster_event_min_fieldsRequest{
    bets_close_time?: boolean | number
    closed_dynamics?: boolean | number
    closed_oracle_time?: boolean | number
    closed_rate?: boolean | number
    created_time?: boolean | number
    currency_pair_id?: boolean | number
    id?: boolean | number
    liquidity_percent?: boolean | number
    measure_oracle_start_time?: boolean | number
    measure_period?: boolean | number
    pool_above_eq?: boolean | number
    pool_below?: boolean | number
    start_rate?: boolean | number
    status?: boolean | number
    target_dynamics?: boolean | number
    total_bets_amount?: boolean | number
    total_liquidity_provided?: boolean | number
    total_liquidity_shares?: boolean | number
    winner_bets?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "juster.event" */
export interface juster_event_min_order_by {bets_close_time?: (order_by | null),closed_dynamics?: (order_by | null),closed_oracle_time?: (order_by | null),closed_rate?: (order_by | null),created_time?: (order_by | null),currency_pair_id?: (order_by | null),id?: (order_by | null),liquidity_percent?: (order_by | null),measure_oracle_start_time?: (order_by | null),measure_period?: (order_by | null),pool_above_eq?: (order_by | null),pool_below?: (order_by | null),start_rate?: (order_by | null),status?: (order_by | null),target_dynamics?: (order_by | null),total_bets_amount?: (order_by | null),total_liquidity_provided?: (order_by | null),total_liquidity_shares?: (order_by | null),winner_bets?: (order_by | null)}


/** ordering options when selecting data from "juster.event" */
export interface juster_event_order_by {bets_aggregate?: (juster_bet_aggregate_order_by | null),bets_close_time?: (order_by | null),closed_dynamics?: (order_by | null),closed_oracle_time?: (order_by | null),closed_rate?: (order_by | null),created_time?: (order_by | null),currency_pair?: (juster_currencypair_order_by | null),currency_pair_id?: (order_by | null),deposits_aggregate?: (juster_deposit_aggregate_order_by | null),id?: (order_by | null),liquidity_percent?: (order_by | null),measure_oracle_start_time?: (order_by | null),measure_period?: (order_by | null),pool_above_eq?: (order_by | null),pool_below?: (order_by | null),positions_aggregate?: (juster_position_aggregate_order_by | null),start_rate?: (order_by | null),status?: (order_by | null),target_dynamics?: (order_by | null),total_bets_amount?: (order_by | null),total_liquidity_provided?: (order_by | null),total_liquidity_shares?: (order_by | null),winner_bets?: (order_by | null),withdrawals_aggregate?: (juster_withdrawal_aggregate_order_by | null)}


/** primary key columns input for table: "juster.event" */
export interface juster_event_pk_columns_input {id: Scalars['Int']}


/** aggregate stddev on columns */
export interface juster_event_stddev_fieldsRequest{
    closed_dynamics?: boolean | number
    closed_rate?: boolean | number
    currency_pair_id?: boolean | number
    id?: boolean | number
    liquidity_percent?: boolean | number
    measure_period?: boolean | number
    pool_above_eq?: boolean | number
    pool_below?: boolean | number
    start_rate?: boolean | number
    target_dynamics?: boolean | number
    total_bets_amount?: boolean | number
    total_liquidity_provided?: boolean | number
    total_liquidity_shares?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "juster.event" */
export interface juster_event_stddev_order_by {closed_dynamics?: (order_by | null),closed_rate?: (order_by | null),currency_pair_id?: (order_by | null),id?: (order_by | null),liquidity_percent?: (order_by | null),measure_period?: (order_by | null),pool_above_eq?: (order_by | null),pool_below?: (order_by | null),start_rate?: (order_by | null),target_dynamics?: (order_by | null),total_bets_amount?: (order_by | null),total_liquidity_provided?: (order_by | null),total_liquidity_shares?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface juster_event_stddev_pop_fieldsRequest{
    closed_dynamics?: boolean | number
    closed_rate?: boolean | number
    currency_pair_id?: boolean | number
    id?: boolean | number
    liquidity_percent?: boolean | number
    measure_period?: boolean | number
    pool_above_eq?: boolean | number
    pool_below?: boolean | number
    start_rate?: boolean | number
    target_dynamics?: boolean | number
    total_bets_amount?: boolean | number
    total_liquidity_provided?: boolean | number
    total_liquidity_shares?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "juster.event" */
export interface juster_event_stddev_pop_order_by {closed_dynamics?: (order_by | null),closed_rate?: (order_by | null),currency_pair_id?: (order_by | null),id?: (order_by | null),liquidity_percent?: (order_by | null),measure_period?: (order_by | null),pool_above_eq?: (order_by | null),pool_below?: (order_by | null),start_rate?: (order_by | null),target_dynamics?: (order_by | null),total_bets_amount?: (order_by | null),total_liquidity_provided?: (order_by | null),total_liquidity_shares?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface juster_event_stddev_samp_fieldsRequest{
    closed_dynamics?: boolean | number
    closed_rate?: boolean | number
    currency_pair_id?: boolean | number
    id?: boolean | number
    liquidity_percent?: boolean | number
    measure_period?: boolean | number
    pool_above_eq?: boolean | number
    pool_below?: boolean | number
    start_rate?: boolean | number
    target_dynamics?: boolean | number
    total_bets_amount?: boolean | number
    total_liquidity_provided?: boolean | number
    total_liquidity_shares?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "juster.event" */
export interface juster_event_stddev_samp_order_by {closed_dynamics?: (order_by | null),closed_rate?: (order_by | null),currency_pair_id?: (order_by | null),id?: (order_by | null),liquidity_percent?: (order_by | null),measure_period?: (order_by | null),pool_above_eq?: (order_by | null),pool_below?: (order_by | null),start_rate?: (order_by | null),target_dynamics?: (order_by | null),total_bets_amount?: (order_by | null),total_liquidity_provided?: (order_by | null),total_liquidity_shares?: (order_by | null)}


/** aggregate sum on columns */
export interface juster_event_sum_fieldsRequest{
    closed_dynamics?: boolean | number
    closed_rate?: boolean | number
    currency_pair_id?: boolean | number
    id?: boolean | number
    liquidity_percent?: boolean | number
    measure_period?: boolean | number
    pool_above_eq?: boolean | number
    pool_below?: boolean | number
    start_rate?: boolean | number
    target_dynamics?: boolean | number
    total_bets_amount?: boolean | number
    total_liquidity_provided?: boolean | number
    total_liquidity_shares?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "juster.event" */
export interface juster_event_sum_order_by {closed_dynamics?: (order_by | null),closed_rate?: (order_by | null),currency_pair_id?: (order_by | null),id?: (order_by | null),liquidity_percent?: (order_by | null),measure_period?: (order_by | null),pool_above_eq?: (order_by | null),pool_below?: (order_by | null),start_rate?: (order_by | null),target_dynamics?: (order_by | null),total_bets_amount?: (order_by | null),total_liquidity_provided?: (order_by | null),total_liquidity_shares?: (order_by | null)}


/** aggregate var_pop on columns */
export interface juster_event_var_pop_fieldsRequest{
    closed_dynamics?: boolean | number
    closed_rate?: boolean | number
    currency_pair_id?: boolean | number
    id?: boolean | number
    liquidity_percent?: boolean | number
    measure_period?: boolean | number
    pool_above_eq?: boolean | number
    pool_below?: boolean | number
    start_rate?: boolean | number
    target_dynamics?: boolean | number
    total_bets_amount?: boolean | number
    total_liquidity_provided?: boolean | number
    total_liquidity_shares?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "juster.event" */
export interface juster_event_var_pop_order_by {closed_dynamics?: (order_by | null),closed_rate?: (order_by | null),currency_pair_id?: (order_by | null),id?: (order_by | null),liquidity_percent?: (order_by | null),measure_period?: (order_by | null),pool_above_eq?: (order_by | null),pool_below?: (order_by | null),start_rate?: (order_by | null),target_dynamics?: (order_by | null),total_bets_amount?: (order_by | null),total_liquidity_provided?: (order_by | null),total_liquidity_shares?: (order_by | null)}


/** aggregate var_samp on columns */
export interface juster_event_var_samp_fieldsRequest{
    closed_dynamics?: boolean | number
    closed_rate?: boolean | number
    currency_pair_id?: boolean | number
    id?: boolean | number
    liquidity_percent?: boolean | number
    measure_period?: boolean | number
    pool_above_eq?: boolean | number
    pool_below?: boolean | number
    start_rate?: boolean | number
    target_dynamics?: boolean | number
    total_bets_amount?: boolean | number
    total_liquidity_provided?: boolean | number
    total_liquidity_shares?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "juster.event" */
export interface juster_event_var_samp_order_by {closed_dynamics?: (order_by | null),closed_rate?: (order_by | null),currency_pair_id?: (order_by | null),id?: (order_by | null),liquidity_percent?: (order_by | null),measure_period?: (order_by | null),pool_above_eq?: (order_by | null),pool_below?: (order_by | null),start_rate?: (order_by | null),target_dynamics?: (order_by | null),total_bets_amount?: (order_by | null),total_liquidity_provided?: (order_by | null),total_liquidity_shares?: (order_by | null)}


/** aggregate variance on columns */
export interface juster_event_variance_fieldsRequest{
    closed_dynamics?: boolean | number
    closed_rate?: boolean | number
    currency_pair_id?: boolean | number
    id?: boolean | number
    liquidity_percent?: boolean | number
    measure_period?: boolean | number
    pool_above_eq?: boolean | number
    pool_below?: boolean | number
    start_rate?: boolean | number
    target_dynamics?: boolean | number
    total_bets_amount?: boolean | number
    total_liquidity_provided?: boolean | number
    total_liquidity_shares?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "juster.event" */
export interface juster_event_variance_order_by {closed_dynamics?: (order_by | null),closed_rate?: (order_by | null),currency_pair_id?: (order_by | null),id?: (order_by | null),liquidity_percent?: (order_by | null),measure_period?: (order_by | null),pool_above_eq?: (order_by | null),pool_below?: (order_by | null),start_rate?: (order_by | null),target_dynamics?: (order_by | null),total_bets_amount?: (order_by | null),total_liquidity_provided?: (order_by | null),total_liquidity_shares?: (order_by | null)}


/** columns and relationships of "juster.position" */
export interface juster_positionRequest{
    /** An object relationship */
    event?: juster_eventRequest
    event_id?: boolean | number
    id?: boolean | number
    liquidity_provided_above_eq?: boolean | number
    liquidity_provided_below?: boolean | number
    reward_above_eq?: boolean | number
    reward_below?: boolean | number
    shares?: boolean | number
    /** An object relationship */
    user?: juster_userRequest
    user_id?: boolean | number
    withdrawn?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "juster.position" */
export interface juster_position_aggregateRequest{
    aggregate?: juster_position_aggregate_fieldsRequest
    nodes?: juster_positionRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "juster.position" */
export interface juster_position_aggregate_fieldsRequest{
    avg?: juster_position_avg_fieldsRequest
    count?: [{columns?: (juster_position_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: juster_position_max_fieldsRequest
    min?: juster_position_min_fieldsRequest
    stddev?: juster_position_stddev_fieldsRequest
    stddev_pop?: juster_position_stddev_pop_fieldsRequest
    stddev_samp?: juster_position_stddev_samp_fieldsRequest
    sum?: juster_position_sum_fieldsRequest
    var_pop?: juster_position_var_pop_fieldsRequest
    var_samp?: juster_position_var_samp_fieldsRequest
    variance?: juster_position_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "juster.position" */
export interface juster_position_aggregate_order_by {avg?: (juster_position_avg_order_by | null),count?: (order_by | null),max?: (juster_position_max_order_by | null),min?: (juster_position_min_order_by | null),stddev?: (juster_position_stddev_order_by | null),stddev_pop?: (juster_position_stddev_pop_order_by | null),stddev_samp?: (juster_position_stddev_samp_order_by | null),sum?: (juster_position_sum_order_by | null),var_pop?: (juster_position_var_pop_order_by | null),var_samp?: (juster_position_var_samp_order_by | null),variance?: (juster_position_variance_order_by | null)}


/** aggregate avg on columns */
export interface juster_position_avg_fieldsRequest{
    event_id?: boolean | number
    id?: boolean | number
    liquidity_provided_above_eq?: boolean | number
    liquidity_provided_below?: boolean | number
    reward_above_eq?: boolean | number
    reward_below?: boolean | number
    shares?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "juster.position" */
export interface juster_position_avg_order_by {event_id?: (order_by | null),id?: (order_by | null),liquidity_provided_above_eq?: (order_by | null),liquidity_provided_below?: (order_by | null),reward_above_eq?: (order_by | null),reward_below?: (order_by | null),shares?: (order_by | null)}


/** Boolean expression to filter rows from the table "juster.position". All fields are combined with a logical 'AND'. */
export interface juster_position_bool_exp {_and?: ((juster_position_bool_exp | null)[] | null),_not?: (juster_position_bool_exp | null),_or?: ((juster_position_bool_exp | null)[] | null),event?: (juster_event_bool_exp | null),event_id?: (Int_comparison_exp | null),id?: (Int_comparison_exp | null),liquidity_provided_above_eq?: (numeric_comparison_exp | null),liquidity_provided_below?: (numeric_comparison_exp | null),reward_above_eq?: (numeric_comparison_exp | null),reward_below?: (numeric_comparison_exp | null),shares?: (numeric_comparison_exp | null),user?: (juster_user_bool_exp | null),user_id?: (String_comparison_exp | null),withdrawn?: (Boolean_comparison_exp | null)}


/** aggregate max on columns */
export interface juster_position_max_fieldsRequest{
    event_id?: boolean | number
    id?: boolean | number
    liquidity_provided_above_eq?: boolean | number
    liquidity_provided_below?: boolean | number
    reward_above_eq?: boolean | number
    reward_below?: boolean | number
    shares?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "juster.position" */
export interface juster_position_max_order_by {event_id?: (order_by | null),id?: (order_by | null),liquidity_provided_above_eq?: (order_by | null),liquidity_provided_below?: (order_by | null),reward_above_eq?: (order_by | null),reward_below?: (order_by | null),shares?: (order_by | null),user_id?: (order_by | null)}


/** aggregate min on columns */
export interface juster_position_min_fieldsRequest{
    event_id?: boolean | number
    id?: boolean | number
    liquidity_provided_above_eq?: boolean | number
    liquidity_provided_below?: boolean | number
    reward_above_eq?: boolean | number
    reward_below?: boolean | number
    shares?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "juster.position" */
export interface juster_position_min_order_by {event_id?: (order_by | null),id?: (order_by | null),liquidity_provided_above_eq?: (order_by | null),liquidity_provided_below?: (order_by | null),reward_above_eq?: (order_by | null),reward_below?: (order_by | null),shares?: (order_by | null),user_id?: (order_by | null)}


/** ordering options when selecting data from "juster.position" */
export interface juster_position_order_by {event?: (juster_event_order_by | null),event_id?: (order_by | null),id?: (order_by | null),liquidity_provided_above_eq?: (order_by | null),liquidity_provided_below?: (order_by | null),reward_above_eq?: (order_by | null),reward_below?: (order_by | null),shares?: (order_by | null),user?: (juster_user_order_by | null),user_id?: (order_by | null),withdrawn?: (order_by | null)}


/** primary key columns input for table: "juster.position" */
export interface juster_position_pk_columns_input {id: Scalars['Int']}


/** aggregate stddev on columns */
export interface juster_position_stddev_fieldsRequest{
    event_id?: boolean | number
    id?: boolean | number
    liquidity_provided_above_eq?: boolean | number
    liquidity_provided_below?: boolean | number
    reward_above_eq?: boolean | number
    reward_below?: boolean | number
    shares?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "juster.position" */
export interface juster_position_stddev_order_by {event_id?: (order_by | null),id?: (order_by | null),liquidity_provided_above_eq?: (order_by | null),liquidity_provided_below?: (order_by | null),reward_above_eq?: (order_by | null),reward_below?: (order_by | null),shares?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface juster_position_stddev_pop_fieldsRequest{
    event_id?: boolean | number
    id?: boolean | number
    liquidity_provided_above_eq?: boolean | number
    liquidity_provided_below?: boolean | number
    reward_above_eq?: boolean | number
    reward_below?: boolean | number
    shares?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "juster.position" */
export interface juster_position_stddev_pop_order_by {event_id?: (order_by | null),id?: (order_by | null),liquidity_provided_above_eq?: (order_by | null),liquidity_provided_below?: (order_by | null),reward_above_eq?: (order_by | null),reward_below?: (order_by | null),shares?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface juster_position_stddev_samp_fieldsRequest{
    event_id?: boolean | number
    id?: boolean | number
    liquidity_provided_above_eq?: boolean | number
    liquidity_provided_below?: boolean | number
    reward_above_eq?: boolean | number
    reward_below?: boolean | number
    shares?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "juster.position" */
export interface juster_position_stddev_samp_order_by {event_id?: (order_by | null),id?: (order_by | null),liquidity_provided_above_eq?: (order_by | null),liquidity_provided_below?: (order_by | null),reward_above_eq?: (order_by | null),reward_below?: (order_by | null),shares?: (order_by | null)}


/** aggregate sum on columns */
export interface juster_position_sum_fieldsRequest{
    event_id?: boolean | number
    id?: boolean | number
    liquidity_provided_above_eq?: boolean | number
    liquidity_provided_below?: boolean | number
    reward_above_eq?: boolean | number
    reward_below?: boolean | number
    shares?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "juster.position" */
export interface juster_position_sum_order_by {event_id?: (order_by | null),id?: (order_by | null),liquidity_provided_above_eq?: (order_by | null),liquidity_provided_below?: (order_by | null),reward_above_eq?: (order_by | null),reward_below?: (order_by | null),shares?: (order_by | null)}


/** aggregate var_pop on columns */
export interface juster_position_var_pop_fieldsRequest{
    event_id?: boolean | number
    id?: boolean | number
    liquidity_provided_above_eq?: boolean | number
    liquidity_provided_below?: boolean | number
    reward_above_eq?: boolean | number
    reward_below?: boolean | number
    shares?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "juster.position" */
export interface juster_position_var_pop_order_by {event_id?: (order_by | null),id?: (order_by | null),liquidity_provided_above_eq?: (order_by | null),liquidity_provided_below?: (order_by | null),reward_above_eq?: (order_by | null),reward_below?: (order_by | null),shares?: (order_by | null)}


/** aggregate var_samp on columns */
export interface juster_position_var_samp_fieldsRequest{
    event_id?: boolean | number
    id?: boolean | number
    liquidity_provided_above_eq?: boolean | number
    liquidity_provided_below?: boolean | number
    reward_above_eq?: boolean | number
    reward_below?: boolean | number
    shares?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "juster.position" */
export interface juster_position_var_samp_order_by {event_id?: (order_by | null),id?: (order_by | null),liquidity_provided_above_eq?: (order_by | null),liquidity_provided_below?: (order_by | null),reward_above_eq?: (order_by | null),reward_below?: (order_by | null),shares?: (order_by | null)}


/** aggregate variance on columns */
export interface juster_position_variance_fieldsRequest{
    event_id?: boolean | number
    id?: boolean | number
    liquidity_provided_above_eq?: boolean | number
    liquidity_provided_below?: boolean | number
    reward_above_eq?: boolean | number
    reward_below?: boolean | number
    shares?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "juster.position" */
export interface juster_position_variance_order_by {event_id?: (order_by | null),id?: (order_by | null),liquidity_provided_above_eq?: (order_by | null),liquidity_provided_below?: (order_by | null),reward_above_eq?: (order_by | null),reward_below?: (order_by | null),shares?: (order_by | null)}


/** columns and relationships of "juster.quote" */
export interface juster_quoteRequest{
    /** An object relationship */
    currency_pair?: juster_currencypairRequest
    currency_pair_id?: boolean | number
    id?: boolean | number
    price?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "juster.quote" */
export interface juster_quote_aggregateRequest{
    aggregate?: juster_quote_aggregate_fieldsRequest
    nodes?: juster_quoteRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "juster.quote" */
export interface juster_quote_aggregate_fieldsRequest{
    avg?: juster_quote_avg_fieldsRequest
    count?: [{columns?: (juster_quote_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: juster_quote_max_fieldsRequest
    min?: juster_quote_min_fieldsRequest
    stddev?: juster_quote_stddev_fieldsRequest
    stddev_pop?: juster_quote_stddev_pop_fieldsRequest
    stddev_samp?: juster_quote_stddev_samp_fieldsRequest
    sum?: juster_quote_sum_fieldsRequest
    var_pop?: juster_quote_var_pop_fieldsRequest
    var_samp?: juster_quote_var_samp_fieldsRequest
    variance?: juster_quote_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "juster.quote" */
export interface juster_quote_aggregate_order_by {avg?: (juster_quote_avg_order_by | null),count?: (order_by | null),max?: (juster_quote_max_order_by | null),min?: (juster_quote_min_order_by | null),stddev?: (juster_quote_stddev_order_by | null),stddev_pop?: (juster_quote_stddev_pop_order_by | null),stddev_samp?: (juster_quote_stddev_samp_order_by | null),sum?: (juster_quote_sum_order_by | null),var_pop?: (juster_quote_var_pop_order_by | null),var_samp?: (juster_quote_var_samp_order_by | null),variance?: (juster_quote_variance_order_by | null)}


/** aggregate avg on columns */
export interface juster_quote_avg_fieldsRequest{
    currency_pair_id?: boolean | number
    id?: boolean | number
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "juster.quote" */
export interface juster_quote_avg_order_by {currency_pair_id?: (order_by | null),id?: (order_by | null),price?: (order_by | null)}


/** Boolean expression to filter rows from the table "juster.quote". All fields are combined with a logical 'AND'. */
export interface juster_quote_bool_exp {_and?: ((juster_quote_bool_exp | null)[] | null),_not?: (juster_quote_bool_exp | null),_or?: ((juster_quote_bool_exp | null)[] | null),currency_pair?: (juster_currencypair_bool_exp | null),currency_pair_id?: (Int_comparison_exp | null),id?: (Int_comparison_exp | null),price?: (bigint_comparison_exp | null),timestamp?: (timestamptz_comparison_exp | null)}


/** aggregate max on columns */
export interface juster_quote_max_fieldsRequest{
    currency_pair_id?: boolean | number
    id?: boolean | number
    price?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "juster.quote" */
export interface juster_quote_max_order_by {currency_pair_id?: (order_by | null),id?: (order_by | null),price?: (order_by | null),timestamp?: (order_by | null)}


/** aggregate min on columns */
export interface juster_quote_min_fieldsRequest{
    currency_pair_id?: boolean | number
    id?: boolean | number
    price?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "juster.quote" */
export interface juster_quote_min_order_by {currency_pair_id?: (order_by | null),id?: (order_by | null),price?: (order_by | null),timestamp?: (order_by | null)}


/** ordering options when selecting data from "juster.quote" */
export interface juster_quote_order_by {currency_pair?: (juster_currencypair_order_by | null),currency_pair_id?: (order_by | null),id?: (order_by | null),price?: (order_by | null),timestamp?: (order_by | null)}


/** primary key columns input for table: "juster.quote" */
export interface juster_quote_pk_columns_input {id: Scalars['Int']}


/** aggregate stddev on columns */
export interface juster_quote_stddev_fieldsRequest{
    currency_pair_id?: boolean | number
    id?: boolean | number
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "juster.quote" */
export interface juster_quote_stddev_order_by {currency_pair_id?: (order_by | null),id?: (order_by | null),price?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface juster_quote_stddev_pop_fieldsRequest{
    currency_pair_id?: boolean | number
    id?: boolean | number
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "juster.quote" */
export interface juster_quote_stddev_pop_order_by {currency_pair_id?: (order_by | null),id?: (order_by | null),price?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface juster_quote_stddev_samp_fieldsRequest{
    currency_pair_id?: boolean | number
    id?: boolean | number
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "juster.quote" */
export interface juster_quote_stddev_samp_order_by {currency_pair_id?: (order_by | null),id?: (order_by | null),price?: (order_by | null)}


/** aggregate sum on columns */
export interface juster_quote_sum_fieldsRequest{
    currency_pair_id?: boolean | number
    id?: boolean | number
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "juster.quote" */
export interface juster_quote_sum_order_by {currency_pair_id?: (order_by | null),id?: (order_by | null),price?: (order_by | null)}


/** aggregate var_pop on columns */
export interface juster_quote_var_pop_fieldsRequest{
    currency_pair_id?: boolean | number
    id?: boolean | number
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "juster.quote" */
export interface juster_quote_var_pop_order_by {currency_pair_id?: (order_by | null),id?: (order_by | null),price?: (order_by | null)}


/** aggregate var_samp on columns */
export interface juster_quote_var_samp_fieldsRequest{
    currency_pair_id?: boolean | number
    id?: boolean | number
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "juster.quote" */
export interface juster_quote_var_samp_order_by {currency_pair_id?: (order_by | null),id?: (order_by | null),price?: (order_by | null)}


/** aggregate variance on columns */
export interface juster_quote_variance_fieldsRequest{
    currency_pair_id?: boolean | number
    id?: boolean | number
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "juster.quote" */
export interface juster_quote_variance_order_by {currency_pair_id?: (order_by | null),id?: (order_by | null),price?: (order_by | null)}


/** columns and relationships of "juster.user" */
export interface juster_userRequest{
    address?: boolean | number
    /** An array relationship */
    bets?: [{
    /** distinct select on columns */
    distinct_on?: (juster_bet_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_bet_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_bet_bool_exp | null)},juster_betRequest] | juster_betRequest
    /** An aggregated array relationship */
    bets_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_bet_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_bet_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_bet_bool_exp | null)},juster_bet_aggregateRequest] | juster_bet_aggregateRequest
    /** An array relationship */
    deposits?: [{
    /** distinct select on columns */
    distinct_on?: (juster_deposit_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_deposit_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_deposit_bool_exp | null)},juster_depositRequest] | juster_depositRequest
    /** An aggregated array relationship */
    deposits_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_deposit_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_deposit_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_deposit_bool_exp | null)},juster_deposit_aggregateRequest] | juster_deposit_aggregateRequest
    /** An array relationship */
    positions?: [{
    /** distinct select on columns */
    distinct_on?: (juster_position_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_position_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_position_bool_exp | null)},juster_positionRequest] | juster_positionRequest
    /** An aggregated array relationship */
    positions_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_position_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_position_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_position_bool_exp | null)},juster_position_aggregateRequest] | juster_position_aggregateRequest
    total_bets_amount?: boolean | number
    total_bets_count?: boolean | number
    total_fees_collected?: boolean | number
    total_liquidity_provided?: boolean | number
    total_reward?: boolean | number
    total_withdrawn?: boolean | number
    /** An array relationship */
    withdrawals?: [{
    /** distinct select on columns */
    distinct_on?: (juster_withdrawal_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_withdrawal_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_withdrawal_bool_exp | null)},juster_withdrawalRequest] | juster_withdrawalRequest
    /** An aggregated array relationship */
    withdrawals_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_withdrawal_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_withdrawal_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_withdrawal_bool_exp | null)},juster_withdrawal_aggregateRequest] | juster_withdrawal_aggregateRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "juster.user" */
export interface juster_user_aggregateRequest{
    aggregate?: juster_user_aggregate_fieldsRequest
    nodes?: juster_userRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "juster.user" */
export interface juster_user_aggregate_fieldsRequest{
    avg?: juster_user_avg_fieldsRequest
    count?: [{columns?: (juster_user_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: juster_user_max_fieldsRequest
    min?: juster_user_min_fieldsRequest
    stddev?: juster_user_stddev_fieldsRequest
    stddev_pop?: juster_user_stddev_pop_fieldsRequest
    stddev_samp?: juster_user_stddev_samp_fieldsRequest
    sum?: juster_user_sum_fieldsRequest
    var_pop?: juster_user_var_pop_fieldsRequest
    var_samp?: juster_user_var_samp_fieldsRequest
    variance?: juster_user_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "juster.user" */
export interface juster_user_aggregate_order_by {avg?: (juster_user_avg_order_by | null),count?: (order_by | null),max?: (juster_user_max_order_by | null),min?: (juster_user_min_order_by | null),stddev?: (juster_user_stddev_order_by | null),stddev_pop?: (juster_user_stddev_pop_order_by | null),stddev_samp?: (juster_user_stddev_samp_order_by | null),sum?: (juster_user_sum_order_by | null),var_pop?: (juster_user_var_pop_order_by | null),var_samp?: (juster_user_var_samp_order_by | null),variance?: (juster_user_variance_order_by | null)}


/** aggregate avg on columns */
export interface juster_user_avg_fieldsRequest{
    total_bets_amount?: boolean | number
    total_bets_count?: boolean | number
    total_fees_collected?: boolean | number
    total_liquidity_provided?: boolean | number
    total_reward?: boolean | number
    total_withdrawn?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "juster.user" */
export interface juster_user_avg_order_by {total_bets_amount?: (order_by | null),total_bets_count?: (order_by | null),total_fees_collected?: (order_by | null),total_liquidity_provided?: (order_by | null),total_reward?: (order_by | null),total_withdrawn?: (order_by | null)}


/** Boolean expression to filter rows from the table "juster.user". All fields are combined with a logical 'AND'. */
export interface juster_user_bool_exp {_and?: ((juster_user_bool_exp | null)[] | null),_not?: (juster_user_bool_exp | null),_or?: ((juster_user_bool_exp | null)[] | null),address?: (String_comparison_exp | null),bets?: (juster_bet_bool_exp | null),deposits?: (juster_deposit_bool_exp | null),positions?: (juster_position_bool_exp | null),total_bets_amount?: (numeric_comparison_exp | null),total_bets_count?: (Int_comparison_exp | null),total_fees_collected?: (numeric_comparison_exp | null),total_liquidity_provided?: (numeric_comparison_exp | null),total_reward?: (numeric_comparison_exp | null),total_withdrawn?: (numeric_comparison_exp | null),withdrawals?: (juster_withdrawal_bool_exp | null)}


/** aggregate max on columns */
export interface juster_user_max_fieldsRequest{
    address?: boolean | number
    total_bets_amount?: boolean | number
    total_bets_count?: boolean | number
    total_fees_collected?: boolean | number
    total_liquidity_provided?: boolean | number
    total_reward?: boolean | number
    total_withdrawn?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "juster.user" */
export interface juster_user_max_order_by {address?: (order_by | null),total_bets_amount?: (order_by | null),total_bets_count?: (order_by | null),total_fees_collected?: (order_by | null),total_liquidity_provided?: (order_by | null),total_reward?: (order_by | null),total_withdrawn?: (order_by | null)}


/** aggregate min on columns */
export interface juster_user_min_fieldsRequest{
    address?: boolean | number
    total_bets_amount?: boolean | number
    total_bets_count?: boolean | number
    total_fees_collected?: boolean | number
    total_liquidity_provided?: boolean | number
    total_reward?: boolean | number
    total_withdrawn?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "juster.user" */
export interface juster_user_min_order_by {address?: (order_by | null),total_bets_amount?: (order_by | null),total_bets_count?: (order_by | null),total_fees_collected?: (order_by | null),total_liquidity_provided?: (order_by | null),total_reward?: (order_by | null),total_withdrawn?: (order_by | null)}


/** ordering options when selecting data from "juster.user" */
export interface juster_user_order_by {address?: (order_by | null),bets_aggregate?: (juster_bet_aggregate_order_by | null),deposits_aggregate?: (juster_deposit_aggregate_order_by | null),positions_aggregate?: (juster_position_aggregate_order_by | null),total_bets_amount?: (order_by | null),total_bets_count?: (order_by | null),total_fees_collected?: (order_by | null),total_liquidity_provided?: (order_by | null),total_reward?: (order_by | null),total_withdrawn?: (order_by | null),withdrawals_aggregate?: (juster_withdrawal_aggregate_order_by | null)}


/** primary key columns input for table: "juster.user" */
export interface juster_user_pk_columns_input {address: Scalars['String']}


/** aggregate stddev on columns */
export interface juster_user_stddev_fieldsRequest{
    total_bets_amount?: boolean | number
    total_bets_count?: boolean | number
    total_fees_collected?: boolean | number
    total_liquidity_provided?: boolean | number
    total_reward?: boolean | number
    total_withdrawn?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "juster.user" */
export interface juster_user_stddev_order_by {total_bets_amount?: (order_by | null),total_bets_count?: (order_by | null),total_fees_collected?: (order_by | null),total_liquidity_provided?: (order_by | null),total_reward?: (order_by | null),total_withdrawn?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface juster_user_stddev_pop_fieldsRequest{
    total_bets_amount?: boolean | number
    total_bets_count?: boolean | number
    total_fees_collected?: boolean | number
    total_liquidity_provided?: boolean | number
    total_reward?: boolean | number
    total_withdrawn?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "juster.user" */
export interface juster_user_stddev_pop_order_by {total_bets_amount?: (order_by | null),total_bets_count?: (order_by | null),total_fees_collected?: (order_by | null),total_liquidity_provided?: (order_by | null),total_reward?: (order_by | null),total_withdrawn?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface juster_user_stddev_samp_fieldsRequest{
    total_bets_amount?: boolean | number
    total_bets_count?: boolean | number
    total_fees_collected?: boolean | number
    total_liquidity_provided?: boolean | number
    total_reward?: boolean | number
    total_withdrawn?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "juster.user" */
export interface juster_user_stddev_samp_order_by {total_bets_amount?: (order_by | null),total_bets_count?: (order_by | null),total_fees_collected?: (order_by | null),total_liquidity_provided?: (order_by | null),total_reward?: (order_by | null),total_withdrawn?: (order_by | null)}


/** aggregate sum on columns */
export interface juster_user_sum_fieldsRequest{
    total_bets_amount?: boolean | number
    total_bets_count?: boolean | number
    total_fees_collected?: boolean | number
    total_liquidity_provided?: boolean | number
    total_reward?: boolean | number
    total_withdrawn?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "juster.user" */
export interface juster_user_sum_order_by {total_bets_amount?: (order_by | null),total_bets_count?: (order_by | null),total_fees_collected?: (order_by | null),total_liquidity_provided?: (order_by | null),total_reward?: (order_by | null),total_withdrawn?: (order_by | null)}


/** aggregate var_pop on columns */
export interface juster_user_var_pop_fieldsRequest{
    total_bets_amount?: boolean | number
    total_bets_count?: boolean | number
    total_fees_collected?: boolean | number
    total_liquidity_provided?: boolean | number
    total_reward?: boolean | number
    total_withdrawn?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "juster.user" */
export interface juster_user_var_pop_order_by {total_bets_amount?: (order_by | null),total_bets_count?: (order_by | null),total_fees_collected?: (order_by | null),total_liquidity_provided?: (order_by | null),total_reward?: (order_by | null),total_withdrawn?: (order_by | null)}


/** aggregate var_samp on columns */
export interface juster_user_var_samp_fieldsRequest{
    total_bets_amount?: boolean | number
    total_bets_count?: boolean | number
    total_fees_collected?: boolean | number
    total_liquidity_provided?: boolean | number
    total_reward?: boolean | number
    total_withdrawn?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "juster.user" */
export interface juster_user_var_samp_order_by {total_bets_amount?: (order_by | null),total_bets_count?: (order_by | null),total_fees_collected?: (order_by | null),total_liquidity_provided?: (order_by | null),total_reward?: (order_by | null),total_withdrawn?: (order_by | null)}


/** aggregate variance on columns */
export interface juster_user_variance_fieldsRequest{
    total_bets_amount?: boolean | number
    total_bets_count?: boolean | number
    total_fees_collected?: boolean | number
    total_liquidity_provided?: boolean | number
    total_reward?: boolean | number
    total_withdrawn?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "juster.user" */
export interface juster_user_variance_order_by {total_bets_amount?: (order_by | null),total_bets_count?: (order_by | null),total_fees_collected?: (order_by | null),total_liquidity_provided?: (order_by | null),total_reward?: (order_by | null),total_withdrawn?: (order_by | null)}


/** columns and relationships of "juster.withdrawal" */
export interface juster_withdrawalRequest{
    amount?: boolean | number
    /** An object relationship */
    event?: juster_eventRequest
    event_id?: boolean | number
    id?: boolean | number
    /** An object relationship */
    user?: juster_userRequest
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "juster.withdrawal" */
export interface juster_withdrawal_aggregateRequest{
    aggregate?: juster_withdrawal_aggregate_fieldsRequest
    nodes?: juster_withdrawalRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "juster.withdrawal" */
export interface juster_withdrawal_aggregate_fieldsRequest{
    avg?: juster_withdrawal_avg_fieldsRequest
    count?: [{columns?: (juster_withdrawal_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: juster_withdrawal_max_fieldsRequest
    min?: juster_withdrawal_min_fieldsRequest
    stddev?: juster_withdrawal_stddev_fieldsRequest
    stddev_pop?: juster_withdrawal_stddev_pop_fieldsRequest
    stddev_samp?: juster_withdrawal_stddev_samp_fieldsRequest
    sum?: juster_withdrawal_sum_fieldsRequest
    var_pop?: juster_withdrawal_var_pop_fieldsRequest
    var_samp?: juster_withdrawal_var_samp_fieldsRequest
    variance?: juster_withdrawal_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "juster.withdrawal" */
export interface juster_withdrawal_aggregate_order_by {avg?: (juster_withdrawal_avg_order_by | null),count?: (order_by | null),max?: (juster_withdrawal_max_order_by | null),min?: (juster_withdrawal_min_order_by | null),stddev?: (juster_withdrawal_stddev_order_by | null),stddev_pop?: (juster_withdrawal_stddev_pop_order_by | null),stddev_samp?: (juster_withdrawal_stddev_samp_order_by | null),sum?: (juster_withdrawal_sum_order_by | null),var_pop?: (juster_withdrawal_var_pop_order_by | null),var_samp?: (juster_withdrawal_var_samp_order_by | null),variance?: (juster_withdrawal_variance_order_by | null)}


/** aggregate avg on columns */
export interface juster_withdrawal_avg_fieldsRequest{
    amount?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "juster.withdrawal" */
export interface juster_withdrawal_avg_order_by {amount?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null)}


/** Boolean expression to filter rows from the table "juster.withdrawal". All fields are combined with a logical 'AND'. */
export interface juster_withdrawal_bool_exp {_and?: ((juster_withdrawal_bool_exp | null)[] | null),_not?: (juster_withdrawal_bool_exp | null),_or?: ((juster_withdrawal_bool_exp | null)[] | null),amount?: (numeric_comparison_exp | null),event?: (juster_event_bool_exp | null),event_id?: (Int_comparison_exp | null),id?: (Int_comparison_exp | null),user?: (juster_user_bool_exp | null),user_id?: (String_comparison_exp | null)}


/** aggregate max on columns */
export interface juster_withdrawal_max_fieldsRequest{
    amount?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "juster.withdrawal" */
export interface juster_withdrawal_max_order_by {amount?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null),user_id?: (order_by | null)}


/** aggregate min on columns */
export interface juster_withdrawal_min_fieldsRequest{
    amount?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "juster.withdrawal" */
export interface juster_withdrawal_min_order_by {amount?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null),user_id?: (order_by | null)}


/** ordering options when selecting data from "juster.withdrawal" */
export interface juster_withdrawal_order_by {amount?: (order_by | null),event?: (juster_event_order_by | null),event_id?: (order_by | null),id?: (order_by | null),user?: (juster_user_order_by | null),user_id?: (order_by | null)}


/** primary key columns input for table: "juster.withdrawal" */
export interface juster_withdrawal_pk_columns_input {id: Scalars['Int']}


/** aggregate stddev on columns */
export interface juster_withdrawal_stddev_fieldsRequest{
    amount?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "juster.withdrawal" */
export interface juster_withdrawal_stddev_order_by {amount?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface juster_withdrawal_stddev_pop_fieldsRequest{
    amount?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "juster.withdrawal" */
export interface juster_withdrawal_stddev_pop_order_by {amount?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface juster_withdrawal_stddev_samp_fieldsRequest{
    amount?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "juster.withdrawal" */
export interface juster_withdrawal_stddev_samp_order_by {amount?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null)}


/** aggregate sum on columns */
export interface juster_withdrawal_sum_fieldsRequest{
    amount?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "juster.withdrawal" */
export interface juster_withdrawal_sum_order_by {amount?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null)}


/** aggregate var_pop on columns */
export interface juster_withdrawal_var_pop_fieldsRequest{
    amount?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "juster.withdrawal" */
export interface juster_withdrawal_var_pop_order_by {amount?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null)}


/** aggregate var_samp on columns */
export interface juster_withdrawal_var_samp_fieldsRequest{
    amount?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "juster.withdrawal" */
export interface juster_withdrawal_var_samp_order_by {amount?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null)}


/** aggregate variance on columns */
export interface juster_withdrawal_variance_fieldsRequest{
    amount?: boolean | number
    event_id?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "juster.withdrawal" */
export interface juster_withdrawal_variance_order_by {amount?: (order_by | null),event_id?: (order_by | null),id?: (order_by | null)}


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export interface numeric_comparison_exp {_eq?: (Scalars['numeric'] | null),_gt?: (Scalars['numeric'] | null),_gte?: (Scalars['numeric'] | null),_in?: (Scalars['numeric'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['numeric'] | null),_lte?: (Scalars['numeric'] | null),_neq?: (Scalars['numeric'] | null),_nin?: (Scalars['numeric'][] | null)}


/** query root */
export interface query_rootRequest{
    /** fetch data from the table: "juster.bet" */
    juster_bet?: [{
    /** distinct select on columns */
    distinct_on?: (juster_bet_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_bet_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_bet_bool_exp | null)},juster_betRequest] | juster_betRequest
    /** fetch aggregated fields from the table: "juster.bet" */
    juster_bet_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_bet_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_bet_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_bet_bool_exp | null)},juster_bet_aggregateRequest] | juster_bet_aggregateRequest
    /** fetch data from the table: "juster.bet" using primary key columns */
    juster_bet_by_pk?: [{id: Scalars['Int']},juster_betRequest]
    /** fetch data from the table: "juster.currencypair" */
    juster_currencypair?: [{
    /** distinct select on columns */
    distinct_on?: (juster_currencypair_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_currencypair_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_currencypair_bool_exp | null)},juster_currencypairRequest] | juster_currencypairRequest
    /** fetch aggregated fields from the table: "juster.currencypair" */
    juster_currencypair_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_currencypair_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_currencypair_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_currencypair_bool_exp | null)},juster_currencypair_aggregateRequest] | juster_currencypair_aggregateRequest
    /** fetch data from the table: "juster.currencypair" using primary key columns */
    juster_currencypair_by_pk?: [{id: Scalars['Int']},juster_currencypairRequest]
    /** fetch data from the table: "juster.deposit" */
    juster_deposit?: [{
    /** distinct select on columns */
    distinct_on?: (juster_deposit_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_deposit_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_deposit_bool_exp | null)},juster_depositRequest] | juster_depositRequest
    /** fetch aggregated fields from the table: "juster.deposit" */
    juster_deposit_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_deposit_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_deposit_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_deposit_bool_exp | null)},juster_deposit_aggregateRequest] | juster_deposit_aggregateRequest
    /** fetch data from the table: "juster.deposit" using primary key columns */
    juster_deposit_by_pk?: [{id: Scalars['Int']},juster_depositRequest]
    /** fetch data from the table: "juster.dipdup_state" */
    juster_dipdup_state?: [{
    /** distinct select on columns */
    distinct_on?: (juster_dipdup_state_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_dipdup_state_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_dipdup_state_bool_exp | null)},juster_dipdup_stateRequest] | juster_dipdup_stateRequest
    /** fetch aggregated fields from the table: "juster.dipdup_state" */
    juster_dipdup_state_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_dipdup_state_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_dipdup_state_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_dipdup_state_bool_exp | null)},juster_dipdup_state_aggregateRequest] | juster_dipdup_state_aggregateRequest
    /** fetch data from the table: "juster.dipdup_state" using primary key columns */
    juster_dipdup_state_by_pk?: [{id: Scalars['Int']},juster_dipdup_stateRequest]
    /** fetch data from the table: "juster.event" */
    juster_event?: [{
    /** distinct select on columns */
    distinct_on?: (juster_event_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_event_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_event_bool_exp | null)},juster_eventRequest] | juster_eventRequest
    /** fetch aggregated fields from the table: "juster.event" */
    juster_event_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_event_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_event_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_event_bool_exp | null)},juster_event_aggregateRequest] | juster_event_aggregateRequest
    /** fetch data from the table: "juster.event" using primary key columns */
    juster_event_by_pk?: [{id: Scalars['Int']},juster_eventRequest]
    /** fetch data from the table: "juster.position" */
    juster_position?: [{
    /** distinct select on columns */
    distinct_on?: (juster_position_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_position_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_position_bool_exp | null)},juster_positionRequest] | juster_positionRequest
    /** fetch aggregated fields from the table: "juster.position" */
    juster_position_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_position_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_position_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_position_bool_exp | null)},juster_position_aggregateRequest] | juster_position_aggregateRequest
    /** fetch data from the table: "juster.position" using primary key columns */
    juster_position_by_pk?: [{id: Scalars['Int']},juster_positionRequest]
    /** fetch data from the table: "juster.quote" */
    juster_quote?: [{
    /** distinct select on columns */
    distinct_on?: (juster_quote_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_quote_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_quote_bool_exp | null)},juster_quoteRequest] | juster_quoteRequest
    /** fetch aggregated fields from the table: "juster.quote" */
    juster_quote_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_quote_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_quote_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_quote_bool_exp | null)},juster_quote_aggregateRequest] | juster_quote_aggregateRequest
    /** fetch data from the table: "juster.quote" using primary key columns */
    juster_quote_by_pk?: [{id: Scalars['Int']},juster_quoteRequest]
    /** fetch data from the table: "juster.user" */
    juster_user?: [{
    /** distinct select on columns */
    distinct_on?: (juster_user_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_user_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_user_bool_exp | null)},juster_userRequest] | juster_userRequest
    /** fetch aggregated fields from the table: "juster.user" */
    juster_user_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_user_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_user_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_user_bool_exp | null)},juster_user_aggregateRequest] | juster_user_aggregateRequest
    /** fetch data from the table: "juster.user" using primary key columns */
    juster_user_by_pk?: [{address: Scalars['String']},juster_userRequest]
    /** fetch data from the table: "juster.withdrawal" */
    juster_withdrawal?: [{
    /** distinct select on columns */
    distinct_on?: (juster_withdrawal_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_withdrawal_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_withdrawal_bool_exp | null)},juster_withdrawalRequest] | juster_withdrawalRequest
    /** fetch aggregated fields from the table: "juster.withdrawal" */
    juster_withdrawal_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_withdrawal_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_withdrawal_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_withdrawal_bool_exp | null)},juster_withdrawal_aggregateRequest] | juster_withdrawal_aggregateRequest
    /** fetch data from the table: "juster.withdrawal" using primary key columns */
    juster_withdrawal_by_pk?: [{id: Scalars['Int']},juster_withdrawalRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** subscription root */
export interface subscription_rootRequest{
    /** fetch data from the table: "juster.bet" */
    juster_bet?: [{
    /** distinct select on columns */
    distinct_on?: (juster_bet_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_bet_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_bet_bool_exp | null)},juster_betRequest] | juster_betRequest
    /** fetch aggregated fields from the table: "juster.bet" */
    juster_bet_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_bet_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_bet_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_bet_bool_exp | null)},juster_bet_aggregateRequest] | juster_bet_aggregateRequest
    /** fetch data from the table: "juster.bet" using primary key columns */
    juster_bet_by_pk?: [{id: Scalars['Int']},juster_betRequest]
    /** fetch data from the table: "juster.currencypair" */
    juster_currencypair?: [{
    /** distinct select on columns */
    distinct_on?: (juster_currencypair_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_currencypair_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_currencypair_bool_exp | null)},juster_currencypairRequest] | juster_currencypairRequest
    /** fetch aggregated fields from the table: "juster.currencypair" */
    juster_currencypair_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_currencypair_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_currencypair_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_currencypair_bool_exp | null)},juster_currencypair_aggregateRequest] | juster_currencypair_aggregateRequest
    /** fetch data from the table: "juster.currencypair" using primary key columns */
    juster_currencypair_by_pk?: [{id: Scalars['Int']},juster_currencypairRequest]
    /** fetch data from the table: "juster.deposit" */
    juster_deposit?: [{
    /** distinct select on columns */
    distinct_on?: (juster_deposit_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_deposit_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_deposit_bool_exp | null)},juster_depositRequest] | juster_depositRequest
    /** fetch aggregated fields from the table: "juster.deposit" */
    juster_deposit_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_deposit_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_deposit_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_deposit_bool_exp | null)},juster_deposit_aggregateRequest] | juster_deposit_aggregateRequest
    /** fetch data from the table: "juster.deposit" using primary key columns */
    juster_deposit_by_pk?: [{id: Scalars['Int']},juster_depositRequest]
    /** fetch data from the table: "juster.dipdup_state" */
    juster_dipdup_state?: [{
    /** distinct select on columns */
    distinct_on?: (juster_dipdup_state_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_dipdup_state_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_dipdup_state_bool_exp | null)},juster_dipdup_stateRequest] | juster_dipdup_stateRequest
    /** fetch aggregated fields from the table: "juster.dipdup_state" */
    juster_dipdup_state_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_dipdup_state_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_dipdup_state_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_dipdup_state_bool_exp | null)},juster_dipdup_state_aggregateRequest] | juster_dipdup_state_aggregateRequest
    /** fetch data from the table: "juster.dipdup_state" using primary key columns */
    juster_dipdup_state_by_pk?: [{id: Scalars['Int']},juster_dipdup_stateRequest]
    /** fetch data from the table: "juster.event" */
    juster_event?: [{
    /** distinct select on columns */
    distinct_on?: (juster_event_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_event_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_event_bool_exp | null)},juster_eventRequest] | juster_eventRequest
    /** fetch aggregated fields from the table: "juster.event" */
    juster_event_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_event_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_event_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_event_bool_exp | null)},juster_event_aggregateRequest] | juster_event_aggregateRequest
    /** fetch data from the table: "juster.event" using primary key columns */
    juster_event_by_pk?: [{id: Scalars['Int']},juster_eventRequest]
    /** fetch data from the table: "juster.position" */
    juster_position?: [{
    /** distinct select on columns */
    distinct_on?: (juster_position_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_position_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_position_bool_exp | null)},juster_positionRequest] | juster_positionRequest
    /** fetch aggregated fields from the table: "juster.position" */
    juster_position_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_position_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_position_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_position_bool_exp | null)},juster_position_aggregateRequest] | juster_position_aggregateRequest
    /** fetch data from the table: "juster.position" using primary key columns */
    juster_position_by_pk?: [{id: Scalars['Int']},juster_positionRequest]
    /** fetch data from the table: "juster.quote" */
    juster_quote?: [{
    /** distinct select on columns */
    distinct_on?: (juster_quote_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_quote_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_quote_bool_exp | null)},juster_quoteRequest] | juster_quoteRequest
    /** fetch aggregated fields from the table: "juster.quote" */
    juster_quote_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_quote_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_quote_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_quote_bool_exp | null)},juster_quote_aggregateRequest] | juster_quote_aggregateRequest
    /** fetch data from the table: "juster.quote" using primary key columns */
    juster_quote_by_pk?: [{id: Scalars['Int']},juster_quoteRequest]
    /** fetch data from the table: "juster.user" */
    juster_user?: [{
    /** distinct select on columns */
    distinct_on?: (juster_user_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_user_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_user_bool_exp | null)},juster_userRequest] | juster_userRequest
    /** fetch aggregated fields from the table: "juster.user" */
    juster_user_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_user_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_user_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_user_bool_exp | null)},juster_user_aggregateRequest] | juster_user_aggregateRequest
    /** fetch data from the table: "juster.user" using primary key columns */
    juster_user_by_pk?: [{address: Scalars['String']},juster_userRequest]
    /** fetch data from the table: "juster.withdrawal" */
    juster_withdrawal?: [{
    /** distinct select on columns */
    distinct_on?: (juster_withdrawal_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_withdrawal_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_withdrawal_bool_exp | null)},juster_withdrawalRequest] | juster_withdrawalRequest
    /** fetch aggregated fields from the table: "juster.withdrawal" */
    juster_withdrawal_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (juster_withdrawal_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (juster_withdrawal_order_by[] | null),
    /** filter the rows returned */
    where?: (juster_withdrawal_bool_exp | null)},juster_withdrawal_aggregateRequest] | juster_withdrawal_aggregateRequest
    /** fetch data from the table: "juster.withdrawal" using primary key columns */
    juster_withdrawal_by_pk?: [{id: Scalars['Int']},juster_withdrawalRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {_eq?: (Scalars['timestamptz'] | null),_gt?: (Scalars['timestamptz'] | null),_gte?: (Scalars['timestamptz'] | null),_in?: (Scalars['timestamptz'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['timestamptz'] | null),_lte?: (Scalars['timestamptz'] | null),_neq?: (Scalars['timestamptz'] | null),_nin?: (Scalars['timestamptz'][] | null)}

export type QueryRequest = query_rootRequest
export type SubscriptionRequest = subscription_rootRequest


const juster_bet_possibleTypes = ['juster_bet']
export const isjuster_bet = (obj?: { __typename?: any } | null): obj is juster_bet => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_bet"')
  return juster_bet_possibleTypes.includes(obj.__typename)
}



const juster_bet_aggregate_possibleTypes = ['juster_bet_aggregate']
export const isjuster_bet_aggregate = (obj?: { __typename?: any } | null): obj is juster_bet_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_bet_aggregate"')
  return juster_bet_aggregate_possibleTypes.includes(obj.__typename)
}



const juster_bet_aggregate_fields_possibleTypes = ['juster_bet_aggregate_fields']
export const isjuster_bet_aggregate_fields = (obj?: { __typename?: any } | null): obj is juster_bet_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_bet_aggregate_fields"')
  return juster_bet_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const juster_bet_avg_fields_possibleTypes = ['juster_bet_avg_fields']
export const isjuster_bet_avg_fields = (obj?: { __typename?: any } | null): obj is juster_bet_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_bet_avg_fields"')
  return juster_bet_avg_fields_possibleTypes.includes(obj.__typename)
}



const juster_bet_max_fields_possibleTypes = ['juster_bet_max_fields']
export const isjuster_bet_max_fields = (obj?: { __typename?: any } | null): obj is juster_bet_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_bet_max_fields"')
  return juster_bet_max_fields_possibleTypes.includes(obj.__typename)
}



const juster_bet_min_fields_possibleTypes = ['juster_bet_min_fields']
export const isjuster_bet_min_fields = (obj?: { __typename?: any } | null): obj is juster_bet_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_bet_min_fields"')
  return juster_bet_min_fields_possibleTypes.includes(obj.__typename)
}



const juster_bet_stddev_fields_possibleTypes = ['juster_bet_stddev_fields']
export const isjuster_bet_stddev_fields = (obj?: { __typename?: any } | null): obj is juster_bet_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_bet_stddev_fields"')
  return juster_bet_stddev_fields_possibleTypes.includes(obj.__typename)
}



const juster_bet_stddev_pop_fields_possibleTypes = ['juster_bet_stddev_pop_fields']
export const isjuster_bet_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is juster_bet_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_bet_stddev_pop_fields"')
  return juster_bet_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const juster_bet_stddev_samp_fields_possibleTypes = ['juster_bet_stddev_samp_fields']
export const isjuster_bet_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is juster_bet_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_bet_stddev_samp_fields"')
  return juster_bet_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const juster_bet_sum_fields_possibleTypes = ['juster_bet_sum_fields']
export const isjuster_bet_sum_fields = (obj?: { __typename?: any } | null): obj is juster_bet_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_bet_sum_fields"')
  return juster_bet_sum_fields_possibleTypes.includes(obj.__typename)
}



const juster_bet_var_pop_fields_possibleTypes = ['juster_bet_var_pop_fields']
export const isjuster_bet_var_pop_fields = (obj?: { __typename?: any } | null): obj is juster_bet_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_bet_var_pop_fields"')
  return juster_bet_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const juster_bet_var_samp_fields_possibleTypes = ['juster_bet_var_samp_fields']
export const isjuster_bet_var_samp_fields = (obj?: { __typename?: any } | null): obj is juster_bet_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_bet_var_samp_fields"')
  return juster_bet_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const juster_bet_variance_fields_possibleTypes = ['juster_bet_variance_fields']
export const isjuster_bet_variance_fields = (obj?: { __typename?: any } | null): obj is juster_bet_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_bet_variance_fields"')
  return juster_bet_variance_fields_possibleTypes.includes(obj.__typename)
}



const juster_currencypair_possibleTypes = ['juster_currencypair']
export const isjuster_currencypair = (obj?: { __typename?: any } | null): obj is juster_currencypair => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_currencypair"')
  return juster_currencypair_possibleTypes.includes(obj.__typename)
}



const juster_currencypair_aggregate_possibleTypes = ['juster_currencypair_aggregate']
export const isjuster_currencypair_aggregate = (obj?: { __typename?: any } | null): obj is juster_currencypair_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_currencypair_aggregate"')
  return juster_currencypair_aggregate_possibleTypes.includes(obj.__typename)
}



const juster_currencypair_aggregate_fields_possibleTypes = ['juster_currencypair_aggregate_fields']
export const isjuster_currencypair_aggregate_fields = (obj?: { __typename?: any } | null): obj is juster_currencypair_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_currencypair_aggregate_fields"')
  return juster_currencypair_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const juster_currencypair_avg_fields_possibleTypes = ['juster_currencypair_avg_fields']
export const isjuster_currencypair_avg_fields = (obj?: { __typename?: any } | null): obj is juster_currencypair_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_currencypair_avg_fields"')
  return juster_currencypair_avg_fields_possibleTypes.includes(obj.__typename)
}



const juster_currencypair_max_fields_possibleTypes = ['juster_currencypair_max_fields']
export const isjuster_currencypair_max_fields = (obj?: { __typename?: any } | null): obj is juster_currencypair_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_currencypair_max_fields"')
  return juster_currencypair_max_fields_possibleTypes.includes(obj.__typename)
}



const juster_currencypair_min_fields_possibleTypes = ['juster_currencypair_min_fields']
export const isjuster_currencypair_min_fields = (obj?: { __typename?: any } | null): obj is juster_currencypair_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_currencypair_min_fields"')
  return juster_currencypair_min_fields_possibleTypes.includes(obj.__typename)
}



const juster_currencypair_stddev_fields_possibleTypes = ['juster_currencypair_stddev_fields']
export const isjuster_currencypair_stddev_fields = (obj?: { __typename?: any } | null): obj is juster_currencypair_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_currencypair_stddev_fields"')
  return juster_currencypair_stddev_fields_possibleTypes.includes(obj.__typename)
}



const juster_currencypair_stddev_pop_fields_possibleTypes = ['juster_currencypair_stddev_pop_fields']
export const isjuster_currencypair_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is juster_currencypair_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_currencypair_stddev_pop_fields"')
  return juster_currencypair_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const juster_currencypair_stddev_samp_fields_possibleTypes = ['juster_currencypair_stddev_samp_fields']
export const isjuster_currencypair_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is juster_currencypair_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_currencypair_stddev_samp_fields"')
  return juster_currencypair_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const juster_currencypair_sum_fields_possibleTypes = ['juster_currencypair_sum_fields']
export const isjuster_currencypair_sum_fields = (obj?: { __typename?: any } | null): obj is juster_currencypair_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_currencypair_sum_fields"')
  return juster_currencypair_sum_fields_possibleTypes.includes(obj.__typename)
}



const juster_currencypair_var_pop_fields_possibleTypes = ['juster_currencypair_var_pop_fields']
export const isjuster_currencypair_var_pop_fields = (obj?: { __typename?: any } | null): obj is juster_currencypair_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_currencypair_var_pop_fields"')
  return juster_currencypair_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const juster_currencypair_var_samp_fields_possibleTypes = ['juster_currencypair_var_samp_fields']
export const isjuster_currencypair_var_samp_fields = (obj?: { __typename?: any } | null): obj is juster_currencypair_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_currencypair_var_samp_fields"')
  return juster_currencypair_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const juster_currencypair_variance_fields_possibleTypes = ['juster_currencypair_variance_fields']
export const isjuster_currencypair_variance_fields = (obj?: { __typename?: any } | null): obj is juster_currencypair_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_currencypair_variance_fields"')
  return juster_currencypair_variance_fields_possibleTypes.includes(obj.__typename)
}



const juster_deposit_possibleTypes = ['juster_deposit']
export const isjuster_deposit = (obj?: { __typename?: any } | null): obj is juster_deposit => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_deposit"')
  return juster_deposit_possibleTypes.includes(obj.__typename)
}



const juster_deposit_aggregate_possibleTypes = ['juster_deposit_aggregate']
export const isjuster_deposit_aggregate = (obj?: { __typename?: any } | null): obj is juster_deposit_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_deposit_aggregate"')
  return juster_deposit_aggregate_possibleTypes.includes(obj.__typename)
}



const juster_deposit_aggregate_fields_possibleTypes = ['juster_deposit_aggregate_fields']
export const isjuster_deposit_aggregate_fields = (obj?: { __typename?: any } | null): obj is juster_deposit_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_deposit_aggregate_fields"')
  return juster_deposit_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const juster_deposit_avg_fields_possibleTypes = ['juster_deposit_avg_fields']
export const isjuster_deposit_avg_fields = (obj?: { __typename?: any } | null): obj is juster_deposit_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_deposit_avg_fields"')
  return juster_deposit_avg_fields_possibleTypes.includes(obj.__typename)
}



const juster_deposit_max_fields_possibleTypes = ['juster_deposit_max_fields']
export const isjuster_deposit_max_fields = (obj?: { __typename?: any } | null): obj is juster_deposit_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_deposit_max_fields"')
  return juster_deposit_max_fields_possibleTypes.includes(obj.__typename)
}



const juster_deposit_min_fields_possibleTypes = ['juster_deposit_min_fields']
export const isjuster_deposit_min_fields = (obj?: { __typename?: any } | null): obj is juster_deposit_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_deposit_min_fields"')
  return juster_deposit_min_fields_possibleTypes.includes(obj.__typename)
}



const juster_deposit_stddev_fields_possibleTypes = ['juster_deposit_stddev_fields']
export const isjuster_deposit_stddev_fields = (obj?: { __typename?: any } | null): obj is juster_deposit_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_deposit_stddev_fields"')
  return juster_deposit_stddev_fields_possibleTypes.includes(obj.__typename)
}



const juster_deposit_stddev_pop_fields_possibleTypes = ['juster_deposit_stddev_pop_fields']
export const isjuster_deposit_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is juster_deposit_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_deposit_stddev_pop_fields"')
  return juster_deposit_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const juster_deposit_stddev_samp_fields_possibleTypes = ['juster_deposit_stddev_samp_fields']
export const isjuster_deposit_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is juster_deposit_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_deposit_stddev_samp_fields"')
  return juster_deposit_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const juster_deposit_sum_fields_possibleTypes = ['juster_deposit_sum_fields']
export const isjuster_deposit_sum_fields = (obj?: { __typename?: any } | null): obj is juster_deposit_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_deposit_sum_fields"')
  return juster_deposit_sum_fields_possibleTypes.includes(obj.__typename)
}



const juster_deposit_var_pop_fields_possibleTypes = ['juster_deposit_var_pop_fields']
export const isjuster_deposit_var_pop_fields = (obj?: { __typename?: any } | null): obj is juster_deposit_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_deposit_var_pop_fields"')
  return juster_deposit_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const juster_deposit_var_samp_fields_possibleTypes = ['juster_deposit_var_samp_fields']
export const isjuster_deposit_var_samp_fields = (obj?: { __typename?: any } | null): obj is juster_deposit_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_deposit_var_samp_fields"')
  return juster_deposit_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const juster_deposit_variance_fields_possibleTypes = ['juster_deposit_variance_fields']
export const isjuster_deposit_variance_fields = (obj?: { __typename?: any } | null): obj is juster_deposit_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_deposit_variance_fields"')
  return juster_deposit_variance_fields_possibleTypes.includes(obj.__typename)
}



const juster_dipdup_state_possibleTypes = ['juster_dipdup_state']
export const isjuster_dipdup_state = (obj?: { __typename?: any } | null): obj is juster_dipdup_state => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_dipdup_state"')
  return juster_dipdup_state_possibleTypes.includes(obj.__typename)
}



const juster_dipdup_state_aggregate_possibleTypes = ['juster_dipdup_state_aggregate']
export const isjuster_dipdup_state_aggregate = (obj?: { __typename?: any } | null): obj is juster_dipdup_state_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_dipdup_state_aggregate"')
  return juster_dipdup_state_aggregate_possibleTypes.includes(obj.__typename)
}



const juster_dipdup_state_aggregate_fields_possibleTypes = ['juster_dipdup_state_aggregate_fields']
export const isjuster_dipdup_state_aggregate_fields = (obj?: { __typename?: any } | null): obj is juster_dipdup_state_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_dipdup_state_aggregate_fields"')
  return juster_dipdup_state_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const juster_dipdup_state_avg_fields_possibleTypes = ['juster_dipdup_state_avg_fields']
export const isjuster_dipdup_state_avg_fields = (obj?: { __typename?: any } | null): obj is juster_dipdup_state_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_dipdup_state_avg_fields"')
  return juster_dipdup_state_avg_fields_possibleTypes.includes(obj.__typename)
}



const juster_dipdup_state_max_fields_possibleTypes = ['juster_dipdup_state_max_fields']
export const isjuster_dipdup_state_max_fields = (obj?: { __typename?: any } | null): obj is juster_dipdup_state_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_dipdup_state_max_fields"')
  return juster_dipdup_state_max_fields_possibleTypes.includes(obj.__typename)
}



const juster_dipdup_state_min_fields_possibleTypes = ['juster_dipdup_state_min_fields']
export const isjuster_dipdup_state_min_fields = (obj?: { __typename?: any } | null): obj is juster_dipdup_state_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_dipdup_state_min_fields"')
  return juster_dipdup_state_min_fields_possibleTypes.includes(obj.__typename)
}



const juster_dipdup_state_stddev_fields_possibleTypes = ['juster_dipdup_state_stddev_fields']
export const isjuster_dipdup_state_stddev_fields = (obj?: { __typename?: any } | null): obj is juster_dipdup_state_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_dipdup_state_stddev_fields"')
  return juster_dipdup_state_stddev_fields_possibleTypes.includes(obj.__typename)
}



const juster_dipdup_state_stddev_pop_fields_possibleTypes = ['juster_dipdup_state_stddev_pop_fields']
export const isjuster_dipdup_state_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is juster_dipdup_state_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_dipdup_state_stddev_pop_fields"')
  return juster_dipdup_state_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const juster_dipdup_state_stddev_samp_fields_possibleTypes = ['juster_dipdup_state_stddev_samp_fields']
export const isjuster_dipdup_state_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is juster_dipdup_state_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_dipdup_state_stddev_samp_fields"')
  return juster_dipdup_state_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const juster_dipdup_state_sum_fields_possibleTypes = ['juster_dipdup_state_sum_fields']
export const isjuster_dipdup_state_sum_fields = (obj?: { __typename?: any } | null): obj is juster_dipdup_state_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_dipdup_state_sum_fields"')
  return juster_dipdup_state_sum_fields_possibleTypes.includes(obj.__typename)
}



const juster_dipdup_state_var_pop_fields_possibleTypes = ['juster_dipdup_state_var_pop_fields']
export const isjuster_dipdup_state_var_pop_fields = (obj?: { __typename?: any } | null): obj is juster_dipdup_state_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_dipdup_state_var_pop_fields"')
  return juster_dipdup_state_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const juster_dipdup_state_var_samp_fields_possibleTypes = ['juster_dipdup_state_var_samp_fields']
export const isjuster_dipdup_state_var_samp_fields = (obj?: { __typename?: any } | null): obj is juster_dipdup_state_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_dipdup_state_var_samp_fields"')
  return juster_dipdup_state_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const juster_dipdup_state_variance_fields_possibleTypes = ['juster_dipdup_state_variance_fields']
export const isjuster_dipdup_state_variance_fields = (obj?: { __typename?: any } | null): obj is juster_dipdup_state_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_dipdup_state_variance_fields"')
  return juster_dipdup_state_variance_fields_possibleTypes.includes(obj.__typename)
}



const juster_event_possibleTypes = ['juster_event']
export const isjuster_event = (obj?: { __typename?: any } | null): obj is juster_event => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_event"')
  return juster_event_possibleTypes.includes(obj.__typename)
}



const juster_event_aggregate_possibleTypes = ['juster_event_aggregate']
export const isjuster_event_aggregate = (obj?: { __typename?: any } | null): obj is juster_event_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_event_aggregate"')
  return juster_event_aggregate_possibleTypes.includes(obj.__typename)
}



const juster_event_aggregate_fields_possibleTypes = ['juster_event_aggregate_fields']
export const isjuster_event_aggregate_fields = (obj?: { __typename?: any } | null): obj is juster_event_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_event_aggregate_fields"')
  return juster_event_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const juster_event_avg_fields_possibleTypes = ['juster_event_avg_fields']
export const isjuster_event_avg_fields = (obj?: { __typename?: any } | null): obj is juster_event_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_event_avg_fields"')
  return juster_event_avg_fields_possibleTypes.includes(obj.__typename)
}



const juster_event_max_fields_possibleTypes = ['juster_event_max_fields']
export const isjuster_event_max_fields = (obj?: { __typename?: any } | null): obj is juster_event_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_event_max_fields"')
  return juster_event_max_fields_possibleTypes.includes(obj.__typename)
}



const juster_event_min_fields_possibleTypes = ['juster_event_min_fields']
export const isjuster_event_min_fields = (obj?: { __typename?: any } | null): obj is juster_event_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_event_min_fields"')
  return juster_event_min_fields_possibleTypes.includes(obj.__typename)
}



const juster_event_stddev_fields_possibleTypes = ['juster_event_stddev_fields']
export const isjuster_event_stddev_fields = (obj?: { __typename?: any } | null): obj is juster_event_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_event_stddev_fields"')
  return juster_event_stddev_fields_possibleTypes.includes(obj.__typename)
}



const juster_event_stddev_pop_fields_possibleTypes = ['juster_event_stddev_pop_fields']
export const isjuster_event_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is juster_event_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_event_stddev_pop_fields"')
  return juster_event_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const juster_event_stddev_samp_fields_possibleTypes = ['juster_event_stddev_samp_fields']
export const isjuster_event_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is juster_event_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_event_stddev_samp_fields"')
  return juster_event_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const juster_event_sum_fields_possibleTypes = ['juster_event_sum_fields']
export const isjuster_event_sum_fields = (obj?: { __typename?: any } | null): obj is juster_event_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_event_sum_fields"')
  return juster_event_sum_fields_possibleTypes.includes(obj.__typename)
}



const juster_event_var_pop_fields_possibleTypes = ['juster_event_var_pop_fields']
export const isjuster_event_var_pop_fields = (obj?: { __typename?: any } | null): obj is juster_event_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_event_var_pop_fields"')
  return juster_event_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const juster_event_var_samp_fields_possibleTypes = ['juster_event_var_samp_fields']
export const isjuster_event_var_samp_fields = (obj?: { __typename?: any } | null): obj is juster_event_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_event_var_samp_fields"')
  return juster_event_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const juster_event_variance_fields_possibleTypes = ['juster_event_variance_fields']
export const isjuster_event_variance_fields = (obj?: { __typename?: any } | null): obj is juster_event_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_event_variance_fields"')
  return juster_event_variance_fields_possibleTypes.includes(obj.__typename)
}



const juster_position_possibleTypes = ['juster_position']
export const isjuster_position = (obj?: { __typename?: any } | null): obj is juster_position => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_position"')
  return juster_position_possibleTypes.includes(obj.__typename)
}



const juster_position_aggregate_possibleTypes = ['juster_position_aggregate']
export const isjuster_position_aggregate = (obj?: { __typename?: any } | null): obj is juster_position_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_position_aggregate"')
  return juster_position_aggregate_possibleTypes.includes(obj.__typename)
}



const juster_position_aggregate_fields_possibleTypes = ['juster_position_aggregate_fields']
export const isjuster_position_aggregate_fields = (obj?: { __typename?: any } | null): obj is juster_position_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_position_aggregate_fields"')
  return juster_position_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const juster_position_avg_fields_possibleTypes = ['juster_position_avg_fields']
export const isjuster_position_avg_fields = (obj?: { __typename?: any } | null): obj is juster_position_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_position_avg_fields"')
  return juster_position_avg_fields_possibleTypes.includes(obj.__typename)
}



const juster_position_max_fields_possibleTypes = ['juster_position_max_fields']
export const isjuster_position_max_fields = (obj?: { __typename?: any } | null): obj is juster_position_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_position_max_fields"')
  return juster_position_max_fields_possibleTypes.includes(obj.__typename)
}



const juster_position_min_fields_possibleTypes = ['juster_position_min_fields']
export const isjuster_position_min_fields = (obj?: { __typename?: any } | null): obj is juster_position_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_position_min_fields"')
  return juster_position_min_fields_possibleTypes.includes(obj.__typename)
}



const juster_position_stddev_fields_possibleTypes = ['juster_position_stddev_fields']
export const isjuster_position_stddev_fields = (obj?: { __typename?: any } | null): obj is juster_position_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_position_stddev_fields"')
  return juster_position_stddev_fields_possibleTypes.includes(obj.__typename)
}



const juster_position_stddev_pop_fields_possibleTypes = ['juster_position_stddev_pop_fields']
export const isjuster_position_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is juster_position_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_position_stddev_pop_fields"')
  return juster_position_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const juster_position_stddev_samp_fields_possibleTypes = ['juster_position_stddev_samp_fields']
export const isjuster_position_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is juster_position_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_position_stddev_samp_fields"')
  return juster_position_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const juster_position_sum_fields_possibleTypes = ['juster_position_sum_fields']
export const isjuster_position_sum_fields = (obj?: { __typename?: any } | null): obj is juster_position_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_position_sum_fields"')
  return juster_position_sum_fields_possibleTypes.includes(obj.__typename)
}



const juster_position_var_pop_fields_possibleTypes = ['juster_position_var_pop_fields']
export const isjuster_position_var_pop_fields = (obj?: { __typename?: any } | null): obj is juster_position_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_position_var_pop_fields"')
  return juster_position_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const juster_position_var_samp_fields_possibleTypes = ['juster_position_var_samp_fields']
export const isjuster_position_var_samp_fields = (obj?: { __typename?: any } | null): obj is juster_position_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_position_var_samp_fields"')
  return juster_position_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const juster_position_variance_fields_possibleTypes = ['juster_position_variance_fields']
export const isjuster_position_variance_fields = (obj?: { __typename?: any } | null): obj is juster_position_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_position_variance_fields"')
  return juster_position_variance_fields_possibleTypes.includes(obj.__typename)
}



const juster_quote_possibleTypes = ['juster_quote']
export const isjuster_quote = (obj?: { __typename?: any } | null): obj is juster_quote => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_quote"')
  return juster_quote_possibleTypes.includes(obj.__typename)
}



const juster_quote_aggregate_possibleTypes = ['juster_quote_aggregate']
export const isjuster_quote_aggregate = (obj?: { __typename?: any } | null): obj is juster_quote_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_quote_aggregate"')
  return juster_quote_aggregate_possibleTypes.includes(obj.__typename)
}



const juster_quote_aggregate_fields_possibleTypes = ['juster_quote_aggregate_fields']
export const isjuster_quote_aggregate_fields = (obj?: { __typename?: any } | null): obj is juster_quote_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_quote_aggregate_fields"')
  return juster_quote_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const juster_quote_avg_fields_possibleTypes = ['juster_quote_avg_fields']
export const isjuster_quote_avg_fields = (obj?: { __typename?: any } | null): obj is juster_quote_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_quote_avg_fields"')
  return juster_quote_avg_fields_possibleTypes.includes(obj.__typename)
}



const juster_quote_max_fields_possibleTypes = ['juster_quote_max_fields']
export const isjuster_quote_max_fields = (obj?: { __typename?: any } | null): obj is juster_quote_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_quote_max_fields"')
  return juster_quote_max_fields_possibleTypes.includes(obj.__typename)
}



const juster_quote_min_fields_possibleTypes = ['juster_quote_min_fields']
export const isjuster_quote_min_fields = (obj?: { __typename?: any } | null): obj is juster_quote_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_quote_min_fields"')
  return juster_quote_min_fields_possibleTypes.includes(obj.__typename)
}



const juster_quote_stddev_fields_possibleTypes = ['juster_quote_stddev_fields']
export const isjuster_quote_stddev_fields = (obj?: { __typename?: any } | null): obj is juster_quote_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_quote_stddev_fields"')
  return juster_quote_stddev_fields_possibleTypes.includes(obj.__typename)
}



const juster_quote_stddev_pop_fields_possibleTypes = ['juster_quote_stddev_pop_fields']
export const isjuster_quote_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is juster_quote_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_quote_stddev_pop_fields"')
  return juster_quote_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const juster_quote_stddev_samp_fields_possibleTypes = ['juster_quote_stddev_samp_fields']
export const isjuster_quote_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is juster_quote_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_quote_stddev_samp_fields"')
  return juster_quote_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const juster_quote_sum_fields_possibleTypes = ['juster_quote_sum_fields']
export const isjuster_quote_sum_fields = (obj?: { __typename?: any } | null): obj is juster_quote_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_quote_sum_fields"')
  return juster_quote_sum_fields_possibleTypes.includes(obj.__typename)
}



const juster_quote_var_pop_fields_possibleTypes = ['juster_quote_var_pop_fields']
export const isjuster_quote_var_pop_fields = (obj?: { __typename?: any } | null): obj is juster_quote_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_quote_var_pop_fields"')
  return juster_quote_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const juster_quote_var_samp_fields_possibleTypes = ['juster_quote_var_samp_fields']
export const isjuster_quote_var_samp_fields = (obj?: { __typename?: any } | null): obj is juster_quote_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_quote_var_samp_fields"')
  return juster_quote_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const juster_quote_variance_fields_possibleTypes = ['juster_quote_variance_fields']
export const isjuster_quote_variance_fields = (obj?: { __typename?: any } | null): obj is juster_quote_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_quote_variance_fields"')
  return juster_quote_variance_fields_possibleTypes.includes(obj.__typename)
}



const juster_user_possibleTypes = ['juster_user']
export const isjuster_user = (obj?: { __typename?: any } | null): obj is juster_user => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_user"')
  return juster_user_possibleTypes.includes(obj.__typename)
}



const juster_user_aggregate_possibleTypes = ['juster_user_aggregate']
export const isjuster_user_aggregate = (obj?: { __typename?: any } | null): obj is juster_user_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_user_aggregate"')
  return juster_user_aggregate_possibleTypes.includes(obj.__typename)
}



const juster_user_aggregate_fields_possibleTypes = ['juster_user_aggregate_fields']
export const isjuster_user_aggregate_fields = (obj?: { __typename?: any } | null): obj is juster_user_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_user_aggregate_fields"')
  return juster_user_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const juster_user_avg_fields_possibleTypes = ['juster_user_avg_fields']
export const isjuster_user_avg_fields = (obj?: { __typename?: any } | null): obj is juster_user_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_user_avg_fields"')
  return juster_user_avg_fields_possibleTypes.includes(obj.__typename)
}



const juster_user_max_fields_possibleTypes = ['juster_user_max_fields']
export const isjuster_user_max_fields = (obj?: { __typename?: any } | null): obj is juster_user_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_user_max_fields"')
  return juster_user_max_fields_possibleTypes.includes(obj.__typename)
}



const juster_user_min_fields_possibleTypes = ['juster_user_min_fields']
export const isjuster_user_min_fields = (obj?: { __typename?: any } | null): obj is juster_user_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_user_min_fields"')
  return juster_user_min_fields_possibleTypes.includes(obj.__typename)
}



const juster_user_stddev_fields_possibleTypes = ['juster_user_stddev_fields']
export const isjuster_user_stddev_fields = (obj?: { __typename?: any } | null): obj is juster_user_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_user_stddev_fields"')
  return juster_user_stddev_fields_possibleTypes.includes(obj.__typename)
}



const juster_user_stddev_pop_fields_possibleTypes = ['juster_user_stddev_pop_fields']
export const isjuster_user_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is juster_user_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_user_stddev_pop_fields"')
  return juster_user_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const juster_user_stddev_samp_fields_possibleTypes = ['juster_user_stddev_samp_fields']
export const isjuster_user_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is juster_user_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_user_stddev_samp_fields"')
  return juster_user_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const juster_user_sum_fields_possibleTypes = ['juster_user_sum_fields']
export const isjuster_user_sum_fields = (obj?: { __typename?: any } | null): obj is juster_user_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_user_sum_fields"')
  return juster_user_sum_fields_possibleTypes.includes(obj.__typename)
}



const juster_user_var_pop_fields_possibleTypes = ['juster_user_var_pop_fields']
export const isjuster_user_var_pop_fields = (obj?: { __typename?: any } | null): obj is juster_user_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_user_var_pop_fields"')
  return juster_user_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const juster_user_var_samp_fields_possibleTypes = ['juster_user_var_samp_fields']
export const isjuster_user_var_samp_fields = (obj?: { __typename?: any } | null): obj is juster_user_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_user_var_samp_fields"')
  return juster_user_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const juster_user_variance_fields_possibleTypes = ['juster_user_variance_fields']
export const isjuster_user_variance_fields = (obj?: { __typename?: any } | null): obj is juster_user_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_user_variance_fields"')
  return juster_user_variance_fields_possibleTypes.includes(obj.__typename)
}



const juster_withdrawal_possibleTypes = ['juster_withdrawal']
export const isjuster_withdrawal = (obj?: { __typename?: any } | null): obj is juster_withdrawal => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_withdrawal"')
  return juster_withdrawal_possibleTypes.includes(obj.__typename)
}



const juster_withdrawal_aggregate_possibleTypes = ['juster_withdrawal_aggregate']
export const isjuster_withdrawal_aggregate = (obj?: { __typename?: any } | null): obj is juster_withdrawal_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_withdrawal_aggregate"')
  return juster_withdrawal_aggregate_possibleTypes.includes(obj.__typename)
}



const juster_withdrawal_aggregate_fields_possibleTypes = ['juster_withdrawal_aggregate_fields']
export const isjuster_withdrawal_aggregate_fields = (obj?: { __typename?: any } | null): obj is juster_withdrawal_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_withdrawal_aggregate_fields"')
  return juster_withdrawal_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const juster_withdrawal_avg_fields_possibleTypes = ['juster_withdrawal_avg_fields']
export const isjuster_withdrawal_avg_fields = (obj?: { __typename?: any } | null): obj is juster_withdrawal_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_withdrawal_avg_fields"')
  return juster_withdrawal_avg_fields_possibleTypes.includes(obj.__typename)
}



const juster_withdrawal_max_fields_possibleTypes = ['juster_withdrawal_max_fields']
export const isjuster_withdrawal_max_fields = (obj?: { __typename?: any } | null): obj is juster_withdrawal_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_withdrawal_max_fields"')
  return juster_withdrawal_max_fields_possibleTypes.includes(obj.__typename)
}



const juster_withdrawal_min_fields_possibleTypes = ['juster_withdrawal_min_fields']
export const isjuster_withdrawal_min_fields = (obj?: { __typename?: any } | null): obj is juster_withdrawal_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_withdrawal_min_fields"')
  return juster_withdrawal_min_fields_possibleTypes.includes(obj.__typename)
}



const juster_withdrawal_stddev_fields_possibleTypes = ['juster_withdrawal_stddev_fields']
export const isjuster_withdrawal_stddev_fields = (obj?: { __typename?: any } | null): obj is juster_withdrawal_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_withdrawal_stddev_fields"')
  return juster_withdrawal_stddev_fields_possibleTypes.includes(obj.__typename)
}



const juster_withdrawal_stddev_pop_fields_possibleTypes = ['juster_withdrawal_stddev_pop_fields']
export const isjuster_withdrawal_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is juster_withdrawal_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_withdrawal_stddev_pop_fields"')
  return juster_withdrawal_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const juster_withdrawal_stddev_samp_fields_possibleTypes = ['juster_withdrawal_stddev_samp_fields']
export const isjuster_withdrawal_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is juster_withdrawal_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_withdrawal_stddev_samp_fields"')
  return juster_withdrawal_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const juster_withdrawal_sum_fields_possibleTypes = ['juster_withdrawal_sum_fields']
export const isjuster_withdrawal_sum_fields = (obj?: { __typename?: any } | null): obj is juster_withdrawal_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_withdrawal_sum_fields"')
  return juster_withdrawal_sum_fields_possibleTypes.includes(obj.__typename)
}



const juster_withdrawal_var_pop_fields_possibleTypes = ['juster_withdrawal_var_pop_fields']
export const isjuster_withdrawal_var_pop_fields = (obj?: { __typename?: any } | null): obj is juster_withdrawal_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_withdrawal_var_pop_fields"')
  return juster_withdrawal_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const juster_withdrawal_var_samp_fields_possibleTypes = ['juster_withdrawal_var_samp_fields']
export const isjuster_withdrawal_var_samp_fields = (obj?: { __typename?: any } | null): obj is juster_withdrawal_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_withdrawal_var_samp_fields"')
  return juster_withdrawal_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const juster_withdrawal_variance_fields_possibleTypes = ['juster_withdrawal_variance_fields']
export const isjuster_withdrawal_variance_fields = (obj?: { __typename?: any } | null): obj is juster_withdrawal_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isjuster_withdrawal_variance_fields"')
  return juster_withdrawal_variance_fields_possibleTypes.includes(obj.__typename)
}



const query_root_possibleTypes = ['query_root']
export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"')
  return query_root_possibleTypes.includes(obj.__typename)
}



const subscription_root_possibleTypes = ['subscription_root']
export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"')
  return subscription_root_possibleTypes.includes(obj.__typename)
}



/** columns and relationships of "juster.bet" */
export interface juster_betPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    
/** An object relationship */
event: (juster_eventPromiseChain & {get: <R extends juster_eventRequest>(request: R, defaultValue?: FieldsSelection<juster_event, R>) => Promise<FieldsSelection<juster_event, R>>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    reward: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    
/** ABOVE_EQ: ABOVE_EQ\nBELOW: BELOW */
side: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An object relationship */
user: (juster_userPromiseChain & {get: <R extends juster_userRequest>(request: R, defaultValue?: FieldsSelection<juster_user, R>) => Promise<FieldsSelection<juster_user, R>>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "juster.bet" */
export interface juster_betObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    
/** An object relationship */
event: (juster_eventObservableChain & {get: <R extends juster_eventRequest>(request: R, defaultValue?: FieldsSelection<juster_event, R>) => Observable<FieldsSelection<juster_event, R>>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    reward: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    
/** ABOVE_EQ: ABOVE_EQ\nBELOW: BELOW */
side: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An object relationship */
user: (juster_userObservableChain & {get: <R extends juster_userRequest>(request: R, defaultValue?: FieldsSelection<juster_user, R>) => Observable<FieldsSelection<juster_user, R>>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** aggregated selection of "juster.bet" */
export interface juster_bet_aggregatePromiseChain{
    aggregate: (juster_bet_aggregate_fieldsPromiseChain & {get: <R extends juster_bet_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_bet_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<juster_bet_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends juster_betRequest>(request: R, defaultValue?: FieldsSelection<juster_bet, R>[]) => Promise<FieldsSelection<juster_bet, R>[]>})
}


/** aggregated selection of "juster.bet" */
export interface juster_bet_aggregateObservableChain{
    aggregate: (juster_bet_aggregate_fieldsObservableChain & {get: <R extends juster_bet_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_bet_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<juster_bet_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends juster_betRequest>(request: R, defaultValue?: FieldsSelection<juster_bet, R>[]) => Observable<FieldsSelection<juster_bet, R>[]>})
}


/** aggregate fields of "juster.bet" */
export interface juster_bet_aggregate_fieldsPromiseChain{
    avg: (juster_bet_avg_fieldsPromiseChain & {get: <R extends juster_bet_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_bet_avg_fields, R> | undefined)) => Promise<(FieldsSelection<juster_bet_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (juster_bet_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    max: (juster_bet_max_fieldsPromiseChain & {get: <R extends juster_bet_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_bet_max_fields, R> | undefined)) => Promise<(FieldsSelection<juster_bet_max_fields, R> | undefined)>}),
    min: (juster_bet_min_fieldsPromiseChain & {get: <R extends juster_bet_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_bet_min_fields, R> | undefined)) => Promise<(FieldsSelection<juster_bet_min_fields, R> | undefined)>}),
    stddev: (juster_bet_stddev_fieldsPromiseChain & {get: <R extends juster_bet_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_bet_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<juster_bet_stddev_fields, R> | undefined)>}),
    stddev_pop: (juster_bet_stddev_pop_fieldsPromiseChain & {get: <R extends juster_bet_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_bet_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<juster_bet_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (juster_bet_stddev_samp_fieldsPromiseChain & {get: <R extends juster_bet_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_bet_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<juster_bet_stddev_samp_fields, R> | undefined)>}),
    sum: (juster_bet_sum_fieldsPromiseChain & {get: <R extends juster_bet_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_bet_sum_fields, R> | undefined)) => Promise<(FieldsSelection<juster_bet_sum_fields, R> | undefined)>}),
    var_pop: (juster_bet_var_pop_fieldsPromiseChain & {get: <R extends juster_bet_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_bet_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<juster_bet_var_pop_fields, R> | undefined)>}),
    var_samp: (juster_bet_var_samp_fieldsPromiseChain & {get: <R extends juster_bet_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_bet_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<juster_bet_var_samp_fields, R> | undefined)>}),
    variance: (juster_bet_variance_fieldsPromiseChain & {get: <R extends juster_bet_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_bet_variance_fields, R> | undefined)) => Promise<(FieldsSelection<juster_bet_variance_fields, R> | undefined)>})
}


/** aggregate fields of "juster.bet" */
export interface juster_bet_aggregate_fieldsObservableChain{
    avg: (juster_bet_avg_fieldsObservableChain & {get: <R extends juster_bet_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_bet_avg_fields, R> | undefined)) => Observable<(FieldsSelection<juster_bet_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (juster_bet_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    max: (juster_bet_max_fieldsObservableChain & {get: <R extends juster_bet_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_bet_max_fields, R> | undefined)) => Observable<(FieldsSelection<juster_bet_max_fields, R> | undefined)>}),
    min: (juster_bet_min_fieldsObservableChain & {get: <R extends juster_bet_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_bet_min_fields, R> | undefined)) => Observable<(FieldsSelection<juster_bet_min_fields, R> | undefined)>}),
    stddev: (juster_bet_stddev_fieldsObservableChain & {get: <R extends juster_bet_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_bet_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<juster_bet_stddev_fields, R> | undefined)>}),
    stddev_pop: (juster_bet_stddev_pop_fieldsObservableChain & {get: <R extends juster_bet_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_bet_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<juster_bet_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (juster_bet_stddev_samp_fieldsObservableChain & {get: <R extends juster_bet_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_bet_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<juster_bet_stddev_samp_fields, R> | undefined)>}),
    sum: (juster_bet_sum_fieldsObservableChain & {get: <R extends juster_bet_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_bet_sum_fields, R> | undefined)) => Observable<(FieldsSelection<juster_bet_sum_fields, R> | undefined)>}),
    var_pop: (juster_bet_var_pop_fieldsObservableChain & {get: <R extends juster_bet_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_bet_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<juster_bet_var_pop_fields, R> | undefined)>}),
    var_samp: (juster_bet_var_samp_fieldsObservableChain & {get: <R extends juster_bet_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_bet_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<juster_bet_var_samp_fields, R> | undefined)>}),
    variance: (juster_bet_variance_fieldsObservableChain & {get: <R extends juster_bet_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_bet_variance_fields, R> | undefined)) => Observable<(FieldsSelection<juster_bet_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface juster_bet_avg_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface juster_bet_avg_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface juster_bet_max_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    side: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate max on columns */
export interface juster_bet_max_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    side: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface juster_bet_min_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    side: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface juster_bet_min_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    side: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate stddev on columns */
export interface juster_bet_stddev_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface juster_bet_stddev_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface juster_bet_stddev_pop_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface juster_bet_stddev_pop_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface juster_bet_stddev_samp_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface juster_bet_stddev_samp_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface juster_bet_sum_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>})
}


/** aggregate sum on columns */
export interface juster_bet_sum_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface juster_bet_var_pop_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface juster_bet_var_pop_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface juster_bet_var_samp_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface juster_bet_var_samp_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface juster_bet_variance_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface juster_bet_variance_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** columns and relationships of "juster.currencypair" */
export interface juster_currencypairPromiseChain{
    
/** An array relationship */
events: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_event_order_by[] | null),
/** filter the rows returned */
where?: (juster_event_bool_exp | null)}) => {get: <R extends juster_eventRequest>(request: R, defaultValue?: FieldsSelection<juster_event, R>[]) => Promise<FieldsSelection<juster_event, R>[]>})&({get: <R extends juster_eventRequest>(request: R, defaultValue?: FieldsSelection<juster_event, R>[]) => Promise<FieldsSelection<juster_event, R>[]>}),
    
/** An aggregated array relationship */
events_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_event_order_by[] | null),
/** filter the rows returned */
where?: (juster_event_bool_exp | null)}) => juster_event_aggregatePromiseChain & {get: <R extends juster_event_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_event_aggregate, R>) => Promise<FieldsSelection<juster_event_aggregate, R>>})&(juster_event_aggregatePromiseChain & {get: <R extends juster_event_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_event_aggregate, R>) => Promise<FieldsSelection<juster_event_aggregate, R>>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** An array relationship */
quotes: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_quote_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_quote_order_by[] | null),
/** filter the rows returned */
where?: (juster_quote_bool_exp | null)}) => {get: <R extends juster_quoteRequest>(request: R, defaultValue?: FieldsSelection<juster_quote, R>[]) => Promise<FieldsSelection<juster_quote, R>[]>})&({get: <R extends juster_quoteRequest>(request: R, defaultValue?: FieldsSelection<juster_quote, R>[]) => Promise<FieldsSelection<juster_quote, R>[]>}),
    
/** An aggregated array relationship */
quotes_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_quote_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_quote_order_by[] | null),
/** filter the rows returned */
where?: (juster_quote_bool_exp | null)}) => juster_quote_aggregatePromiseChain & {get: <R extends juster_quote_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_quote_aggregate, R>) => Promise<FieldsSelection<juster_quote_aggregate, R>>})&(juster_quote_aggregatePromiseChain & {get: <R extends juster_quote_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_quote_aggregate, R>) => Promise<FieldsSelection<juster_quote_aggregate, R>>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "juster.currencypair" */
export interface juster_currencypairObservableChain{
    
/** An array relationship */
events: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_event_order_by[] | null),
/** filter the rows returned */
where?: (juster_event_bool_exp | null)}) => {get: <R extends juster_eventRequest>(request: R, defaultValue?: FieldsSelection<juster_event, R>[]) => Observable<FieldsSelection<juster_event, R>[]>})&({get: <R extends juster_eventRequest>(request: R, defaultValue?: FieldsSelection<juster_event, R>[]) => Observable<FieldsSelection<juster_event, R>[]>}),
    
/** An aggregated array relationship */
events_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_event_order_by[] | null),
/** filter the rows returned */
where?: (juster_event_bool_exp | null)}) => juster_event_aggregateObservableChain & {get: <R extends juster_event_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_event_aggregate, R>) => Observable<FieldsSelection<juster_event_aggregate, R>>})&(juster_event_aggregateObservableChain & {get: <R extends juster_event_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_event_aggregate, R>) => Observable<FieldsSelection<juster_event_aggregate, R>>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** An array relationship */
quotes: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_quote_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_quote_order_by[] | null),
/** filter the rows returned */
where?: (juster_quote_bool_exp | null)}) => {get: <R extends juster_quoteRequest>(request: R, defaultValue?: FieldsSelection<juster_quote, R>[]) => Observable<FieldsSelection<juster_quote, R>[]>})&({get: <R extends juster_quoteRequest>(request: R, defaultValue?: FieldsSelection<juster_quote, R>[]) => Observable<FieldsSelection<juster_quote, R>[]>}),
    
/** An aggregated array relationship */
quotes_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_quote_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_quote_order_by[] | null),
/** filter the rows returned */
where?: (juster_quote_bool_exp | null)}) => juster_quote_aggregateObservableChain & {get: <R extends juster_quote_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_quote_aggregate, R>) => Observable<FieldsSelection<juster_quote_aggregate, R>>})&(juster_quote_aggregateObservableChain & {get: <R extends juster_quote_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_quote_aggregate, R>) => Observable<FieldsSelection<juster_quote_aggregate, R>>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** aggregated selection of "juster.currencypair" */
export interface juster_currencypair_aggregatePromiseChain{
    aggregate: (juster_currencypair_aggregate_fieldsPromiseChain & {get: <R extends juster_currencypair_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_currencypair_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<juster_currencypair_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends juster_currencypairRequest>(request: R, defaultValue?: FieldsSelection<juster_currencypair, R>[]) => Promise<FieldsSelection<juster_currencypair, R>[]>})
}


/** aggregated selection of "juster.currencypair" */
export interface juster_currencypair_aggregateObservableChain{
    aggregate: (juster_currencypair_aggregate_fieldsObservableChain & {get: <R extends juster_currencypair_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_currencypair_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<juster_currencypair_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends juster_currencypairRequest>(request: R, defaultValue?: FieldsSelection<juster_currencypair, R>[]) => Observable<FieldsSelection<juster_currencypair, R>[]>})
}


/** aggregate fields of "juster.currencypair" */
export interface juster_currencypair_aggregate_fieldsPromiseChain{
    avg: (juster_currencypair_avg_fieldsPromiseChain & {get: <R extends juster_currencypair_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_currencypair_avg_fields, R> | undefined)) => Promise<(FieldsSelection<juster_currencypair_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (juster_currencypair_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    max: (juster_currencypair_max_fieldsPromiseChain & {get: <R extends juster_currencypair_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_currencypair_max_fields, R> | undefined)) => Promise<(FieldsSelection<juster_currencypair_max_fields, R> | undefined)>}),
    min: (juster_currencypair_min_fieldsPromiseChain & {get: <R extends juster_currencypair_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_currencypair_min_fields, R> | undefined)) => Promise<(FieldsSelection<juster_currencypair_min_fields, R> | undefined)>}),
    stddev: (juster_currencypair_stddev_fieldsPromiseChain & {get: <R extends juster_currencypair_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_currencypair_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<juster_currencypair_stddev_fields, R> | undefined)>}),
    stddev_pop: (juster_currencypair_stddev_pop_fieldsPromiseChain & {get: <R extends juster_currencypair_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_currencypair_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<juster_currencypair_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (juster_currencypair_stddev_samp_fieldsPromiseChain & {get: <R extends juster_currencypair_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_currencypair_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<juster_currencypair_stddev_samp_fields, R> | undefined)>}),
    sum: (juster_currencypair_sum_fieldsPromiseChain & {get: <R extends juster_currencypair_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_currencypair_sum_fields, R> | undefined)) => Promise<(FieldsSelection<juster_currencypair_sum_fields, R> | undefined)>}),
    var_pop: (juster_currencypair_var_pop_fieldsPromiseChain & {get: <R extends juster_currencypair_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_currencypair_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<juster_currencypair_var_pop_fields, R> | undefined)>}),
    var_samp: (juster_currencypair_var_samp_fieldsPromiseChain & {get: <R extends juster_currencypair_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_currencypair_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<juster_currencypair_var_samp_fields, R> | undefined)>}),
    variance: (juster_currencypair_variance_fieldsPromiseChain & {get: <R extends juster_currencypair_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_currencypair_variance_fields, R> | undefined)) => Promise<(FieldsSelection<juster_currencypair_variance_fields, R> | undefined)>})
}


/** aggregate fields of "juster.currencypair" */
export interface juster_currencypair_aggregate_fieldsObservableChain{
    avg: (juster_currencypair_avg_fieldsObservableChain & {get: <R extends juster_currencypair_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_currencypair_avg_fields, R> | undefined)) => Observable<(FieldsSelection<juster_currencypair_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (juster_currencypair_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    max: (juster_currencypair_max_fieldsObservableChain & {get: <R extends juster_currencypair_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_currencypair_max_fields, R> | undefined)) => Observable<(FieldsSelection<juster_currencypair_max_fields, R> | undefined)>}),
    min: (juster_currencypair_min_fieldsObservableChain & {get: <R extends juster_currencypair_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_currencypair_min_fields, R> | undefined)) => Observable<(FieldsSelection<juster_currencypair_min_fields, R> | undefined)>}),
    stddev: (juster_currencypair_stddev_fieldsObservableChain & {get: <R extends juster_currencypair_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_currencypair_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<juster_currencypair_stddev_fields, R> | undefined)>}),
    stddev_pop: (juster_currencypair_stddev_pop_fieldsObservableChain & {get: <R extends juster_currencypair_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_currencypair_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<juster_currencypair_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (juster_currencypair_stddev_samp_fieldsObservableChain & {get: <R extends juster_currencypair_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_currencypair_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<juster_currencypair_stddev_samp_fields, R> | undefined)>}),
    sum: (juster_currencypair_sum_fieldsObservableChain & {get: <R extends juster_currencypair_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_currencypair_sum_fields, R> | undefined)) => Observable<(FieldsSelection<juster_currencypair_sum_fields, R> | undefined)>}),
    var_pop: (juster_currencypair_var_pop_fieldsObservableChain & {get: <R extends juster_currencypair_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_currencypair_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<juster_currencypair_var_pop_fields, R> | undefined)>}),
    var_samp: (juster_currencypair_var_samp_fieldsObservableChain & {get: <R extends juster_currencypair_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_currencypair_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<juster_currencypair_var_samp_fields, R> | undefined)>}),
    variance: (juster_currencypair_variance_fieldsObservableChain & {get: <R extends juster_currencypair_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_currencypair_variance_fields, R> | undefined)) => Observable<(FieldsSelection<juster_currencypair_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface juster_currencypair_avg_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface juster_currencypair_avg_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface juster_currencypair_max_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate max on columns */
export interface juster_currencypair_max_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface juster_currencypair_min_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface juster_currencypair_min_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate stddev on columns */
export interface juster_currencypair_stddev_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface juster_currencypair_stddev_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface juster_currencypair_stddev_pop_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface juster_currencypair_stddev_pop_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface juster_currencypair_stddev_samp_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface juster_currencypair_stddev_samp_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface juster_currencypair_sum_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate sum on columns */
export interface juster_currencypair_sum_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface juster_currencypair_var_pop_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface juster_currencypair_var_pop_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface juster_currencypair_var_samp_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface juster_currencypair_var_samp_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface juster_currencypair_variance_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface juster_currencypair_variance_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** columns and relationships of "juster.deposit" */
export interface juster_depositPromiseChain{
    amount_above_eq: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    amount_below: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    
/** An object relationship */
event: (juster_eventPromiseChain & {get: <R extends juster_eventRequest>(request: R, defaultValue?: FieldsSelection<juster_event, R>) => Promise<FieldsSelection<juster_event, R>>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    shares: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    
/** An object relationship */
user: (juster_userPromiseChain & {get: <R extends juster_userRequest>(request: R, defaultValue?: FieldsSelection<juster_user, R>) => Promise<FieldsSelection<juster_user, R>>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "juster.deposit" */
export interface juster_depositObservableChain{
    amount_above_eq: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    amount_below: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    
/** An object relationship */
event: (juster_eventObservableChain & {get: <R extends juster_eventRequest>(request: R, defaultValue?: FieldsSelection<juster_event, R>) => Observable<FieldsSelection<juster_event, R>>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    shares: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    
/** An object relationship */
user: (juster_userObservableChain & {get: <R extends juster_userRequest>(request: R, defaultValue?: FieldsSelection<juster_user, R>) => Observable<FieldsSelection<juster_user, R>>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** aggregated selection of "juster.deposit" */
export interface juster_deposit_aggregatePromiseChain{
    aggregate: (juster_deposit_aggregate_fieldsPromiseChain & {get: <R extends juster_deposit_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_deposit_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<juster_deposit_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends juster_depositRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit, R>[]) => Promise<FieldsSelection<juster_deposit, R>[]>})
}


/** aggregated selection of "juster.deposit" */
export interface juster_deposit_aggregateObservableChain{
    aggregate: (juster_deposit_aggregate_fieldsObservableChain & {get: <R extends juster_deposit_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_deposit_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<juster_deposit_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends juster_depositRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit, R>[]) => Observable<FieldsSelection<juster_deposit, R>[]>})
}


/** aggregate fields of "juster.deposit" */
export interface juster_deposit_aggregate_fieldsPromiseChain{
    avg: (juster_deposit_avg_fieldsPromiseChain & {get: <R extends juster_deposit_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_deposit_avg_fields, R> | undefined)) => Promise<(FieldsSelection<juster_deposit_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (juster_deposit_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    max: (juster_deposit_max_fieldsPromiseChain & {get: <R extends juster_deposit_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_deposit_max_fields, R> | undefined)) => Promise<(FieldsSelection<juster_deposit_max_fields, R> | undefined)>}),
    min: (juster_deposit_min_fieldsPromiseChain & {get: <R extends juster_deposit_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_deposit_min_fields, R> | undefined)) => Promise<(FieldsSelection<juster_deposit_min_fields, R> | undefined)>}),
    stddev: (juster_deposit_stddev_fieldsPromiseChain & {get: <R extends juster_deposit_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_deposit_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<juster_deposit_stddev_fields, R> | undefined)>}),
    stddev_pop: (juster_deposit_stddev_pop_fieldsPromiseChain & {get: <R extends juster_deposit_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_deposit_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<juster_deposit_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (juster_deposit_stddev_samp_fieldsPromiseChain & {get: <R extends juster_deposit_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_deposit_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<juster_deposit_stddev_samp_fields, R> | undefined)>}),
    sum: (juster_deposit_sum_fieldsPromiseChain & {get: <R extends juster_deposit_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_deposit_sum_fields, R> | undefined)) => Promise<(FieldsSelection<juster_deposit_sum_fields, R> | undefined)>}),
    var_pop: (juster_deposit_var_pop_fieldsPromiseChain & {get: <R extends juster_deposit_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_deposit_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<juster_deposit_var_pop_fields, R> | undefined)>}),
    var_samp: (juster_deposit_var_samp_fieldsPromiseChain & {get: <R extends juster_deposit_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_deposit_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<juster_deposit_var_samp_fields, R> | undefined)>}),
    variance: (juster_deposit_variance_fieldsPromiseChain & {get: <R extends juster_deposit_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_deposit_variance_fields, R> | undefined)) => Promise<(FieldsSelection<juster_deposit_variance_fields, R> | undefined)>})
}


/** aggregate fields of "juster.deposit" */
export interface juster_deposit_aggregate_fieldsObservableChain{
    avg: (juster_deposit_avg_fieldsObservableChain & {get: <R extends juster_deposit_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_deposit_avg_fields, R> | undefined)) => Observable<(FieldsSelection<juster_deposit_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (juster_deposit_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    max: (juster_deposit_max_fieldsObservableChain & {get: <R extends juster_deposit_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_deposit_max_fields, R> | undefined)) => Observable<(FieldsSelection<juster_deposit_max_fields, R> | undefined)>}),
    min: (juster_deposit_min_fieldsObservableChain & {get: <R extends juster_deposit_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_deposit_min_fields, R> | undefined)) => Observable<(FieldsSelection<juster_deposit_min_fields, R> | undefined)>}),
    stddev: (juster_deposit_stddev_fieldsObservableChain & {get: <R extends juster_deposit_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_deposit_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<juster_deposit_stddev_fields, R> | undefined)>}),
    stddev_pop: (juster_deposit_stddev_pop_fieldsObservableChain & {get: <R extends juster_deposit_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_deposit_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<juster_deposit_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (juster_deposit_stddev_samp_fieldsObservableChain & {get: <R extends juster_deposit_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_deposit_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<juster_deposit_stddev_samp_fields, R> | undefined)>}),
    sum: (juster_deposit_sum_fieldsObservableChain & {get: <R extends juster_deposit_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_deposit_sum_fields, R> | undefined)) => Observable<(FieldsSelection<juster_deposit_sum_fields, R> | undefined)>}),
    var_pop: (juster_deposit_var_pop_fieldsObservableChain & {get: <R extends juster_deposit_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_deposit_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<juster_deposit_var_pop_fields, R> | undefined)>}),
    var_samp: (juster_deposit_var_samp_fieldsObservableChain & {get: <R extends juster_deposit_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_deposit_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<juster_deposit_var_samp_fields, R> | undefined)>}),
    variance: (juster_deposit_variance_fieldsObservableChain & {get: <R extends juster_deposit_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_deposit_variance_fields, R> | undefined)) => Observable<(FieldsSelection<juster_deposit_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface juster_deposit_avg_fieldsPromiseChain{
    amount_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    amount_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface juster_deposit_avg_fieldsObservableChain{
    amount_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    amount_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface juster_deposit_max_fieldsPromiseChain{
    amount_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    amount_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate max on columns */
export interface juster_deposit_max_fieldsObservableChain{
    amount_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    amount_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface juster_deposit_min_fieldsPromiseChain{
    amount_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    amount_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface juster_deposit_min_fieldsObservableChain{
    amount_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    amount_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate stddev on columns */
export interface juster_deposit_stddev_fieldsPromiseChain{
    amount_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    amount_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface juster_deposit_stddev_fieldsObservableChain{
    amount_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    amount_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface juster_deposit_stddev_pop_fieldsPromiseChain{
    amount_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    amount_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface juster_deposit_stddev_pop_fieldsObservableChain{
    amount_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    amount_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface juster_deposit_stddev_samp_fieldsPromiseChain{
    amount_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    amount_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface juster_deposit_stddev_samp_fieldsObservableChain{
    amount_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    amount_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface juster_deposit_sum_fieldsPromiseChain{
    amount_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    amount_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>})
}


/** aggregate sum on columns */
export interface juster_deposit_sum_fieldsObservableChain{
    amount_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    amount_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface juster_deposit_var_pop_fieldsPromiseChain{
    amount_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    amount_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface juster_deposit_var_pop_fieldsObservableChain{
    amount_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    amount_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface juster_deposit_var_samp_fieldsPromiseChain{
    amount_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    amount_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface juster_deposit_var_samp_fieldsObservableChain{
    amount_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    amount_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface juster_deposit_variance_fieldsPromiseChain{
    amount_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    amount_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface juster_deposit_variance_fieldsObservableChain{
    amount_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    amount_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/**
 * Stores current level of index and hash of it's config
 * 
 * 
 * columns and relationships of "juster.dipdup_state"
 * 
 */
export interface juster_dipdup_statePromiseChain{
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    index_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** operation: operation\nbig_map: big_map\nblock: block\nschema: schema */
index_type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}


/**
 * Stores current level of index and hash of it's config
 * 
 * 
 * columns and relationships of "juster.dipdup_state"
 * 
 */
export interface juster_dipdup_stateObservableChain{
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    index_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** operation: operation\nbig_map: big_map\nblock: block\nschema: schema */
index_type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}


/** aggregated selection of "juster.dipdup_state" */
export interface juster_dipdup_state_aggregatePromiseChain{
    aggregate: (juster_dipdup_state_aggregate_fieldsPromiseChain & {get: <R extends juster_dipdup_state_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_dipdup_state_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<juster_dipdup_state_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends juster_dipdup_stateRequest>(request: R, defaultValue?: FieldsSelection<juster_dipdup_state, R>[]) => Promise<FieldsSelection<juster_dipdup_state, R>[]>})
}


/** aggregated selection of "juster.dipdup_state" */
export interface juster_dipdup_state_aggregateObservableChain{
    aggregate: (juster_dipdup_state_aggregate_fieldsObservableChain & {get: <R extends juster_dipdup_state_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_dipdup_state_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<juster_dipdup_state_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends juster_dipdup_stateRequest>(request: R, defaultValue?: FieldsSelection<juster_dipdup_state, R>[]) => Observable<FieldsSelection<juster_dipdup_state, R>[]>})
}


/** aggregate fields of "juster.dipdup_state" */
export interface juster_dipdup_state_aggregate_fieldsPromiseChain{
    avg: (juster_dipdup_state_avg_fieldsPromiseChain & {get: <R extends juster_dipdup_state_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_dipdup_state_avg_fields, R> | undefined)) => Promise<(FieldsSelection<juster_dipdup_state_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (juster_dipdup_state_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    max: (juster_dipdup_state_max_fieldsPromiseChain & {get: <R extends juster_dipdup_state_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_dipdup_state_max_fields, R> | undefined)) => Promise<(FieldsSelection<juster_dipdup_state_max_fields, R> | undefined)>}),
    min: (juster_dipdup_state_min_fieldsPromiseChain & {get: <R extends juster_dipdup_state_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_dipdup_state_min_fields, R> | undefined)) => Promise<(FieldsSelection<juster_dipdup_state_min_fields, R> | undefined)>}),
    stddev: (juster_dipdup_state_stddev_fieldsPromiseChain & {get: <R extends juster_dipdup_state_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_dipdup_state_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<juster_dipdup_state_stddev_fields, R> | undefined)>}),
    stddev_pop: (juster_dipdup_state_stddev_pop_fieldsPromiseChain & {get: <R extends juster_dipdup_state_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_dipdup_state_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<juster_dipdup_state_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (juster_dipdup_state_stddev_samp_fieldsPromiseChain & {get: <R extends juster_dipdup_state_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_dipdup_state_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<juster_dipdup_state_stddev_samp_fields, R> | undefined)>}),
    sum: (juster_dipdup_state_sum_fieldsPromiseChain & {get: <R extends juster_dipdup_state_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_dipdup_state_sum_fields, R> | undefined)) => Promise<(FieldsSelection<juster_dipdup_state_sum_fields, R> | undefined)>}),
    var_pop: (juster_dipdup_state_var_pop_fieldsPromiseChain & {get: <R extends juster_dipdup_state_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_dipdup_state_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<juster_dipdup_state_var_pop_fields, R> | undefined)>}),
    var_samp: (juster_dipdup_state_var_samp_fieldsPromiseChain & {get: <R extends juster_dipdup_state_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_dipdup_state_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<juster_dipdup_state_var_samp_fields, R> | undefined)>}),
    variance: (juster_dipdup_state_variance_fieldsPromiseChain & {get: <R extends juster_dipdup_state_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_dipdup_state_variance_fields, R> | undefined)) => Promise<(FieldsSelection<juster_dipdup_state_variance_fields, R> | undefined)>})
}


/** aggregate fields of "juster.dipdup_state" */
export interface juster_dipdup_state_aggregate_fieldsObservableChain{
    avg: (juster_dipdup_state_avg_fieldsObservableChain & {get: <R extends juster_dipdup_state_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_dipdup_state_avg_fields, R> | undefined)) => Observable<(FieldsSelection<juster_dipdup_state_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (juster_dipdup_state_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    max: (juster_dipdup_state_max_fieldsObservableChain & {get: <R extends juster_dipdup_state_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_dipdup_state_max_fields, R> | undefined)) => Observable<(FieldsSelection<juster_dipdup_state_max_fields, R> | undefined)>}),
    min: (juster_dipdup_state_min_fieldsObservableChain & {get: <R extends juster_dipdup_state_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_dipdup_state_min_fields, R> | undefined)) => Observable<(FieldsSelection<juster_dipdup_state_min_fields, R> | undefined)>}),
    stddev: (juster_dipdup_state_stddev_fieldsObservableChain & {get: <R extends juster_dipdup_state_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_dipdup_state_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<juster_dipdup_state_stddev_fields, R> | undefined)>}),
    stddev_pop: (juster_dipdup_state_stddev_pop_fieldsObservableChain & {get: <R extends juster_dipdup_state_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_dipdup_state_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<juster_dipdup_state_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (juster_dipdup_state_stddev_samp_fieldsObservableChain & {get: <R extends juster_dipdup_state_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_dipdup_state_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<juster_dipdup_state_stddev_samp_fields, R> | undefined)>}),
    sum: (juster_dipdup_state_sum_fieldsObservableChain & {get: <R extends juster_dipdup_state_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_dipdup_state_sum_fields, R> | undefined)) => Observable<(FieldsSelection<juster_dipdup_state_sum_fields, R> | undefined)>}),
    var_pop: (juster_dipdup_state_var_pop_fieldsObservableChain & {get: <R extends juster_dipdup_state_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_dipdup_state_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<juster_dipdup_state_var_pop_fields, R> | undefined)>}),
    var_samp: (juster_dipdup_state_var_samp_fieldsObservableChain & {get: <R extends juster_dipdup_state_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_dipdup_state_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<juster_dipdup_state_var_samp_fields, R> | undefined)>}),
    variance: (juster_dipdup_state_variance_fieldsObservableChain & {get: <R extends juster_dipdup_state_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_dipdup_state_variance_fields, R> | undefined)) => Observable<(FieldsSelection<juster_dipdup_state_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface juster_dipdup_state_avg_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface juster_dipdup_state_avg_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface juster_dipdup_state_max_fieldsPromiseChain{
    hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    index_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    index_type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate max on columns */
export interface juster_dipdup_state_max_fieldsObservableChain{
    hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    index_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    index_type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate min on columns */
export interface juster_dipdup_state_min_fieldsPromiseChain{
    hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    index_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    index_type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate min on columns */
export interface juster_dipdup_state_min_fieldsObservableChain{
    hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    index_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    index_type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate stddev on columns */
export interface juster_dipdup_state_stddev_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface juster_dipdup_state_stddev_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface juster_dipdup_state_stddev_pop_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface juster_dipdup_state_stddev_pop_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface juster_dipdup_state_stddev_samp_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface juster_dipdup_state_stddev_samp_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface juster_dipdup_state_sum_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate sum on columns */
export interface juster_dipdup_state_sum_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface juster_dipdup_state_var_pop_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface juster_dipdup_state_var_pop_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface juster_dipdup_state_var_samp_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface juster_dipdup_state_var_samp_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface juster_dipdup_state_variance_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface juster_dipdup_state_variance_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** columns and relationships of "juster.event" */
export interface juster_eventPromiseChain{
    
/** An array relationship */
bets: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_bet_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_bet_order_by[] | null),
/** filter the rows returned */
where?: (juster_bet_bool_exp | null)}) => {get: <R extends juster_betRequest>(request: R, defaultValue?: FieldsSelection<juster_bet, R>[]) => Promise<FieldsSelection<juster_bet, R>[]>})&({get: <R extends juster_betRequest>(request: R, defaultValue?: FieldsSelection<juster_bet, R>[]) => Promise<FieldsSelection<juster_bet, R>[]>}),
    
/** An aggregated array relationship */
bets_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_bet_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_bet_order_by[] | null),
/** filter the rows returned */
where?: (juster_bet_bool_exp | null)}) => juster_bet_aggregatePromiseChain & {get: <R extends juster_bet_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_bet_aggregate, R>) => Promise<FieldsSelection<juster_bet_aggregate, R>>})&(juster_bet_aggregatePromiseChain & {get: <R extends juster_bet_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_bet_aggregate, R>) => Promise<FieldsSelection<juster_bet_aggregate, R>>}),
    bets_close_time: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    closed_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    closed_oracle_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    closed_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    created_time: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    
/** An object relationship */
currency_pair: (juster_currencypairPromiseChain & {get: <R extends juster_currencypairRequest>(request: R, defaultValue?: FieldsSelection<juster_currencypair, R>) => Promise<FieldsSelection<juster_currencypair, R>>}),
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** An array relationship */
deposits: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_deposit_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_deposit_order_by[] | null),
/** filter the rows returned */
where?: (juster_deposit_bool_exp | null)}) => {get: <R extends juster_depositRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit, R>[]) => Promise<FieldsSelection<juster_deposit, R>[]>})&({get: <R extends juster_depositRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit, R>[]) => Promise<FieldsSelection<juster_deposit, R>[]>}),
    
/** An aggregated array relationship */
deposits_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_deposit_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_deposit_order_by[] | null),
/** filter the rows returned */
where?: (juster_deposit_bool_exp | null)}) => juster_deposit_aggregatePromiseChain & {get: <R extends juster_deposit_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit_aggregate, R>) => Promise<FieldsSelection<juster_deposit_aggregate, R>>})&(juster_deposit_aggregatePromiseChain & {get: <R extends juster_deposit_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit_aggregate, R>) => Promise<FieldsSelection<juster_deposit_aggregate, R>>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    liquidity_percent: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    measure_oracle_start_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    measure_period: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    pool_above_eq: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    pool_below: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    
/** An array relationship */
positions: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_position_order_by[] | null),
/** filter the rows returned */
where?: (juster_position_bool_exp | null)}) => {get: <R extends juster_positionRequest>(request: R, defaultValue?: FieldsSelection<juster_position, R>[]) => Promise<FieldsSelection<juster_position, R>[]>})&({get: <R extends juster_positionRequest>(request: R, defaultValue?: FieldsSelection<juster_position, R>[]) => Promise<FieldsSelection<juster_position, R>[]>}),
    
/** An aggregated array relationship */
positions_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_position_order_by[] | null),
/** filter the rows returned */
where?: (juster_position_bool_exp | null)}) => juster_position_aggregatePromiseChain & {get: <R extends juster_position_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_position_aggregate, R>) => Promise<FieldsSelection<juster_position_aggregate, R>>})&(juster_position_aggregatePromiseChain & {get: <R extends juster_position_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_position_aggregate, R>) => Promise<FieldsSelection<juster_position_aggregate, R>>}),
    start_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    
/** NEW: NEW\nSTARTED: STARTED\nFINISHED: FINISHED\nCANCELED: CANCELED */
status: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    target_dynamics: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    total_liquidity_shares: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    
/** ABOVE_EQ: ABOVE_EQ\nBELOW: BELOW */
winner_bets: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** An array relationship */
withdrawals: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_withdrawal_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_withdrawal_order_by[] | null),
/** filter the rows returned */
where?: (juster_withdrawal_bool_exp | null)}) => {get: <R extends juster_withdrawalRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal, R>[]) => Promise<FieldsSelection<juster_withdrawal, R>[]>})&({get: <R extends juster_withdrawalRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal, R>[]) => Promise<FieldsSelection<juster_withdrawal, R>[]>}),
    
/** An aggregated array relationship */
withdrawals_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_withdrawal_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_withdrawal_order_by[] | null),
/** filter the rows returned */
where?: (juster_withdrawal_bool_exp | null)}) => juster_withdrawal_aggregatePromiseChain & {get: <R extends juster_withdrawal_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal_aggregate, R>) => Promise<FieldsSelection<juster_withdrawal_aggregate, R>>})&(juster_withdrawal_aggregatePromiseChain & {get: <R extends juster_withdrawal_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal_aggregate, R>) => Promise<FieldsSelection<juster_withdrawal_aggregate, R>>})
}


/** columns and relationships of "juster.event" */
export interface juster_eventObservableChain{
    
/** An array relationship */
bets: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_bet_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_bet_order_by[] | null),
/** filter the rows returned */
where?: (juster_bet_bool_exp | null)}) => {get: <R extends juster_betRequest>(request: R, defaultValue?: FieldsSelection<juster_bet, R>[]) => Observable<FieldsSelection<juster_bet, R>[]>})&({get: <R extends juster_betRequest>(request: R, defaultValue?: FieldsSelection<juster_bet, R>[]) => Observable<FieldsSelection<juster_bet, R>[]>}),
    
/** An aggregated array relationship */
bets_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_bet_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_bet_order_by[] | null),
/** filter the rows returned */
where?: (juster_bet_bool_exp | null)}) => juster_bet_aggregateObservableChain & {get: <R extends juster_bet_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_bet_aggregate, R>) => Observable<FieldsSelection<juster_bet_aggregate, R>>})&(juster_bet_aggregateObservableChain & {get: <R extends juster_bet_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_bet_aggregate, R>) => Observable<FieldsSelection<juster_bet_aggregate, R>>}),
    bets_close_time: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    closed_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    closed_oracle_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    closed_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    created_time: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    
/** An object relationship */
currency_pair: (juster_currencypairObservableChain & {get: <R extends juster_currencypairRequest>(request: R, defaultValue?: FieldsSelection<juster_currencypair, R>) => Observable<FieldsSelection<juster_currencypair, R>>}),
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** An array relationship */
deposits: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_deposit_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_deposit_order_by[] | null),
/** filter the rows returned */
where?: (juster_deposit_bool_exp | null)}) => {get: <R extends juster_depositRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit, R>[]) => Observable<FieldsSelection<juster_deposit, R>[]>})&({get: <R extends juster_depositRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit, R>[]) => Observable<FieldsSelection<juster_deposit, R>[]>}),
    
/** An aggregated array relationship */
deposits_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_deposit_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_deposit_order_by[] | null),
/** filter the rows returned */
where?: (juster_deposit_bool_exp | null)}) => juster_deposit_aggregateObservableChain & {get: <R extends juster_deposit_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit_aggregate, R>) => Observable<FieldsSelection<juster_deposit_aggregate, R>>})&(juster_deposit_aggregateObservableChain & {get: <R extends juster_deposit_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit_aggregate, R>) => Observable<FieldsSelection<juster_deposit_aggregate, R>>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    liquidity_percent: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    measure_oracle_start_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    measure_period: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    pool_above_eq: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    pool_below: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    
/** An array relationship */
positions: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_position_order_by[] | null),
/** filter the rows returned */
where?: (juster_position_bool_exp | null)}) => {get: <R extends juster_positionRequest>(request: R, defaultValue?: FieldsSelection<juster_position, R>[]) => Observable<FieldsSelection<juster_position, R>[]>})&({get: <R extends juster_positionRequest>(request: R, defaultValue?: FieldsSelection<juster_position, R>[]) => Observable<FieldsSelection<juster_position, R>[]>}),
    
/** An aggregated array relationship */
positions_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_position_order_by[] | null),
/** filter the rows returned */
where?: (juster_position_bool_exp | null)}) => juster_position_aggregateObservableChain & {get: <R extends juster_position_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_position_aggregate, R>) => Observable<FieldsSelection<juster_position_aggregate, R>>})&(juster_position_aggregateObservableChain & {get: <R extends juster_position_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_position_aggregate, R>) => Observable<FieldsSelection<juster_position_aggregate, R>>}),
    start_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    
/** NEW: NEW\nSTARTED: STARTED\nFINISHED: FINISHED\nCANCELED: CANCELED */
status: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    target_dynamics: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    total_liquidity_shares: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    
/** ABOVE_EQ: ABOVE_EQ\nBELOW: BELOW */
winner_bets: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** An array relationship */
withdrawals: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_withdrawal_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_withdrawal_order_by[] | null),
/** filter the rows returned */
where?: (juster_withdrawal_bool_exp | null)}) => {get: <R extends juster_withdrawalRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal, R>[]) => Observable<FieldsSelection<juster_withdrawal, R>[]>})&({get: <R extends juster_withdrawalRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal, R>[]) => Observable<FieldsSelection<juster_withdrawal, R>[]>}),
    
/** An aggregated array relationship */
withdrawals_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_withdrawal_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_withdrawal_order_by[] | null),
/** filter the rows returned */
where?: (juster_withdrawal_bool_exp | null)}) => juster_withdrawal_aggregateObservableChain & {get: <R extends juster_withdrawal_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal_aggregate, R>) => Observable<FieldsSelection<juster_withdrawal_aggregate, R>>})&(juster_withdrawal_aggregateObservableChain & {get: <R extends juster_withdrawal_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal_aggregate, R>) => Observable<FieldsSelection<juster_withdrawal_aggregate, R>>})
}


/** aggregated selection of "juster.event" */
export interface juster_event_aggregatePromiseChain{
    aggregate: (juster_event_aggregate_fieldsPromiseChain & {get: <R extends juster_event_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_event_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<juster_event_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends juster_eventRequest>(request: R, defaultValue?: FieldsSelection<juster_event, R>[]) => Promise<FieldsSelection<juster_event, R>[]>})
}


/** aggregated selection of "juster.event" */
export interface juster_event_aggregateObservableChain{
    aggregate: (juster_event_aggregate_fieldsObservableChain & {get: <R extends juster_event_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_event_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<juster_event_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends juster_eventRequest>(request: R, defaultValue?: FieldsSelection<juster_event, R>[]) => Observable<FieldsSelection<juster_event, R>[]>})
}


/** aggregate fields of "juster.event" */
export interface juster_event_aggregate_fieldsPromiseChain{
    avg: (juster_event_avg_fieldsPromiseChain & {get: <R extends juster_event_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_event_avg_fields, R> | undefined)) => Promise<(FieldsSelection<juster_event_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (juster_event_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    max: (juster_event_max_fieldsPromiseChain & {get: <R extends juster_event_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_event_max_fields, R> | undefined)) => Promise<(FieldsSelection<juster_event_max_fields, R> | undefined)>}),
    min: (juster_event_min_fieldsPromiseChain & {get: <R extends juster_event_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_event_min_fields, R> | undefined)) => Promise<(FieldsSelection<juster_event_min_fields, R> | undefined)>}),
    stddev: (juster_event_stddev_fieldsPromiseChain & {get: <R extends juster_event_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_event_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<juster_event_stddev_fields, R> | undefined)>}),
    stddev_pop: (juster_event_stddev_pop_fieldsPromiseChain & {get: <R extends juster_event_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_event_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<juster_event_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (juster_event_stddev_samp_fieldsPromiseChain & {get: <R extends juster_event_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_event_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<juster_event_stddev_samp_fields, R> | undefined)>}),
    sum: (juster_event_sum_fieldsPromiseChain & {get: <R extends juster_event_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_event_sum_fields, R> | undefined)) => Promise<(FieldsSelection<juster_event_sum_fields, R> | undefined)>}),
    var_pop: (juster_event_var_pop_fieldsPromiseChain & {get: <R extends juster_event_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_event_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<juster_event_var_pop_fields, R> | undefined)>}),
    var_samp: (juster_event_var_samp_fieldsPromiseChain & {get: <R extends juster_event_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_event_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<juster_event_var_samp_fields, R> | undefined)>}),
    variance: (juster_event_variance_fieldsPromiseChain & {get: <R extends juster_event_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_event_variance_fields, R> | undefined)) => Promise<(FieldsSelection<juster_event_variance_fields, R> | undefined)>})
}


/** aggregate fields of "juster.event" */
export interface juster_event_aggregate_fieldsObservableChain{
    avg: (juster_event_avg_fieldsObservableChain & {get: <R extends juster_event_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_event_avg_fields, R> | undefined)) => Observable<(FieldsSelection<juster_event_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (juster_event_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    max: (juster_event_max_fieldsObservableChain & {get: <R extends juster_event_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_event_max_fields, R> | undefined)) => Observable<(FieldsSelection<juster_event_max_fields, R> | undefined)>}),
    min: (juster_event_min_fieldsObservableChain & {get: <R extends juster_event_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_event_min_fields, R> | undefined)) => Observable<(FieldsSelection<juster_event_min_fields, R> | undefined)>}),
    stddev: (juster_event_stddev_fieldsObservableChain & {get: <R extends juster_event_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_event_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<juster_event_stddev_fields, R> | undefined)>}),
    stddev_pop: (juster_event_stddev_pop_fieldsObservableChain & {get: <R extends juster_event_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_event_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<juster_event_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (juster_event_stddev_samp_fieldsObservableChain & {get: <R extends juster_event_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_event_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<juster_event_stddev_samp_fields, R> | undefined)>}),
    sum: (juster_event_sum_fieldsObservableChain & {get: <R extends juster_event_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_event_sum_fields, R> | undefined)) => Observable<(FieldsSelection<juster_event_sum_fields, R> | undefined)>}),
    var_pop: (juster_event_var_pop_fieldsObservableChain & {get: <R extends juster_event_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_event_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<juster_event_var_pop_fields, R> | undefined)>}),
    var_samp: (juster_event_var_samp_fieldsObservableChain & {get: <R extends juster_event_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_event_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<juster_event_var_samp_fields, R> | undefined)>}),
    variance: (juster_event_variance_fieldsObservableChain & {get: <R extends juster_event_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_event_variance_fields, R> | undefined)) => Observable<(FieldsSelection<juster_event_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface juster_event_avg_fieldsPromiseChain{
    closed_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    closed_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    liquidity_percent: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    measure_period: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    pool_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    pool_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    start_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    target_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_liquidity_shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface juster_event_avg_fieldsObservableChain{
    closed_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    closed_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    liquidity_percent: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    measure_period: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    pool_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    pool_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    start_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    target_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_liquidity_shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface juster_event_max_fieldsPromiseChain{
    bets_close_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    closed_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    closed_oracle_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    closed_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    created_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    liquidity_percent: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    measure_oracle_start_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    measure_period: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>}),
    pool_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    pool_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    start_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    target_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    total_liquidity_shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    winner_bets: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate max on columns */
export interface juster_event_max_fieldsObservableChain{
    bets_close_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    closed_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    closed_oracle_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    closed_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    created_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    liquidity_percent: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    measure_oracle_start_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    measure_period: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>}),
    pool_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    pool_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    start_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    target_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    total_liquidity_shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    winner_bets: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface juster_event_min_fieldsPromiseChain{
    bets_close_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    closed_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    closed_oracle_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    closed_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    created_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    liquidity_percent: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    measure_oracle_start_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    measure_period: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>}),
    pool_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    pool_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    start_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    target_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    total_liquidity_shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    winner_bets: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface juster_event_min_fieldsObservableChain{
    bets_close_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    closed_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    closed_oracle_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    closed_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    created_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    liquidity_percent: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    measure_oracle_start_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    measure_period: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>}),
    pool_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    pool_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    start_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    target_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    total_liquidity_shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    winner_bets: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate stddev on columns */
export interface juster_event_stddev_fieldsPromiseChain{
    closed_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    closed_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    liquidity_percent: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    measure_period: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    pool_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    pool_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    start_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    target_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_liquidity_shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface juster_event_stddev_fieldsObservableChain{
    closed_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    closed_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    liquidity_percent: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    measure_period: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    pool_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    pool_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    start_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    target_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_liquidity_shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface juster_event_stddev_pop_fieldsPromiseChain{
    closed_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    closed_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    liquidity_percent: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    measure_period: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    pool_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    pool_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    start_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    target_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_liquidity_shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface juster_event_stddev_pop_fieldsObservableChain{
    closed_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    closed_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    liquidity_percent: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    measure_period: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    pool_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    pool_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    start_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    target_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_liquidity_shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface juster_event_stddev_samp_fieldsPromiseChain{
    closed_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    closed_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    liquidity_percent: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    measure_period: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    pool_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    pool_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    start_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    target_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_liquidity_shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface juster_event_stddev_samp_fieldsObservableChain{
    closed_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    closed_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    liquidity_percent: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    measure_period: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    pool_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    pool_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    start_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    target_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_liquidity_shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface juster_event_sum_fieldsPromiseChain{
    closed_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    closed_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    liquidity_percent: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    measure_period: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>}),
    pool_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    pool_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    start_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    target_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    total_liquidity_shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>})
}


/** aggregate sum on columns */
export interface juster_event_sum_fieldsObservableChain{
    closed_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    closed_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    liquidity_percent: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    measure_period: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>}),
    pool_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    pool_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    start_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    target_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    total_liquidity_shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface juster_event_var_pop_fieldsPromiseChain{
    closed_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    closed_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    liquidity_percent: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    measure_period: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    pool_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    pool_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    start_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    target_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_liquidity_shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface juster_event_var_pop_fieldsObservableChain{
    closed_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    closed_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    liquidity_percent: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    measure_period: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    pool_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    pool_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    start_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    target_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_liquidity_shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface juster_event_var_samp_fieldsPromiseChain{
    closed_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    closed_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    liquidity_percent: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    measure_period: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    pool_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    pool_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    start_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    target_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_liquidity_shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface juster_event_var_samp_fieldsObservableChain{
    closed_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    closed_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    liquidity_percent: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    measure_period: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    pool_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    pool_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    start_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    target_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_liquidity_shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface juster_event_variance_fieldsPromiseChain{
    closed_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    closed_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    liquidity_percent: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    measure_period: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    pool_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    pool_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    start_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    target_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_liquidity_shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface juster_event_variance_fieldsObservableChain{
    closed_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    closed_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    liquidity_percent: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    measure_period: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    pool_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    pool_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    start_rate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    target_dynamics: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_liquidity_shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** columns and relationships of "juster.position" */
export interface juster_positionPromiseChain{
    
/** An object relationship */
event: (juster_eventPromiseChain & {get: <R extends juster_eventRequest>(request: R, defaultValue?: FieldsSelection<juster_event, R>) => Promise<FieldsSelection<juster_event, R>>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    liquidity_provided_above_eq: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    liquidity_provided_below: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    reward_above_eq: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    reward_below: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    shares: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    
/** An object relationship */
user: (juster_userPromiseChain & {get: <R extends juster_userRequest>(request: R, defaultValue?: FieldsSelection<juster_user, R>) => Promise<FieldsSelection<juster_user, R>>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    withdrawn: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>})
}


/** columns and relationships of "juster.position" */
export interface juster_positionObservableChain{
    
/** An object relationship */
event: (juster_eventObservableChain & {get: <R extends juster_eventRequest>(request: R, defaultValue?: FieldsSelection<juster_event, R>) => Observable<FieldsSelection<juster_event, R>>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    liquidity_provided_above_eq: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    liquidity_provided_below: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    reward_above_eq: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    reward_below: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    shares: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    
/** An object relationship */
user: (juster_userObservableChain & {get: <R extends juster_userRequest>(request: R, defaultValue?: FieldsSelection<juster_user, R>) => Observable<FieldsSelection<juster_user, R>>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    withdrawn: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>})
}


/** aggregated selection of "juster.position" */
export interface juster_position_aggregatePromiseChain{
    aggregate: (juster_position_aggregate_fieldsPromiseChain & {get: <R extends juster_position_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_position_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<juster_position_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends juster_positionRequest>(request: R, defaultValue?: FieldsSelection<juster_position, R>[]) => Promise<FieldsSelection<juster_position, R>[]>})
}


/** aggregated selection of "juster.position" */
export interface juster_position_aggregateObservableChain{
    aggregate: (juster_position_aggregate_fieldsObservableChain & {get: <R extends juster_position_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_position_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<juster_position_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends juster_positionRequest>(request: R, defaultValue?: FieldsSelection<juster_position, R>[]) => Observable<FieldsSelection<juster_position, R>[]>})
}


/** aggregate fields of "juster.position" */
export interface juster_position_aggregate_fieldsPromiseChain{
    avg: (juster_position_avg_fieldsPromiseChain & {get: <R extends juster_position_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_position_avg_fields, R> | undefined)) => Promise<(FieldsSelection<juster_position_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (juster_position_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    max: (juster_position_max_fieldsPromiseChain & {get: <R extends juster_position_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_position_max_fields, R> | undefined)) => Promise<(FieldsSelection<juster_position_max_fields, R> | undefined)>}),
    min: (juster_position_min_fieldsPromiseChain & {get: <R extends juster_position_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_position_min_fields, R> | undefined)) => Promise<(FieldsSelection<juster_position_min_fields, R> | undefined)>}),
    stddev: (juster_position_stddev_fieldsPromiseChain & {get: <R extends juster_position_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_position_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<juster_position_stddev_fields, R> | undefined)>}),
    stddev_pop: (juster_position_stddev_pop_fieldsPromiseChain & {get: <R extends juster_position_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_position_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<juster_position_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (juster_position_stddev_samp_fieldsPromiseChain & {get: <R extends juster_position_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_position_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<juster_position_stddev_samp_fields, R> | undefined)>}),
    sum: (juster_position_sum_fieldsPromiseChain & {get: <R extends juster_position_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_position_sum_fields, R> | undefined)) => Promise<(FieldsSelection<juster_position_sum_fields, R> | undefined)>}),
    var_pop: (juster_position_var_pop_fieldsPromiseChain & {get: <R extends juster_position_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_position_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<juster_position_var_pop_fields, R> | undefined)>}),
    var_samp: (juster_position_var_samp_fieldsPromiseChain & {get: <R extends juster_position_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_position_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<juster_position_var_samp_fields, R> | undefined)>}),
    variance: (juster_position_variance_fieldsPromiseChain & {get: <R extends juster_position_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_position_variance_fields, R> | undefined)) => Promise<(FieldsSelection<juster_position_variance_fields, R> | undefined)>})
}


/** aggregate fields of "juster.position" */
export interface juster_position_aggregate_fieldsObservableChain{
    avg: (juster_position_avg_fieldsObservableChain & {get: <R extends juster_position_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_position_avg_fields, R> | undefined)) => Observable<(FieldsSelection<juster_position_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (juster_position_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    max: (juster_position_max_fieldsObservableChain & {get: <R extends juster_position_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_position_max_fields, R> | undefined)) => Observable<(FieldsSelection<juster_position_max_fields, R> | undefined)>}),
    min: (juster_position_min_fieldsObservableChain & {get: <R extends juster_position_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_position_min_fields, R> | undefined)) => Observable<(FieldsSelection<juster_position_min_fields, R> | undefined)>}),
    stddev: (juster_position_stddev_fieldsObservableChain & {get: <R extends juster_position_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_position_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<juster_position_stddev_fields, R> | undefined)>}),
    stddev_pop: (juster_position_stddev_pop_fieldsObservableChain & {get: <R extends juster_position_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_position_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<juster_position_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (juster_position_stddev_samp_fieldsObservableChain & {get: <R extends juster_position_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_position_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<juster_position_stddev_samp_fields, R> | undefined)>}),
    sum: (juster_position_sum_fieldsObservableChain & {get: <R extends juster_position_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_position_sum_fields, R> | undefined)) => Observable<(FieldsSelection<juster_position_sum_fields, R> | undefined)>}),
    var_pop: (juster_position_var_pop_fieldsObservableChain & {get: <R extends juster_position_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_position_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<juster_position_var_pop_fields, R> | undefined)>}),
    var_samp: (juster_position_var_samp_fieldsObservableChain & {get: <R extends juster_position_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_position_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<juster_position_var_samp_fields, R> | undefined)>}),
    variance: (juster_position_variance_fieldsObservableChain & {get: <R extends juster_position_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_position_variance_fields, R> | undefined)) => Observable<(FieldsSelection<juster_position_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface juster_position_avg_fieldsPromiseChain{
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    liquidity_provided_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    liquidity_provided_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    reward_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    reward_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface juster_position_avg_fieldsObservableChain{
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    liquidity_provided_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    liquidity_provided_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    reward_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    reward_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface juster_position_max_fieldsPromiseChain{
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    liquidity_provided_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    liquidity_provided_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    reward_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    reward_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate max on columns */
export interface juster_position_max_fieldsObservableChain{
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    liquidity_provided_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    liquidity_provided_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    reward_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    reward_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface juster_position_min_fieldsPromiseChain{
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    liquidity_provided_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    liquidity_provided_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    reward_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    reward_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface juster_position_min_fieldsObservableChain{
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    liquidity_provided_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    liquidity_provided_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    reward_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    reward_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate stddev on columns */
export interface juster_position_stddev_fieldsPromiseChain{
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    liquidity_provided_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    liquidity_provided_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    reward_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    reward_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface juster_position_stddev_fieldsObservableChain{
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    liquidity_provided_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    liquidity_provided_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    reward_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    reward_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface juster_position_stddev_pop_fieldsPromiseChain{
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    liquidity_provided_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    liquidity_provided_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    reward_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    reward_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface juster_position_stddev_pop_fieldsObservableChain{
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    liquidity_provided_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    liquidity_provided_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    reward_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    reward_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface juster_position_stddev_samp_fieldsPromiseChain{
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    liquidity_provided_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    liquidity_provided_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    reward_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    reward_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface juster_position_stddev_samp_fieldsObservableChain{
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    liquidity_provided_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    liquidity_provided_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    reward_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    reward_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface juster_position_sum_fieldsPromiseChain{
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    liquidity_provided_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    liquidity_provided_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    reward_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    reward_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>})
}


/** aggregate sum on columns */
export interface juster_position_sum_fieldsObservableChain{
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    liquidity_provided_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    liquidity_provided_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    reward_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    reward_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface juster_position_var_pop_fieldsPromiseChain{
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    liquidity_provided_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    liquidity_provided_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    reward_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    reward_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface juster_position_var_pop_fieldsObservableChain{
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    liquidity_provided_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    liquidity_provided_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    reward_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    reward_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface juster_position_var_samp_fieldsPromiseChain{
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    liquidity_provided_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    liquidity_provided_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    reward_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    reward_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface juster_position_var_samp_fieldsObservableChain{
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    liquidity_provided_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    liquidity_provided_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    reward_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    reward_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface juster_position_variance_fieldsPromiseChain{
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    liquidity_provided_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    liquidity_provided_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    reward_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    reward_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface juster_position_variance_fieldsObservableChain{
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    liquidity_provided_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    liquidity_provided_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    reward_above_eq: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    reward_below: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    shares: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** columns and relationships of "juster.quote" */
export interface juster_quotePromiseChain{
    
/** An object relationship */
currency_pair: (juster_currencypairPromiseChain & {get: <R extends juster_currencypairRequest>(request: R, defaultValue?: FieldsSelection<juster_currencypair, R>) => Promise<FieldsSelection<juster_currencypair, R>>}),
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    price: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "juster.quote" */
export interface juster_quoteObservableChain{
    
/** An object relationship */
currency_pair: (juster_currencypairObservableChain & {get: <R extends juster_currencypairRequest>(request: R, defaultValue?: FieldsSelection<juster_currencypair, R>) => Observable<FieldsSelection<juster_currencypair, R>>}),
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    price: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** aggregated selection of "juster.quote" */
export interface juster_quote_aggregatePromiseChain{
    aggregate: (juster_quote_aggregate_fieldsPromiseChain & {get: <R extends juster_quote_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_quote_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<juster_quote_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends juster_quoteRequest>(request: R, defaultValue?: FieldsSelection<juster_quote, R>[]) => Promise<FieldsSelection<juster_quote, R>[]>})
}


/** aggregated selection of "juster.quote" */
export interface juster_quote_aggregateObservableChain{
    aggregate: (juster_quote_aggregate_fieldsObservableChain & {get: <R extends juster_quote_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_quote_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<juster_quote_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends juster_quoteRequest>(request: R, defaultValue?: FieldsSelection<juster_quote, R>[]) => Observable<FieldsSelection<juster_quote, R>[]>})
}


/** aggregate fields of "juster.quote" */
export interface juster_quote_aggregate_fieldsPromiseChain{
    avg: (juster_quote_avg_fieldsPromiseChain & {get: <R extends juster_quote_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_quote_avg_fields, R> | undefined)) => Promise<(FieldsSelection<juster_quote_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (juster_quote_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    max: (juster_quote_max_fieldsPromiseChain & {get: <R extends juster_quote_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_quote_max_fields, R> | undefined)) => Promise<(FieldsSelection<juster_quote_max_fields, R> | undefined)>}),
    min: (juster_quote_min_fieldsPromiseChain & {get: <R extends juster_quote_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_quote_min_fields, R> | undefined)) => Promise<(FieldsSelection<juster_quote_min_fields, R> | undefined)>}),
    stddev: (juster_quote_stddev_fieldsPromiseChain & {get: <R extends juster_quote_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_quote_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<juster_quote_stddev_fields, R> | undefined)>}),
    stddev_pop: (juster_quote_stddev_pop_fieldsPromiseChain & {get: <R extends juster_quote_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_quote_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<juster_quote_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (juster_quote_stddev_samp_fieldsPromiseChain & {get: <R extends juster_quote_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_quote_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<juster_quote_stddev_samp_fields, R> | undefined)>}),
    sum: (juster_quote_sum_fieldsPromiseChain & {get: <R extends juster_quote_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_quote_sum_fields, R> | undefined)) => Promise<(FieldsSelection<juster_quote_sum_fields, R> | undefined)>}),
    var_pop: (juster_quote_var_pop_fieldsPromiseChain & {get: <R extends juster_quote_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_quote_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<juster_quote_var_pop_fields, R> | undefined)>}),
    var_samp: (juster_quote_var_samp_fieldsPromiseChain & {get: <R extends juster_quote_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_quote_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<juster_quote_var_samp_fields, R> | undefined)>}),
    variance: (juster_quote_variance_fieldsPromiseChain & {get: <R extends juster_quote_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_quote_variance_fields, R> | undefined)) => Promise<(FieldsSelection<juster_quote_variance_fields, R> | undefined)>})
}


/** aggregate fields of "juster.quote" */
export interface juster_quote_aggregate_fieldsObservableChain{
    avg: (juster_quote_avg_fieldsObservableChain & {get: <R extends juster_quote_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_quote_avg_fields, R> | undefined)) => Observable<(FieldsSelection<juster_quote_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (juster_quote_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    max: (juster_quote_max_fieldsObservableChain & {get: <R extends juster_quote_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_quote_max_fields, R> | undefined)) => Observable<(FieldsSelection<juster_quote_max_fields, R> | undefined)>}),
    min: (juster_quote_min_fieldsObservableChain & {get: <R extends juster_quote_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_quote_min_fields, R> | undefined)) => Observable<(FieldsSelection<juster_quote_min_fields, R> | undefined)>}),
    stddev: (juster_quote_stddev_fieldsObservableChain & {get: <R extends juster_quote_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_quote_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<juster_quote_stddev_fields, R> | undefined)>}),
    stddev_pop: (juster_quote_stddev_pop_fieldsObservableChain & {get: <R extends juster_quote_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_quote_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<juster_quote_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (juster_quote_stddev_samp_fieldsObservableChain & {get: <R extends juster_quote_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_quote_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<juster_quote_stddev_samp_fields, R> | undefined)>}),
    sum: (juster_quote_sum_fieldsObservableChain & {get: <R extends juster_quote_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_quote_sum_fields, R> | undefined)) => Observable<(FieldsSelection<juster_quote_sum_fields, R> | undefined)>}),
    var_pop: (juster_quote_var_pop_fieldsObservableChain & {get: <R extends juster_quote_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_quote_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<juster_quote_var_pop_fields, R> | undefined)>}),
    var_samp: (juster_quote_var_samp_fieldsObservableChain & {get: <R extends juster_quote_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_quote_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<juster_quote_var_samp_fields, R> | undefined)>}),
    variance: (juster_quote_variance_fieldsObservableChain & {get: <R extends juster_quote_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_quote_variance_fields, R> | undefined)) => Observable<(FieldsSelection<juster_quote_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface juster_quote_avg_fieldsPromiseChain{
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface juster_quote_avg_fieldsObservableChain{
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface juster_quote_max_fieldsPromiseChain{
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate max on columns */
export interface juster_quote_max_fieldsObservableChain{
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface juster_quote_min_fieldsPromiseChain{
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface juster_quote_min_fieldsObservableChain{
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate stddev on columns */
export interface juster_quote_stddev_fieldsPromiseChain{
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface juster_quote_stddev_fieldsObservableChain{
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface juster_quote_stddev_pop_fieldsPromiseChain{
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface juster_quote_stddev_pop_fieldsObservableChain{
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface juster_quote_stddev_samp_fieldsPromiseChain{
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface juster_quote_stddev_samp_fieldsObservableChain{
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface juster_quote_sum_fieldsPromiseChain{
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>})
}


/** aggregate sum on columns */
export interface juster_quote_sum_fieldsObservableChain{
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface juster_quote_var_pop_fieldsPromiseChain{
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface juster_quote_var_pop_fieldsObservableChain{
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface juster_quote_var_samp_fieldsPromiseChain{
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface juster_quote_var_samp_fieldsObservableChain{
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface juster_quote_variance_fieldsPromiseChain{
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface juster_quote_variance_fieldsObservableChain{
    currency_pair_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** columns and relationships of "juster.user" */
export interface juster_userPromiseChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An array relationship */
bets: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_bet_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_bet_order_by[] | null),
/** filter the rows returned */
where?: (juster_bet_bool_exp | null)}) => {get: <R extends juster_betRequest>(request: R, defaultValue?: FieldsSelection<juster_bet, R>[]) => Promise<FieldsSelection<juster_bet, R>[]>})&({get: <R extends juster_betRequest>(request: R, defaultValue?: FieldsSelection<juster_bet, R>[]) => Promise<FieldsSelection<juster_bet, R>[]>}),
    
/** An aggregated array relationship */
bets_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_bet_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_bet_order_by[] | null),
/** filter the rows returned */
where?: (juster_bet_bool_exp | null)}) => juster_bet_aggregatePromiseChain & {get: <R extends juster_bet_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_bet_aggregate, R>) => Promise<FieldsSelection<juster_bet_aggregate, R>>})&(juster_bet_aggregatePromiseChain & {get: <R extends juster_bet_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_bet_aggregate, R>) => Promise<FieldsSelection<juster_bet_aggregate, R>>}),
    
/** An array relationship */
deposits: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_deposit_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_deposit_order_by[] | null),
/** filter the rows returned */
where?: (juster_deposit_bool_exp | null)}) => {get: <R extends juster_depositRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit, R>[]) => Promise<FieldsSelection<juster_deposit, R>[]>})&({get: <R extends juster_depositRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit, R>[]) => Promise<FieldsSelection<juster_deposit, R>[]>}),
    
/** An aggregated array relationship */
deposits_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_deposit_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_deposit_order_by[] | null),
/** filter the rows returned */
where?: (juster_deposit_bool_exp | null)}) => juster_deposit_aggregatePromiseChain & {get: <R extends juster_deposit_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit_aggregate, R>) => Promise<FieldsSelection<juster_deposit_aggregate, R>>})&(juster_deposit_aggregatePromiseChain & {get: <R extends juster_deposit_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit_aggregate, R>) => Promise<FieldsSelection<juster_deposit_aggregate, R>>}),
    
/** An array relationship */
positions: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_position_order_by[] | null),
/** filter the rows returned */
where?: (juster_position_bool_exp | null)}) => {get: <R extends juster_positionRequest>(request: R, defaultValue?: FieldsSelection<juster_position, R>[]) => Promise<FieldsSelection<juster_position, R>[]>})&({get: <R extends juster_positionRequest>(request: R, defaultValue?: FieldsSelection<juster_position, R>[]) => Promise<FieldsSelection<juster_position, R>[]>}),
    
/** An aggregated array relationship */
positions_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_position_order_by[] | null),
/** filter the rows returned */
where?: (juster_position_bool_exp | null)}) => juster_position_aggregatePromiseChain & {get: <R extends juster_position_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_position_aggregate, R>) => Promise<FieldsSelection<juster_position_aggregate, R>>})&(juster_position_aggregatePromiseChain & {get: <R extends juster_position_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_position_aggregate, R>) => Promise<FieldsSelection<juster_position_aggregate, R>>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    total_bets_count: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    total_fees_collected: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    total_reward: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    total_withdrawn: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    
/** An array relationship */
withdrawals: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_withdrawal_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_withdrawal_order_by[] | null),
/** filter the rows returned */
where?: (juster_withdrawal_bool_exp | null)}) => {get: <R extends juster_withdrawalRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal, R>[]) => Promise<FieldsSelection<juster_withdrawal, R>[]>})&({get: <R extends juster_withdrawalRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal, R>[]) => Promise<FieldsSelection<juster_withdrawal, R>[]>}),
    
/** An aggregated array relationship */
withdrawals_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_withdrawal_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_withdrawal_order_by[] | null),
/** filter the rows returned */
where?: (juster_withdrawal_bool_exp | null)}) => juster_withdrawal_aggregatePromiseChain & {get: <R extends juster_withdrawal_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal_aggregate, R>) => Promise<FieldsSelection<juster_withdrawal_aggregate, R>>})&(juster_withdrawal_aggregatePromiseChain & {get: <R extends juster_withdrawal_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal_aggregate, R>) => Promise<FieldsSelection<juster_withdrawal_aggregate, R>>})
}


/** columns and relationships of "juster.user" */
export interface juster_userObservableChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An array relationship */
bets: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_bet_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_bet_order_by[] | null),
/** filter the rows returned */
where?: (juster_bet_bool_exp | null)}) => {get: <R extends juster_betRequest>(request: R, defaultValue?: FieldsSelection<juster_bet, R>[]) => Observable<FieldsSelection<juster_bet, R>[]>})&({get: <R extends juster_betRequest>(request: R, defaultValue?: FieldsSelection<juster_bet, R>[]) => Observable<FieldsSelection<juster_bet, R>[]>}),
    
/** An aggregated array relationship */
bets_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_bet_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_bet_order_by[] | null),
/** filter the rows returned */
where?: (juster_bet_bool_exp | null)}) => juster_bet_aggregateObservableChain & {get: <R extends juster_bet_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_bet_aggregate, R>) => Observable<FieldsSelection<juster_bet_aggregate, R>>})&(juster_bet_aggregateObservableChain & {get: <R extends juster_bet_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_bet_aggregate, R>) => Observable<FieldsSelection<juster_bet_aggregate, R>>}),
    
/** An array relationship */
deposits: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_deposit_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_deposit_order_by[] | null),
/** filter the rows returned */
where?: (juster_deposit_bool_exp | null)}) => {get: <R extends juster_depositRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit, R>[]) => Observable<FieldsSelection<juster_deposit, R>[]>})&({get: <R extends juster_depositRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit, R>[]) => Observable<FieldsSelection<juster_deposit, R>[]>}),
    
/** An aggregated array relationship */
deposits_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_deposit_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_deposit_order_by[] | null),
/** filter the rows returned */
where?: (juster_deposit_bool_exp | null)}) => juster_deposit_aggregateObservableChain & {get: <R extends juster_deposit_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit_aggregate, R>) => Observable<FieldsSelection<juster_deposit_aggregate, R>>})&(juster_deposit_aggregateObservableChain & {get: <R extends juster_deposit_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit_aggregate, R>) => Observable<FieldsSelection<juster_deposit_aggregate, R>>}),
    
/** An array relationship */
positions: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_position_order_by[] | null),
/** filter the rows returned */
where?: (juster_position_bool_exp | null)}) => {get: <R extends juster_positionRequest>(request: R, defaultValue?: FieldsSelection<juster_position, R>[]) => Observable<FieldsSelection<juster_position, R>[]>})&({get: <R extends juster_positionRequest>(request: R, defaultValue?: FieldsSelection<juster_position, R>[]) => Observable<FieldsSelection<juster_position, R>[]>}),
    
/** An aggregated array relationship */
positions_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_position_order_by[] | null),
/** filter the rows returned */
where?: (juster_position_bool_exp | null)}) => juster_position_aggregateObservableChain & {get: <R extends juster_position_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_position_aggregate, R>) => Observable<FieldsSelection<juster_position_aggregate, R>>})&(juster_position_aggregateObservableChain & {get: <R extends juster_position_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_position_aggregate, R>) => Observable<FieldsSelection<juster_position_aggregate, R>>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    total_bets_count: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    total_fees_collected: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    total_reward: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    total_withdrawn: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    
/** An array relationship */
withdrawals: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_withdrawal_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_withdrawal_order_by[] | null),
/** filter the rows returned */
where?: (juster_withdrawal_bool_exp | null)}) => {get: <R extends juster_withdrawalRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal, R>[]) => Observable<FieldsSelection<juster_withdrawal, R>[]>})&({get: <R extends juster_withdrawalRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal, R>[]) => Observable<FieldsSelection<juster_withdrawal, R>[]>}),
    
/** An aggregated array relationship */
withdrawals_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_withdrawal_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_withdrawal_order_by[] | null),
/** filter the rows returned */
where?: (juster_withdrawal_bool_exp | null)}) => juster_withdrawal_aggregateObservableChain & {get: <R extends juster_withdrawal_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal_aggregate, R>) => Observable<FieldsSelection<juster_withdrawal_aggregate, R>>})&(juster_withdrawal_aggregateObservableChain & {get: <R extends juster_withdrawal_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal_aggregate, R>) => Observable<FieldsSelection<juster_withdrawal_aggregate, R>>})
}


/** aggregated selection of "juster.user" */
export interface juster_user_aggregatePromiseChain{
    aggregate: (juster_user_aggregate_fieldsPromiseChain & {get: <R extends juster_user_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_user_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<juster_user_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends juster_userRequest>(request: R, defaultValue?: FieldsSelection<juster_user, R>[]) => Promise<FieldsSelection<juster_user, R>[]>})
}


/** aggregated selection of "juster.user" */
export interface juster_user_aggregateObservableChain{
    aggregate: (juster_user_aggregate_fieldsObservableChain & {get: <R extends juster_user_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_user_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<juster_user_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends juster_userRequest>(request: R, defaultValue?: FieldsSelection<juster_user, R>[]) => Observable<FieldsSelection<juster_user, R>[]>})
}


/** aggregate fields of "juster.user" */
export interface juster_user_aggregate_fieldsPromiseChain{
    avg: (juster_user_avg_fieldsPromiseChain & {get: <R extends juster_user_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_user_avg_fields, R> | undefined)) => Promise<(FieldsSelection<juster_user_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (juster_user_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    max: (juster_user_max_fieldsPromiseChain & {get: <R extends juster_user_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_user_max_fields, R> | undefined)) => Promise<(FieldsSelection<juster_user_max_fields, R> | undefined)>}),
    min: (juster_user_min_fieldsPromiseChain & {get: <R extends juster_user_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_user_min_fields, R> | undefined)) => Promise<(FieldsSelection<juster_user_min_fields, R> | undefined)>}),
    stddev: (juster_user_stddev_fieldsPromiseChain & {get: <R extends juster_user_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_user_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<juster_user_stddev_fields, R> | undefined)>}),
    stddev_pop: (juster_user_stddev_pop_fieldsPromiseChain & {get: <R extends juster_user_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_user_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<juster_user_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (juster_user_stddev_samp_fieldsPromiseChain & {get: <R extends juster_user_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_user_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<juster_user_stddev_samp_fields, R> | undefined)>}),
    sum: (juster_user_sum_fieldsPromiseChain & {get: <R extends juster_user_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_user_sum_fields, R> | undefined)) => Promise<(FieldsSelection<juster_user_sum_fields, R> | undefined)>}),
    var_pop: (juster_user_var_pop_fieldsPromiseChain & {get: <R extends juster_user_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_user_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<juster_user_var_pop_fields, R> | undefined)>}),
    var_samp: (juster_user_var_samp_fieldsPromiseChain & {get: <R extends juster_user_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_user_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<juster_user_var_samp_fields, R> | undefined)>}),
    variance: (juster_user_variance_fieldsPromiseChain & {get: <R extends juster_user_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_user_variance_fields, R> | undefined)) => Promise<(FieldsSelection<juster_user_variance_fields, R> | undefined)>})
}


/** aggregate fields of "juster.user" */
export interface juster_user_aggregate_fieldsObservableChain{
    avg: (juster_user_avg_fieldsObservableChain & {get: <R extends juster_user_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_user_avg_fields, R> | undefined)) => Observable<(FieldsSelection<juster_user_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (juster_user_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    max: (juster_user_max_fieldsObservableChain & {get: <R extends juster_user_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_user_max_fields, R> | undefined)) => Observable<(FieldsSelection<juster_user_max_fields, R> | undefined)>}),
    min: (juster_user_min_fieldsObservableChain & {get: <R extends juster_user_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_user_min_fields, R> | undefined)) => Observable<(FieldsSelection<juster_user_min_fields, R> | undefined)>}),
    stddev: (juster_user_stddev_fieldsObservableChain & {get: <R extends juster_user_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_user_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<juster_user_stddev_fields, R> | undefined)>}),
    stddev_pop: (juster_user_stddev_pop_fieldsObservableChain & {get: <R extends juster_user_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_user_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<juster_user_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (juster_user_stddev_samp_fieldsObservableChain & {get: <R extends juster_user_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_user_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<juster_user_stddev_samp_fields, R> | undefined)>}),
    sum: (juster_user_sum_fieldsObservableChain & {get: <R extends juster_user_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_user_sum_fields, R> | undefined)) => Observable<(FieldsSelection<juster_user_sum_fields, R> | undefined)>}),
    var_pop: (juster_user_var_pop_fieldsObservableChain & {get: <R extends juster_user_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_user_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<juster_user_var_pop_fields, R> | undefined)>}),
    var_samp: (juster_user_var_samp_fieldsObservableChain & {get: <R extends juster_user_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_user_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<juster_user_var_samp_fields, R> | undefined)>}),
    variance: (juster_user_variance_fieldsObservableChain & {get: <R extends juster_user_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_user_variance_fields, R> | undefined)) => Observable<(FieldsSelection<juster_user_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface juster_user_avg_fieldsPromiseChain{
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_bets_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_fees_collected: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_withdrawn: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface juster_user_avg_fieldsObservableChain{
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_bets_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_fees_collected: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_withdrawn: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface juster_user_max_fieldsPromiseChain{
    address: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    total_bets_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    total_fees_collected: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    total_reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    total_withdrawn: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>})
}


/** aggregate max on columns */
export interface juster_user_max_fieldsObservableChain{
    address: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    total_bets_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    total_fees_collected: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    total_reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    total_withdrawn: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>})
}


/** aggregate min on columns */
export interface juster_user_min_fieldsPromiseChain{
    address: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    total_bets_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    total_fees_collected: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    total_reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    total_withdrawn: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>})
}


/** aggregate min on columns */
export interface juster_user_min_fieldsObservableChain{
    address: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    total_bets_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    total_fees_collected: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    total_reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    total_withdrawn: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>})
}


/** aggregate stddev on columns */
export interface juster_user_stddev_fieldsPromiseChain{
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_bets_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_fees_collected: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_withdrawn: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface juster_user_stddev_fieldsObservableChain{
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_bets_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_fees_collected: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_withdrawn: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface juster_user_stddev_pop_fieldsPromiseChain{
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_bets_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_fees_collected: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_withdrawn: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface juster_user_stddev_pop_fieldsObservableChain{
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_bets_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_fees_collected: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_withdrawn: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface juster_user_stddev_samp_fieldsPromiseChain{
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_bets_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_fees_collected: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_withdrawn: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface juster_user_stddev_samp_fieldsObservableChain{
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_bets_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_fees_collected: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_withdrawn: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface juster_user_sum_fieldsPromiseChain{
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    total_bets_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    total_fees_collected: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    total_reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    total_withdrawn: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>})
}


/** aggregate sum on columns */
export interface juster_user_sum_fieldsObservableChain{
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    total_bets_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    total_fees_collected: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    total_reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    total_withdrawn: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface juster_user_var_pop_fieldsPromiseChain{
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_bets_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_fees_collected: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_withdrawn: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface juster_user_var_pop_fieldsObservableChain{
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_bets_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_fees_collected: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_withdrawn: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface juster_user_var_samp_fieldsPromiseChain{
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_bets_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_fees_collected: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_withdrawn: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface juster_user_var_samp_fieldsObservableChain{
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_bets_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_fees_collected: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_withdrawn: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface juster_user_variance_fieldsPromiseChain{
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_bets_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_fees_collected: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    total_withdrawn: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface juster_user_variance_fieldsObservableChain{
    total_bets_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_bets_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_fees_collected: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_liquidity_provided: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_reward: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    total_withdrawn: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** columns and relationships of "juster.withdrawal" */
export interface juster_withdrawalPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    
/** An object relationship */
event: (juster_eventPromiseChain & {get: <R extends juster_eventRequest>(request: R, defaultValue?: FieldsSelection<juster_event, R>) => Promise<FieldsSelection<juster_event, R>>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** An object relationship */
user: (juster_userPromiseChain & {get: <R extends juster_userRequest>(request: R, defaultValue?: FieldsSelection<juster_user, R>) => Promise<FieldsSelection<juster_user, R>>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "juster.withdrawal" */
export interface juster_withdrawalObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    
/** An object relationship */
event: (juster_eventObservableChain & {get: <R extends juster_eventRequest>(request: R, defaultValue?: FieldsSelection<juster_event, R>) => Observable<FieldsSelection<juster_event, R>>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** An object relationship */
user: (juster_userObservableChain & {get: <R extends juster_userRequest>(request: R, defaultValue?: FieldsSelection<juster_user, R>) => Observable<FieldsSelection<juster_user, R>>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** aggregated selection of "juster.withdrawal" */
export interface juster_withdrawal_aggregatePromiseChain{
    aggregate: (juster_withdrawal_aggregate_fieldsPromiseChain & {get: <R extends juster_withdrawal_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_withdrawal_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<juster_withdrawal_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends juster_withdrawalRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal, R>[]) => Promise<FieldsSelection<juster_withdrawal, R>[]>})
}


/** aggregated selection of "juster.withdrawal" */
export interface juster_withdrawal_aggregateObservableChain{
    aggregate: (juster_withdrawal_aggregate_fieldsObservableChain & {get: <R extends juster_withdrawal_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_withdrawal_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<juster_withdrawal_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends juster_withdrawalRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal, R>[]) => Observable<FieldsSelection<juster_withdrawal, R>[]>})
}


/** aggregate fields of "juster.withdrawal" */
export interface juster_withdrawal_aggregate_fieldsPromiseChain{
    avg: (juster_withdrawal_avg_fieldsPromiseChain & {get: <R extends juster_withdrawal_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_withdrawal_avg_fields, R> | undefined)) => Promise<(FieldsSelection<juster_withdrawal_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (juster_withdrawal_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    max: (juster_withdrawal_max_fieldsPromiseChain & {get: <R extends juster_withdrawal_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_withdrawal_max_fields, R> | undefined)) => Promise<(FieldsSelection<juster_withdrawal_max_fields, R> | undefined)>}),
    min: (juster_withdrawal_min_fieldsPromiseChain & {get: <R extends juster_withdrawal_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_withdrawal_min_fields, R> | undefined)) => Promise<(FieldsSelection<juster_withdrawal_min_fields, R> | undefined)>}),
    stddev: (juster_withdrawal_stddev_fieldsPromiseChain & {get: <R extends juster_withdrawal_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_withdrawal_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<juster_withdrawal_stddev_fields, R> | undefined)>}),
    stddev_pop: (juster_withdrawal_stddev_pop_fieldsPromiseChain & {get: <R extends juster_withdrawal_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_withdrawal_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<juster_withdrawal_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (juster_withdrawal_stddev_samp_fieldsPromiseChain & {get: <R extends juster_withdrawal_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_withdrawal_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<juster_withdrawal_stddev_samp_fields, R> | undefined)>}),
    sum: (juster_withdrawal_sum_fieldsPromiseChain & {get: <R extends juster_withdrawal_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_withdrawal_sum_fields, R> | undefined)) => Promise<(FieldsSelection<juster_withdrawal_sum_fields, R> | undefined)>}),
    var_pop: (juster_withdrawal_var_pop_fieldsPromiseChain & {get: <R extends juster_withdrawal_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_withdrawal_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<juster_withdrawal_var_pop_fields, R> | undefined)>}),
    var_samp: (juster_withdrawal_var_samp_fieldsPromiseChain & {get: <R extends juster_withdrawal_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_withdrawal_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<juster_withdrawal_var_samp_fields, R> | undefined)>}),
    variance: (juster_withdrawal_variance_fieldsPromiseChain & {get: <R extends juster_withdrawal_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_withdrawal_variance_fields, R> | undefined)) => Promise<(FieldsSelection<juster_withdrawal_variance_fields, R> | undefined)>})
}


/** aggregate fields of "juster.withdrawal" */
export interface juster_withdrawal_aggregate_fieldsObservableChain{
    avg: (juster_withdrawal_avg_fieldsObservableChain & {get: <R extends juster_withdrawal_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_withdrawal_avg_fields, R> | undefined)) => Observable<(FieldsSelection<juster_withdrawal_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (juster_withdrawal_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    max: (juster_withdrawal_max_fieldsObservableChain & {get: <R extends juster_withdrawal_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_withdrawal_max_fields, R> | undefined)) => Observable<(FieldsSelection<juster_withdrawal_max_fields, R> | undefined)>}),
    min: (juster_withdrawal_min_fieldsObservableChain & {get: <R extends juster_withdrawal_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_withdrawal_min_fields, R> | undefined)) => Observable<(FieldsSelection<juster_withdrawal_min_fields, R> | undefined)>}),
    stddev: (juster_withdrawal_stddev_fieldsObservableChain & {get: <R extends juster_withdrawal_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_withdrawal_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<juster_withdrawal_stddev_fields, R> | undefined)>}),
    stddev_pop: (juster_withdrawal_stddev_pop_fieldsObservableChain & {get: <R extends juster_withdrawal_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_withdrawal_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<juster_withdrawal_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (juster_withdrawal_stddev_samp_fieldsObservableChain & {get: <R extends juster_withdrawal_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_withdrawal_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<juster_withdrawal_stddev_samp_fields, R> | undefined)>}),
    sum: (juster_withdrawal_sum_fieldsObservableChain & {get: <R extends juster_withdrawal_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_withdrawal_sum_fields, R> | undefined)) => Observable<(FieldsSelection<juster_withdrawal_sum_fields, R> | undefined)>}),
    var_pop: (juster_withdrawal_var_pop_fieldsObservableChain & {get: <R extends juster_withdrawal_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_withdrawal_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<juster_withdrawal_var_pop_fields, R> | undefined)>}),
    var_samp: (juster_withdrawal_var_samp_fieldsObservableChain & {get: <R extends juster_withdrawal_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_withdrawal_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<juster_withdrawal_var_samp_fields, R> | undefined)>}),
    variance: (juster_withdrawal_variance_fieldsObservableChain & {get: <R extends juster_withdrawal_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<juster_withdrawal_variance_fields, R> | undefined)) => Observable<(FieldsSelection<juster_withdrawal_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface juster_withdrawal_avg_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface juster_withdrawal_avg_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface juster_withdrawal_max_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate max on columns */
export interface juster_withdrawal_max_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface juster_withdrawal_min_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface juster_withdrawal_min_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate stddev on columns */
export interface juster_withdrawal_stddev_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface juster_withdrawal_stddev_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface juster_withdrawal_stddev_pop_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface juster_withdrawal_stddev_pop_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface juster_withdrawal_stddev_samp_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface juster_withdrawal_stddev_samp_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface juster_withdrawal_sum_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate sum on columns */
export interface juster_withdrawal_sum_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface juster_withdrawal_var_pop_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface juster_withdrawal_var_pop_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface juster_withdrawal_var_samp_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface juster_withdrawal_var_samp_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface juster_withdrawal_variance_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface juster_withdrawal_variance_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    event_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** query root */
export interface query_rootPromiseChain{
    
/** fetch data from the table: "juster.bet" */
juster_bet: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_bet_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_bet_order_by[] | null),
/** filter the rows returned */
where?: (juster_bet_bool_exp | null)}) => {get: <R extends juster_betRequest>(request: R, defaultValue?: FieldsSelection<juster_bet, R>[]) => Promise<FieldsSelection<juster_bet, R>[]>})&({get: <R extends juster_betRequest>(request: R, defaultValue?: FieldsSelection<juster_bet, R>[]) => Promise<FieldsSelection<juster_bet, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.bet" */
juster_bet_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_bet_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_bet_order_by[] | null),
/** filter the rows returned */
where?: (juster_bet_bool_exp | null)}) => juster_bet_aggregatePromiseChain & {get: <R extends juster_bet_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_bet_aggregate, R>) => Promise<FieldsSelection<juster_bet_aggregate, R>>})&(juster_bet_aggregatePromiseChain & {get: <R extends juster_bet_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_bet_aggregate, R>) => Promise<FieldsSelection<juster_bet_aggregate, R>>}),
    
/** fetch data from the table: "juster.bet" using primary key columns */
juster_bet_by_pk: ((args: {id: Scalars['Int']}) => juster_betPromiseChain & {get: <R extends juster_betRequest>(request: R, defaultValue?: (FieldsSelection<juster_bet, R> | undefined)) => Promise<(FieldsSelection<juster_bet, R> | undefined)>}),
    
/** fetch data from the table: "juster.currencypair" */
juster_currencypair: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_currencypair_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_currencypair_order_by[] | null),
/** filter the rows returned */
where?: (juster_currencypair_bool_exp | null)}) => {get: <R extends juster_currencypairRequest>(request: R, defaultValue?: FieldsSelection<juster_currencypair, R>[]) => Promise<FieldsSelection<juster_currencypair, R>[]>})&({get: <R extends juster_currencypairRequest>(request: R, defaultValue?: FieldsSelection<juster_currencypair, R>[]) => Promise<FieldsSelection<juster_currencypair, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.currencypair" */
juster_currencypair_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_currencypair_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_currencypair_order_by[] | null),
/** filter the rows returned */
where?: (juster_currencypair_bool_exp | null)}) => juster_currencypair_aggregatePromiseChain & {get: <R extends juster_currencypair_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_currencypair_aggregate, R>) => Promise<FieldsSelection<juster_currencypair_aggregate, R>>})&(juster_currencypair_aggregatePromiseChain & {get: <R extends juster_currencypair_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_currencypair_aggregate, R>) => Promise<FieldsSelection<juster_currencypair_aggregate, R>>}),
    
/** fetch data from the table: "juster.currencypair" using primary key columns */
juster_currencypair_by_pk: ((args: {id: Scalars['Int']}) => juster_currencypairPromiseChain & {get: <R extends juster_currencypairRequest>(request: R, defaultValue?: (FieldsSelection<juster_currencypair, R> | undefined)) => Promise<(FieldsSelection<juster_currencypair, R> | undefined)>}),
    
/** fetch data from the table: "juster.deposit" */
juster_deposit: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_deposit_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_deposit_order_by[] | null),
/** filter the rows returned */
where?: (juster_deposit_bool_exp | null)}) => {get: <R extends juster_depositRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit, R>[]) => Promise<FieldsSelection<juster_deposit, R>[]>})&({get: <R extends juster_depositRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit, R>[]) => Promise<FieldsSelection<juster_deposit, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.deposit" */
juster_deposit_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_deposit_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_deposit_order_by[] | null),
/** filter the rows returned */
where?: (juster_deposit_bool_exp | null)}) => juster_deposit_aggregatePromiseChain & {get: <R extends juster_deposit_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit_aggregate, R>) => Promise<FieldsSelection<juster_deposit_aggregate, R>>})&(juster_deposit_aggregatePromiseChain & {get: <R extends juster_deposit_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit_aggregate, R>) => Promise<FieldsSelection<juster_deposit_aggregate, R>>}),
    
/** fetch data from the table: "juster.deposit" using primary key columns */
juster_deposit_by_pk: ((args: {id: Scalars['Int']}) => juster_depositPromiseChain & {get: <R extends juster_depositRequest>(request: R, defaultValue?: (FieldsSelection<juster_deposit, R> | undefined)) => Promise<(FieldsSelection<juster_deposit, R> | undefined)>}),
    
/** fetch data from the table: "juster.dipdup_state" */
juster_dipdup_state: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_dipdup_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_dipdup_state_order_by[] | null),
/** filter the rows returned */
where?: (juster_dipdup_state_bool_exp | null)}) => {get: <R extends juster_dipdup_stateRequest>(request: R, defaultValue?: FieldsSelection<juster_dipdup_state, R>[]) => Promise<FieldsSelection<juster_dipdup_state, R>[]>})&({get: <R extends juster_dipdup_stateRequest>(request: R, defaultValue?: FieldsSelection<juster_dipdup_state, R>[]) => Promise<FieldsSelection<juster_dipdup_state, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.dipdup_state" */
juster_dipdup_state_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_dipdup_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_dipdup_state_order_by[] | null),
/** filter the rows returned */
where?: (juster_dipdup_state_bool_exp | null)}) => juster_dipdup_state_aggregatePromiseChain & {get: <R extends juster_dipdup_state_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_dipdup_state_aggregate, R>) => Promise<FieldsSelection<juster_dipdup_state_aggregate, R>>})&(juster_dipdup_state_aggregatePromiseChain & {get: <R extends juster_dipdup_state_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_dipdup_state_aggregate, R>) => Promise<FieldsSelection<juster_dipdup_state_aggregate, R>>}),
    
/** fetch data from the table: "juster.dipdup_state" using primary key columns */
juster_dipdup_state_by_pk: ((args: {id: Scalars['Int']}) => juster_dipdup_statePromiseChain & {get: <R extends juster_dipdup_stateRequest>(request: R, defaultValue?: (FieldsSelection<juster_dipdup_state, R> | undefined)) => Promise<(FieldsSelection<juster_dipdup_state, R> | undefined)>}),
    
/** fetch data from the table: "juster.event" */
juster_event: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_event_order_by[] | null),
/** filter the rows returned */
where?: (juster_event_bool_exp | null)}) => {get: <R extends juster_eventRequest>(request: R, defaultValue?: FieldsSelection<juster_event, R>[]) => Promise<FieldsSelection<juster_event, R>[]>})&({get: <R extends juster_eventRequest>(request: R, defaultValue?: FieldsSelection<juster_event, R>[]) => Promise<FieldsSelection<juster_event, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.event" */
juster_event_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_event_order_by[] | null),
/** filter the rows returned */
where?: (juster_event_bool_exp | null)}) => juster_event_aggregatePromiseChain & {get: <R extends juster_event_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_event_aggregate, R>) => Promise<FieldsSelection<juster_event_aggregate, R>>})&(juster_event_aggregatePromiseChain & {get: <R extends juster_event_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_event_aggregate, R>) => Promise<FieldsSelection<juster_event_aggregate, R>>}),
    
/** fetch data from the table: "juster.event" using primary key columns */
juster_event_by_pk: ((args: {id: Scalars['Int']}) => juster_eventPromiseChain & {get: <R extends juster_eventRequest>(request: R, defaultValue?: (FieldsSelection<juster_event, R> | undefined)) => Promise<(FieldsSelection<juster_event, R> | undefined)>}),
    
/** fetch data from the table: "juster.position" */
juster_position: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_position_order_by[] | null),
/** filter the rows returned */
where?: (juster_position_bool_exp | null)}) => {get: <R extends juster_positionRequest>(request: R, defaultValue?: FieldsSelection<juster_position, R>[]) => Promise<FieldsSelection<juster_position, R>[]>})&({get: <R extends juster_positionRequest>(request: R, defaultValue?: FieldsSelection<juster_position, R>[]) => Promise<FieldsSelection<juster_position, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.position" */
juster_position_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_position_order_by[] | null),
/** filter the rows returned */
where?: (juster_position_bool_exp | null)}) => juster_position_aggregatePromiseChain & {get: <R extends juster_position_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_position_aggregate, R>) => Promise<FieldsSelection<juster_position_aggregate, R>>})&(juster_position_aggregatePromiseChain & {get: <R extends juster_position_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_position_aggregate, R>) => Promise<FieldsSelection<juster_position_aggregate, R>>}),
    
/** fetch data from the table: "juster.position" using primary key columns */
juster_position_by_pk: ((args: {id: Scalars['Int']}) => juster_positionPromiseChain & {get: <R extends juster_positionRequest>(request: R, defaultValue?: (FieldsSelection<juster_position, R> | undefined)) => Promise<(FieldsSelection<juster_position, R> | undefined)>}),
    
/** fetch data from the table: "juster.quote" */
juster_quote: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_quote_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_quote_order_by[] | null),
/** filter the rows returned */
where?: (juster_quote_bool_exp | null)}) => {get: <R extends juster_quoteRequest>(request: R, defaultValue?: FieldsSelection<juster_quote, R>[]) => Promise<FieldsSelection<juster_quote, R>[]>})&({get: <R extends juster_quoteRequest>(request: R, defaultValue?: FieldsSelection<juster_quote, R>[]) => Promise<FieldsSelection<juster_quote, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.quote" */
juster_quote_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_quote_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_quote_order_by[] | null),
/** filter the rows returned */
where?: (juster_quote_bool_exp | null)}) => juster_quote_aggregatePromiseChain & {get: <R extends juster_quote_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_quote_aggregate, R>) => Promise<FieldsSelection<juster_quote_aggregate, R>>})&(juster_quote_aggregatePromiseChain & {get: <R extends juster_quote_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_quote_aggregate, R>) => Promise<FieldsSelection<juster_quote_aggregate, R>>}),
    
/** fetch data from the table: "juster.quote" using primary key columns */
juster_quote_by_pk: ((args: {id: Scalars['Int']}) => juster_quotePromiseChain & {get: <R extends juster_quoteRequest>(request: R, defaultValue?: (FieldsSelection<juster_quote, R> | undefined)) => Promise<(FieldsSelection<juster_quote, R> | undefined)>}),
    
/** fetch data from the table: "juster.user" */
juster_user: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_user_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_user_order_by[] | null),
/** filter the rows returned */
where?: (juster_user_bool_exp | null)}) => {get: <R extends juster_userRequest>(request: R, defaultValue?: FieldsSelection<juster_user, R>[]) => Promise<FieldsSelection<juster_user, R>[]>})&({get: <R extends juster_userRequest>(request: R, defaultValue?: FieldsSelection<juster_user, R>[]) => Promise<FieldsSelection<juster_user, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.user" */
juster_user_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_user_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_user_order_by[] | null),
/** filter the rows returned */
where?: (juster_user_bool_exp | null)}) => juster_user_aggregatePromiseChain & {get: <R extends juster_user_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_user_aggregate, R>) => Promise<FieldsSelection<juster_user_aggregate, R>>})&(juster_user_aggregatePromiseChain & {get: <R extends juster_user_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_user_aggregate, R>) => Promise<FieldsSelection<juster_user_aggregate, R>>}),
    
/** fetch data from the table: "juster.user" using primary key columns */
juster_user_by_pk: ((args: {address: Scalars['String']}) => juster_userPromiseChain & {get: <R extends juster_userRequest>(request: R, defaultValue?: (FieldsSelection<juster_user, R> | undefined)) => Promise<(FieldsSelection<juster_user, R> | undefined)>}),
    
/** fetch data from the table: "juster.withdrawal" */
juster_withdrawal: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_withdrawal_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_withdrawal_order_by[] | null),
/** filter the rows returned */
where?: (juster_withdrawal_bool_exp | null)}) => {get: <R extends juster_withdrawalRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal, R>[]) => Promise<FieldsSelection<juster_withdrawal, R>[]>})&({get: <R extends juster_withdrawalRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal, R>[]) => Promise<FieldsSelection<juster_withdrawal, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.withdrawal" */
juster_withdrawal_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_withdrawal_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_withdrawal_order_by[] | null),
/** filter the rows returned */
where?: (juster_withdrawal_bool_exp | null)}) => juster_withdrawal_aggregatePromiseChain & {get: <R extends juster_withdrawal_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal_aggregate, R>) => Promise<FieldsSelection<juster_withdrawal_aggregate, R>>})&(juster_withdrawal_aggregatePromiseChain & {get: <R extends juster_withdrawal_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal_aggregate, R>) => Promise<FieldsSelection<juster_withdrawal_aggregate, R>>}),
    
/** fetch data from the table: "juster.withdrawal" using primary key columns */
juster_withdrawal_by_pk: ((args: {id: Scalars['Int']}) => juster_withdrawalPromiseChain & {get: <R extends juster_withdrawalRequest>(request: R, defaultValue?: (FieldsSelection<juster_withdrawal, R> | undefined)) => Promise<(FieldsSelection<juster_withdrawal, R> | undefined)>})
}


/** query root */
export interface query_rootObservableChain{
    
/** fetch data from the table: "juster.bet" */
juster_bet: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_bet_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_bet_order_by[] | null),
/** filter the rows returned */
where?: (juster_bet_bool_exp | null)}) => {get: <R extends juster_betRequest>(request: R, defaultValue?: FieldsSelection<juster_bet, R>[]) => Observable<FieldsSelection<juster_bet, R>[]>})&({get: <R extends juster_betRequest>(request: R, defaultValue?: FieldsSelection<juster_bet, R>[]) => Observable<FieldsSelection<juster_bet, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.bet" */
juster_bet_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_bet_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_bet_order_by[] | null),
/** filter the rows returned */
where?: (juster_bet_bool_exp | null)}) => juster_bet_aggregateObservableChain & {get: <R extends juster_bet_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_bet_aggregate, R>) => Observable<FieldsSelection<juster_bet_aggregate, R>>})&(juster_bet_aggregateObservableChain & {get: <R extends juster_bet_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_bet_aggregate, R>) => Observable<FieldsSelection<juster_bet_aggregate, R>>}),
    
/** fetch data from the table: "juster.bet" using primary key columns */
juster_bet_by_pk: ((args: {id: Scalars['Int']}) => juster_betObservableChain & {get: <R extends juster_betRequest>(request: R, defaultValue?: (FieldsSelection<juster_bet, R> | undefined)) => Observable<(FieldsSelection<juster_bet, R> | undefined)>}),
    
/** fetch data from the table: "juster.currencypair" */
juster_currencypair: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_currencypair_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_currencypair_order_by[] | null),
/** filter the rows returned */
where?: (juster_currencypair_bool_exp | null)}) => {get: <R extends juster_currencypairRequest>(request: R, defaultValue?: FieldsSelection<juster_currencypair, R>[]) => Observable<FieldsSelection<juster_currencypair, R>[]>})&({get: <R extends juster_currencypairRequest>(request: R, defaultValue?: FieldsSelection<juster_currencypair, R>[]) => Observable<FieldsSelection<juster_currencypair, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.currencypair" */
juster_currencypair_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_currencypair_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_currencypair_order_by[] | null),
/** filter the rows returned */
where?: (juster_currencypair_bool_exp | null)}) => juster_currencypair_aggregateObservableChain & {get: <R extends juster_currencypair_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_currencypair_aggregate, R>) => Observable<FieldsSelection<juster_currencypair_aggregate, R>>})&(juster_currencypair_aggregateObservableChain & {get: <R extends juster_currencypair_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_currencypair_aggregate, R>) => Observable<FieldsSelection<juster_currencypair_aggregate, R>>}),
    
/** fetch data from the table: "juster.currencypair" using primary key columns */
juster_currencypair_by_pk: ((args: {id: Scalars['Int']}) => juster_currencypairObservableChain & {get: <R extends juster_currencypairRequest>(request: R, defaultValue?: (FieldsSelection<juster_currencypair, R> | undefined)) => Observable<(FieldsSelection<juster_currencypair, R> | undefined)>}),
    
/** fetch data from the table: "juster.deposit" */
juster_deposit: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_deposit_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_deposit_order_by[] | null),
/** filter the rows returned */
where?: (juster_deposit_bool_exp | null)}) => {get: <R extends juster_depositRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit, R>[]) => Observable<FieldsSelection<juster_deposit, R>[]>})&({get: <R extends juster_depositRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit, R>[]) => Observable<FieldsSelection<juster_deposit, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.deposit" */
juster_deposit_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_deposit_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_deposit_order_by[] | null),
/** filter the rows returned */
where?: (juster_deposit_bool_exp | null)}) => juster_deposit_aggregateObservableChain & {get: <R extends juster_deposit_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit_aggregate, R>) => Observable<FieldsSelection<juster_deposit_aggregate, R>>})&(juster_deposit_aggregateObservableChain & {get: <R extends juster_deposit_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit_aggregate, R>) => Observable<FieldsSelection<juster_deposit_aggregate, R>>}),
    
/** fetch data from the table: "juster.deposit" using primary key columns */
juster_deposit_by_pk: ((args: {id: Scalars['Int']}) => juster_depositObservableChain & {get: <R extends juster_depositRequest>(request: R, defaultValue?: (FieldsSelection<juster_deposit, R> | undefined)) => Observable<(FieldsSelection<juster_deposit, R> | undefined)>}),
    
/** fetch data from the table: "juster.dipdup_state" */
juster_dipdup_state: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_dipdup_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_dipdup_state_order_by[] | null),
/** filter the rows returned */
where?: (juster_dipdup_state_bool_exp | null)}) => {get: <R extends juster_dipdup_stateRequest>(request: R, defaultValue?: FieldsSelection<juster_dipdup_state, R>[]) => Observable<FieldsSelection<juster_dipdup_state, R>[]>})&({get: <R extends juster_dipdup_stateRequest>(request: R, defaultValue?: FieldsSelection<juster_dipdup_state, R>[]) => Observable<FieldsSelection<juster_dipdup_state, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.dipdup_state" */
juster_dipdup_state_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_dipdup_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_dipdup_state_order_by[] | null),
/** filter the rows returned */
where?: (juster_dipdup_state_bool_exp | null)}) => juster_dipdup_state_aggregateObservableChain & {get: <R extends juster_dipdup_state_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_dipdup_state_aggregate, R>) => Observable<FieldsSelection<juster_dipdup_state_aggregate, R>>})&(juster_dipdup_state_aggregateObservableChain & {get: <R extends juster_dipdup_state_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_dipdup_state_aggregate, R>) => Observable<FieldsSelection<juster_dipdup_state_aggregate, R>>}),
    
/** fetch data from the table: "juster.dipdup_state" using primary key columns */
juster_dipdup_state_by_pk: ((args: {id: Scalars['Int']}) => juster_dipdup_stateObservableChain & {get: <R extends juster_dipdup_stateRequest>(request: R, defaultValue?: (FieldsSelection<juster_dipdup_state, R> | undefined)) => Observable<(FieldsSelection<juster_dipdup_state, R> | undefined)>}),
    
/** fetch data from the table: "juster.event" */
juster_event: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_event_order_by[] | null),
/** filter the rows returned */
where?: (juster_event_bool_exp | null)}) => {get: <R extends juster_eventRequest>(request: R, defaultValue?: FieldsSelection<juster_event, R>[]) => Observable<FieldsSelection<juster_event, R>[]>})&({get: <R extends juster_eventRequest>(request: R, defaultValue?: FieldsSelection<juster_event, R>[]) => Observable<FieldsSelection<juster_event, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.event" */
juster_event_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_event_order_by[] | null),
/** filter the rows returned */
where?: (juster_event_bool_exp | null)}) => juster_event_aggregateObservableChain & {get: <R extends juster_event_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_event_aggregate, R>) => Observable<FieldsSelection<juster_event_aggregate, R>>})&(juster_event_aggregateObservableChain & {get: <R extends juster_event_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_event_aggregate, R>) => Observable<FieldsSelection<juster_event_aggregate, R>>}),
    
/** fetch data from the table: "juster.event" using primary key columns */
juster_event_by_pk: ((args: {id: Scalars['Int']}) => juster_eventObservableChain & {get: <R extends juster_eventRequest>(request: R, defaultValue?: (FieldsSelection<juster_event, R> | undefined)) => Observable<(FieldsSelection<juster_event, R> | undefined)>}),
    
/** fetch data from the table: "juster.position" */
juster_position: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_position_order_by[] | null),
/** filter the rows returned */
where?: (juster_position_bool_exp | null)}) => {get: <R extends juster_positionRequest>(request: R, defaultValue?: FieldsSelection<juster_position, R>[]) => Observable<FieldsSelection<juster_position, R>[]>})&({get: <R extends juster_positionRequest>(request: R, defaultValue?: FieldsSelection<juster_position, R>[]) => Observable<FieldsSelection<juster_position, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.position" */
juster_position_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_position_order_by[] | null),
/** filter the rows returned */
where?: (juster_position_bool_exp | null)}) => juster_position_aggregateObservableChain & {get: <R extends juster_position_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_position_aggregate, R>) => Observable<FieldsSelection<juster_position_aggregate, R>>})&(juster_position_aggregateObservableChain & {get: <R extends juster_position_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_position_aggregate, R>) => Observable<FieldsSelection<juster_position_aggregate, R>>}),
    
/** fetch data from the table: "juster.position" using primary key columns */
juster_position_by_pk: ((args: {id: Scalars['Int']}) => juster_positionObservableChain & {get: <R extends juster_positionRequest>(request: R, defaultValue?: (FieldsSelection<juster_position, R> | undefined)) => Observable<(FieldsSelection<juster_position, R> | undefined)>}),
    
/** fetch data from the table: "juster.quote" */
juster_quote: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_quote_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_quote_order_by[] | null),
/** filter the rows returned */
where?: (juster_quote_bool_exp | null)}) => {get: <R extends juster_quoteRequest>(request: R, defaultValue?: FieldsSelection<juster_quote, R>[]) => Observable<FieldsSelection<juster_quote, R>[]>})&({get: <R extends juster_quoteRequest>(request: R, defaultValue?: FieldsSelection<juster_quote, R>[]) => Observable<FieldsSelection<juster_quote, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.quote" */
juster_quote_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_quote_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_quote_order_by[] | null),
/** filter the rows returned */
where?: (juster_quote_bool_exp | null)}) => juster_quote_aggregateObservableChain & {get: <R extends juster_quote_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_quote_aggregate, R>) => Observable<FieldsSelection<juster_quote_aggregate, R>>})&(juster_quote_aggregateObservableChain & {get: <R extends juster_quote_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_quote_aggregate, R>) => Observable<FieldsSelection<juster_quote_aggregate, R>>}),
    
/** fetch data from the table: "juster.quote" using primary key columns */
juster_quote_by_pk: ((args: {id: Scalars['Int']}) => juster_quoteObservableChain & {get: <R extends juster_quoteRequest>(request: R, defaultValue?: (FieldsSelection<juster_quote, R> | undefined)) => Observable<(FieldsSelection<juster_quote, R> | undefined)>}),
    
/** fetch data from the table: "juster.user" */
juster_user: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_user_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_user_order_by[] | null),
/** filter the rows returned */
where?: (juster_user_bool_exp | null)}) => {get: <R extends juster_userRequest>(request: R, defaultValue?: FieldsSelection<juster_user, R>[]) => Observable<FieldsSelection<juster_user, R>[]>})&({get: <R extends juster_userRequest>(request: R, defaultValue?: FieldsSelection<juster_user, R>[]) => Observable<FieldsSelection<juster_user, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.user" */
juster_user_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_user_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_user_order_by[] | null),
/** filter the rows returned */
where?: (juster_user_bool_exp | null)}) => juster_user_aggregateObservableChain & {get: <R extends juster_user_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_user_aggregate, R>) => Observable<FieldsSelection<juster_user_aggregate, R>>})&(juster_user_aggregateObservableChain & {get: <R extends juster_user_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_user_aggregate, R>) => Observable<FieldsSelection<juster_user_aggregate, R>>}),
    
/** fetch data from the table: "juster.user" using primary key columns */
juster_user_by_pk: ((args: {address: Scalars['String']}) => juster_userObservableChain & {get: <R extends juster_userRequest>(request: R, defaultValue?: (FieldsSelection<juster_user, R> | undefined)) => Observable<(FieldsSelection<juster_user, R> | undefined)>}),
    
/** fetch data from the table: "juster.withdrawal" */
juster_withdrawal: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_withdrawal_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_withdrawal_order_by[] | null),
/** filter the rows returned */
where?: (juster_withdrawal_bool_exp | null)}) => {get: <R extends juster_withdrawalRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal, R>[]) => Observable<FieldsSelection<juster_withdrawal, R>[]>})&({get: <R extends juster_withdrawalRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal, R>[]) => Observable<FieldsSelection<juster_withdrawal, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.withdrawal" */
juster_withdrawal_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_withdrawal_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_withdrawal_order_by[] | null),
/** filter the rows returned */
where?: (juster_withdrawal_bool_exp | null)}) => juster_withdrawal_aggregateObservableChain & {get: <R extends juster_withdrawal_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal_aggregate, R>) => Observable<FieldsSelection<juster_withdrawal_aggregate, R>>})&(juster_withdrawal_aggregateObservableChain & {get: <R extends juster_withdrawal_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal_aggregate, R>) => Observable<FieldsSelection<juster_withdrawal_aggregate, R>>}),
    
/** fetch data from the table: "juster.withdrawal" using primary key columns */
juster_withdrawal_by_pk: ((args: {id: Scalars['Int']}) => juster_withdrawalObservableChain & {get: <R extends juster_withdrawalRequest>(request: R, defaultValue?: (FieldsSelection<juster_withdrawal, R> | undefined)) => Observable<(FieldsSelection<juster_withdrawal, R> | undefined)>})
}


/** subscription root */
export interface subscription_rootPromiseChain{
    
/** fetch data from the table: "juster.bet" */
juster_bet: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_bet_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_bet_order_by[] | null),
/** filter the rows returned */
where?: (juster_bet_bool_exp | null)}) => {get: <R extends juster_betRequest>(request: R, defaultValue?: FieldsSelection<juster_bet, R>[]) => Promise<FieldsSelection<juster_bet, R>[]>})&({get: <R extends juster_betRequest>(request: R, defaultValue?: FieldsSelection<juster_bet, R>[]) => Promise<FieldsSelection<juster_bet, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.bet" */
juster_bet_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_bet_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_bet_order_by[] | null),
/** filter the rows returned */
where?: (juster_bet_bool_exp | null)}) => juster_bet_aggregatePromiseChain & {get: <R extends juster_bet_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_bet_aggregate, R>) => Promise<FieldsSelection<juster_bet_aggregate, R>>})&(juster_bet_aggregatePromiseChain & {get: <R extends juster_bet_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_bet_aggregate, R>) => Promise<FieldsSelection<juster_bet_aggregate, R>>}),
    
/** fetch data from the table: "juster.bet" using primary key columns */
juster_bet_by_pk: ((args: {id: Scalars['Int']}) => juster_betPromiseChain & {get: <R extends juster_betRequest>(request: R, defaultValue?: (FieldsSelection<juster_bet, R> | undefined)) => Promise<(FieldsSelection<juster_bet, R> | undefined)>}),
    
/** fetch data from the table: "juster.currencypair" */
juster_currencypair: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_currencypair_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_currencypair_order_by[] | null),
/** filter the rows returned */
where?: (juster_currencypair_bool_exp | null)}) => {get: <R extends juster_currencypairRequest>(request: R, defaultValue?: FieldsSelection<juster_currencypair, R>[]) => Promise<FieldsSelection<juster_currencypair, R>[]>})&({get: <R extends juster_currencypairRequest>(request: R, defaultValue?: FieldsSelection<juster_currencypair, R>[]) => Promise<FieldsSelection<juster_currencypair, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.currencypair" */
juster_currencypair_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_currencypair_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_currencypair_order_by[] | null),
/** filter the rows returned */
where?: (juster_currencypair_bool_exp | null)}) => juster_currencypair_aggregatePromiseChain & {get: <R extends juster_currencypair_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_currencypair_aggregate, R>) => Promise<FieldsSelection<juster_currencypair_aggregate, R>>})&(juster_currencypair_aggregatePromiseChain & {get: <R extends juster_currencypair_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_currencypair_aggregate, R>) => Promise<FieldsSelection<juster_currencypair_aggregate, R>>}),
    
/** fetch data from the table: "juster.currencypair" using primary key columns */
juster_currencypair_by_pk: ((args: {id: Scalars['Int']}) => juster_currencypairPromiseChain & {get: <R extends juster_currencypairRequest>(request: R, defaultValue?: (FieldsSelection<juster_currencypair, R> | undefined)) => Promise<(FieldsSelection<juster_currencypair, R> | undefined)>}),
    
/** fetch data from the table: "juster.deposit" */
juster_deposit: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_deposit_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_deposit_order_by[] | null),
/** filter the rows returned */
where?: (juster_deposit_bool_exp | null)}) => {get: <R extends juster_depositRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit, R>[]) => Promise<FieldsSelection<juster_deposit, R>[]>})&({get: <R extends juster_depositRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit, R>[]) => Promise<FieldsSelection<juster_deposit, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.deposit" */
juster_deposit_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_deposit_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_deposit_order_by[] | null),
/** filter the rows returned */
where?: (juster_deposit_bool_exp | null)}) => juster_deposit_aggregatePromiseChain & {get: <R extends juster_deposit_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit_aggregate, R>) => Promise<FieldsSelection<juster_deposit_aggregate, R>>})&(juster_deposit_aggregatePromiseChain & {get: <R extends juster_deposit_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit_aggregate, R>) => Promise<FieldsSelection<juster_deposit_aggregate, R>>}),
    
/** fetch data from the table: "juster.deposit" using primary key columns */
juster_deposit_by_pk: ((args: {id: Scalars['Int']}) => juster_depositPromiseChain & {get: <R extends juster_depositRequest>(request: R, defaultValue?: (FieldsSelection<juster_deposit, R> | undefined)) => Promise<(FieldsSelection<juster_deposit, R> | undefined)>}),
    
/** fetch data from the table: "juster.dipdup_state" */
juster_dipdup_state: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_dipdup_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_dipdup_state_order_by[] | null),
/** filter the rows returned */
where?: (juster_dipdup_state_bool_exp | null)}) => {get: <R extends juster_dipdup_stateRequest>(request: R, defaultValue?: FieldsSelection<juster_dipdup_state, R>[]) => Promise<FieldsSelection<juster_dipdup_state, R>[]>})&({get: <R extends juster_dipdup_stateRequest>(request: R, defaultValue?: FieldsSelection<juster_dipdup_state, R>[]) => Promise<FieldsSelection<juster_dipdup_state, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.dipdup_state" */
juster_dipdup_state_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_dipdup_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_dipdup_state_order_by[] | null),
/** filter the rows returned */
where?: (juster_dipdup_state_bool_exp | null)}) => juster_dipdup_state_aggregatePromiseChain & {get: <R extends juster_dipdup_state_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_dipdup_state_aggregate, R>) => Promise<FieldsSelection<juster_dipdup_state_aggregate, R>>})&(juster_dipdup_state_aggregatePromiseChain & {get: <R extends juster_dipdup_state_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_dipdup_state_aggregate, R>) => Promise<FieldsSelection<juster_dipdup_state_aggregate, R>>}),
    
/** fetch data from the table: "juster.dipdup_state" using primary key columns */
juster_dipdup_state_by_pk: ((args: {id: Scalars['Int']}) => juster_dipdup_statePromiseChain & {get: <R extends juster_dipdup_stateRequest>(request: R, defaultValue?: (FieldsSelection<juster_dipdup_state, R> | undefined)) => Promise<(FieldsSelection<juster_dipdup_state, R> | undefined)>}),
    
/** fetch data from the table: "juster.event" */
juster_event: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_event_order_by[] | null),
/** filter the rows returned */
where?: (juster_event_bool_exp | null)}) => {get: <R extends juster_eventRequest>(request: R, defaultValue?: FieldsSelection<juster_event, R>[]) => Promise<FieldsSelection<juster_event, R>[]>})&({get: <R extends juster_eventRequest>(request: R, defaultValue?: FieldsSelection<juster_event, R>[]) => Promise<FieldsSelection<juster_event, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.event" */
juster_event_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_event_order_by[] | null),
/** filter the rows returned */
where?: (juster_event_bool_exp | null)}) => juster_event_aggregatePromiseChain & {get: <R extends juster_event_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_event_aggregate, R>) => Promise<FieldsSelection<juster_event_aggregate, R>>})&(juster_event_aggregatePromiseChain & {get: <R extends juster_event_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_event_aggregate, R>) => Promise<FieldsSelection<juster_event_aggregate, R>>}),
    
/** fetch data from the table: "juster.event" using primary key columns */
juster_event_by_pk: ((args: {id: Scalars['Int']}) => juster_eventPromiseChain & {get: <R extends juster_eventRequest>(request: R, defaultValue?: (FieldsSelection<juster_event, R> | undefined)) => Promise<(FieldsSelection<juster_event, R> | undefined)>}),
    
/** fetch data from the table: "juster.position" */
juster_position: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_position_order_by[] | null),
/** filter the rows returned */
where?: (juster_position_bool_exp | null)}) => {get: <R extends juster_positionRequest>(request: R, defaultValue?: FieldsSelection<juster_position, R>[]) => Promise<FieldsSelection<juster_position, R>[]>})&({get: <R extends juster_positionRequest>(request: R, defaultValue?: FieldsSelection<juster_position, R>[]) => Promise<FieldsSelection<juster_position, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.position" */
juster_position_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_position_order_by[] | null),
/** filter the rows returned */
where?: (juster_position_bool_exp | null)}) => juster_position_aggregatePromiseChain & {get: <R extends juster_position_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_position_aggregate, R>) => Promise<FieldsSelection<juster_position_aggregate, R>>})&(juster_position_aggregatePromiseChain & {get: <R extends juster_position_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_position_aggregate, R>) => Promise<FieldsSelection<juster_position_aggregate, R>>}),
    
/** fetch data from the table: "juster.position" using primary key columns */
juster_position_by_pk: ((args: {id: Scalars['Int']}) => juster_positionPromiseChain & {get: <R extends juster_positionRequest>(request: R, defaultValue?: (FieldsSelection<juster_position, R> | undefined)) => Promise<(FieldsSelection<juster_position, R> | undefined)>}),
    
/** fetch data from the table: "juster.quote" */
juster_quote: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_quote_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_quote_order_by[] | null),
/** filter the rows returned */
where?: (juster_quote_bool_exp | null)}) => {get: <R extends juster_quoteRequest>(request: R, defaultValue?: FieldsSelection<juster_quote, R>[]) => Promise<FieldsSelection<juster_quote, R>[]>})&({get: <R extends juster_quoteRequest>(request: R, defaultValue?: FieldsSelection<juster_quote, R>[]) => Promise<FieldsSelection<juster_quote, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.quote" */
juster_quote_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_quote_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_quote_order_by[] | null),
/** filter the rows returned */
where?: (juster_quote_bool_exp | null)}) => juster_quote_aggregatePromiseChain & {get: <R extends juster_quote_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_quote_aggregate, R>) => Promise<FieldsSelection<juster_quote_aggregate, R>>})&(juster_quote_aggregatePromiseChain & {get: <R extends juster_quote_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_quote_aggregate, R>) => Promise<FieldsSelection<juster_quote_aggregate, R>>}),
    
/** fetch data from the table: "juster.quote" using primary key columns */
juster_quote_by_pk: ((args: {id: Scalars['Int']}) => juster_quotePromiseChain & {get: <R extends juster_quoteRequest>(request: R, defaultValue?: (FieldsSelection<juster_quote, R> | undefined)) => Promise<(FieldsSelection<juster_quote, R> | undefined)>}),
    
/** fetch data from the table: "juster.user" */
juster_user: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_user_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_user_order_by[] | null),
/** filter the rows returned */
where?: (juster_user_bool_exp | null)}) => {get: <R extends juster_userRequest>(request: R, defaultValue?: FieldsSelection<juster_user, R>[]) => Promise<FieldsSelection<juster_user, R>[]>})&({get: <R extends juster_userRequest>(request: R, defaultValue?: FieldsSelection<juster_user, R>[]) => Promise<FieldsSelection<juster_user, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.user" */
juster_user_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_user_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_user_order_by[] | null),
/** filter the rows returned */
where?: (juster_user_bool_exp | null)}) => juster_user_aggregatePromiseChain & {get: <R extends juster_user_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_user_aggregate, R>) => Promise<FieldsSelection<juster_user_aggregate, R>>})&(juster_user_aggregatePromiseChain & {get: <R extends juster_user_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_user_aggregate, R>) => Promise<FieldsSelection<juster_user_aggregate, R>>}),
    
/** fetch data from the table: "juster.user" using primary key columns */
juster_user_by_pk: ((args: {address: Scalars['String']}) => juster_userPromiseChain & {get: <R extends juster_userRequest>(request: R, defaultValue?: (FieldsSelection<juster_user, R> | undefined)) => Promise<(FieldsSelection<juster_user, R> | undefined)>}),
    
/** fetch data from the table: "juster.withdrawal" */
juster_withdrawal: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_withdrawal_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_withdrawal_order_by[] | null),
/** filter the rows returned */
where?: (juster_withdrawal_bool_exp | null)}) => {get: <R extends juster_withdrawalRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal, R>[]) => Promise<FieldsSelection<juster_withdrawal, R>[]>})&({get: <R extends juster_withdrawalRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal, R>[]) => Promise<FieldsSelection<juster_withdrawal, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.withdrawal" */
juster_withdrawal_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_withdrawal_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_withdrawal_order_by[] | null),
/** filter the rows returned */
where?: (juster_withdrawal_bool_exp | null)}) => juster_withdrawal_aggregatePromiseChain & {get: <R extends juster_withdrawal_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal_aggregate, R>) => Promise<FieldsSelection<juster_withdrawal_aggregate, R>>})&(juster_withdrawal_aggregatePromiseChain & {get: <R extends juster_withdrawal_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal_aggregate, R>) => Promise<FieldsSelection<juster_withdrawal_aggregate, R>>}),
    
/** fetch data from the table: "juster.withdrawal" using primary key columns */
juster_withdrawal_by_pk: ((args: {id: Scalars['Int']}) => juster_withdrawalPromiseChain & {get: <R extends juster_withdrawalRequest>(request: R, defaultValue?: (FieldsSelection<juster_withdrawal, R> | undefined)) => Promise<(FieldsSelection<juster_withdrawal, R> | undefined)>})
}


/** subscription root */
export interface subscription_rootObservableChain{
    
/** fetch data from the table: "juster.bet" */
juster_bet: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_bet_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_bet_order_by[] | null),
/** filter the rows returned */
where?: (juster_bet_bool_exp | null)}) => {get: <R extends juster_betRequest>(request: R, defaultValue?: FieldsSelection<juster_bet, R>[]) => Observable<FieldsSelection<juster_bet, R>[]>})&({get: <R extends juster_betRequest>(request: R, defaultValue?: FieldsSelection<juster_bet, R>[]) => Observable<FieldsSelection<juster_bet, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.bet" */
juster_bet_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_bet_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_bet_order_by[] | null),
/** filter the rows returned */
where?: (juster_bet_bool_exp | null)}) => juster_bet_aggregateObservableChain & {get: <R extends juster_bet_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_bet_aggregate, R>) => Observable<FieldsSelection<juster_bet_aggregate, R>>})&(juster_bet_aggregateObservableChain & {get: <R extends juster_bet_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_bet_aggregate, R>) => Observable<FieldsSelection<juster_bet_aggregate, R>>}),
    
/** fetch data from the table: "juster.bet" using primary key columns */
juster_bet_by_pk: ((args: {id: Scalars['Int']}) => juster_betObservableChain & {get: <R extends juster_betRequest>(request: R, defaultValue?: (FieldsSelection<juster_bet, R> | undefined)) => Observable<(FieldsSelection<juster_bet, R> | undefined)>}),
    
/** fetch data from the table: "juster.currencypair" */
juster_currencypair: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_currencypair_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_currencypair_order_by[] | null),
/** filter the rows returned */
where?: (juster_currencypair_bool_exp | null)}) => {get: <R extends juster_currencypairRequest>(request: R, defaultValue?: FieldsSelection<juster_currencypair, R>[]) => Observable<FieldsSelection<juster_currencypair, R>[]>})&({get: <R extends juster_currencypairRequest>(request: R, defaultValue?: FieldsSelection<juster_currencypair, R>[]) => Observable<FieldsSelection<juster_currencypair, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.currencypair" */
juster_currencypair_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_currencypair_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_currencypair_order_by[] | null),
/** filter the rows returned */
where?: (juster_currencypair_bool_exp | null)}) => juster_currencypair_aggregateObservableChain & {get: <R extends juster_currencypair_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_currencypair_aggregate, R>) => Observable<FieldsSelection<juster_currencypair_aggregate, R>>})&(juster_currencypair_aggregateObservableChain & {get: <R extends juster_currencypair_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_currencypair_aggregate, R>) => Observable<FieldsSelection<juster_currencypair_aggregate, R>>}),
    
/** fetch data from the table: "juster.currencypair" using primary key columns */
juster_currencypair_by_pk: ((args: {id: Scalars['Int']}) => juster_currencypairObservableChain & {get: <R extends juster_currencypairRequest>(request: R, defaultValue?: (FieldsSelection<juster_currencypair, R> | undefined)) => Observable<(FieldsSelection<juster_currencypair, R> | undefined)>}),
    
/** fetch data from the table: "juster.deposit" */
juster_deposit: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_deposit_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_deposit_order_by[] | null),
/** filter the rows returned */
where?: (juster_deposit_bool_exp | null)}) => {get: <R extends juster_depositRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit, R>[]) => Observable<FieldsSelection<juster_deposit, R>[]>})&({get: <R extends juster_depositRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit, R>[]) => Observable<FieldsSelection<juster_deposit, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.deposit" */
juster_deposit_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_deposit_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_deposit_order_by[] | null),
/** filter the rows returned */
where?: (juster_deposit_bool_exp | null)}) => juster_deposit_aggregateObservableChain & {get: <R extends juster_deposit_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit_aggregate, R>) => Observable<FieldsSelection<juster_deposit_aggregate, R>>})&(juster_deposit_aggregateObservableChain & {get: <R extends juster_deposit_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_deposit_aggregate, R>) => Observable<FieldsSelection<juster_deposit_aggregate, R>>}),
    
/** fetch data from the table: "juster.deposit" using primary key columns */
juster_deposit_by_pk: ((args: {id: Scalars['Int']}) => juster_depositObservableChain & {get: <R extends juster_depositRequest>(request: R, defaultValue?: (FieldsSelection<juster_deposit, R> | undefined)) => Observable<(FieldsSelection<juster_deposit, R> | undefined)>}),
    
/** fetch data from the table: "juster.dipdup_state" */
juster_dipdup_state: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_dipdup_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_dipdup_state_order_by[] | null),
/** filter the rows returned */
where?: (juster_dipdup_state_bool_exp | null)}) => {get: <R extends juster_dipdup_stateRequest>(request: R, defaultValue?: FieldsSelection<juster_dipdup_state, R>[]) => Observable<FieldsSelection<juster_dipdup_state, R>[]>})&({get: <R extends juster_dipdup_stateRequest>(request: R, defaultValue?: FieldsSelection<juster_dipdup_state, R>[]) => Observable<FieldsSelection<juster_dipdup_state, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.dipdup_state" */
juster_dipdup_state_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_dipdup_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_dipdup_state_order_by[] | null),
/** filter the rows returned */
where?: (juster_dipdup_state_bool_exp | null)}) => juster_dipdup_state_aggregateObservableChain & {get: <R extends juster_dipdup_state_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_dipdup_state_aggregate, R>) => Observable<FieldsSelection<juster_dipdup_state_aggregate, R>>})&(juster_dipdup_state_aggregateObservableChain & {get: <R extends juster_dipdup_state_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_dipdup_state_aggregate, R>) => Observable<FieldsSelection<juster_dipdup_state_aggregate, R>>}),
    
/** fetch data from the table: "juster.dipdup_state" using primary key columns */
juster_dipdup_state_by_pk: ((args: {id: Scalars['Int']}) => juster_dipdup_stateObservableChain & {get: <R extends juster_dipdup_stateRequest>(request: R, defaultValue?: (FieldsSelection<juster_dipdup_state, R> | undefined)) => Observable<(FieldsSelection<juster_dipdup_state, R> | undefined)>}),
    
/** fetch data from the table: "juster.event" */
juster_event: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_event_order_by[] | null),
/** filter the rows returned */
where?: (juster_event_bool_exp | null)}) => {get: <R extends juster_eventRequest>(request: R, defaultValue?: FieldsSelection<juster_event, R>[]) => Observable<FieldsSelection<juster_event, R>[]>})&({get: <R extends juster_eventRequest>(request: R, defaultValue?: FieldsSelection<juster_event, R>[]) => Observable<FieldsSelection<juster_event, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.event" */
juster_event_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_event_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_event_order_by[] | null),
/** filter the rows returned */
where?: (juster_event_bool_exp | null)}) => juster_event_aggregateObservableChain & {get: <R extends juster_event_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_event_aggregate, R>) => Observable<FieldsSelection<juster_event_aggregate, R>>})&(juster_event_aggregateObservableChain & {get: <R extends juster_event_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_event_aggregate, R>) => Observable<FieldsSelection<juster_event_aggregate, R>>}),
    
/** fetch data from the table: "juster.event" using primary key columns */
juster_event_by_pk: ((args: {id: Scalars['Int']}) => juster_eventObservableChain & {get: <R extends juster_eventRequest>(request: R, defaultValue?: (FieldsSelection<juster_event, R> | undefined)) => Observable<(FieldsSelection<juster_event, R> | undefined)>}),
    
/** fetch data from the table: "juster.position" */
juster_position: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_position_order_by[] | null),
/** filter the rows returned */
where?: (juster_position_bool_exp | null)}) => {get: <R extends juster_positionRequest>(request: R, defaultValue?: FieldsSelection<juster_position, R>[]) => Observable<FieldsSelection<juster_position, R>[]>})&({get: <R extends juster_positionRequest>(request: R, defaultValue?: FieldsSelection<juster_position, R>[]) => Observable<FieldsSelection<juster_position, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.position" */
juster_position_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_position_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_position_order_by[] | null),
/** filter the rows returned */
where?: (juster_position_bool_exp | null)}) => juster_position_aggregateObservableChain & {get: <R extends juster_position_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_position_aggregate, R>) => Observable<FieldsSelection<juster_position_aggregate, R>>})&(juster_position_aggregateObservableChain & {get: <R extends juster_position_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_position_aggregate, R>) => Observable<FieldsSelection<juster_position_aggregate, R>>}),
    
/** fetch data from the table: "juster.position" using primary key columns */
juster_position_by_pk: ((args: {id: Scalars['Int']}) => juster_positionObservableChain & {get: <R extends juster_positionRequest>(request: R, defaultValue?: (FieldsSelection<juster_position, R> | undefined)) => Observable<(FieldsSelection<juster_position, R> | undefined)>}),
    
/** fetch data from the table: "juster.quote" */
juster_quote: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_quote_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_quote_order_by[] | null),
/** filter the rows returned */
where?: (juster_quote_bool_exp | null)}) => {get: <R extends juster_quoteRequest>(request: R, defaultValue?: FieldsSelection<juster_quote, R>[]) => Observable<FieldsSelection<juster_quote, R>[]>})&({get: <R extends juster_quoteRequest>(request: R, defaultValue?: FieldsSelection<juster_quote, R>[]) => Observable<FieldsSelection<juster_quote, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.quote" */
juster_quote_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_quote_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_quote_order_by[] | null),
/** filter the rows returned */
where?: (juster_quote_bool_exp | null)}) => juster_quote_aggregateObservableChain & {get: <R extends juster_quote_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_quote_aggregate, R>) => Observable<FieldsSelection<juster_quote_aggregate, R>>})&(juster_quote_aggregateObservableChain & {get: <R extends juster_quote_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_quote_aggregate, R>) => Observable<FieldsSelection<juster_quote_aggregate, R>>}),
    
/** fetch data from the table: "juster.quote" using primary key columns */
juster_quote_by_pk: ((args: {id: Scalars['Int']}) => juster_quoteObservableChain & {get: <R extends juster_quoteRequest>(request: R, defaultValue?: (FieldsSelection<juster_quote, R> | undefined)) => Observable<(FieldsSelection<juster_quote, R> | undefined)>}),
    
/** fetch data from the table: "juster.user" */
juster_user: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_user_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_user_order_by[] | null),
/** filter the rows returned */
where?: (juster_user_bool_exp | null)}) => {get: <R extends juster_userRequest>(request: R, defaultValue?: FieldsSelection<juster_user, R>[]) => Observable<FieldsSelection<juster_user, R>[]>})&({get: <R extends juster_userRequest>(request: R, defaultValue?: FieldsSelection<juster_user, R>[]) => Observable<FieldsSelection<juster_user, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.user" */
juster_user_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_user_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_user_order_by[] | null),
/** filter the rows returned */
where?: (juster_user_bool_exp | null)}) => juster_user_aggregateObservableChain & {get: <R extends juster_user_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_user_aggregate, R>) => Observable<FieldsSelection<juster_user_aggregate, R>>})&(juster_user_aggregateObservableChain & {get: <R extends juster_user_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_user_aggregate, R>) => Observable<FieldsSelection<juster_user_aggregate, R>>}),
    
/** fetch data from the table: "juster.user" using primary key columns */
juster_user_by_pk: ((args: {address: Scalars['String']}) => juster_userObservableChain & {get: <R extends juster_userRequest>(request: R, defaultValue?: (FieldsSelection<juster_user, R> | undefined)) => Observable<(FieldsSelection<juster_user, R> | undefined)>}),
    
/** fetch data from the table: "juster.withdrawal" */
juster_withdrawal: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_withdrawal_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_withdrawal_order_by[] | null),
/** filter the rows returned */
where?: (juster_withdrawal_bool_exp | null)}) => {get: <R extends juster_withdrawalRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal, R>[]) => Observable<FieldsSelection<juster_withdrawal, R>[]>})&({get: <R extends juster_withdrawalRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal, R>[]) => Observable<FieldsSelection<juster_withdrawal, R>[]>}),
    
/** fetch aggregated fields from the table: "juster.withdrawal" */
juster_withdrawal_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (juster_withdrawal_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (juster_withdrawal_order_by[] | null),
/** filter the rows returned */
where?: (juster_withdrawal_bool_exp | null)}) => juster_withdrawal_aggregateObservableChain & {get: <R extends juster_withdrawal_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal_aggregate, R>) => Observable<FieldsSelection<juster_withdrawal_aggregate, R>>})&(juster_withdrawal_aggregateObservableChain & {get: <R extends juster_withdrawal_aggregateRequest>(request: R, defaultValue?: FieldsSelection<juster_withdrawal_aggregate, R>) => Observable<FieldsSelection<juster_withdrawal_aggregate, R>>}),
    
/** fetch data from the table: "juster.withdrawal" using primary key columns */
juster_withdrawal_by_pk: ((args: {id: Scalars['Int']}) => juster_withdrawalObservableChain & {get: <R extends juster_withdrawalRequest>(request: R, defaultValue?: (FieldsSelection<juster_withdrawal, R> | undefined)) => Observable<(FieldsSelection<juster_withdrawal, R> | undefined)>})
}