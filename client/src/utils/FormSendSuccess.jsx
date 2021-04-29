import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setShowSuccess, setName, setTel } from '../reducers/formReducer'
import { formStyle } from '../globalStyles'

export const FormSendSuccess = ({ message }) => {

    const dispatch = useDispatch()
    const name = useSelector(state => state.form.name)
    
    const handleHidePopup = () => {
        dispatch(setShowSuccess(false))
        dispatch(setName(''))
        dispatch(setTel(''))
    }

    return (
        <FormSendSuccessStyle>
            <div className="success-popup">
                <h2 className="success-title">{message}, <span>{name}!</span></h2>
                <p className="success-text">
                    Ваша заявка на консультацию принята <br/>
                    В течение ближайшего времени по указанному телефону <br/> с вами свяжется наш менеджер, чтобы обсудить детали интересующего вас вопроса
                </p>
                <button className="success-button" onClick={handleHidePopup}>Хорошо</button>  
            </div>

        </FormSendSuccessStyle>
    )
}

const FormSendSuccessStyle = styled.div`
    ${formStyle.wrapper}
    div {
        ${formStyle.popup}
    }
    h2 {
        margin-bottom: 20px;
        text-align: center;
        color: white;
        span {
            color: #FFED00;
            text-transform: uppercase;
        }
    }
    p {
        ${formStyle.text}
    }
    .success-button {
        ${formStyle.button}
    }
`


// +375(44) 732-09-99