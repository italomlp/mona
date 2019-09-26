import theme from 'styled-theming';

import Colors from './colors';

export const backgroundColor = theme('mode', {
  light: Colors.white,
  dark: Colors.black,
});

export const textColor = theme('mode', {
  light: Colors.black,
  dark: Colors.white,
});
