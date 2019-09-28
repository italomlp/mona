import produce from 'immer';

import { TYPES } from './actions';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case TYPES.signInRequest:
        draft.loading = true;
        break;
      case TYPES.signInSuccess:
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      case TYPES.signFailure:
        draft.loading = false;
        break;
      default:
    }
  });
}
