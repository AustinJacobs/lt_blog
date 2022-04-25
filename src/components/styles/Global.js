import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: filson-pro, sans-serif;
  }

  img {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles
