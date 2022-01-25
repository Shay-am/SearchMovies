import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useFetchData } from 'Hooks/useFetchData';
import { useNavigate } from 'react-router-dom';
import { getSearchMovies } from 'Api/Services/getSearchMovies';

const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  let navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const { dataSearch, loading, fetchData } = useFetchData(getSearchMovies(searchTerm));

  const [movie, setMovie] = useState([]);

  const filterMoviesWithImage = dataSearch?.filter((item) => item.poster_path !== null);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    fetchData();
  };

  const handleChangePage = () => {
    return searchTerm ? navigate('/movies') : navigate('/');
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
    handleChangePage();

    return () => {};
  }, [searchTerm]);
  return (
    <>
      <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
    </>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.array
};
