import { Route, Routes } from 'react-router-dom';
import { HomePage, MoviesPage, DetailsPage } from 'Pages';

export const Switch = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movie/:id" element={<DetailsPage />} />
    </Routes>
  );
};
