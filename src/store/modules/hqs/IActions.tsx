export interface IProps {
  hqs: any;
  total: number;
  limit: number;
  page: number;
  loading: boolean;
}
export interface ICharacters {
  name: any;
}

export interface IActionRequest {
  type: string;
  payload: {
    page: number;
    limit: number;
  };
}

export interface IActionSuccess {
  type: string;
  payload: {
    hqs: ICharacters;
  };
}
