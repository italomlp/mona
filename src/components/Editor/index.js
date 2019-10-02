import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  MegadraftEditor,
  editorStateFromRaw,
  editorStateToJSON,
} from 'megadraft';

import PropTypes from 'prop-types';

import { Container } from './styles';
import { updateNoteRequest } from '../../store/modules/notes/actions';

export default function Editor({ note }) {
  const [editorState, setEditorState] = useState(editorStateFromRaw(null));
  const dispatch = useDispatch();

  function handleSave(noteToSave, state) {
    console.tron.logImportant('note from handle save', noteToSave);
    dispatch(
      updateNoteRequest({
        ...noteToSave,
        content: editorStateToJSON(state),
      })
    );
  }

  const debounced = useRef(handleSave);

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (note && note.content !== editorStateToJSON(editorState)) {
        debounced.current(note, editorState);
      }
    }, 3000);
    return () => clearTimeout(debounce);
  }, [note, editorState]);

  useEffect(() => {
    if (note) {
      console.tron.logImportant('note from useEffect', note);
      setEditorState(editorStateFromRaw(JSON.parse(note.content)));
    }
  }, [note]);

  return (
    <Container>
      <MegadraftEditor
        sidebarRendererFn={() => null}
        placeholder="Digite aqui"
        editorState={editorState}
        onChange={state => {
          setEditorState(state);
        }}
      />
    </Container>
  );
}

Editor.propTypes = {
  note: PropTypes.shape(),
};
