import React from 'react';
import { withTheme } from 'styled-components';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container, LinkContainer, Link, ThemeToggleContainer } from './styles';

import { useTheme } from '../../styles/ThemeContext';

import Icon from '../Icon';

function Sidebar({ routes = [], theme: { mode }, location: { pathname } }) {
  const themeToggle = useTheme();
  return (
    <Container>
      <ThemeToggleContainer onClick={() => themeToggle.toggle()}>
        <Icon
          name={mode === 'light' ? 'FiSquare' : 'FiCheckSquare'}
          onClick={() => themeToggle.toggle()}
        />
        <span>Modo escuro</span>
      </ThemeToggleContainer>
      {routes.map((route, index) => (
        <LinkContainer key={String(index)} active={pathname === route.path}>
          {route.icon && <Icon name={route.icon} />}
          <Link to={route.path}>{route.title}</Link>
        </LinkContainer>
      ))}
    </Container>
  );
}

Sidebar.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      icon: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  theme: PropTypes.shape({
    mode: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withTheme(withRouter(Sidebar));
