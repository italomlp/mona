import React, { useState } from 'react';

import { MegadraftEditor, editorStateFromRaw } from 'megadraft';

import { Container } from './styles';

export default function Editor() {
  const [editorState, setEditorState] = useState(editorStateFromRaw(null));

  return (
    <Container>
      <MegadraftEditor
        sidebarRendererFn={() => null}
        placeholder="Digite aqui"
        editorState={editorState}
        onChange={state => setEditorState(state)}
      />
    </Container>
  );
}
