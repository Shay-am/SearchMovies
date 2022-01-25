import axios from 'axios';
import { getMoviesUrl } from './getMovieUrl';
import { getMoviesGenreUrl } from './getMoviesWithGenres';
import { useEffect, useState } from 'react';

const getPopular = axios.get(getMoviesUrl('popular'));
const getNowPlaying = axios.get(getMoviesUrl('popular'));
const getTopRated = axios.get(getMoviesUrl('top_rated'));
const getUpComming = axios.get(getMoviesUrl('upcoming'));
const getHorror = axios.get(getMoviesGenreUrl(27));
const getAction = axios.get(getMoviesGenreUrl(28));
const getRomance = axios.get(getMoviesGenreUrl(10749));

export const useFetchAllGenresMovies = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  const category = {};

  const fetchAllData = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.all([
        getPopular,
        getNowPlaying,
        getTopRated,
        getUpComming,
        getHorror,
        getAction,
        getRomance
      ]);

      category.popular = response[0]?.data?.results;
      category.nowPlaying = response[1].data.results;
      category.topRated = response[2].data.results;
      category.upComming = response[3].data.results;
      category.horror = response[4].data.results;
      category.action = response[5].data.results;
      category.romance = response[6].data.results;
      category.topOne = response[1]?.data?.results[2];

      setData(category);
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };
  useEffect(() => {
    !loading && fetchAllData();
  }, []);

  return { data, loading, error };
};
