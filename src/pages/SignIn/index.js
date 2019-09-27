import React from 'react';

import { Link } from 'react-router-dom';

import { Input, Button } from '../../components';

export default function SignIn() {
  return (
    <>
      <h2>MONA</h2>
      <small>My Own Notes App</small>

      <form>
        <Input icon="FiAtSign" type="email" placeholder="Email" />
        <Input icon="FiLock" type="password" placeholder="Senha" />

        <Button>Entrar</Button>
      </form>

      <Link to="/register">Criar conta</Link>
    </>
  );
}
