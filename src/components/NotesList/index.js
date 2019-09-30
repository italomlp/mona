import React from 'react';

// import { Container } from './styles';

export default function NotesList({ notes }) {
  return (
    <div>
      {!!notes.length &&
        notes.map(note => <div key={note._id}>{String(note.content)}</div>)}
    </div>
  );
}
