import styled from 'styled-components';
import { compose, color, space, border, typography, layout, grid } from 'styled-system';

const Box = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  width: 100%;
`;

export default Box;
