import Footer from '@components/footer';
import MoviesFilter from '@components/movies-filter';
import Navbar from '@components/navbar';
import PageSection from '@components/page-section';
import API_URL from '@constants/api-url';
import { GenreInterface } from '@interfaces/Movie.interfaces';
import mapGenres from '@utils/map-genres';
import Head from 'next/head';

const MoviesPage = ({ genres }: { genres: GenreInterface[] }) => {
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
        <div className="flex">
          <div className="w-60 shrink-0">
            <MoviesFilter />
          </div>
        </div>
      </PageSection>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch(API_URL.genres);

  const { genres } = await response.json();

  return {
    props: {
      genres,
    },
    revalidate: 60 * 60, // 1 Hour
  };
}

export default MoviesPage;
