import { Api_KEY } from 'Constant/Url';

export const getSearchMovies = (searchTerm) =>
  `https://api.themoviedb.org/3/search/movie?api_key=${Api_KEY}&language=en-US&query=${searchTerm}&include_adult=false`;
