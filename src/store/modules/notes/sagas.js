import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import Api from '../../../services/api';

import { TYPES, listNotesSuccess, notesFailure } from './actions';

export function* listNotes() {
  try {
    const response = yield call(Api.listNotes);
    console.tron.logImportant('chega aqui', response);
    yield put(listNotesSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao listar notas, tente novamente mais tarde');
    yield put(notesFailure());
  }
}

export function createNote() {}

export function updateNote() {}

export default all([
  takeLatest(TYPES.listNotesRequest, listNotes),
  takeLatest(TYPES.createNoteRequest, createNote),
  takeLatest(TYPES.updateNoteRequest, updateNote),
]);
