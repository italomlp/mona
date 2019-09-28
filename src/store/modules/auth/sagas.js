import { all, takeLatest, call, put } from 'redux-saga/effects';

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
    yield put(signFailure());
  }
}

export default all([takeLatest(TYPES.signInRequest, signIn)]);
