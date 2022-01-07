import { Api_KEY } from 'Constant/Url';

export const getSearchMovies = (searchTerm) =>
  `https://api.themoviedb.org/3/search/multi?api_key=${Api_KEY}&language=en-US&${searchTerm}&page=1&include_adult=false`;
