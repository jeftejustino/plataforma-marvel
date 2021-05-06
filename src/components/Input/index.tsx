import React, { HtmlHTMLAttributes, InputHTMLAttributes } from 'react';

import { Container } from './styles';

type IProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<IProps> = ({ ...rest }) => {
  return (
    <Container>
      <input {...rest} />
    </Container>
  );
};

export default Input;
