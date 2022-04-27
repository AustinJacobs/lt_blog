import styled from 'styled-components';
import {
  compose,
  color,
  space,
  border,
  typography,
  layout,
  grid,
} from 'styled-system';

const Grid = styled.div`
  ${compose(color, space, border, typography, layout, grid)}
  display: grid;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints[3]}) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints[2]}) {
    grid-template-columns: 1fr;
  }
`;

export default Grid;
