import { Api_KEY } from 'Constant/Url';

export const getUrlTrendingMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${Api_KEY}&language=en-US&page=1`;
export const URL_NOW_PLAYING = `https://api.themoviedb.org/3/movie/now_playing?api_key=${Api_KEY}&language=en-US&page=1`;
export const URL_TOP_RATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_KEY}&language=en-US&page=1`;

import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setData(response);
    } catch (error) {
      setError('We can noot find this movie');
    }
    setLoading(false);
  };

  useEffect(() => {
    !loading && fetchData();
  }, []);
  return { data, error, loading, fetchData };
};
