import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const BurgerMenu = ({ hideMenu }) => {

    const burgerMenu = [
        {id: 0, section: 'О нас', route: '/about'},
        {id: 1, section: 'Туры', route: '/tours'},
        {id: 2, section: 'Отзывы', route: '/reviews'},
        {id: 3, section: 'Контакты', route: '/contacts'},
    ]
    
    return (
        <BurgerMenuStyles>
            <ul className="burger-menu">
                <span onClick={hideMenu}>×</span>
                {burgerMenu.map(({id, section, route}) => (
                    <li className="burger-menu-item" key={id}>
                        <NavLink to={route} onClick={hideMenu}>{section}</NavLink> 
                    </li>
                ))}
            </ul>
        </BurgerMenuStyles>
    )
}

const BurgerMenuStyles = styled.div`
    display: none;
    .burger-menu {
        span {
            position: fixed;
            right: 30px;
            top: 15px;
            color: white;
            font-size: 80px;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        width: 100%;
        right: 0px;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        z-index: 11;
        text-transform: uppercase;
        animation: move-menu-right 1s
    }
    @keyframes move-menu-right {
        0% {
            right: -800px;
            opacity: 0
        }
        100% {
            right: 0px;
            opacity: 1
        }
    }
    .burger-menu-item {
        margin-bottom: 20px;
        font-size: 28px;
        a {
            color: white;
        }
    }
    @media(max-width: 900px) {
        display: block
    }
`