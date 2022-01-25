import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledCards, StyledHeading } from './MoviesCategory.styled';
import { H3 } from 'Components/Atoms';
import { Slider } from 'Components/Molecules';

export const MoviesCategory = ({ name, data: movies }) => {
  return (
    <Wrapper>
      <StyledHeading>
        <H3>{name}</H3>
      </StyledHeading>
      <StyledCards>
        <Slider data={movies} />
      </StyledCards>
    </Wrapper>
  );
};

MoviesCategory.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.array
};
