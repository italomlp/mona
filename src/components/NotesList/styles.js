import styled from 'styled-components';

import Color from 'color';

import { textColor } from '../../styles/theme';
import colors from '../../styles/colors';

export const Container = styled.ul`
  /* padding: 20px; */
`;

export const Note = styled.li`
  display: flex;
  padding: 20px;
  flex-direction: column;
  cursor: pointer;
  color: ${props => (props.active ? colors.accent : textColor(props))};
  background-color: ${props => {
    const c = textColor(props);
    return props.active
      ? Color(c)
          .alpha(0.05)
          .toString()
      : 'inherit';
  }};

  :not(:last-child) {
    border-bottom: 1px solid rgba(125, 125, 125, 0.4);
  }

  strong {
    font-size: larger;
    font-weight: bold;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  small {
    font-size: smaller;
    color: ${props => {
      const c = textColor(props);
      return Color(c)
        .alpha(0.6)
        .toString();
    }};
  }
`;
