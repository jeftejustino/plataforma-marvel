import React from 'react';

import { Container, Background, Content } from './styles';

import Header from '@base/components/Header';

interface IProps {
  children: React.ReactNode;
}

const defaultLayout: React.FC<IProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Background />
      <Content>{children}</Content>
    </Container>
  );
};

export default defaultLayout;
