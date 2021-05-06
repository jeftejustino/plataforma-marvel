import React from 'react';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { SingOut } from '@base/store/modules/auth/actions';

import { Container, Menu, Logo, Profile } from './styles';

import logoImg from '@base/assets/images/logo.svg';

const Header: React.FC = () => {
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
        <Link to="characters">Personagens</Link>
        <Link to="movies">Filmes</Link>
        <Link to="hqs">HQs</Link>
      </Menu>

      <Profile>
        {/* <img src={}> */}
        <a href="#" onClick={() => handleLogout()}>
          Sair
        </a>
      </Profile>
    </Container>
  );
};

export default Header;
