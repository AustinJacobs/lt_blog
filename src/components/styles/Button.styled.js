import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.ltiBlue};
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1em;
`;
