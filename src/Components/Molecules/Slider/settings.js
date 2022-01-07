import { RightArrow, LeftArrow } from './Slider.styled';

export const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <RightArrow />,
  prevArrow: <LeftArrow />,
  responsive: [
    {
      breakpoint: 1324,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 1124,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 370,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
