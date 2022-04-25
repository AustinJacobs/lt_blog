import styled from 'styled-components';

const ArticleDetailBodyContainer = styled.div`
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

  h3 {
    font-size: 1.5em;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding: 1em 3em 1em 3em;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    padding: 1em 1em 1em 1em;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    h1 {
      font-size: 32px;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    h1 {
      font-size: 28px;
    }
  }
`;

export default ArticleDetailBodyContainer;