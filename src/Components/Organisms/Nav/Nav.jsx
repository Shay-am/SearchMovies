import React from 'react';
import { SearchInput } from 'Components/Molecules';
import { ListenScrollEvent } from 'Utils/listenScrollEvent';
import { NavWrapper, StyledIconMovie, StyledIconWrapper } from './Nav.styled';

export const Nav = () => {
  const { isEvent } = ListenScrollEvent();

  return (
    <NavWrapper bgColor={isEvent}>
      <StyledIconWrapper>
        <StyledIconMovie fontSize="6rem" />
      </StyledIconWrapper>
      <SearchInput />
    </NavWrapper>
  );
};
