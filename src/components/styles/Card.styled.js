import styled from 'styled-components';

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${({ theme }) => theme.colors.white};
  width: 450px;
  max-width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.lightBlue};
  border-radius: 5px;
  justify-self: center;
  margin-bottom: 20px;

  img {
    width: 450px;
    max-width: 100%;
    border-radius: 5px 5px 0 0;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows[1]};
    transform: scale(1.002);
    transition: 0.5s;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
