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

export default all([takeLatest(TYPES.signInRequest, signIn)]);
