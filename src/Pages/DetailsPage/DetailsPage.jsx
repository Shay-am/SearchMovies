import React, { useEffect } from 'react';
import { useSearchContext } from 'Context/SearchProvider';
import { WrapperHeader, Img, ImageContainer, Heading, Main } from './DetailsPage.styled';
import { useFetchData } from 'Api/axios';
import { Header } from './DetailsPage.styled';
import { Description, H1 } from 'Components/Atoms';
import { getTrailer } from 'Api/Services/getTrailer';
import { getFullPathImage } from 'Utils/getFullPathImage';
import { DetailsContainer } from 'Components/Organisms/DetailsContainer/DetailsContainer';
import { getCastMovie } from 'Api/Services/getCastMovie';
import { Trailer } from 'Components/Molecules';

export const DetailsPage = () => {
  const { movie } = useSearchContext();

  const fullPathPosterImage = getFullPathImage(movie.poster_path);
  const fullPath2BackdropImage = getFullPathImage(movie.backdrop_path);

  const { data: getMovieTrailerKey } = useFetchData(getTrailer(movie.id));
  const { data: detailsMovie } = useFetchData(getCastMovie(movie.id));

  const cast = detailsMovie?.data?.cast;
  const crew = detailsMovie?.data?.crew;

  const movieKeyTrailer = getMovieTrailerKey?.data?.results[0]?.key;

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
            <H1 size={'4rem'}>{movie.title}</H1>
            <Description size={'2.5rem'}>{movie.release_date}</Description>
          </Heading>
        </Header>
      </WrapperHeader>
      <Main>
        <Trailer movieKey={movieKeyTrailer} />
        <DetailsContainer name="Cast" data={cast} />
        <DetailsContainer name="Crew" data={crew} />
      </Main>
    </>
  );
};
