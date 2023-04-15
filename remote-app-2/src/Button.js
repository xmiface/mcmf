import { styled } from '@stitches/react';
import React, { useEffect } from 'react';

const StyledButton = styled('button', {
  background: '#FAF',
  color: '#AFF',
  padding: 12,
});

const Buttton = props => {
  useEffect(() => {
    console.log('hooks work 2');
  }, []);
  return <StyledButton>123 Remote Button 2</StyledButton>;
};

export default Buttton;
