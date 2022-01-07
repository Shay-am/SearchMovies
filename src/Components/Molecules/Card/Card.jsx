/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Image } from './Card.styled';
import { useNavigate } from 'react-router-dom';
import { useSearchContext } from 'Context/SearchProvider';

export const CardMovie = (props) => {
  const navigate = useNavigate();
  const { movie, setMovie } = useSearchContext();

  const handleClick = (e) => {
    setMovie(props);
    navigate(`/movie/${props.id}`);
  };

  const fullPath = 'https://image.tmdb.org/t/p/w500/' + props.poster_path;
  return (
    <Wrapper onClick={(e) => handleClick(e)}>
      <Image src={fullPath} alt={props.title} />
    </Wrapper>
  );
};

CardMovie.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number
};
