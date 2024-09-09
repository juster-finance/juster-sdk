
var bet_possibleTypes = ['bet']
export var isbet = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isbet"')
  return bet_possibleTypes.includes(obj.__typename)
}



var candle_possibleTypes = ['candle']
export var iscandle = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "iscandle"')
  return candle_possibleTypes.includes(obj.__typename)
}



var claim_possibleTypes = ['claim']
export var isclaim = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isclaim"')
  return claim_possibleTypes.includes(obj.__typename)
}



var currency_pair_possibleTypes = ['currency_pair']
export var iscurrency_pair = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "iscurrency_pair"')
  return currency_pair_possibleTypes.includes(obj.__typename)
}



var deposit_possibleTypes = ['deposit']
export var isdeposit = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdeposit"')
  return deposit_possibleTypes.includes(obj.__typename)
}



var dipdup_contract_possibleTypes = ['dipdup_contract']
export var isdipdup_contract = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_contract"')
  return dipdup_contract_possibleTypes.includes(obj.__typename)
}



var dipdup_contract_metadata_possibleTypes = ['dipdup_contract_metadata']
export var isdipdup_contract_metadata = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_contract_metadata"')
  return dipdup_contract_metadata_possibleTypes.includes(obj.__typename)
}



var dipdup_head_possibleTypes = ['dipdup_head']
export var isdipdup_head = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_head"')
  return dipdup_head_possibleTypes.includes(obj.__typename)
}



var dipdup_head_status_possibleTypes = ['dipdup_head_status']
export var isdipdup_head_status = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_head_status"')
  return dipdup_head_status_possibleTypes.includes(obj.__typename)
}



var dipdup_index_possibleTypes = ['dipdup_index']
export var isdipdup_index = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_index"')
  return dipdup_index_possibleTypes.includes(obj.__typename)
}



var dipdup_model_update_possibleTypes = ['dipdup_model_update']
export var isdipdup_model_update = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_model_update"')
  return dipdup_model_update_possibleTypes.includes(obj.__typename)
}



var dipdup_schema_possibleTypes = ['dipdup_schema']
export var isdipdup_schema = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_schema"')
  return dipdup_schema_possibleTypes.includes(obj.__typename)
}



var dipdup_token_metadata_possibleTypes = ['dipdup_token_metadata']
export var isdipdup_token_metadata = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_token_metadata"')
  return dipdup_token_metadata_possibleTypes.includes(obj.__typename)
}



var entry_liquidity_possibleTypes = ['entry_liquidity']
export var isentry_liquidity = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isentry_liquidity"')
  return entry_liquidity_possibleTypes.includes(obj.__typename)
}



var event_possibleTypes = ['event']
export var isevent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isevent"')
  return event_possibleTypes.includes(obj.__typename)
}



var merged_candles_possibleTypes = ['merged_candles']
export var ismerged_candles = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismerged_candles"')
  return merged_candles_possibleTypes.includes(obj.__typename)
}



var pool_possibleTypes = ['pool']
export var ispool = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispool"')
  return pool_possibleTypes.includes(obj.__typename)
}



var pool_event_possibleTypes = ['pool_event']
export var ispool_event = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispool_event"')
  return pool_event_possibleTypes.includes(obj.__typename)
}



var pool_line_possibleTypes = ['pool_line']
export var ispool_line = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispool_line"')
  return pool_line_possibleTypes.includes(obj.__typename)
}



var pool_position_possibleTypes = ['pool_position']
export var ispool_position = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispool_position"')
  return pool_position_possibleTypes.includes(obj.__typename)
}



var pool_state_possibleTypes = ['pool_state']
export var ispool_state = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispool_state"')
  return pool_state_possibleTypes.includes(obj.__typename)
}



var position_possibleTypes = ['position']
export var isposition = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isposition"')
  return position_possibleTypes.includes(obj.__typename)
}



var query_root_possibleTypes = ['query_root']
export var isquery_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isquery_root"')
  return query_root_possibleTypes.includes(obj.__typename)
}



var quotesWma_possibleTypes = ['quotesWma']
export var isquotesWma = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isquotesWma"')
  return quotesWma_possibleTypes.includes(obj.__typename)
}



var quotesWma_15m_possibleTypes = ['quotesWma_15m']
export var isquotesWma_15m = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isquotesWma_15m"')
  return quotesWma_15m_possibleTypes.includes(obj.__typename)
}



var subscription_root_possibleTypes = ['subscription_root']
export var issubscription_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "issubscription_root"')
  return subscription_root_possibleTypes.includes(obj.__typename)
}



var total_value_locked_possibleTypes = ['total_value_locked']
export var istotal_value_locked = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "istotal_value_locked"')
  return total_value_locked_possibleTypes.includes(obj.__typename)
}



var user_possibleTypes = ['user']
export var isuser = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser"')
  return user_possibleTypes.includes(obj.__typename)
}



var withdrawal_possibleTypes = ['withdrawal']
export var iswithdrawal = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "iswithdrawal"')
  return withdrawal_possibleTypes.includes(obj.__typename)
}
