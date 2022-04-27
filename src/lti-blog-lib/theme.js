import {
  BREAKPOINTS,
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  SHADOWS,
  SIZES,
  SPACE
} from './theme-constants';
import { breakpointAliases, fontSizeAliases } from './theme-aliases';

for (const size in breakpointAliases) {
  BREAKPOINTS[size] = BREAKPOINTS[breakpointAliases[size]]
};

for (const size in fontSizeAliases) {
  FONT_SIZES[size] = FONT_SIZES[fontSizeAliases[size]]
};

export const theme = {
  breakpoints: BREAKPOINTS,
  borderWidths: SPACE,
  colors: COLORS,
  fonts: FONT_FAMILIES,
  fontSizes: FONT_SIZES,
  fontWeights: FONT_WEIGHTS,
  lineHeights: LINE_HEIGHTS,
  radii: SPACE,
  shadows: SHADOWS,
  sizes: SIZES,
  space: SPACE
}