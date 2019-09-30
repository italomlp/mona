import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import notes from './notes/reducer';

const reducers = combineReducers({
  auth,
  user,
  notes,
});

export default reducers;
