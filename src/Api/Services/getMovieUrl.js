import { Api_KEY } from 'Constant/Url';

export const getMoviesUrl = (genre) =>
  `https://api.themoviedb.org/3/movie/${genre}?api_key=${Api_KEY}&language=en-US&page=1`;
