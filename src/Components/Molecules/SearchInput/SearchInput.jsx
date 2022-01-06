import React, { useEffect } from 'react';
import { InputWrapper, StyledInput, StyledSearchIcon } from './SearchInput.styled';
import { useSearchContext } from 'Context/SearchProvider';

export const SearchInput = () => {
  const { handleChange, searchTerm } = useSearchContext();

  useEffect(() => {}, [searchTerm]);

  return (
    <InputWrapper>
      <label htmlFor="searchInput" />
      <StyledInput
        type="text"
        aria-label="search"
        name="searchInput"
        id="searchInput"
        onChange={handleChange}
        placeholder="search movie"
      />
      <StyledSearchIcon fontSize="2rem" />
    </InputWrapper>
  );
};
