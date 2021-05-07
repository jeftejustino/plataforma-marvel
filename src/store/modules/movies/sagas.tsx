import { all, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { LoadListSuccess } from './actions';
// import api from '@base/services/api';
import types from './types';

import history from '@base/services/history';
import { IActionRequest } from './IActions';

import { movies } from '@base/mock/movies';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* LoadList({ payload }: IActionRequest) {
  const mvs = [];
  for (
    let index = (payload.page - 1) * payload.limit;
    index < payload.page * payload.limit;
    index++
  ) {
    if (movies[index]) {
      const element = movies[index];
      mvs.push(element);
    }
  }

  try {
    yield put(
      LoadListSuccess({
        movies: mvs,
        limit: payload.limit,
        page: payload.page,
        total: movies.length,
      }),
    );
  } catch (error) {
    toast.error('Falha ao carregar dados!');
  }
}

export function SingOut(): void {
  history.push('/');
}

export default all([takeLatest(types.LOAD_LIST_REQUEST, LoadList)]);
