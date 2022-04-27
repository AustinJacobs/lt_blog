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

const Heading = styled.h6`
  ${compose(color, shadow, space, border, typography, layout)}
`;

export default Heading;