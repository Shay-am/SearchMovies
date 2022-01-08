import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  flex-wrap: wrap;
`;

export const StyledCard = styled.div`
  width: 30rem;
  height: 35rem;

  @media (max-width: 770px) {
    width: 25rem;
    height: 30rem;
  }
  @media (max-width: 640px) {
    width: 20rem;
    height: 25rem;
  }
  @media (max-width: 500px) {
    width: 15rem;
    height: 20rem;
  }
  @media (max-width: 400px) {
    width: 12rem;
    height: 17rem;
  }
`;
