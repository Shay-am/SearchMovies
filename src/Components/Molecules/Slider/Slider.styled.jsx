import styled from 'styled-components';
import Slider from 'react-slick';

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

  transition: all 0.4s ease-in-out;

  &:hover {
    transform: translateX(0.2rem);
  }

  @media (min-width: 1024px) {
  }
`;

export const LeftArrow = styled(Arrow)``;
export const RightArrow = styled(Arrow)``;
