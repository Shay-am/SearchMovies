import React, { useEffect } from 'react';
import { useSearchContext } from 'Context/SearchProvider';
import { WrapperHeader, Img, ImageContainer, Heading } from './DetailsPage.styled';
import { Header } from './DetailsPage.styled';
import { DetailsMain } from './DetailsMain/DetailsMain';
import { Description, H1 } from 'Components/Atoms';
import { getFullPathImage } from 'Utils/getFullPathImage';

export const DetailsPage = () => {
  const { movie } = useSearchContext();
  const { poster_path, backdrop_path, title, release_date, id } = movie;

  const fullPathPosterImage = getFullPathImage(poster_path);
  const fullPath2BackdropImage = getFullPathImage(backdrop_path);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <WrapperHeader bgImage={fullPath2BackdropImage}>
        <Header>
          <ImageContainer>
            <Img src={fullPathPosterImage} />
          </ImageContainer>
          <Heading>
            <H1 size={'4rem'}>{title}</H1>
            <Description size={'2.5rem'}>{release_date}</Description>
          </Heading>
        </Header>
      </WrapperHeader>
      <DetailsMain id={id} />
    </>
  );
};
