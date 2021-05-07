import produce from 'immer';
import { Reducer } from 'redux';
import { IProps } from './IActions';

const initialState = {
  loading: false,
  signed: false,
};

const auth: Reducer<IProps> = (state = initialState, action): IProps => {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.loading = false;
        draft.signed = true;
        break;
      }
      case '@auth/SIGN_IN_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.signed = false;
        break;
      }

      default:
    }
  });
};

export default auth;
