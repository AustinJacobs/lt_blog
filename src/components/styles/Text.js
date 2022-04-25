import styled from 'styled-components';
import { variant, space, color, typography, layout } from 'styled-system';
import PropTypes from 'prop-types';
import { theme } from '../../theme';

const variants = {
  p: {
    fontSize: theme.fontSizes[0],
  },
  span: {
    fontSize: theme.fontSizes[0],
    color: theme.colors.ltiRed,
  },
};

const Text = styled.p(
  {
    margin: 0,
  },
  variant({ variants }),
  color, 
  typography,
  space,
  layout
)

Text.propTypes = {
  variant: PropTypes.oneOf(Object.keys(variants)),
  children: PropTypes.node,
};

Text.defaultProps = {
  variant: 'p',
};

export default Text