import styled from "styled-components";

export const Loader = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.ltiRed};
  font-size: 8em;
  color: ${({ theme }) => theme.colors.white};
`;

