import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.section`
  display: block;
  min-width: 80%;
  max-width: 100%;

  margin: 3rem 5rem;
`;
export const StyledCards = styled.div`
  display: block;
  min-width: 90%;
  max-width: 90%;
  margin: 2rem auto;
`;

export const StyledHeading = styled.div`
  width: 80%;
  transform: translateX(7rem);
`;

export const StyledSlider = styled(Slider)`
  &.slick-list {
  }
`;

const Arrow = styled.div`
  display: block;

  z-index: 10;

  font-size: 4rem;

  &.slick-next::after,
  &.slick-next::before,
  &.slick-prev::before,
  &.slick-prev::after {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
  }
`;

export const LeftArrow = styled(Arrow)``;
export const RightArrow = styled(Arrow)``;
