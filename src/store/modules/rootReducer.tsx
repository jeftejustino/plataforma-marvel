import { combineReducers } from '@reduxjs/toolkit';

import auth from './auth/reducer';
import user from './user/reducer';
import characters from './characters/reducer';
import hqs from './hqs/reducer';
import movies from './movies/reducer';

const reducers = combineReducers({
  auth,
  user,
  characters,
  hqs,
  movies,
});

export default reducers;
