import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { H3 } from 'Components/Atoms';
import { CardMovie } from 'Components/Molecules';
import {
  Wrapper,
  StyledCards,
  StyledSlider,
  LeftArrow,
  RightArrow,
  StyledHeading
} from './MoviesCategory.styled';

export const MoviesCategory = ({ name, data }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  useEffect(() => {}, [data]);

  return (
    <Wrapper>
      <StyledHeading>
        <H3>{name}</H3>
      </StyledHeading>
      <StyledCards>
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
      </StyledCards>
    </Wrapper>
  );
};

MoviesCategory.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.array
};
