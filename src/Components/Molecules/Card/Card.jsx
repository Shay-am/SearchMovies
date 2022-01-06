/* eslint-disable react/prop-types */
import React from 'react';
import { Wrapper, Image } from './Card.styled';
// const URL_Image =
//   'https://occ-0-987-990.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABe_x8kd9mnjZB99_vUGkECSNmiP1VQt-eSQGMETZE0sxZBkyuwDWGjBXaa4FvO8wqZOv5rNe9Asx_8ji5OCNNZ-abbze.jpg?r=f97';

export const CardMovie = ({ poster_path }) => {
  const fullPath = 'https://image.tmdb.org/t/p/w500/' + poster_path;
  return (
    <Wrapper>
      <Image src={fullPath} />
    </Wrapper>
  );
};
