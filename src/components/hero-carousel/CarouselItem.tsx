import Image from 'next/image';

import css from './Carousel.module.scss';
import classNames from 'classnames';
import StarIcon from '@components/icons/star';
import { CarouselItemProps } from './HeroCarousel.interfaces';

const CarouselItem = ({
  genres,
  overview,
  release_date,
  title,
  vote_average,
  poster_path,
}: CarouselItemProps) => {
  const itemClassName = classNames(css.item, 'text-ffffff');

  return (
    <div className={itemClassName}>
      <div className={css.item__image}>
        <Image
          src={poster_path}
          width={240}
          height={364}
          alt={title}
          priority={false}
        />
      </div>

      <div className={`${css.item__text} bg-000000 p-4`}>
        <div className="flex items-center gap-2 mb-1">
          <StarIcon size={16} className="fill-ffb802" />
          <span className="text-md font-bold">{vote_average}</span>
        </div>

        <h1 className="text-2xl font-medium mb-2">{title}</h1>

        <div className="flex items-center gap-2 mb-2 text-base">
          <span>{new Date(release_date).getFullYear()}</span>
          <span className="w-2 h-2 rounded bg-929292 shrink-0"></span>
          <span>{genres[0].name}</span>
        </div>

        <p
          className={`${css['item__text--overview']} text-xs`}
          style={{ lineHeight: '18px' }}
        >
          {overview}
        </p>
      </div>
    </div>
  );
};

export default CarouselItem;
