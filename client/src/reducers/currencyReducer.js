const SET_USD_EXCHANGE_RATE = 'SET_USD_EXCHANGE_RATE'
const SET_EUR_EXCHANGE_RATE = 'SET_EUR_EXCHANGE_RATE'

const initState = {
    exchangeRateUSD: 1,
    exchangeRateEUR: 1,
}

export const currencyReducer = (state = initState, action) => {
    switch(action.type) {
        case SET_USD_EXCHANGE_RATE: 
            return  {
                ...state,
                exchangeRateUSD: action.payload
            }
        case SET_EUR_EXCHANGE_RATE: 
            return  {
                ...state,
                exchangeRateEUR: action.payload
            }
        default: return state
    }
}

export const setUSDexchangeRate = exchangeRate => ({
    type: SET_USD_EXCHANGE_RATE,
    payload: exchangeRate
})

export const setEURexchangeRate = exchangeRate => ({
    type: SET_EUR_EXCHANGE_RATE,
    payload: exchangeRate
})