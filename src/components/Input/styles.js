import styled from 'styled-components';
import color from 'color';

import { backgroundColor, textColor } from '../../styles/theme';

export const Container = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  border: 1px solid
    ${props => {
      const theme = props.theme.mode === 'light' ? 'dark' : 'light';
      const themeColor = backgroundColor({ theme: { mode: theme } });
      return color(themeColor)
        .alpha(0.5)
        .toString();
    }};
  border-radius: 3px;
  color: ${textColor};
  background-color: ${backgroundColor};
`;

export const IconContainer = styled.div`
  padding-left: 3px;
  padding-right: 5px;
  color: ${props =>
    color(textColor(props))
      .alpha(0.8)
      .toString()};
  display: flex;
  align-items: flex-end;
  cursor: text;
`;

export const Input = styled.input`
  flex: 1;
  color: ${textColor};
  background: transparent;
  border: none;
`;
