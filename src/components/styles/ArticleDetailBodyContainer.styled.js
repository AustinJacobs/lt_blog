import styled from 'styled-components';

export const ArticleDetailBodyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0 auto;
  padding: 1em 6em 1em 6em;

  a {
    text-decoration: underline ${({ theme }) => theme.colors.lightBlue};
    color: ${({ theme }) => theme.colors.ltiBlue};
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 50%,
      ${({ theme }) => theme.colors.lightBlue} 50%
    );
    background-position: -0% 0;
    background-size: 200% auto;
    transition: background-position 0.5s ease-out;
  }

  a:hover {
    background-position: -99.99% 0;
    text-decoration: underline ${({ theme }) => theme.colors.ltiBlue};
  }

  h1:nth-of-type(1) {
    font-size: 3em;
    margin: 0;
    font-weight: normal;
  }

  span:first-of-type {
    color: red;
    font-size: 16px;
    margin: 0;
    margin-top: 0.5em;
  }

  p:first-of-type {
    margin-top: 2em;
  }

  h3 {
    font-size: 1.75em;
  }

  h4 {
    font-size: 1.5;
    font-family: filson-pro, sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;
