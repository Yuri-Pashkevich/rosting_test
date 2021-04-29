import React from 'react'
import styled from 'styled-components'
import { ContentContainer } from '../globalStyles'
import { Navbar } from '../components'
import { Form, FormSendSuccess, FormSendFail } from '../utils'
import rosting_bg from '../assets/png/rosting bg.png'
import brand from '../assets/png/brand.png'
import form from '../assets/png/form.png'
import plane from '../assets/png/plane.png'
import { useSelector } from 'react-redux'

export const Main = ({ scrollTotours }) => {

    const onSuccess = useSelector(state => state.form.onSuccess)
    const onFail = useSelector(state => state.form.onFail)
    const message = useSelector(state => state.form.message)

    return (
        <MainStyles>
            <img src={rosting_bg} alt="rosting-main-bg" className="main-rosting-bg"/>
            <div className="main-title-bg"></div>
                <ContentContainer>
                    <Navbar/>
                    <h1 className="main-title">
                        Экономьте до 50% от стоимости туров <span><br/>с ранним бронированием</span> уже сейчас
                    </h1>
                    <div className="brand">
                        <img src={brand} alt="brand of year" className="brand-img"/>
                        <h2 className="brand-title">
                            Бронирование туров от самого<br/> надежного оператора – Ростинг!
                        </h2>
                    </div>
                    <div className="main-proposal">
                        <img src={form} alt="form-bg" className="form-bg"/>
                        <p className="form-text">
                            Оставьте заявку прямо сейчас!<br/> И получите <span>визу</span> в подарок!
                        </p>
                    </div>
                    <Form/>
                    <div className="proposal-plane-wrapper" onClick={scrollTotours}>
                        <img src={plane} alt="main-proposal-plane" className="main-proposal-plane"/>
                        <span>Листайте вниз</span>
                    </div>
                </ContentContainer>
            {onSuccess && <FormSendSuccess message="Cпасибо"/>}
            {onFail && <FormSendFail message={message}/>}
        </MainStyles>
    )
}

const MainStyles = styled.div`
    height: 100vh;
    .main-rosting-bg {
        z-index: -2;
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .main-title-bg {
        width: 77%;
        position: absolute;
        top: 216px;
        z-index: -1;
        border-top: 150px solid rgba(255, 255, 255, 0.8);
        border-left: 0px solid transparent;
        border-right: 35px solid transparent;
        @media(max-width: 1920px) {
            width: 80%;
        }
        @media(max-width: 1720px) {
            border-top: 132px solid rgba(255, 255, 255, 0.8);
        }
        @media(max-width: 1545px) {
            width: 83%;
        }
        @media(max-width: 1145px) {
            width: 86%;
         
        }
    }
    .main-title {
        font-size: 46px;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-top: 138px;
        @media(max-width: 1720px) {
            font-size: 40px;
        }
        span {
           color: #E83A28;
        }
    }
    .brand {
        margin-top: 65px;
        display: flex;
        img{
            margin-right: 53px;
        }
        h2 {
            font-size: 32px;
        }
    }
    .main-proposal {
        display: flex;
        justify-content: center;
        position: relative;
        img {
            position: absolute;
            z-index: -1;
        }
        p {
            margin-top: 65px;
            margin-left: 420px;
            font-size: 24px;
            text-align: center;
            color: #FFFFFF;
            span {
                color: #FFED00;
            }
        }
    }
    .proposal-plane-wrapper {
        cursor: pointer;
        margin-top: 174px; 
        display: flex;
        justify-content: center;
        text-transform: uppercase;
        font-size: 18px;
        position: relative;
        img {
            position: absolute;
            z-index: -1;
        }
        span {
            margin-top: 28px;
        }
    }
`