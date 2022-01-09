/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Header } from 'Components/Organisms';
import { MoviesCategory } from 'Components/Organisms';
import { useFetchData } from 'Hooks/useFetchData';

import { getMoviesUrl } from 'Api/Services/getMovieUrl';
import { getMoviesGenreUrl } from 'Api/Services/getMoviesWithGenres';
import { Main } from './HomePage.styled';
import { Description } from 'Components/Atoms';
import { useFetchAllGenresMovies } from 'Api/Services/useFetchAllGenresMovies';

export const HomePage = () => {
  const { data, loading } = useFetchAllGenresMovies();
  const { topOne, popular, nowPlaying, topRated, upComming, horror, action, romance } = data;

  useEffect(() => {}, [data]);

  return (
    <div>
      {loading ? (
        <Description>Loading</Description>
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
    </div>
  );
};
