import styled from 'styled-components';

export const H1 = styled.h1`
  color: white;
  font-size: ${({ size }) => (size ? size : `calc(5rem + 2vmin)`)};

  @media (max-width: 420px) {
    font-size: 3.5rem;
  }
`;

export const H3 = styled.h3`
  color: white;
  font-size: calc(2rem + 1vmin);
`;
