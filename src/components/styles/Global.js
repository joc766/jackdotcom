import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${ ({theme}) => theme.colors.background };
        color: ${ ({theme}) => theme.colors.secondary };
        font-family: ${ ({theme}) => theme.fonts.primary };
    }

    a {
        text-decoration: none;
    }
`

export default GlobalStyles;