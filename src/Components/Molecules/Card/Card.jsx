import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Image } from './Card.styled';

export const CardMovie = ({ title, poster_path }) => {
  const fullPath = 'https://image.tmdb.org/t/p/w500/' + poster_path;
  return (
    <Wrapper>
      <Image src={fullPath} alt={title} />
    </Wrapper>
  );
};

CardMovie.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string
};
