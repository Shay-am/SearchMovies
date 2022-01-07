import React from 'react';
import PropTypes from 'prop-types';
import { StyledSlider } from './Slider.styled';
import { CardMovie } from 'Components/Molecules/';
import { settings } from './settings';

export const Slider = ({ data }) => {
  return (
    <StyledSlider {...settings}>
      {data &&
        data.map((movie, index) => {
          return (
            <div key={index}>
              <CardMovie key={movie.id} {...movie} />
            </div>
          );
        })}
    </StyledSlider>
  );
};

Slider.propTypes = {
  data: PropTypes.array
};
