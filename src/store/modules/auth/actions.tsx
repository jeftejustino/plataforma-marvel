import { IAction, IActionSuccess, IActionRequest, IProfile } from './IActions';
import types from './types';

export function SignInRequest(login: string, password: string): IActionRequest {
  return {
    type: types.SIGN_IN_REQUEST,
    payload: { login, password },
  };
}

export function SignInSuccess(profile: IProfile): IActionSuccess {
  return {
    type: types.SIGN_IN_SUCCESS,
    payload: { profile },
  };
}

export function SignInFailure(): IAction {
  return {
    type: types.SIGN_IN_FAILURE,
  };
}

export function SingOut(): IAction {
  return {
    type: types.SIGN_OUT,
  };
}
