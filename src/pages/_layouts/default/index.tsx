import React from 'react';

import { Container } from './styles';

import Header from '@base/components/Header';

interface IProps {
  children: React.ReactNode;
}

const defaultLayout: React.FC<IProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default defaultLayout;
