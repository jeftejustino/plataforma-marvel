import { IProfile } from '../auth/IActions';

export interface IProps {
  loading: boolean;
  profile: IProfile | null;
}
