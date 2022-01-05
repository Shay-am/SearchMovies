import React from 'react';
import { H3 } from '../../Atoms/Heading/Heading';
import { Wrapper } from './MoviesCategory.styled';
import { CardMovie } from '../../Molecules/Card/Card';
import { StyledCards } from './MoviesCategory.styled';

export const MoviesCategory = () => {
  return (
    <Wrapper>
      <H3>Trending Movies</H3>
      <StyledCards>
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
      </StyledCards>
    </Wrapper>
  );
};
