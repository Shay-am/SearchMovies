import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

export const InputWrapper = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.white};
  border-radius: 0.4rem;
  margin-right: 0.8rem;
`;

export const StyledInput = styled.input`
  width: 10rem;
  height: 4rem;
  background-color: transparent;
  font-size: 1.4rem;
  padding: 0.7rem;
  border: none;
  color: ${({ theme }) => theme.color.white};
  transition: width 0.5s ease;

  &:hover,
  &:focus {
    width: 18rem;
    outline: none;
  }

  &::placeholder {
    color: white;
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  font-size: 2.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.color.white};
  margin-right: 0.4rem;
`;
