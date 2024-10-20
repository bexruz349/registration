import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-width: 530px;
    margin: 0;
    font-family: "Inter", sans-serif;
    background-color: ${props => props.theme.colors.bgc};
    color: ${props => props.theme.colors.textColor};
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: ${props => props.theme.colors.textColor};
    }
  }

  ._no-select {
    -webkit-touch-callout: none; 
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none; 
  }
`;
