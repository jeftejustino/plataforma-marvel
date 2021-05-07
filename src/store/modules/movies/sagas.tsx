import { all, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { LoadListSuccess } from './actions';
// import api from '@base/services/api';
import types from './types';

import history from '@base/services/history';
import { IActionRequest } from './IActions';

import { movies } from '@base/mock/movies';

// import { AxiosResponse } from 'axios';

// const apiCall = (page: number, limit: number) => {
//   return api
//     .get('/v1/public/series', {
//       params: {
//         offset: (page - 1) * limit,
//         limit: limit,
//         orderBy: 'title',
//       },
//     })
//     .then(response => response.data)
//     .catch(err => {
//       throw err;
//     });
// };

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* LoadList({ payload }: IActionRequest) {
  try {
    yield put(
      LoadListSuccess({
        movies: movies,
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
