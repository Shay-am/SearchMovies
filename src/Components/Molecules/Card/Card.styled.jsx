import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  overflow: hidden;
  /* width: 28rem;
  height: 15rem; */
  margin: 0 auto;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.111);
  }
`;

export const Image = styled.img`
  width: 90%;
  height: 90%;
  margin: 0.5rem auto;
  padding: 0.5rem;
`;
