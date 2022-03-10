import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Raleway', sans-serif, Tahoma, Helvetica, Arial;
    transition: all 0.50s linear;
  }
`