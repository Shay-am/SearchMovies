import styled from 'styled-components';

export const Description = styled.article`
  font-size: ${({ size }) => (size ? size : '1.4rem')};
  color: ${({ theme, error }) => (error ? 'red' : theme.color.white)};
`;
