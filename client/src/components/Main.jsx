import React from 'react'
import styled from 'styled-components'
import { ContentContainer } from '../globalStyles'
import { Navbar } from '../components'
import { Form, FormSendSuccess, FormSendFail } from '../utils'
import rosting_bg from '../assets/png/rosting bg.png'
import brand from '../assets/png/brand.png'
import form from '../assets/png/form.png'
import form_mobile from '../assets/png/form-mobile.png'
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
            <div className="navbar-background"></div>
                <ContentContainer>
                    <Navbar/>
                    <h1 className="main-title">
                        Экономьте <br className="title-900px"/> до 50% от стоимости туров <span><br className="title-901px"/>с ранним бронированием</span> <br className="title-900px"/>уже сейчас
                    </h1>
                    <div className="brand">
                        <img src={brand} alt="brand of year" className="brand-img"/>
                        <h2 className="brand-title">
                            Бронирование туров <br className="title-900px"/>от самого<br className="title-901px"/> надежного <br className="title-900px"/>оператора – Ростинг!
                        </h2>
                    </div>
                    <div className="main-proposal">
                        <img src={form} alt="form-bg" className="form-bg"/>
                        <img src={form_mobile} alt="form-bg-mobile" className="form-bg-mobile"/>
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
    position: relative;
    height: 100vh;
    @media(max-width: 1030px) {
        height: 100%;
        width: 100%;
    }
    .main-rosting-bg {
        z-index: -10;
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: cover;
        @media(max-width: 900px) {
           top: 125px;
        }
    }
    .navbar-background {
        display: none;
        @media(max-width: 900px) {
            display: block;
            z-index: 10;
        }
        background-color: white;
        height: 125px;
        width: 100%;
        position: fixed;

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
        @media(max-width: 1200px) {
            width: 89%;
        }
        @media(max-width: 1150px) {
            width: 97%;
        }
        @media(max-width: 1030px) {
            top: calc(216px - 18px);
            border-top: 120px solid rgba(255, 255, 255, 0.8);
        }
        @media(max-width: 900px) {
            border-top: 357px solid rgba(255, 255, 255, 0.8);
            top: calc(125px + 40px);
        }
    }
    .main-title {
        font-size: 46px;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-top: 138px;
        .title-900px {
            display: none;
        }
        @media(max-width: 1720px) {
            font-size: 40px;
        }
        @media(max-width: 1030px) {
            margin-top: 120px;
            font-size: 35px;
        }
        @media(max-width: 900px) {
            margin-top: calc(125px + 82px);
            font-size: 46px;
            width: 584px;
            .title-900px {
                display: block;
            }
            .title-901px {
                display: none;
            }
        }
        span {
           color: #E83A28;
        }
    }
    .brand {
        margin-top: 65px;
        display: flex;
        align-items: center;
        .title-900px {
            display: none
        }
        img {
            margin-right: 53px;
            width: 132px;
            height: 76px;
            @media(max-width: 900px) {
                width: 181px;
                height: 105px
            }
        }
        h2 {
            font-size: 32px;
            @media(max-width: 900px) {
                .title-901px {
                    display: none
                }
                .title-900px {
                    display: block
                }
            }
        }
    }
    .main-proposal {
        display: flex;
        justify-content: center;
        position: relative;
        .form-bg-mobile {
            display: none;
            width: 704px;
        }
        img {
            position: absolute;
            z-index: -1;
            @media(max-width: 1030px) {
                width: 800px;
                margin-top: 50px
            }
        }
        @media(max-width: 900px) {
            .form-bg-mobile {
                display: block;
                margin-top: 30px
            }
            .form-bg {
                display: none;
            }
        }
        p {
            margin-top: 65px;
            margin-left: 420px;
            font-size: 24px;
            text-align: center;
            color: #FFFFFF;
            @media(max-width: 1030px) {
                font-size: 19px;
                margin-top: 105px;
                margin-left: 345px;
            }
            @media(max-width: 1030px) {
                margin-top: 105px
            }
            @media(max-width: 900px) {
                font-size: 28px;
                margin: 125px 35px 0 0;
                
            }
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
        @media(max-width: 1030px) {
            margin-top: 120px; 
            margin-bottom: 40px; 
        }
        @media(max-width: 900px) {
            display: none;
        }
        img {
            position: absolute;
            z-index: -1;
        }
        span {
            margin-top: 28px;
        }
    }
`