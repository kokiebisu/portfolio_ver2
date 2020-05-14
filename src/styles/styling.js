import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import Boniceta from '../assets/fonts/Boniceta.ttf';
import SFProDisplayRegular from '../assets/fonts/SFProDisplay-Regular.otf';
import SFProDisplayLight from '../assets/fonts/SFProDisplay-Light.otf';
import SFProDisplayHeavy from '../assets/fonts/SFProDisplay-Heavy.otf';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: SFProDisplay-Regular;
        src: url(${SFProDisplayRegular});
        font-weight: normal;
        font-style: normal; 
    }

    @font-face {
        font-family: SFProDisplay-Light;
        src: url(${SFProDisplayLight});
        font-weight: normal;
        font-style: normal; 
    }

    @font-face {
        font-family: SFProDisplay-Heavy;
        src: url(${SFProDisplayHeavy});
        font-weight: normal;
        font-style: normal; 
    }

    @font-face {
        font-family: Boniceta;
        src: url(${Boniceta}) format('truetype');
        font-weight: normal;
        font-style: normal; 
    }

    ${normalize}

    * {
        text-decoration: none;
        cursor: none;
    }

    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialized;
        font-size: 16px;
        height: 100vh;
    }

    body {
        font-family: 'thin';
        background: ${({ theme }) => theme.background};
        overscroll-behavior: none;
        overflow-x: hidden;
    }
`;
