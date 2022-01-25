import PropTypes from 'prop-types';
import { Main } from './DetailsMain.styled';
import { useFetchData } from 'Hooks/useFetchData';
import { DetailsContainer } from 'Components/Organisms/DetailsContainer/DetailsContainer';
import { getTrailer } from 'Api/Services/getTrailer';
import { getCastMovie } from 'Api/Services/getCastMovie';
import { Trailer } from 'Components/Molecules';

export const DetailsMain = ({ id }) => {
  const { data: getMovieTrailerKey } = useFetchData(getTrailer(id));
  const { data: detailsMovie } = useFetchData(getCastMovie(id));

  const cast = detailsMovie?.data?.cast;
  const crew = detailsMovie?.data?.crew;

  const movieKeyTrailer = getMovieTrailerKey?.data?.results[0]?.key;

  return (
    <>
      <Main>
        <Trailer movieKey={movieKeyTrailer} />
        <DetailsContainer name="Cast" data={cast} />
        <DetailsContainer name="Crew" data={crew} />
      </Main>
    </>
  );
};

DetailsMain.propTypes = {
  id: PropTypes.number
};
