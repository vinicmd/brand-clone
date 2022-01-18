import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --color-pink: #EA1D5D;
    --color-dark: #21243D;
    --color-light: #8695A4;
    --color-body-text: #666666;
    --color-cloud: #EDF7FA;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #__next {
    height: 100%
  }
  body {
    font-family: 'Montserrat', sans-serif;
  }
`

export default GlobalStyle
