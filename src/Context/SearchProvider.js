/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useFetchData } from 'Hooks/useFetchData';
import { useNavigate } from 'react-router-dom';

const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  let navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const { data, loading, fetchData } = useFetchData(
    `https://api.themoviedb.org/3/search/movie?api_key=6d65a5afbbce1f141e9cfdb6030a79de&language=en-US&query=${searchTerm}&include_adult=false`
  );

  const [movie, setMovie] = useState([]);

  const filterMoviesWithImage = data.filter((item) => item.poster_path !== null);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    fetchData();
  };

  const handleChangePage = () => {
    return filterMoviesWithImage ? navigate('/movies') : navigate('/');
  };

  const value = {
    searchTerm,
    handleChange,
    filterMoviesWithImage,
    loading,
    movie,
    setMovie,
    setSearchTerm
  };
  useEffect(() => {
    !loading && handleChangePage();

    return () => {};
  }, [data]);
  return (
    <>
      <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
    </>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.array
};
