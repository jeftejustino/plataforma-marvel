import { IProps as IAuth } from '@base/store/modules/auth/IActions';
import { IProps as IUser } from '@base/store/modules/user/IActions';
import { IProps as ICharacters } from '@base/store/modules/characters/IActions';
import { IProps as IHqs } from '@base/store/modules/hqs/IActions';
import { IProps as IMovies } from '@base/store/modules/movies/IActions';

export interface RootState {
  user: IUser;
  auth: IAuth;
  characters: ICharacters;
  hqs: IHqs;
  movies: IMovies;
}
