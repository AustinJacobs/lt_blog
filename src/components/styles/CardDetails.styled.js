import styled from 'styled-components';

export const CardDetails = styled.div`
  margin: 0 1em 0 1em;

  h1 {
    font-size: 22px;
    margin: 0;
    margin-top: 5px;
  }

  h3 {
    color: ${({ theme }) => theme.colors.ltiRed};
    font-size: 16px;
    margin-top: 2px;
  }
`;
