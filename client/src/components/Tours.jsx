import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Navbar } from '../components'
import { ContentContainer } from '../globalStyles'
import tours_bg from '../assets/jpg/tours bg.jpg'
import tours_buy from '../assets/png/tours buy.png'
import bulgaria from '../assets/jpg/bulgaria.jpeg'
import cyprus from '../assets/jpg/cyprus.jpeg'
import georgia from '../assets/jpg/georgia.jpeg'
import greece from '../assets/jpg/greece.jpeg'
import italy from '../assets/jpg/italy.jpeg'
import montenegro from '../assets/jpg/montenegro.jpeg'
import spain from '../assets/jpg/spain.jpeg'
import turkey from '../assets/jpg/turkey.jpeg'
import uae from '../assets/jpg/uae.jpeg'
import antaliya from '../assets/jpg/antaliya.jpeg'
import limassol from '../assets/jpg/limassol.jpeg'
import abu_dhabi from '../assets/jpg/abu dhabi.jpeg'
import { useDispatch, useSelector } from 'react-redux'
import { getEURcurrency, getUSDcurrency } from '../actions/currency'

export const Tours = ({ scrollRef }) => {
    
    const proposalCountries = [
        { id: 0, country: 'Болгария', flag: bulgaria },
        { id: 1, country: 'Италия', flag: italy },
        { id: 2, country: 'Испания', flag: spain },
        { id: 3, country: 'Греция', flag: greece },
        { id: 4, country: 'Кипр', flag: cyprus },
        { id: 5, country: 'Турция', flag: turkey },
        { id: 6, country: 'ОАЭ', flag: uae },
        { id: 7, country: 'Черногория', flag: montenegro },
        { id: 8, country: 'Грузия', flag: georgia }
    ]

    const proposalCities = [
        { id: 0, city: 'Анталия', country: 'Турция', city_photo: antaliya, price_byn: '1500' },
        { id: 1, city: 'Абу-даби', country: 'ОАЭ', city_photo: abu_dhabi, price_byn: '2300' },
        { id: 2, city: 'Лимасол', country: 'Кипр', city_photo: limassol, price_byn: '1900' },
    ]

    const dispatch = useDispatch()

    // При первом маунте компонента вызываем эффект, который в свою очередь вызывает два запроса на сервер НБРБ
    useEffect(() => {
        dispatch(getUSDcurrency())
        dispatch(getEURcurrency())
    }, [dispatch])

    // И достаем значения, записанные в поля глобального хранилища
    const usdExchangeRate = useSelector(state => state.currency.exchangeRateUSD)
    const eurExchangeRate = useSelector(state => state.currency.exchangeRateEUR)
    
    // Затем в блоке proposal-price-eur просто делим цену в белорусских рублях на текущий курс валют в банке

    return (
        <ToursStyles>
            <img src={tours_bg} alt="tours-main-bg" className="tours-main-bg"/>
            <ContentContainer>
                    <div className="tours-buy">
                        <img src={tours_buy} alt="tours-buy-img" className="tours-buy-img"/>
                        <h2 className="tours-buy-title">
                            сейчас покупают
                        </h2>
                    </div>
                    <ul className="proposal-menu" ref={scrollRef}>
                            <button className="proposal-menu-button">Все</button>
                            {proposalCountries.map(({id, country, flag}) => (
                                <li className="proposal-menu-item" key={id}>
                                    <div className="flag-wrapper">
                                        <img src={flag} alt={flag}/>
                                    </div>
                                    <span>{country}</span>
                                </li>
                            ))}
                    </ul>
                    <ul className="proposal-cards">
                        {proposalCities.map(({id, city, country, city_photo, price_byn}) => (
                            <li className="proposal-card-item" key={id}>
                                <div className="proposal-image-wrapper">
                                    <img src={city_photo} alt={city_photo}/>
                                    <div className="proposal-price-usd-eur">
                                        <span className="proposal-price-usd">
                                            Стоимость поездки в USD <br/>по курсу НБРБ 
                                            <span> {Math.round(price_byn / usdExchangeRate)}$</span>
                                        </span>
                                        <span className="proposal-price-eur">
                                            Стоимость поездки в EUR <br/>по курсу НБРБ  
                                            <span> {Math.round(price_byn / eurExchangeRate)}€</span>
                                        </span>
                                    </div>
                                    <span className="proposal-price-byn">{price_byn} б.р.</span>
                                </div>
                                <div className="proposal-country-wrapper">
                                    <span className="proposal-city">{city}</span>
                                    <span className="proposal-country">{country}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="proposal-show-wrapper">
                        <button className="proposal-show-all">Показать все предложения (101)</button>
                    </div>
                    <div className="tours-navbar-wrapper"><Navbar/></div> 
            </ContentContainer>
            <div className="proposal-navbar-bgc"></div>
        </ToursStyles>
    )
}

const ToursStyles = styled.div`
    position: relative;
    .tours-main-bg {
        position: absolute;
        z-index: -3;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .tours-buy {
        display: flex;
        justify-content: center;
        position: relative;
        padding-top: 120px;
        @media(max-width: 900px) {
            padding: 80px 0 160px;
        }
        h2 {
            text-transform: uppercase;
            font-size: 28px;
            margin-top: 22px;
        }
        img {
            position: absolute;
            z-index: -1;
        }
    }
    .proposal-menu {
        button {
            width: 68px;
            background-color: #fff;
            :hover {
                color: #FFE400;
                background-color: #000;
            }
            @media(max-width: 1220px) {
                width: 100%;
            }
         
        }
        margin-top: 144px;
        display: flex;
        justify-content: space-around;
        @media(max-width: 1220px) {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 10px;
            margin-top: 104px;
        }
        @media(max-width: 900px) {
            margin-top: 0px;
        }

        li {
           background-color: #FFE400;
           padding: 6px;
           display: flex;
           align-items: center;
           border-radius: 2px;
           cursor: pointer;
           transition: 0.2s ease;
            :hover {
                background-color: #000;
                color: #FFE400;
            }
        }
        .flag-wrapper {
            width: 35px;
            height: 24px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        span {
           margin-left: 6px; 
           margin-right: 10px; 
           font-size: 14px
        }
    }
    .proposal-cards {
        margin-top: 60px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 15px;
        @media(max-width: 900px) {
            grid-template-columns: repeat(2, 1fr);
            li:last-child {
                display: none;
            }
        }
    }
    @keyframes move-right {
        0% {
            left: -400px;
            opacity: 0;
        }
        100% {
            left: 0px;
            opacity: 1;
        }
    }
    .proposal-card-item {
        width: 100%;
        cursor: pointer;
        overflow: hidden;
        .proposal-price-usd-eur {
            padding: 20px;
            font-size: 20px;
            text-align: center;
            color: #fff;
            position: absolute;
            display: none;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            top: 0;
            z-index: 5;
            animation: move-right 1s;
        }
        :hover {
            .proposal-price-usd-eur {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
        }
    }
    .proposal-price-eur {
        margin-top: 20px;
    }
    .proposal-price-usd, .proposal-price-eur {
        span {
            color: #FFE400;
        }
    }
    .proposal-image-wrapper {
        position: relative;
        height: 288px;
        @media(max-width: 1150px) {
            height: 220px;
        }
        @media(max-width: 1050px) {
            height: 200px;
        }
        @media(max-width: 900px) {
            height: 261px;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .proposal-price-byn {
        padding: 10px 20px;
        position: absolute;
        right: 0;
        bottom: 0;
        background-color: #FFE400;
        font-size: 18px;
    }
    .proposal-country-wrapper {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        font-size: 20px;
        background-color: #fff;
        @media(max-width: 900px) {
            height: 60px;
            padding: 19px;
        }
    }
    .proposal-country {
        color: #E1E1E1
    }
    .proposal-show-wrapper {
        display: flex;
        justify-content: center;
    }
    .proposal-show-all {
        padding: 18px 52px;
        text-transform: uppercase;
        background-color: #FFE400;
        font-size: 24px;
        margin-top: 85px;
        margin-bottom: 83px;
        box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.2);
        @media(max-width: 900px) {
            margin: 60px 0 94px;
            width: 100%;
        }
    }
    .tours-navbar-wrapper {
        @media(max-width: 900px) {
            display: none;
        }
    }
    .proposal-navbar-bgc {
        height: 102px;
        width: 100%;
        bottom: 0;
        z-index: -2;
        position: absolute;
        background-color: #fff;
        @media(max-width: 900px) {
            display: none;
        }
    }
`