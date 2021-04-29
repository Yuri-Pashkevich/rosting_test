import axios from 'axios'
import { setUSDexchangeRate, setEURexchangeRate } from '../reducers/currencyReducer'


// Достаем нужные валюты с api НБРБ

export const getUSDcurrency = () => {
    return async dispatch => {
        try {
            const response = await axios.get('https://www.nbrb.by/api/exrates/rates/145') 
            dispatch(setUSDexchangeRate(response.data.Cur_OfficialRate))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const getEURcurrency = () => {
    return async dispatch => {
        try {
            const response = await axios.get('https://www.nbrb.by/api/exrates/rates/292') 
            dispatch(setEURexchangeRate(response.data.Cur_OfficialRate))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}