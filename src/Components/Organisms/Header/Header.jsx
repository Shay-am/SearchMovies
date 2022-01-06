/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { Button, H1, Description } from 'Components/Atoms';

import {
  Wrapper,
  WrapperDescription,
  StyledDescription,
  StyledButton,
  IMG,
  WrapperImage
} from './Header.styled';

export const Header = ({ data, loading }) => {
  return (
    <>
      {data && (
        <Wrapper>
          <WrapperImage>
            <IMG src={'https://image.tmdb.org/t/p/w500/' + data.poster_path} />
            <WrapperDescription>
              <H1>{data.original_title}</H1>
              <StyledButton>
                <Button>Details</Button>
              </StyledButton>
              <StyledDescription>
                <Description>{data.overview}</Description>
              </StyledDescription>
            </WrapperDescription>
          </WrapperImage>
        </Wrapper>
      )}
    </>
  );
};
