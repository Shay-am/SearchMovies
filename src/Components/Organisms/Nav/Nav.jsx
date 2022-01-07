import React from 'react';
import { SearchInput } from 'Components/Molecules';
import { ListenScrollEvent } from 'Utils/listenScrollEvent';
import { NavWrapper, StyledIconMovie, StyledIconWrapper, StyledSearchInput } from './Nav.styled';

export const Nav = () => {
  const { isEvent } = ListenScrollEvent();

  return (
    <NavWrapper bgColor={isEvent}>
      <StyledIconWrapper>
        <StyledIconMovie fontSize="6rem" />
      </StyledIconWrapper>
      <StyledSearchInput>
        <SearchInput />
      </StyledSearchInput>
    </NavWrapper>
  );
};
