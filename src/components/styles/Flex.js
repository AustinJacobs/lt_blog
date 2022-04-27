import styled from 'styled-components';
import {
  compose,
  color,
  space,
  border,
  typography,
  layout,
  flexbox,
} from 'styled-system';

const Flex = styled.div`
  ${compose(color, space, border, typography, layout, flexbox)}
  display: flex;
`;

export default Flex;
