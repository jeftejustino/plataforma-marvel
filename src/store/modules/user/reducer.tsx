import produce from 'immer';
import { Reducer } from 'redux';
import { IProps } from './IActions';
import types from '../auth/types';

const initialStates = {
  loading: false,
  profile: null,
};

const user: Reducer<IProps> = (state = initialStates, action): IProps => {
  return produce(state, draft => {
    switch (action.type) {
      case types.SIGN_IN_SUCCESS: {
        draft.profile = action.payload.profile;
        break;
      }

      case types.SIGN_OUT: {
        draft.profile = null;
        break;
      }

      default:
    }
  });
};

export default user;
