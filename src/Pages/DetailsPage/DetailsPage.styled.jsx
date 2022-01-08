import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const WrapperHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: ${({ bgImage }) =>
    `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 100%), url(${bgImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Header = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  width: 80%;
`;

export const ImageContainer = styled.div`
  width: 84vw;
  height: 58vh;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const Heading = styled.div`
  text-align: center;
  width: 80%;
  transform: translateY(2rem);
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
`;

export const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10rem;
`;

export const ContainerTrailer = styled.div`
  text-align: center;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  width: 100%;
  height: 60rem;

  @media (max-width: 450px) {
    height: 40rem;
  }

  iframe {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
`;
