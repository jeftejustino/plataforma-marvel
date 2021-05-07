import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { SignInRequest } from '@base/store/modules/auth/actions';

import {
  Access,
  Container,
  Form,
  Inputs,
  Logo,
  Wellcome,
  SaveLoginForgot,
  NotRegistered,
  Background,
  FormAnimation,
} from './styles';

import logo from '@base/assets/images/logo.svg';

import Input from '@base/components/Input';
import Button from '@base/components/Button';

// interface IProps {}

const SignIn: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch(SignInRequest(login, password));
  }

  return (
    <Container>
      <Background>
        <div className="degrade"></div>
      </Background>

      <Form onSubmit={handleSubmit}>
        <Logo>
          <img src={logo} />
        </Logo>
        <FormAnimation>
          <Wellcome>Bem-vindo(a) de volta!</Wellcome>
          <Access>Acesse sua conta:</Access>

          <Inputs>
            <Input
              name="login"
              type="text"
              placeholder="Usúario"
              value={login}
              onChange={e => {
                setLogin(e.target.value);
              }}
            />

            <Input
              name="password"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </Inputs>

          <SaveLoginForgot>
            <label className="save-login">
              <input type="checkbox" /> Salva Login
            </label>

            <div className="forgot">
              <a href="#">Esqueci a senha</a>
            </div>
          </SaveLoginForgot>

          <Button type="submit">Entrar</Button>

          <NotRegistered>
            Ainda não tem login? <a href="#">Cadastre-se</a>
          </NotRegistered>
        </FormAnimation>
      </Form>
    </Container>
  );
};

export default SignIn;
