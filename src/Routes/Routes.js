import { Route, Routes } from 'react-router-dom';
import { HomePage, MoviesPage } from 'Pages';

export const Switch = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/movies" element={<MoviesPage />} />
  </Routes>
);
