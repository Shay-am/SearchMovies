/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSearchContext } from 'Context/SearchProvider';
import {
  Wrapper,
  WrapperHeader,
  Img,
  ImageContainer,
  Heading,
  Main,
  StyledButton,
  ContainerTrailer
} from './DetailsPage.styled';
import { useFetchData } from 'Api/axios';

import { Header } from './DetailsPage.styled';
import { Description, H1, Button } from 'Components/Atoms';
import { getTrailer } from 'Api/Services/getTrailer';
import { getFullPathImage } from 'Utils/getFullPathImage';

export const DetailsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { movie } = useSearchContext();
  const fullPathPoster = getFullPathImage(movie.poster_path);
  const fullPath2Backdrop = getFullPathImage(movie.backdrop_path);
  const { data } = useFetchData(getTrailer(movie.id));

  const movieKey = data?.data?.results[2]?.key;

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <WrapperHeader bgImage={fullPath2Backdrop}>
        <Header>
          <ImageContainer>
            <Img src={fullPathPoster} />
          </ImageContainer>
          <Heading>
            <H1 size={'4rem'}>{movie.title}</H1>
            <Description size={'2.5rem'}>{movie.release_date}</Description>
          </Heading>
        </Header>
      </WrapperHeader>
      <Main>
        <StyledButton>
          <Button width={'18rem'} size={'5rem'} onClick={() => handleOpenModal()}>
            See Trailer
          </Button>
        </StyledButton>
        <ContainerTrailer isOpen={isOpen}>
          <iframe
            id="trailer"
            src={`https://www.youtube.com/embed/${movieKey}`}
            frameBorder="4"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        </ContainerTrailer>
      </Main>
    </>
  );
};
