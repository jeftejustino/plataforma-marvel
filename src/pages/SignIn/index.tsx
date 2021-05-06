import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SignInRequest } from '@base/store/modules/auth/actions';

import {
  Access,
  Container,
  Inputs,
  Logo,
  Wellcome,
  SaveLoginForgot,
  NotRegistered,
} from './styles';

import logo from '@base/assets/images/logo.svg';

import Input from '@base/components/Input';
import Button from '@base/components/Button';

// interface IProps {}

const SignIn: React.FC = () => {
  const loading = useSelector(state => state);
  console.log('||||->', loading);

  const dispatch = useDispatch();
  function handleSubmit() {
    dispatch(SignInRequest('email@email.com', '123456789'));
  }

  return (
    <Container>
      <Logo>
        <img src={logo} />
      </Logo>

      <form onSubmit={handleSubmit}>
        <Wellcome>Bem-vindo(a) de volta!</Wellcome>
        <Access>Acesse sua conta:</Access>

        <Inputs>
          <Input name="login" type="text" placeholder="Usúario" />

          <Input name="password" type="password" placeholder="Senha" />
        </Inputs>

        <SaveLoginForgot>
          <div className="save-login">
            <input type="checkbox" /> Salva Login
          </div>

          <div className="forgot">
            <a href="#">Esqueci a senha</a>
          </div>
        </SaveLoginForgot>

        <Button type="submit">Entrar</Button>

        <NotRegistered>
          Ainda não tem login?<a href="#">Cadastre-se</a>
        </NotRegistered>
      </form>
    </Container>
  );
};

export default SignIn;
