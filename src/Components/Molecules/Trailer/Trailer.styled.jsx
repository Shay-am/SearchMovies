import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;
