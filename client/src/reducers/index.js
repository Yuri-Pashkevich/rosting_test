import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { currencyReducer } from './currencyReducer'
import { formReducer } from './formReducer'


const rootReducer = combineReducers({
    currency: currencyReducer,
    form: formReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))