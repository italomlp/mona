import React, { useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Split from 'react-split';

import PropTypes from 'prop-types';

import { MegadraftEditor, editorStateFromRaw } from 'megadraft';

import { GutterContainer, Gutter, Editor } from './styles';

export default function PageStructure({ notesList = [] }) {
  const [editorState, setEditorState] = useState(editorStateFromRaw(null));

  function createGutter() {
    const gutter = document.createElement('div');
    gutter.innerHTML = renderToStaticMarkup(
      <GutterContainer>
        <Gutter />
      </GutterContainer>
    );
    return gutter;
  }

  return (
    <Split
      sizes={[40, 60]}
      minSize={200}
      snapOffset={30}
      dragInterval={1}
      gutterSize={5}
      gutterAlign="center"
      direction="horizontal"
      cursor="col-resize"
      style={{ display: 'flex', flexDirection: 'row', width: '100%' }}
      gutter={createGutter}
    >
      <div>
        {notesList.length &&
          notesList.map(note => (
            <div key={note._id}>{String(note.content)}</div>
          ))}
      </div>
      <Editor>
        <MegadraftEditor
          sidebarRendererFn={() => null}
          placeholder="Digite aqui"
          editorState={editorState}
          onChange={state => setEditorState(state)}
        />
      </Editor>
    </Split>
  );
}

PageStructure.propTypes = {
  notesList: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
