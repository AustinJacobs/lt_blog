import styled from 'styled-components';
import {
  compose,
  color,
  shadow,
  space,
  border,
  typography,
  layout,
} from 'styled-system';

// Maybe I need to change the p to something else...?
const Text = styled.p`
  ${compose(color, shadow, space, border, typography, layout)}
`;

export default Text;