import React from 'react';

import { NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { SingOut } from '@base/store/modules/auth/actions';

import { Container, Menu, Logo, Profile } from './styles';

import logoImg from '@base/assets/images/logo.svg';

import { RootState } from '@base/store/types';
import { IProfile } from '@base/store/modules/auth/IActions';

const Header: React.FC = () => {
  const profile = useSelector(
    (state: RootState): IProfile | null => state.user.profile,
  );

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(SingOut());
  }

  return (
    <Container>
      <Logo>
        <img src={logoImg} />
      </Logo>

      <Menu>
        <NavLink to="characters">Personagens</NavLink>
        <NavLink to="movies">Filmes</NavLink>
        <NavLink to="hqs">HQs</NavLink>
      </Menu>

      <Profile>
        <img src={profile?.avatar} />
        <a href="#" onClick={() => handleLogout()}>
          Sair
        </a>
      </Profile>
    </Container>
  );
};

export default Header;
