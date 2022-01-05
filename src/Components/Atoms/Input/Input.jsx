import React from 'react';
import { InputWrapper, StyledInput, StyledSearchIcon } from './Input.styled';

export const Input = () => {
  return (
    <InputWrapper>
      <StyledInput placeholder="search movie" />
      <StyledSearchIcon fontSize="2.rem" />
    </InputWrapper>
  );
};
