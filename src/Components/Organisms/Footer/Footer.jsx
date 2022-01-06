import React from 'react';
import {
  Wrapper,
  StyledFacebookIcon,
  StyledEmailIcon,
  StyledLinkedInIcon,
  StyledDescription
} from './Footer.styled';

export const Footer = () => {
  return (
    <>
      <Wrapper>
        <StyledFacebookIcon fontSize="5rem" />
        <StyledEmailIcon fontSize="5rem" />
        <StyledLinkedInIcon fontSize="5rem" />
      </Wrapper>
      <StyledDescription>Made By Mateusz </StyledDescription>
    </>
  );
};
