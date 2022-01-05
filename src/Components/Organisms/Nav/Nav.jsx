import React, { useEffect, useState } from 'react';
import { SearchInput } from '../../Molecules/SearchInput/SearchInput';
// import { H1 } from '../../Atoms/Heading/Heading';
import { NavWrapper, StyledIconMovie, StyledIconWrapper } from './Nav.styled';

export const Nav = () => {
  const [colorNav, setColorNav] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY > 400) {
      setColorNav(true);
    } else {
      setColorNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <NavWrapper bgColor={colorNav}>
      <StyledIconWrapper>
        <StyledIconMovie fontSize="6rem" />
      </StyledIconWrapper>
      <SearchInput />
    </NavWrapper>
  );
};
