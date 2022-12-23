import _keyBy from 'lodash/keyBy';

import Navbar from '@components/navbar';
import Footer from '@components/footer';
import Head from 'next/head';
import HeroCarousel from '@components/hero-carousel';

import API_URL from '@constants/api-url';
import { CarouselItemProps } from '@components/hero-carousel/HeroCarousel.interfaces';
import { MovieInterface } from 'interfaces/Movie.interfaces';

export default function Home({ movies }: { movies: CarouselItemProps[] }) {
  return (
    <>
      <Head>
        <title>MoovieTime</title>
        <meta name="description" content="MoovieTime" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <HeroCarousel movies={movies} />

      <Footer />
    </>
  );
}

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
    poster_path: `https://image.tmdb.org/t/p/w300/${movie.poster_path}`,
    genres: getGenres(movie.genre_ids),
  }));

  return {
    props: {
      movies: formattedMovies,
    },
    revalidate: 60 * 60, // 1 Hour
  };
}
