const SET_NAME = 'SET_NAME'
const SET_TEL = 'SET_TEL'
const SET_SHOW_SUCCESS = 'SET_SHOW_SUCCESS'
const SET_SHOW_FAIL = 'SET_SHOW_FAIL'
const SET_FAIL_MESSAGE = 'SET_FAIL_MESSAGE'
const SET_SUCCESS_MESSAGE = 'SET_SUCCESS_MESSAGE'

const initState = {
    name: '',
    tel: '',
    onSuccess: false,
    onFail: false,
    message: ''
}

export const formReducer = (state = initState, action) => {
    switch(action.type) {
        case SET_NAME: 
            return  {
                ...state,
                name: action.payload
            }
        case SET_TEL: 
            return  {
                ...state,
                tel: action.payload
            }
        case SET_SHOW_SUCCESS: 
            return  {
                ...state,
                onSuccess: action.payload
            }
        case SET_SHOW_FAIL: 
            return  {
                ...state,
                onFail: action.payload
            }
        case SET_FAIL_MESSAGE: 
            return  {
                ...state,
                message: action.payload
            } 
        case SET_SUCCESS_MESSAGE: 
            return  {
                ...state,
                message: action.payload
            } 
        default: return state
    }
}

export const setName = name => ({
    type: SET_NAME,
    payload: name
})

export const setTel = tel => ({
    type: SET_TEL,
    payload: tel
})

export const setShowSuccess = boolean => ({
    type: SET_SHOW_SUCCESS,
    payload: boolean
})

export const setShowFail = boolean => ({
    type: SET_SHOW_FAIL,
    payload: boolean
})

export const setFailMessage = message => ({
    type: SET_FAIL_MESSAGE,
    payload: message
})

export const setSuccessMessage = message => ({
    type: SET_SUCCESS_MESSAGE,
    payload: message
})