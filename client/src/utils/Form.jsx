import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { registration } from '../actions/user'
import { setName, setTel, setShowSuccess, setShowFail, setFailMessage } from '../reducers/formReducer'

export const Form = () => {

    // Используем хуки redux'а, чтобы сделать инпуты управляемыми и хранить их значение в глобальном состоянии (two-way binding)
    const dispatch = useDispatch()
    const name = useSelector(state => state.form.name)
    const tel = useSelector(state => state.form.tel)

    // Регулярные выражения для имени пользователя и телефона, с которыми ниже будем матчиться
    const nameRegExp = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/
    const telRegExp = /[\\+]\d{3}[\\(]\d{2}[\\)]\s\d{3}[\\-]\d{2}[\\-]\d{2}/

    // Связываем значение инпутов с полями глобального состояния по событию ввода, перезаписывая значение "на лету"
    const onChangeHandler = (e, setState) => {
        dispatch(setState(e.target.value))
    }

    // Проверяем на валидность каждое поле формы перед отправкой на бэкэнд
    const onSubmit = e => {
        e.preventDefault()
        if(name === '' || tel === '')  {
            // Записываем в поле глобального состояния ошибку, если хотя бы одно из полей пустое
            dispatch(setFailMessage('Поля формы не должны оставаться пустыми'))
            dispatch(setShowFail(true)) // Показываем попап с ошибкой выше
            return // Выходим из функции, т.к. выполнение кода ниже нам не нужно
        }
        if(!name.match(nameRegExp)) {
            // Если блок выше не выполнился переходим сюда, и если ввод имени пошел не по нашему сценарию как мы хотели, т.е. получаем false (несоответствие) при сопоставлении с регулярным выражением в блоке if, выбрасываем ошибку
            dispatch(setFailMessage('Имя должно начинаться с заглавной буквы и состоять из русских или латинских символов, длиной не менее двух'))
            dispatch(setShowFail(true)) // Аналогично, показываем попап с этой ошибкой
            return // И выходим из функции
        }
        // Этот блок работает по принципу предыдущего и в коментариях не нуждается :)
        if(!tel.match(telRegExp)) {
            dispatch(setFailMessage('Введите номер телефона по образцу +375(XX) XXX-XX-XX'))
            dispatch(setShowFail(true))
            return
        }

        // И, наконец, если оба поля не пустые, и правильно заполнены, от отправляем данные на сервер
        registration(name, tel)
        
        // И показываем попап успешной отправки формы либо с сообщением от сервера, что такой пользователь уже существует
        dispatch(setShowSuccess(true))
    }

    
    return (
        <FormStyles>
            <form className="main-form" onSubmit={onSubmit}>
                <input 
                    value={name}
                    onChange={(e) => onChangeHandler(e, setName)}
                    type="text" 
                    placeholder="Имя" 
                    // Валидация прямо в хмтл, раскомментируйте, чтобы убедиться что это работает :) =============================>
                    // required 
                    // pattern="[a-zA-Zа-яёА-Яё]{3,15}" 
                    // title="Имя должно содержать русские или латинские буквы длиной не менее трех символов и не больше пятнадцати"
                />
                <input 
                    value={tel}
                    onChange={(e) => onChangeHandler(e, setTel)}
                    type="tel" 
                    placeholder="Телефон" 
                    // Здесь тоже самое :) ===================================>
                    // required 
                    // pattern="[\+]\d{3}[\(]\d{2}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}" 
                    // title="+375(XX) XXX-XX-XX"
                />
                <input type="submit" value="Оставьте заявку"/>
            </form>
        </FormStyles>
    )
}

const FormStyles = styled.div`
    .main-form {
        display: flex;
        justify-content: center;
        margin-top: 92px;
        margin-right: 25px;
        input {
            width: 265px;
            height: 62px;
            border-radius: 2px;
            border: none;
            outline: none;
            display: flex;
            align-items: center;
            padding-left: 24px;
            font-family: 'OpenSans Bold';
            color: #B7B7B7;
            ::placeholder {
                color: #B7B7B7;
                font-family: 'OpenSans Bold'
            }
        }
        input:nth-child(2) {
            margin: 0 8px;
        }
        input:last-child {
            justify-content: center;
            width: 315px;
            font-family: 'RussoOne Regular';
            color: #000000;
            text-transform: uppercase;
            font-size: 24px;
            padding-left: 0px;
            background-color: #FFED00;
            transition: 0.2s ease;
            cursor: pointer;
            :hover {
                background-color: #000000;
                color: #FFED00;
            }
        }
    }
`

