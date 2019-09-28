import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Logo from '../Logo';
import { signOut } from '../../store/modules/auth/actions';
import { Container, Content } from './styles';

export default function Header() {
  const name = useSelector(state => state.user.profile.name);
  const dispatch = useDispatch();

  function handleSignout() {
    dispatch(signOut());
  }

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
            <button type="button" onClick={handleSignout}>
              Sair
            </button>
          </div>
        </div>
      </Content>
    </Container>
  );
}
