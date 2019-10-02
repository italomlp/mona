import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import Api from '../../../services/api';

import {
  TYPES,
  listNotesSuccess,
  notesFailure,
  updateNoteSuccess,
} from './actions';

export function* listNotes() {
  try {
    const response = yield call(Api.listNotes);
    yield put(listNotesSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao listar notas, tente novamente mais tarde');
    yield put(notesFailure());
  }
}

export function createNote() {}

export function* updateNote({ payload }) {
  try {
    const { note } = payload;

    const response = yield call(Api.updateNote, note._id, note);
    console.tron.logImportant('chega aqui', payload);

    toast.success('Salvo com sucesso');
    yield put(updateNoteSuccess(response.data));
  } catch (error) {
    console.tron.error(error);
    toast.error('Erro ao salvar nota, tente novamente mais tarde');
    yield put(notesFailure());
  }
}

export default all([
  takeLatest(TYPES.listNotesRequest, listNotes),
  takeLatest(TYPES.createNoteRequest, createNote),
  takeLatest(TYPES.updateNoteRequest, updateNote),
]);
