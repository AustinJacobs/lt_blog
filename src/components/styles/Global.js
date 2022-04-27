import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: filson-pro, sans-serif;
  }

  h3 {
    font-size: 1.5em;
    margin: 0;
  }

  ul {
    list-style: none;
  }

  li::before {
    content: '•';
    color: #B71A04;
    display: inline-block; 
    width: 1em;
    margin-left: -1em
  }
`;

export default GlobalStyles;
