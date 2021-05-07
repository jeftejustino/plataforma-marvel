import produce from 'immer';
import { Reducer } from 'redux';
import { IProps } from './IActions';
import types from './types';

const initialState = {
  movies: null,
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
        draft.movies = action.payload.movies?.movies;
        draft.total = action.payload.movies?.total;
        draft.page = action.payload.movies?.page;
        draft.limit = action.payload.movies?.limit;
        draft.loading = false;
        break;
      }

      default:
    }
  });
};

export default characters;
