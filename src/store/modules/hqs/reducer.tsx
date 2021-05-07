import produce from 'immer';
import { Reducer } from 'redux';
import { IProps } from './IActions';
import types from './types';

const initialState = {
  hqs: null,
  total: 0,
  page: 1,
  limit: 10,
  loading: false,
};

const characters: Reducer<IProps> = (state = initialState, action): IProps => {
  return produce(state, draft => {
    switch (action.type) {
      case types.LOAD_LIST_REQUEST: {
        draft.loading = true;
        break;
      }
      case types.LOAD_LIST_SUCCESS: {
        draft.hqs = action.payload.hqs?.hqs;
        draft.total = action.payload.hqs?.total;
        draft.page = action.payload.hqs?.page;
        draft.limit = action.payload.hqs?.limit;
        draft.loading = false;
        break;
      }

      default:
    }
  });
};

export default characters;
