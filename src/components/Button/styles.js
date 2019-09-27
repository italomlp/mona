import styled from 'styled-components';

import color from 'color';

import Colors from '../../styles/colors';

export const Button = styled.button`
  color: ${Colors.white};
  background-color: ${Colors.accent};
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  transition: background 0.2s;
  font-weight: bold;

  &:hover {
    background: ${color(Colors.accent)
      .darken(0.2)
      .toString()};
  }
`;
