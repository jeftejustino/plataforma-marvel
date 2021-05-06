import { combineReducers } from '@reduxjs/toolkit';

import auth from './auth/reducer';
import user from './user/reducer';

const reducers = combineReducers({
  auth,
  user,
});

export default reducers;
