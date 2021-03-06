import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Input, Button, Logo } from '../../components';
import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Insira o nome completo')
    .required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('A senha é obrigatória'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'As senhas não correspondem')
    .required('A confirmação de senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <Logo />

      <Form onSubmit={handleSubmit} schema={schema} noValidate>
        <Input
          isUnformComponent
          icon="FiUser"
          name="name"
          placeholder="Nome completo"
        />
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
        <Input
          isUnformComponent
          icon="FiLock"
          name="passwordConfirmation"
          type="password"
          placeholder="Confirmação de senha"
        />

        <Button>Cadastrar</Button>
      </Form>

      <Link to="/login">Já tenho conta</Link>
    </>
  );
}
