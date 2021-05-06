import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SingOut } from '@base/store/modules/auth/actions';

import { Container } from './styles';

// interface IProps {}

const Characters: React.FC = () => {
  const dispatch = useDispatch();
  function handleSubmit() {
    dispatch(SingOut());
  }

  return (
    <Container>
      <h1>Logado!</h1>
      <form onSubmit={handleSubmit}>
        {/* <img src={logo} alt="GymPoint" /> */}

        <button type="submit">{false ? 'Carregando...' : 'Deslogar'}</button>
      </form>
    </Container>
  );
};

export default Characters;
