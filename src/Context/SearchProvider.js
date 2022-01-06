/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const value = {
    searchTerm,
    handleChange
  };
  return (
    <>
      <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
    </>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.array
};
