import { styled } from '@stitches/react';
import React, { useEffect } from 'react';

const StyledButton = styled('button', {
  background: '#4b4be8',
  color: '#fff',
  padding: 12,
});

const Button = props => {
  useEffect(() => {
    console.log('hooks work 1');
  }, []);
  return <StyledButton>Remote Button 1</StyledButton>;
};

export default Button;
