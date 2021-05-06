import produce from 'immer';
import { Reducer } from 'redux';
import { Action } from './IAction';

interface IProps {
  loading: boolean;
  profile: null;
}

const initialStates = {
  loading: false,
  profile: null,
};

const user: Reducer<IProps> = (
  state = initialStates,
  action: Action,
): IProps => {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }

      default:
    }
  });
};

export default user;
