import { Api_KEY } from 'Constant/Url';

export const getCastMovie = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${Api_KEY}&language=en-US`;
