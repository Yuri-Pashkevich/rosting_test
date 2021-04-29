import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setShowFail, setSuccessMessage } from '../reducers/formReducer'
import { formStyle } from '../globalStyles'

export const FormSendFail = () => {

    const dispatch = useDispatch()
    const failMessage = useSelector(state => state.form.message)
    
    const handleHidePopup = () => {
        dispatch(setShowFail(false))
        dispatch(setSuccessMessage(''))
    }

    return (
        <FormSendFailStyle>
            <div className="fail-popup">
                <p className="fail-text">
                    {failMessage}
                </p> 
                <button className="fail-button" onClick={handleHidePopup}>Хорошо</button>  
            </div>
        </FormSendFailStyle>
    )
}

const FormSendFailStyle = styled.div`
    ${formStyle.wrapper}
    div {
        ${formStyle.popup}
    }
    p {
        ${formStyle.text}
    }
    .fail-button {
        ${formStyle.button}
    }
`