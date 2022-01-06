import React from 'react';

import { Button, H1, Description } from 'Components/Atoms';
import { MoviesCategory } from 'Components/Organisms';
import { Wrapper, WrapperDescription, StyledDescription } from './Header.styled';

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
