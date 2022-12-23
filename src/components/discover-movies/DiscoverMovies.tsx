import { CarouselItemProps } from '@components/hero-carousel/HeroCarousel.interfaces';
import MovieCard from '@components/movie-card';

const DiscoverMovies = ({ movies }: { movies: CarouselItemProps[] }) => {
  return (
    <div className="relative">
      {/* Background color divider */}
      <div className="absolute w-full h-80 z-0 left-0 top-0 bg-ffffff/5 pointer-events-none"></div>

      <div className="container mx-auto px-4 pb-28 pt-20">
        <div className="mb-10">
          <div className="flex justify-between items-center">
            <div>
              <div className="w-28 h-1.5 mb-3 bg-e74c3c" />
              <h2 className="text-2xl font-semibold text-ffffff">
                Discover Movies
              </h2>
            </div>

            <div className="flex gap-5">
              <button className="py-2 px-4 bg-ff0000 text-e5e5e5 text-sm font-semibold cursor-pointer rounded-3xl">
                Popularity
              </button>
              <button className="py-2 px-4 bg-000000/20 text-e5e5e5 text-sm font-semibold cursor-pointer rounded-3xl">
                Release Date
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-5">
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverMovies;
