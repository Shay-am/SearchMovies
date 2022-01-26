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
      const categories = {
        popular: response[0]?.data?.results,
        nowPlaying: response[1].data.results,
        topRated: response[2].data.results,
        upComming: response[3].data.results,
        horror: response[4].data.results,
        action: response[5].data.results,
        romance: response[6].data.results,
        topOne: response[1]?.data?.results[2]
      };

      setData(categories);
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
