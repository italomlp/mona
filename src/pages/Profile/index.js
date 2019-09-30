import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Input, Button } from '../../components';
import { updateProfileRequest } from '../../store/modules/user/actions';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().min(5, 'Seu nome deve ter pelo menos 5 caracteres'),
  email: Yup.string().email('Digite um email válido'),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (oldPassword, field) =>
    oldPassword
      ? field
          .required('Nova senha é obrigatória')
          .min(6, 'Senha deve ter pelo menos 6 caracteres')
      : field
  ),
  passwordConfirmation: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required('Campo obrigatório')
          .min(6, 'Confirmação deve ter pelo menos 6 caracteres')
          .oneOf([Yup.ref('password')], 'Senhas não correspondem')
      : field
  ),
});

export default function Profile() {
  const { profile, loading } = useSelector(state => state.user);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <h1>Perfil</h1>
      <p>Altere seus dados pessoais</p>

      <Form
        initialData={profile}
        onSubmit={handleSubmit}
        schema={schema}
        noValidate
      >
        <Input
          icon="FiUser"
          isUnformComponent
          name="name"
          placeholder="Digite seu nome"
        />
        <Input
          icon="FiAtSign"
          isUnformComponent
          name="email"
          type="email"
          placeholder="Digite seu email"
        />

        <hr />

        <p>Altere sua senha</p>

        <Input
          icon="FiLock"
          isUnformComponent
          name="oldPassword"
          type="password"
          placeholder="Digite sua senha atual"
        />
        <Input
          icon="FiLock"
          isUnformComponent
          name="password"
          type="password"
          placeholder="Digite a nova senha"
        />
        <Input
          icon="FiLock"
          isUnformComponent
          name="passwordConfirmation"
          type="password"
          placeholder="Digite a confirmação da nova senha"
        />

        <Button type="submit">{loading ? 'Carregando...' : 'Salvar'}</Button>
      </Form>
    </Container>
  );
}
