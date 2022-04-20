import styled from 'styled-components';

export const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0;

  img {
    width: 100%;
  }

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
`;
