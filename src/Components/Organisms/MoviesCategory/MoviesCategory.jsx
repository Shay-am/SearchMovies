import React from 'react';
import { H3 } from 'Components/Atoms';
import { CardMovie } from 'Components/Molecules';
import { Wrapper, StyledCards } from './MoviesCategory.styled';

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
      </StyledCards>
    </Wrapper>
  );
};
