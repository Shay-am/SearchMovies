import React from 'react';
import { Header } from 'Components/Organisms';
import { MoviesCategory } from 'Components/Organisms';
import { Main, Wrapper } from './HomePage.styled';
import { Description, Spinner } from 'Components/Atoms';
import { useFetchAllGenresMovies } from 'Api/Services/useFetchAllGenresMovies';

export const HomePage = () => {
  const { data, loading, error } = useFetchAllGenresMovies();

  const { topOne, popular, nowPlaying, topRated, upComming, horror, action, romance } = data;

  return (
    <>
      {error && (
        <Wrapper>
          <Description error={error} size={'4rem'}>
            Ups! something went wrong. Try again !!!
          </Description>
        </Wrapper>
      )}
      {loading ? (
        <Wrapper>
          <Spinner loading={loading} />
        </Wrapper>
      ) : (
        <>
          <Header data={topOne} loading={loading} />
          <Main>
            <MoviesCategory name="Popular " data={nowPlaying} />
            <MoviesCategory name="Top Rated " data={topRated} />
            <MoviesCategory name="Up Coming " data={upComming} />
            <MoviesCategory name="Trending " data={popular} />
            <MoviesCategory name="Horror" data={horror} />
            <MoviesCategory name="Action Movies" data={action} />
            <MoviesCategory name="Romance Movies" data={romance} />
          </Main>
        </>
      )}
    </>
  );
};
