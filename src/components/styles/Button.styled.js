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

const Button = styled.button`
  ${compose(color, space, border, typography, layout, grid)}
  background-color: ${({ theme }) => theme.colors.ltiBlue};
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1em;
`;

export default Button;