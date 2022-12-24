import Image from 'next/image';

import logo from '@images/MoovieTime-Logo.svg';
import SearchMovieInput from '@components/search-movie-input';
import ViewGridIcon from '@components/icons/view-grid';
import { useCallback, useEffect, useState } from 'react';

import { NavbarProps } from './Navbar.interfaces';
import { NavItem } from './NavItem';
import { GenreInterface } from 'interfaces/Movie.interfaces';

const defaultBgColor = 'bg-ffffff/5';
const secondaryBgColor = 'bg-2f363f';

const mapGenres = (genres: GenreInterface[]) =>
  genres.map((genre) => ({
    text: genre.name,
    url: `/genres/${genre.id}`,
  }));

const Navbar = ({ genres }: NavbarProps) => {
  const [bgColor, setBgColor] = useState(defaultBgColor);

  const onScroll = useCallback(() => {
    if (window.scrollY > 10) {
      setBgColor(secondaryBgColor);
    } else {
      setBgColor(defaultBgColor);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full z-30 left-0 top-0 transition-colors duration-500 ${bgColor}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center gap-x-10">
          <Image alt="MoovieTime" src={logo} priority />

          <SearchMovieInput className="grow" />

          <NavItem
            text="CATEGORIES"
            icon={<ViewGridIcon size={20} className="mr-3" />}
            menus={mapGenres(genres)}
          />
          <NavItem text="MOVIES" href="/movies" />
          <NavItem text="TV SHOWS" href="/tv-shows" />
          <NavItem text="LOGIN" href="/login" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
