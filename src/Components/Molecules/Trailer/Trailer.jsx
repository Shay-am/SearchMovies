import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledButton, ContainerTrailer, Wrapper } from './Trailer.styled';
import { Button } from 'Components/Atoms';
import YouTube from 'react-youtube';

export const Trailer = ({ movieKey }) => {
  const [isOpen, setIsOpen] = useState(false);

  const opts = {
    height: '500',
    width: '390',
    playerVars: {
      autoplay: 0
    }
  };

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
    window.scrollTo(50, 650);
  };

  return (
    <Wrapper>
      <StyledButton>
        <Button width={'18rem'} size={'5rem'} onClick={() => handleOpenModal()}>
          See Trailer
        </Button>
      </StyledButton>
      <ContainerTrailer isOpen={isOpen}>
        <YouTube videoId={movieKey} opts={opts} />
      </ContainerTrailer>
    </Wrapper>
  );
};

Trailer.propTypes = {
  movieKey: PropTypes.string
};
