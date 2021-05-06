import React, { ButtonHTMLAttributes, Children } from 'react';

import { Container } from './styles';

type IProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IProps> = ({ children, ...rest }) => {
  return (
    <Container>
      <button {...rest}>{children}</button>
    </Container>
  );
};

export default Button;
