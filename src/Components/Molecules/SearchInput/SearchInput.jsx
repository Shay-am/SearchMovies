import React from 'react';
import { InputWrapper, StyledInput, StyledSearchIcon } from './SearchInput.styled';

export const SearchInput = () => {
  return (
    <InputWrapper>
      <label htmlFor="searchInput" />
      <StyledInput
        type="text"
        aria-label="search"
        name="searchInput"
        id="searchInput"
        placeholder="search movie"
      />
      <StyledSearchIcon fontSize="2rem" />
    </InputWrapper>
  );
};
