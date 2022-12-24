import Button from '@components/button';
import { CarouselItemProps } from '@components/hero-carousel/HeroCarousel.interfaces';
import MovieCard from '@components/movie-card';
import PageSection from '@components/page-section';

const DiscoverMovies = ({ movies }: { movies: CarouselItemProps[] }) => {
  const renderActionButtons = () => {
    return (
      <div className="flex gap-5">
        <Button text="Popularity" variant="primary" />
        <Button text="Release Date" variant="secondary" />
      </div>
    );
  };

  return (
    <PageSection title="Discover Movies" actionButtons={renderActionButtons()}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </PageSection>
  );
};

export default DiscoverMovies;
