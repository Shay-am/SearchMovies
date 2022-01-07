/* eslint-disable no-unused-vars */
import React from 'react';
import { Header } from 'Components/Organisms';
import { MoviesCategory } from 'Components/Organisms';
import { useFetchData } from 'Hooks/useFetchData';

import { getMoviesUrl } from 'Api/Services/getMovieUrl';
import { getMoviesGenreUrl } from 'Api/Services/getMoviesWithGenres';
import { Main } from './HomePage.styled';

export const HomePage = () => {
  const { data, loading, error, fetchData } = useFetchData(getMoviesUrl('popular'));
  const { data: now_playing } = useFetchData(getMoviesUrl('now_playing'));
  const { data: top_rated, loading: loading_rated } = useFetchData(getMoviesUrl('top_rated'));
  const { data: up_coming } = useFetchData(getMoviesUrl('upcoming'));
  const { data: horror } = useFetchData(getMoviesGenreUrl(27));
  const { data: action } = useFetchData(getMoviesGenreUrl(28));
  const { data: romance } = useFetchData(getMoviesGenreUrl(10749));

  return (
    <div>
      <Header data={top_rated[4]} loading={loading_rated} />
      <Main>
        <MoviesCategory name="Popular " data={now_playing} />
        <MoviesCategory name="Trending " data={data} />
        <MoviesCategory name="Top Rated " data={top_rated} />
        <MoviesCategory name="Up Coming " data={up_coming} />
        <MoviesCategory name="Horror" data={horror} />
        <MoviesCategory name="Action Movies" data={action} />
        <MoviesCategory name="Romance Movies" data={romance} />
      </Main>
    </div>
  );
};
