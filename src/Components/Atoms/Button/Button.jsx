import styled from 'styled-components';

export const Button = styled.button`
  width: 10rem;
  height: 4rem;
  background-color: transparent;

  color: ${({ theme }) => theme.color.white};
  border: 1px solid white;
  border-radius: 0.3rem;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;
