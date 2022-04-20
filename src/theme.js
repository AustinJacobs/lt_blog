const colors = {
  ltiRed: '#B71A05',
  darkGrey: '#323232',
  mediumDarkGrey: '#595959',
  mediumGrey: '#BDBDBD',
  lightGrey: '#E6E6E6',
  black: '#000000',
  ltiBlue: '#0A415C',
  white: '#ffffff',
  lightBlue: '#cee8f7',
};

const breakpoints = {
  small: '850px',
  medium: '1400px',
};

const shadows = [
  '3px 3px 10px 0 rgba(0, 0, 0, 0.2)',
  '10px 10px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
];

shadows.boxShadowBtn = shadows[0];
shadows.boxShadowGrid = shadows[1];

export const theme = {
  colors,
  shadows,
  breakpoints,
};