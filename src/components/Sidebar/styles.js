import styled from 'styled-components';

import { Link as DefaultLink } from 'react-router-dom';

import Colors from '../../styles/colors';

export const Container = styled.div`
  height: 100vh;
  min-width: 200px;
  border-right: 1px solid #88888822;
  padding: 10px;
`;

export const ThemeToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  cursor: pointer;

  span {
    margin-left: 5px;
  }
`;

export const Link = styled(DefaultLink)`
  text-decoration: none;
  margin-left: 8px;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 5px;
  padding: 10px 5px;
  font-size: 18px;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(125, 125, 125, 0.3);
  }

  &,
  * {
    color: ${props => (props.active ? Colors.accent : 'inherit')};
    font-weight: ${props => (props.active ? 'bold' : 'inherit')};
  }
`;
