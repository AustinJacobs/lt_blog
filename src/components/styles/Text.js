import styled from 'styled-components';
import { variant, space, color, typography, layout } from 'styled-system';
import PropTypes from 'prop-types';
import theme from '@leisuretimeinc/lti-lib/dist/theme';

const variants = {
  p: {
    fontSize: theme.fontSizes[0],
  },
  span: {
    fontSize: theme.fontSizes[4],
    color: theme.colors.red[600],
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