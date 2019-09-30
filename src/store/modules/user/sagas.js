import { all, takeLatest, call, put } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import { TYPES, updateProfileSuccess, updateProfileFailure } from './actions';
import Api from '../../../services/api';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...passwordFields } = payload.data;

    const profile = {
      name,
      email,
      ...(passwordFields.oldPassword ? passwordFields : {}),
    };

    const response = yield call(Api.updateMe, profile);

    toast.success('Seu perfil foi atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    if (error && error.response && error.response.status === 403) {
      toast.error('Já existe um usuário com esse email, tente outro!');
    } else if (error && error.response && error.response.status === 401) {
      toast.error('Senha inválida!');
    } else {
      toast.error('Erro ao atualizar perfil, verifique seus dados!');
    }
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest(TYPES.updateProfileRequest, updateProfile)]);
