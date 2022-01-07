import React from 'react';
import { Link } from 'react-router-dom';
import { SearchInput } from 'Components/Molecules';
import { ListenScrollEvent } from 'Utils/listenScrollEvent';
import { NavWrapper, StyledIconMovie, StyledIconWrapper, StyledSearchInput } from './Nav.styled';

export const Nav = () => {
  const { isEvent } = ListenScrollEvent();

  return (
    <NavWrapper bgColor={isEvent}>
      <StyledIconWrapper>
        <Link to="/">
          <StyledIconMovie fontSize="6rem" />
        </Link>
      </StyledIconWrapper>
      <StyledSearchInput>
        <SearchInput />
      </StyledSearchInput>
    </NavWrapper>
  );
};
