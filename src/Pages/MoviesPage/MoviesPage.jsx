import React from 'react';
import { H1 } from 'Components/Atoms';
import { Wrapper, Header } from './MoviesPage.styled';
export const MoviesPage = () => {
  return (
    <Wrapper>
      <Header>
        <H1>Movies List</H1>
      </Header>
    </Wrapper>
  );
};
