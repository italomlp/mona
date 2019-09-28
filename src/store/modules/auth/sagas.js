import { all, takeLatest, call, put } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import { TYPES, signInSuccess, signFailure } from './actions';
import Api from '../../../services/api';
import history from '../../../services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(Api.login, { email, password });

    const { token, user } = response.data;

    Api.updateToken(token);
    yield put(signInSuccess(token, user));

    history.push('/');
  } catch (error) {
    if (error && error.response && error.response.status === 404) {
      toast.error('Usuário não encontrado');
    } else if (error && error.response && error.response.status === 401) {
      toast.error('Email ou senha inválidos');
    } else {
      toast.error('Falha na autenticação, verifique seus dados');
    }
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(Api.register, { name, email, password });

    toast.success('Usuário cadastrado com sucesso, faça o login');
    history.push('/login');
  } catch (error) {
    if (error && error.response && error.response.status === 403) {
      toast.error('Usuário com esse email já existe, tente fazer o login');
    } else {
      toast.error('Falha no cadastro, verifique seus dados');
    }
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    Api.updateToken(token);
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(TYPES.signInRequest, signIn),
  takeLatest(TYPES.signUpRequest, signUp),
]);
