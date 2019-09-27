import { all, takeLatest } from 'redux-saga/effects';

import { TYPES } from './actions';

export function* signIn() {}

export default all([takeLatest(TYPES.signInRequest, signIn)]);
