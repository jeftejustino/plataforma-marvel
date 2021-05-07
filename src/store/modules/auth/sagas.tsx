import { all, put, takeLatest } from 'redux-saga/effects';
import types from './types';
import { toast } from 'react-toastify';
import { SignInSuccess, SignInFailure } from './actions';

import history from '@base/services/history';
import { IActionRequest } from './IActions';

import avatarImg from '@base/assets/images/avatar.png';

export function* SignIn({ payload }: IActionRequest) {
  try {
    yield put(
      SignInSuccess({
        user: payload.login,
        avatar: avatarImg,
      }),
    );

    history.push('/characters');
  } catch (error) {
    toast.error('Falha na autenticação, verifique seus dados!');
    yield put(SignInFailure());
  }
}

export function SingOut(): void {
  history.push('/');
}

export default all([
  takeLatest(types.SIGN_IN_REQUEST, SignIn),
  takeLatest(types.SIGN_OUT, SingOut),
]);
