import React from 'react';
import { Link } from 'react-router-dom';
import { SearchInput } from 'Components/Molecules';
import { useListenToScrollEvent } from 'Hooks/useListenToScrollEvent';
import { NavWrapper, StyledIconMovie, StyledIconWrapper, StyledSearchInput } from './Nav.styled';
import { useSearchContext } from 'Context/SearchProvider';

export const Nav = () => {
  const { isEventScroll } = useListenToScrollEvent();
  const { setSearchTerm } = useSearchContext();

  return (
    <NavWrapper bgColor={isEventScroll}>
      <StyledIconWrapper>
        <Link to="/" onClick={() => setSearchTerm('')}>
          <StyledIconMovie fontSize="6rem" />
        </Link>
      </StyledIconWrapper>
      <StyledSearchInput>
        <SearchInput />
      </StyledSearchInput>
    </NavWrapper>
  );
};
