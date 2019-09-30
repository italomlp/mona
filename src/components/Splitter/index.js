import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Split from 'react-split';

import PropTypes from 'prop-types';

import { GutterContainer, Gutter } from './styles';
import NotesList from '../NotesList';
import Editor from '../Editor';

export default function Splitter({ notesList = [] }) {
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
      <NotesList notes={notesList} />
      <Editor />
    </Split>
  );
}

Splitter.propTypes = {
  notesList: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
