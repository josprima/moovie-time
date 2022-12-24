import { CarouselItemProps } from '@components/hero-carousel/HeroCarousel.interfaces';
import StarIcon from '@components/icons/star';
import Image from 'next/image';
import Link from 'next/link';

const MovieCard = ({
  id,
  title,
  poster_path,
  vote_average,
  release_date,
  genres,
}: CarouselItemProps) => {
  return (
    <div className="basis-52 text-ffffff">
      <div className="relative z-10">
        <Image
          src={poster_path}
          alt={title}
          width={220}
          height={330}
          className="w-full h-auto mb-3"
        />

        <div className="absolute top-0 right-0 z-10 p-3 bg-1e232b/80 font-bold text-lg leading-none">
          {vote_average}
        </div>

        {/* Card hover */}
        <div className="flex flex-col items-center justify-center gap-8 absolute inset-0 z-20 p-4 bg-000000 opacity-0 hover:opacity-100 transition-opacity duration-500">
          <div className="flex items-center gap-2">
            <StarIcon size={32} className="fill-ffb802" />
            <span className="font-semibold text-2xl">{vote_average}</span>
          </div>

          <span className="font-semibold text-lg">{genres[0].name}</span>

          <Link
            href={`/movies/${id}`}
            className="font-bold text-sm bg-ff0000 p-2 w-24 text-center rounded-3xl"
          >
            VIEW
          </Link>
        </div>
      </div>

      <h4 className="text-base font-semibold">{title}</h4>
      <span className="text-sm text-929292">
        {new Date(release_date).getFullYear()}
      </span>
    </div>
  );
};

export default MovieCard;
