import { Api_KEY } from 'Constant/Url';

export const getTrailer = (id) => `
https://api.themoviedb.org/3/movie/${id}/videos?api_key=${Api_KEY}&language=en-US`;
