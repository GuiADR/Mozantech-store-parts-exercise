import React from 'react';
import { Container } from './styles';

interface Props {
  input: JSX.Element;
}

const Input: React.FC<Props> = ({ input }) => {
  return (

    <Container>
      {input}
    </Container>
  );
};

export default Input;