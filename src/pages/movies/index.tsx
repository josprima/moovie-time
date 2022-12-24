import _keyBy from 'lodash/keyBy';

import Footer from '@components/footer';
import MoviesFilter from '@components/movies-filter';
import Navbar from '@components/navbar';
import PageSection from '@components/page-section';
import API_URL from '@constants/api-url';
import { GenreInterface, MovieInterface } from '@interfaces/Movie.interfaces';
import mapGenres from '@utils/map-genres';
import Head from 'next/head';
import MovieCard from '@components/movie-card';
import { CarouselItemProps } from '@components/hero-carousel/HeroCarousel.interfaces';

const MoviesPage = ({
  genres,
  movies,
}: {
  genres: GenreInterface[];
  movies: CarouselItemProps[];
}) => {
  const navMenus = [
    {
      text: 'CATEGORIES',
      menus: mapGenres(genres),
    },
    {
      text: 'MOVIES',
      href: '/movies',
    },
    {
      text: 'TV SHOWS',
      href: '/tv-shows',
    },
    {
      text: 'LOGIN',
      href: '/login',
    },
  ];

  return (
    <>
      <Head>
        <title>MoovieTime | Movies</title>
        <meta name="description" content="MoovieTime" />
      </Head>

      <Navbar menus={navMenus} />

      <PageSection title="Movies" className="pt-32">
        <div className="flex gap-4">
          <div className="w-60 shrink-0">
            <MoviesFilter />
          </div>

          <div className="grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {movies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </div>
      </PageSection>

      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const [moviesResponse, genresResponse] = await Promise.all([
    fetch(API_URL.nowPlaying),
    fetch(API_URL.genres),
  ]);

  const { results: movies } = await moviesResponse.json();
  const { genres } = await genresResponse.json();

  const genresById = _keyBy(genres, 'id');

  const getGenres = (genreIds: number[]) => {
    return genreIds.map((genreId) => genresById[genreId]);
  };

  const formattedMovies = movies.map((movie: MovieInterface) => ({
    ...movie,
    poster_path: `https://image.tmdb.org/t/p/w185${movie.poster_path}`,
    genres: getGenres(movie.genre_ids),
  }));

  return {
    props: {
      movies: formattedMovies,
      genres,
    },
    revalidate: 60 * 60, // 1 Hour
  };
}

export default MoviesPage;
