import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Input, Button, Logo } from '../../components';
import { signInRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Logo />

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

        <Button>{loading ? 'Carregando...' : 'Entrar'}</Button>
      </Form>

      <Link to="/register">Criar conta</Link>
    </>
  );
}
