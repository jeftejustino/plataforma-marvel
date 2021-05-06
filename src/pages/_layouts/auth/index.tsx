import React from 'react';

import { Container } from './styles';

interface IProps {
  children: React.ReactNode;
}

const authLayout: React.FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default authLayout;
