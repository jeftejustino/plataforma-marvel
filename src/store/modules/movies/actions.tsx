import { IActionRequest, IActionSuccess } from './IActions';
import types from './types';

export function LoadListRequest(limit: number, page: number): IActionRequest {
  return {
    type: types.LOAD_LIST_REQUEST,
    payload: { limit, page },
  };
}

export function LoadListSuccess(movies: any): IActionSuccess {
  return {
    type: types.LOAD_LIST_SUCCESS,
    payload: { movies },
  };
}
