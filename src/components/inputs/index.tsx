import React from 'react';
import { Container } from './styles';

interface Props {
  input: JSX.Element;
  className?: string;
}

const Input: React.FC<Props> = ({ input, className = '' }) => {
  return (

    <Container className={className}>
      {input}
    </Container>
  );
};

export default Input;