import React, { useState, useEffect } from 'react';

import { MegadraftEditor, editorStateFromRaw } from 'megadraft';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Editor({ note }) {
  const [editorState, setEditorState] = useState(editorStateFromRaw(null));

  useEffect(() => {
    if (note) {
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
