import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledCards, StyledHeading } from './MoviesCategory.styled';
import { H3 } from 'Components/Atoms';
import { Slider } from 'Components/Molecules';

export const MoviesCategory = ({ name, data }) => {
  useEffect(() => {}, [data]);

  return (
    <Wrapper>
      <StyledHeading>
        <H3>{name}</H3>
      </StyledHeading>
      <StyledCards>
        <Slider data={data} />
      </StyledCards>
    </Wrapper>
  );
};

MoviesCategory.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.array
};
