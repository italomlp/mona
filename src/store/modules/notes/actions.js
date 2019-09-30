const PREFIX = '@notes';

export const TYPES = {
  listNotesRequest: `${PREFIX}/LIST_NOTES_REQUEST`,
  listNotesSuccess: `${PREFIX}/LIST_NOTES_SUCCESS`,
  updateNoteRequest: `${PREFIX}/UPDATE_NOTE_REQUEST`,
  updateNoteSuccess: `${PREFIX}/UPDATE_NOTE_SUCCESS`,
  createNoteRequest: `${PREFIX}/CREATE_NOTE_REQUEST`,
  createNoteSuccess: `${PREFIX}/CREATE_NOTE_SUCCESS`,
  selectNote: `${PREFIX}/SELECT_NOTE`,
  notesFailure: `${PREFIX}/NOTES_FAILURE`,
};

export function listNotesRequest() {
  return {
    type: TYPES.listNotesRequest,
  };
}
export function listNotesSuccess(notes) {
  return {
    type: TYPES.listNotesSuccess,
    payload: { notes },
  };
}
export function updateNoteRequest(id, note) {
  return {
    type: TYPES.updateNoteRequest,
    payload: { id, note },
  };
}
export function updateNoteSuccess(note) {
  return {
    type: TYPES.updateNoteSuccess,
    payload: { note },
  };
}
export function createNoteRequest(note) {
  return {
    type: TYPES.createNoteRequest,
    payload: { note },
  };
}
export function createNoteSuccess(note) {
  return {
    type: TYPES.createNoteSuccess,
    payload: { note },
  };
}
export function notesFailure() {
  return {
    type: TYPES.notesFailure,
  };
}
