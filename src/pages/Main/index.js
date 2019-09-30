import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Splitter } from '../../components';
import { listNotesRequest } from '../../store/modules/notes/actions';
import NotesList from '../../components/NotesList';
import Editor from '../../components/Editor';

// import { Container } from './styles';

export default function Main() {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes.notes);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    dispatch(listNotesRequest());
  }, []);

  const selectNote = useCallback(index => setSelected(notes[index]));

  useEffect(() => {
    selectNote(0);
  }, [notes]);

  return (
    <Splitter
      leftComponent={
        <NotesList
          notes={notes}
          selectedId={selected ? selected._id : null}
          selectNote={selectNote}
        />
      }
      rightComponent={<Editor note={selected} />}
    />
  );
}
