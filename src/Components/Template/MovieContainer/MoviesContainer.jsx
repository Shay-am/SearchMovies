import React from 'react';
import { Wrapper, StyledCard } from './MoviesContainer.styled';
import { CardMovie } from 'Components/Molecules';
import { useSearchContext } from 'Context/SearchProvider';
import { Description } from 'Components/Atoms';

export const MoviesContainer = () => {
  const { filterMoviesWithImage: filterMovies, loading } = useSearchContext();

  return (
    <>
      {loading && <Description>Loading...</Description>}
      <Wrapper>
        {!loading &&
          filterMovies.map((movie, index) => {
            return (
              <StyledCard key={index}>
                <CardMovie key={movie.id} {...movie} />
              </StyledCard>
            );
          })}
      </Wrapper>
    </>
  );
};
