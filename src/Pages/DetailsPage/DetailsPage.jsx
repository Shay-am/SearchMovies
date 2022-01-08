/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSearchContext } from 'Context/SearchProvider';
import { Wrapper, WrapperHeader, Img, ImageContainer, Heading } from './DetailsPage.styled';
import { useFetchData } from 'Api/axios';
import { getMoviesUrl } from 'Api/Services/getMovieUrl';
import { Header } from './DetailsPage.styled';
import { H1 } from 'Components/Atoms';

export const DetailsPage = () => {
  const { movie } = useSearchContext();
  const fullPath = 'https://image.tmdb.org/t/p/w500/' + movie.poster_path;
  const fullPath2 = 'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path;
  const { data } = useFetchData(getMoviesUrl('popular'));
  console.log(movie);

  useEffect(() => {
    console.log(movie.id);
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <WrapperHeader bgImage={fullPath2}>
        <Header>
          <ImageContainer>
            <Img src={fullPath} />
          </ImageContainer>
          <Heading>
            <H1>{movie.title}</H1>
          </Heading>
        </Header>
      </WrapperHeader>
    </Wrapper>
  );
};
