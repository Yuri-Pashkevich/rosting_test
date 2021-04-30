import styled, { createGlobalStyle } from 'styled-components';
import { OpenSansBoldWoff2, OpenSansBoldWoff, OpenSansBoldTtf, RussoOneRegularWoff2, RussoOneRegularWoff, RussoOneRegularTtf } from './assets/fonts/fonts'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'OpenSans Bold';
        src: url(${OpenSansBoldWoff2}) format('woff2'), 
        url(${OpenSansBoldWoff}) format('woff'), 
        url(${OpenSansBoldTtf}) format('truetype');
        font-style: bold;
    }
    @font-face {
        font-family: 'RussoOne Regular';
        src: url(${RussoOneRegularWoff2}) format('woff2'), 
        url(${RussoOneRegularWoff}) format('woff'), 
        url(${RussoOneRegularTtf}) format('truetype');
        font-style: normal;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'RussoOne Regular';
    }
    h1, h2, h3, h4, h5, p {
        margin: 0;
        padding: 0;
    }
    ul, li {
        margin: 0;
        padding: 0;
        display: block; 
    }
    * {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
    }
`

export const ContentContainer = styled.div`
    width: 1220px;
    margin: 0 auto;
    padding: 0 20px;
    @media(max-width: 1220px) {
        width: auto;
    }
    @media(max-width: 900px) {
        
    }
`

export const formStyle = {
    wrapper: `
        position: fixed;
        top: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 5;
    `,
    popup: `
        position: fixed;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        top: calc(100% - 50% - 175px);
        width: 550px;
        height: 250px;
        border-radius: 2px;
        background-color: #E83A28;
        color: #000;
    `,
    button: `
        width: 150px;
        height: 40px;
        margin-top: 10px;
        background-color: #FFED00;
        color: black;
        transition: 0.2s ease;
        :hover {
            background-color: white;
            color: #E83A28;
        }
    `,
    text: `
        text-align: center;
        margin-bottom: 20px;
        color: white;
    `
}