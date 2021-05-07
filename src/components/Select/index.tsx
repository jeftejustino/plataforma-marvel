import React from 'react';
import Select from 'react-select';

import { Container } from './styles';

type IProps = {
  options: Array<{ label: string; value: string }>;
};

const Input: React.FC<IProps> = ({ options, ...rest }) => {
  return (
    <Container>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={options[0]}
        isClearable={false}
        isSearchable={false}
        name="color"
        options={options}
        {...rest}
      />
    </Container>
  );
};

export default Input;
