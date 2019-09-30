import React from 'react';
import { format } from 'date-fns';

import PropTypes from 'prop-types';

import { Container, Note } from './styles';

export default function NotesList({ notes, selectedId, selectNote }) {
  return (
    <Container>
      {!!notes.length &&
        notes.map((note, index) => (
          <Note
            key={note._id}
            active={selectedId === note._id}
            onClick={() => selectNote(index)}
          >
            <strong>
              {JSON.parse(note.content).blocks[0].text || 'Sem título'}
            </strong>
            <small>
              {format(new Date(note.updatedAt), 'HH:mm - dd/MM/yyyy')}
            </small>
          </Note>
        ))}
    </Container>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  selectedId: PropTypes.string,
  selectNote: PropTypes.func.isRequired,
};
