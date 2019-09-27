import React from 'react';

import { Link } from 'react-router-dom';

import { Input, Button } from '../../components';

export default function SignUp() {
  return (
    <>
      <h2>MONA</h2>
      <small>My Own Notes App</small>

      <form>
        <Input icon="FiUser" placeholder="Nome completo" />
        <Input icon="FiAtSign" type="email" placeholder="Email" />
        <Input icon="FiLock" type="password" placeholder="Senha" />
        <Input
          icon="FiLock"
          type="password"
          placeholder="Confirmação de senha"
        />

        <Button>Cadastrar</Button>
      </form>

      <Link to="/login">Já tenho conta</Link>
    </>
  );
}
