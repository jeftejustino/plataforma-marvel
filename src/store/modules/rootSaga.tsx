import { all, AllEffect } from 'redux-saga/effects';

import auth from './auth/sagas';
import characters from './characters/sagas';
import hqs from './hqs/sagas';
import movies from './movies/sagas';

export default function* rootSaga() {
  yield all([auth, characters, hqs, movies]);
}
