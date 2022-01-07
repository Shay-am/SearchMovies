/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSearchContext } from 'Context/SearchProvider';
import { Wrapper, Header, Img } from './DetailsPage.styled';

export const DetailsPage = () => {
  const { movie } = useSearchContext();
  const fullPath = 'https://image.tmdb.org/t/p/w500/' + movie.poster_path;
  const fullPath2 = 'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path;
  console.log(movie);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <Header>
        <Img src={fullPath2} />
      </Header>
    </Wrapper>
  );
};
