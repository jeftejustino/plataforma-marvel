import { all, put, call, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { SignInSuccess, SignInFailure } from './actions';

import api from '@base/services/api';
import history from '@base/services/history';

export function* SignIn() {
  try {
    // const { email, password } = payload;

    // const response = yield call(api.post, 'session', {
    //   email,
    //   password,
    // });

    // const { user, token } = response.data;

    // api.defaults.headers.Authorization = `Bearer ${token}`;

    // yield put(SignInSuccess(token, user));
    yield put(SignInSuccess('a1b2c3d4e5f6', 'usuario'));

    history.push('/characters');
  } catch (error) {
    toast.error('Falha na autenticação, verifique seus dados!');
    yield put(SignInFailure());
  }
}

export function setToken({ payload }: any) {
  console.log(payload);
  if (payload) {
    const { token } = payload.auth;
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }
  }
}

export function SingOut() {
  history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', SignIn),
  // takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_OUT', SingOut),
]);
