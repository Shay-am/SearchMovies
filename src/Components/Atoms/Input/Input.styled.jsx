import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

export const InputWrapper = styled.form`
  display: flex;
  align-items: center;
  position: absolute;
  right: 1rem;
  top: 3rem;
  height: 4rem;
  border: 1px solid ${({ theme }) => theme.color.white};
  border-radius: 0.4rem;
`;

export const StyledInput = styled.input`
  width: 10rem;
  height: 4rem;
  background-color: transparent;
  font-size: 1.4rem;
  padding: 0.7rem;
  border: none;
  color: ${({ theme }) => theme.color.white};

  &:hover,
  &:focus {
    width: 18rem;
    transition: width 0.5s ease-in-out;
    outline: none;
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  font-size: 2.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.color.white};
  margin-right: 0.4rem;
`;
