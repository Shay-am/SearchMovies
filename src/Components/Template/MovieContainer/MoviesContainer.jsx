import React from 'react';
import { Wrapper, StyledCard } from './MoviesContainer.styled';

import { CardMovie } from 'Components/Molecules';
import { useSearchContext } from 'Context/SearchProvider';

export const MoviesContainer = () => {
  const { filterMovies } = useSearchContext();

  return (
    <Wrapper>
      {filterMovies &&
        filterMovies.map((movie, index) => {
          return (
            <StyledCard key={index}>
              <CardMovie key={movie.id} {...movie} />
            </StyledCard>
          );
        })}
    </Wrapper>
  );
};
