import produce from 'immer';
import { Reducer } from 'redux';
import { Action } from './IAction';

interface IProps {
  loading: boolean;
  signed: boolean;
  token: null | string;
}

const initialState = {
  loading: false,
  signed: false,
  token: null,
};

const auth: Reducer<IProps> = (
  state = initialState,
  action: Action,
): IProps => {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.loading = false;
        draft.signed = true;
        draft.token = action.payload.token;
        break;
      }
      case '@auth/SIGN_IN_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.signed = false;
        draft.token = null;
        break;
      }

      default:
    }
  });
};

export default auth;
