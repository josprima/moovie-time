import _keyBy from 'lodash/keyBy';

import API_URL from '@constants/api-url';
import { GenreInterface, MovieInterface } from '@interfaces/Movie.interfaces';
import mapGenres from '@utils/map-genres';
import Head from 'next/head';
import Navbar from '@components/navbar';
import Footer from '@components/footer';
import { format } from 'util';
import Image from 'next/image';
import ImageWrapper from '@components/image-wrapper/ImageWrapper';
import StarIcon from '@components/icons/star';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MovieCard from '@components/movie-card/MovieCard';

const MovieDetailPage = ({
  genres,
  movie,
}: {
  genres: GenreInterface[];
  movie: MovieInterface;
}) => {
  const [recommendationMovies, setRecommendationMovies] = useState<
    MovieInterface[]
  >([]);

  const router = useRouter();

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

  const formattedGenres = movie.genres.map((genre) => genre.name);
  const genresById = _keyBy(genres, 'id');

  const getGenres = (genreIds: number[]) => {
    return genreIds.map((genreId) => genresById[genreId]);
  };

  const fetchRecommendationMovies = async () => {
    const movieId = router.query.movieId;

    try {
      const response = await fetch(`/data/movie/${movieId}/recommendations`);
      const { results } = await response.json();

      const formattedMovies = results.map((movie: MovieInterface) => ({
        ...movie,
        poster_path: `https://image.tmdb.org/t/p/w185${movie.poster_path}`,
        genres: getGenres(movie.genre_ids),
      }));

      setRecommendationMovies(formattedMovies);
    } catch (error) {
      // Handle error state
    }
  };

  useEffect(() => {
    fetchRecommendationMovies();
  }, []);

  return (
    <>
      <Head>
        <title>{`${movie.title} | MoovieTime`}</title>
        <meta name="description" content={movie.overview} />
      </Head>

      <Navbar menus={navMenus} />

      <div className="relative overflow-hidden">
        <div className="absolute top-0 w-full">
          <Image
            src={movie.backdrop_path}
            width={600}
            height={330}
            alt={movie.title}
            className="w-full h-auto opacity-20"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-0e1723/0 to-1e232b/100"></div>
        </div>

        <div className="relative z-10 pt-64">
          <div className="container mx-auto px-4 relative">
            <div className="absolute top-0 left-4">
              <ImageWrapper width={220} height={330}>
                <Image
                  src={movie.poster_path}
                  width={220}
                  height={330}
                  alt={movie.title}
                  priority
                />
              </ImageWrapper>
            </div>

            <div className="mb-8 pl-60">
              <span className="text-ffffff text-lg font-medium">
                {new Date(movie.release_date).getFullYear()}
              </span>
              <h2 className="text-e5e5e5 text-4xl font-semibold mb-1">
                {movie.title}
              </h2>
              <span className="text-ffffff text-sm font-medium">
                {formattedGenres.join(', ')}
              </span>
            </div>
          </div>

          <div className="bg-000000/30">
            <div className="container mx-auto px-4 py-4">
              <div className="pl-60">
                <div className="flex items-center">
                  <StarIcon size={32} className="fill-ffb802 mr-4" />
                  <span className="text-e5e5e5 text-4xl font-semibold">
                    {movie.vote_average}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-ffffff">
            <div className="container mx-auto px-4 py-9">
              <div className="pl-60 max-w-3xl">
                <h3 className="text-ff0000 text-sm font-semibold mb-3">
                  OVERVIEW
                </h3>
                <p className="text-000000 text-sm font-normal leading-7">
                  {movie.overview}
                </p>
              </div>

              <h3 className="text-ff0000 text-sm font-semibold mb-3 py-9">
                REVIEWS
              </h3>
            </div>
          </div>

          <div className="container mx-auto px-4 py-9">
            <h3 className="text-ffffff text-sm font-semibold mb-3">
              RECOMMENDATION MOVIES
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {recommendationMovies.map((recommendationMovie) => (
                <MovieCard
                  key={recommendationMovie.id}
                  {...recommendationMovie}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps({ params, res }: any) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=3540',
  );

  const [genresResponse, movieResponse] = await Promise.all([
    fetch(API_URL.genres),
    fetch(format(API_URL.movieDetail, params.movieId)),
  ]);

  const { genres } = await genresResponse.json();
  const movieData = await movieResponse.json();

  if (movieData.success === false) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  const formattedMovie = {
    ...movieData,
    backdrop_path: `https://image.tmdb.org/t/p/w1280${movieData.backdrop_path}`,
    poster_path: `https://image.tmdb.org/t/p/w185${movieData.poster_path}`,
  };

  console.log(formattedMovie);

  return {
    props: {
      genres,
      movie: formattedMovie,
    },
  };
}

export default MovieDetailPage;
