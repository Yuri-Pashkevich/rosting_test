import React from 'react'
import styled from 'styled-components'
import logo from '../assets/png/logo.png'
import A1_logo from '../assets/png/A1 logo.png'
import mts_logo from '../assets/png/mts logo.png'
import { NavLink } from 'react-router-dom'



export const Navbar = () => {
    return (
        <NavbarStyles>
            <div className="logo">
                <NavLink to="/">
                    <img src={logo} alt="logo-roster"/>
                </NavLink>
            </div>
            <ul className="menu">
                <li className="menu-item">
                    <NavLink to="/about">О нас</NavLink> 
                </li>
                <li className="menu-item">
                    <NavLink to="/tours">Туры</NavLink>   
                </li>
                <li className="menu-item">
                    <NavLink to="/reviews">Отзывы</NavLink>   
                </li>
                <li className="menu-item">
                    <NavLink to="/contacts">Контакты</NavLink> 
                </li>
            </ul>
            <ul className="contacts">
                <li className="A1">
                    <img src={A1_logo} alt="A1-logo" className="A1-logo"/>
                    <span className="A1-tel">+375 (29) 370-64-50</span>
                </li>
                <li className="mts">
                    <img src={mts_logo} alt="mts-logo" className="mts-logo"/>
                    <span className="mts-tel">+375 (29) 222-22-22</span>
                </li>
                <li className="call-request">
                    <NavLink to="/">
                        заказать обратный звонок
                    </NavLink>
                </li>
            </ul>
        </NavbarStyles>
    )
}

const NavbarStyles = styled.div`
    display: flex;
    .logo {
        padding-top: 15px;
    }
    .menu {
        display: flex;
        margin-left: 42px;
        position: relative;
        
        align-items: center;
        text-transform: uppercase;
        font-size: 16px;

        &:after {
            content: '';
            height: 106px;
            width: 100%;
            position: absolute;
            z-index: -1;
            display: block;
            background-color: #FFED00;
            transform: skew(14deg);
        }
        li { 
            margin-left: 42px;
    
        }
        li:last-child { 
            margin-right: 42px;
        }
        a {
            color: #000000;
            transform: skew(-20deg);
            line-height: 0px;
            transition: 0.2s ease;
            :hover {
                color: #E83A28;
            }
        }
    }
    .contacts {
        margin-left: auto;
        text-align: right;
        padding-top: 15px;
        .A1-tel, .mts-tel {
            font-size: 22px;
            margin-left: 12px
        }
        .mts {
            margin-top: 0px;
        }
        .mts-tel {
            letter-spacing: 0.33px;
            margin-left: 14px 
        }
        .call-request {
            margin-top: 2px;
        }
        a {
            margin-top: 6px;
            margin-left: auto;
            font-size: 14px;
            color: #E83A28;
            display: block;
            text-transform: uppercase;
            border-bottom: 1px solid #E83A28; 
            line-height: 12px;
            width: 224px;
            transition: 0.2s ease;
            :hover {
                color: #FFED00;
                border-bottom: 1px solid #FFED00; 
                text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3)
            }
        }
    }
`