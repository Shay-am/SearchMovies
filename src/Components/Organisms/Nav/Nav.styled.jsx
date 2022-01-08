import styled from 'styled-components';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';

export const NavWrapper = styled.nav`
  display: flex;
  width: 100%;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme, bgColor }) => (bgColor ? `${theme.color.black}` : 'transparent')};
  transition: all 0.3s ease-in-out;
  z-index: 11;

  @media (max-width: 500px) {
    margin-bottom: 5rem;
    background-color: ${({ theme }) => theme.color.black};
  }
`;

export const StyledIconMovie = styled(MovieFilterIcon)`
  font-size: 5rem;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;

  &:hover {
    transition: color 0.6s ease;
    color: red;
  }
`;

export const StyledIconWrapper = styled.div`
  display: flex;
  margin-left: 5rem;
`;

export const StyledSearchInput = styled.div`
  transform: translateX(-2rem);
`;
