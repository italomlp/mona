import produce from 'immer';

import { TYPES } from './actions';

const INITIAL_STATE = {
  notes: [],
  loading: false,
  selected: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case TYPES.listNotesRequest:
        draft.loading = true;
        break;
      case TYPES.listNotesSuccess:
        draft.notes = action.payload.notes;
        draft.loading = false;
        break;
      case TYPES.updateNoteRequest:
        draft.loading = true;
        break;
      case TYPES.updateNoteSuccess: {
        const noteIndex = draft.notes.findIndex(
          n => n._id === action.payload.note._id
        );
        draft.notes[noteIndex] = action.payload.note;
        draft.loading = false;
        break;
      }
      case TYPES.createNoteRequest:
        draft.loading = true;
        break;
      case TYPES.createNoteSuccess:
        draft.notes.push(action.payload.note);
        draft.loading = false;
        break;
      case TYPES.notesFailure:
        draft.loading = false;
        break;
      default:
    }
  });
}
