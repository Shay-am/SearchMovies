import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Image } from './Card.styled';
import { useHandleClickNaviagteToDetails } from 'Hooks/useHandleClickNaviagteToDetails';
import { getFullPathImage } from 'Utils/getFullPathImage';

export const CardMovie = (props) => {
  const { handleClickNavigate } = useHandleClickNaviagteToDetails(props);
  const fullPathImage = getFullPathImage(props.poster_path);

  return (
    <Wrapper onClick={() => handleClickNavigate()}>
      <Image src={fullPathImage} alt={props.title} />
    </Wrapper>
  );
};

CardMovie.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number
};
