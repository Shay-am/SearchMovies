import styled from 'styled-components';

export const Button = styled.button`
  width: ${({ width }) => (width ? width : '10rem')};
  height: ${({ size }) => (size ? size : '4rem')};
  background-color: transparent;

  color: ${({ theme }) => theme.color.white};
  border: 1px solid white;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  :hover {
    transform: scale(1.1);
    color: red;
    border-color: red;
  }
`;
