import { Action } from './IAction';

export function SignInRequest(email: string, password: string): Action {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function SignInSuccess(token: string, profile: string): Action {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, profile },
  };
}

export function SignInFailure(): Action {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}

export function SingOut(): Action {
  return {
    type: '@auth/SIGN_OUT',
  };
}
