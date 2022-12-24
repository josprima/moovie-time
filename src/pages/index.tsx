import _keyBy from 'lodash/keyBy';
import Head from 'next/head';

import HeroCarousel from '@components/hero-carousel';
import DiscoverMovies from '@components/discover-movies';

import API_URL from '@constants/api-url';
import { CarouselItemProps } from '@components/hero-carousel/HeroCarousel.interfaces';
import { GenreInterface, MovieInterface } from '@interfaces/Movie.interfaces';
import Navbar from '@components/navbar';
import Footer from '@components/footer';
import mapGenres from '@utils/map-genres';

const HomePage = ({
  movies,
  genres,
}: {
  movies: CarouselItemProps[];
  genres: GenreInterface[];
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
        <title>MoovieTime | HomePage</title>
        <meta name="description" content="MoovieTime" />
      </Head>

      <Navbar menus={navMenus} />
      <HeroCarousel movies={movies} />
      <DiscoverMovies movies={movies} />
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
    poster_path: `/image/w185${movie.poster_path}`,
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

export default HomePage;
