export interface IProps {
  loading: boolean;
  signed: boolean;
}

export interface IAction {
  type: string;
}

export interface IActionRequest {
  type: string;
  payload: {
    login: string;
    password: string;
  };
}

export interface IProfile {
  user: string;
  avatar: string;
}

export interface IActionSuccess {
  type: string;
  payload: {
    profile: IProfile;
  };
}
