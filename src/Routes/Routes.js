/* eslint-disable no-unused-vars */
import { Route, Routes } from 'react-router-dom';
import { HomePage, MoviesPage } from 'Pages';
import { useSearchContext } from 'Context/SearchProvider';

export const Switch = () => {
  const { searchTerm, filterMovies } = useSearchContext();
  console.log(filterMovies);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage data={filterMovies} />} />
    </Routes>
  );
};
