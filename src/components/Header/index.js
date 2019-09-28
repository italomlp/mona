import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Logo from '../Logo';

import { Container, Content } from './styles';

export default function Header() {
  const name = useSelector(state => state.user.profile.name);

  return (
    <Container>
      <Content>
        <Link to="/">
          <Logo />
        </Link>
        <div>
          <h4>{name}</h4>
          <div>
            <Link to="/profile">Perfil</Link>
            <Link to="/login">Sair</Link>
          </div>
        </div>
      </Content>
    </Container>
  );
}
