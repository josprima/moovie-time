import { MovieInterface } from 'interfaces/Movie.interfaces';

export interface CarouselItemProps extends MovieInterface {
  genres: {
    id: number;
    name: string;
  }[];
}

export interface HeroCarouselProps {
  movies: CarouselItemProps[];
}
