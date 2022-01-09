import { useNavigate } from 'react-router-dom';
import { useSearchContext } from 'Context/SearchProvider';

export const useHandleClickNaviagteToDetails = (props) => {
  const navigate = useNavigate();
  const { setMovie } = useSearchContext();

  const handleClickNavigate = () => {
    setMovie(props);
    navigate(`/movie/${props.title}`);
  };

  return { handleClickNavigate };
};
