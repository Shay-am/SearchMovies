import styled from 'styled-components';

export const WrapperImage = styled.div`
  width: 100%;
  height: 100%;
`;
export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const WrapperDescription = styled.section`
  position: relative;

  top: -55rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  margin-left: 8rem;
  height: 30vh;

  @media (max-width: 380px) {
    height: 45vh;
  }
`;
export const StyledDescription = styled.div`
  width: 80%;
  padding: 0.1rem 0.4rem 0.5rem;
  transform: translateY(1rem);
`;

export const StyledButton = styled.div``;

export const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(37%);
`;
