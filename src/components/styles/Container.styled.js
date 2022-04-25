import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: ${({ theme }) => theme.colors.white};


`;