import styled from 'styled-components';
import { Image } from 'Components/Molecules/Card/Card.styled';

export const Card = styled.div`
  display: flex;
  width: 8rem;
  height: 30%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 2rem;
`;

export const CastImage = styled.div`
  width: 10rem;
  height: 50%;
  text-align: center;
`;

export const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
  border-radius: 50%;
`;

export const StyledDescription = styled.div`
  text-align: center;
  height: 3rem;
  width: 100%;
`;
