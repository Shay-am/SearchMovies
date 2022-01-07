import React from 'react';
import { H1 } from 'Components/Atoms';
import { Wrapper, Header, Main } from './MoviesPage.styled';
import { MoviesContainer } from 'Components/Template/MovieContainer/MoviesContainer';

export const MoviesPage = () => {
  return (
    <Wrapper>
      <Header>
        <H1>Movies List</H1>
      </Header>
      <Main>
        <MoviesContainer />
      </Main>
    </Wrapper>
  );
};
