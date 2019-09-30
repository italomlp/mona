import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Splitter } from '../../components';
import { listNotesRequest } from '../../store/modules/notes/actions';

// import { Container } from './styles';

const DEFAULT_NOTES = [
  {
    _id: '5d8bd6b922feb057e1a29d0c',
    content: 'olá mundo 3',
    createdAt: '2019-09-25T21:06:01.725Z',
    updatedAt: '2019-09-26T00:34:23.515Z',
  },
  {
    _id: '5d8bd4cbf4269e5754770bcb',
    content: 'olá mundo',
    createdAt: '2019-09-25T20:57:47.693Z',
    updatedAt: '2019-09-25T21:06:15.363Z',
  },
  {
    _id: '5d8bd68b9f3e1e57cf38cbe3',
    content: 'olá mundo 2',
    createdAt: '2019-09-25T21:05:15.629Z',
    updatedAt: '2019-09-25T21:05:15.629Z',
  },
];

export default function Main() {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes.notes);

  useEffect(() => {
    dispatch(listNotesRequest());
  }, []);

  return <Splitter notesList={notes || DEFAULT_NOTES} />;
}
