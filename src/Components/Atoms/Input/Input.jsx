import React from 'react';
import { InputWrapper, StyledInput, Image } from './Input.styled';

export const Input = () => {
  return (
    <InputWrapper>
      <StyledInput placeholder="search movie" />
      <Image />
    </InputWrapper>
  );
};
