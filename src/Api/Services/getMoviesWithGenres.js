import { Api_KEY } from 'Constant/Url';

export const getMoviesGenreUrl = (genre_id) =>
  `https://api.themoviedb.org/3/discover/movie?api_key=${Api_KEY}&with_genres=${genre_id}`;
