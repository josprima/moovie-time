import CarouselItem from './CarouselItem';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import { HeroCarouselProps } from './HeroCarousel.interfaces';

const HeroCarousel = ({ movies }: HeroCarouselProps) => {
  return (
    <div className="mt-32 mb-20">
      <Slider
        autoplay
        centerMode
        dots
        infinite
        variableWidth
        arrows={false}
        slidesToScroll={1}
        slidesToShow={1}
      >
        {movies.map((movie) => (
          <CarouselItem key={movie.id} {...movie} />
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
