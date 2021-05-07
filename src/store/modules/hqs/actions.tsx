import { IActionRequest, IActionSuccess } from './IActions';
import types from './types';

export function LoadListRequest(limit: number, page: number): IActionRequest {
  return {
    type: types.LOAD_LIST_REQUEST,
    payload: { limit, page },
  };
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function LoadListSuccess(hqs: any): IActionSuccess {
  return {
    type: types.LOAD_LIST_SUCCESS,
    payload: { hqs },
  };
}
