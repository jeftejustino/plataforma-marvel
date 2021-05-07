export interface IProps {
  movies: any;
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
    movies: ICharacters;
  };
}
