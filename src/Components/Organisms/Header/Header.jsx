import React from 'react';
import { Button } from '../../Atoms/Button/Button';
import { Description } from '../..//Atoms/Description/Description';
import { H1 } from '../../Atoms/Heading/Heading';

import { Wrapper, WrapperDescription, StyledDescription } from './Header.styled';
import { MoviesCategory } from '../MoviesCategory/MoviesCategory';

export const Header = () => {
  return (
    <>
      <Wrapper>
        <WrapperDescription>
          <H1>Iron Men</H1>
          <Button>Details</Button>
          <StyledDescription>
            <Description>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime culpa temporibus
              velit consequuntur fuga magnam doloribus expedita mollitia ullam. Eligendi
              reprehenderit alias
            </Description>
          </StyledDescription>
        </WrapperDescription>
      </Wrapper>
      <MoviesCategory></MoviesCategory>
      <MoviesCategory></MoviesCategory>
      <MoviesCategory></MoviesCategory>
    </>
  );
};
