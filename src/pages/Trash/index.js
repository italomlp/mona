import React from 'react';

import { Splitter } from '../../components';
import NotesList from '../../components/NotesList';
import Editor from '../../components/Editor';

// import { Container } from './styles';

const notes = [
  {
    _id: '5d8c08c8b1961a5c37f886d1',
    content: 'olá mundo 4',
    createdAt: '2019-09-26T00:39:36.669Z',
    updatedAt: '2019-09-26T00:40:05.881Z',
  },
];

export default function Trash() {
  return (
    <Splitter
      leftComponent={<NotesList notes={notes} />}
      rightComponent={<Editor />}
    />
  );
}
