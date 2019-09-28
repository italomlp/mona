import React from 'react';

import { Link } from 'react-router-dom';
import { Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Input, Button } from '../../components';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignIn() {
  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <>
      <h2>MONA</h2>
      <small>My Own Notes App</small>

      <Form onSubmit={handleSubmit} schema={schema} noValidate>
        <Input
          isUnformComponent
          icon="FiAtSign"
          name="email"
          type="email"
          placeholder="Email"
        />
        <Input
          isUnformComponent
          icon="FiLock"
          name="password"
          type="password"
          placeholder="Senha"
        />

        <Button>Entrar</Button>
      </Form>

      <Link to="/register">Criar conta</Link>
    </>
  );
}
