import styled from 'styled-components';
import { variant, space } from 'styled-system';
import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import { theme } from '../../theme';

const variants = {
  1: {
    fontSize: theme.fontSizes[3],
  },
  2: {
    fontSize: theme.fontSizes[2],
  },
  3: {
    fontSize: theme.fontSizes[1],
  },
};

const HeadingBase = ({ level, as: Component = `h${level}`, ...props }) => (
  <Component {...props} />
);

const Heading = styled(HeadingBase)(
  {
    margin: 0,
  },
  variant({
    variants,
    prop: 'level',
  }),
  space
);

Heading.propTypes = {
  ...propTypes.space,
  level: PropTypes.oneOf([1, 2, 3]).isRequired,
  children: PropTypes.node,
};

export default Heading;
