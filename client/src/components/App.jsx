import React, { useRef } from 'react'
import styled from 'styled-components'
import { GlobalStyle } from '../globalStyles'
import { Main, Tours } from '../components'

export const App = () => {

    const toTours = useRef()
    const scrollToBlock = ref => {
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <AppStyles>
            <AppContainer>
                <GlobalStyle/>
                <Main scrollTotours={() => scrollToBlock(toTours)}/>
                <Tours scrollRef={toTours}/>
            </AppContainer>
        </AppStyles>
    )
}

const AppStyles = styled.div`
    button {
        font-family: 'RussoOne Regular';
        text-transform: uppercase;
        outline: none;
        border: none;
        cursor: pointer;
        border-radius: 2px;
        transition: 0.2s ease;
        :hover {
            background-color: #000;
            color: #FFE400;
        }
    }
`
const AppContainer = styled.div`
    @media(max-width: 900px) {
        width: 900px;
    }
`