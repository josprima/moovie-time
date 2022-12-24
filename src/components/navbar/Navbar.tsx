import Image from 'next/image';

import logo from '@images/MoovieTime-Logo.svg';
import SearchInput from '@components/search-input';
import ViewGridIcon from '@components/icons/view-grid';
import Link from 'next/link';
import classNames from 'classnames';
import { useCallback, useEffect, useState } from 'react';

import css from './Navbar.module.scss';
import { GenreInterface } from 'interfaces/Movie.interfaces';

const defaultBgColor = 'bg-ffffff/5';
const secondaryBgColor = 'bg-2f363f';

const Navbar = ({ genres }: { genres: GenreInterface[] }) => {
  const [bgColor, setBgColor] = useState(defaultBgColor);

  const linkClassNames = classNames(
    'text-ffffff',
    'hover:text-929292',
    'text-sm',
    'font-semibold',
    'fill-ffffff',
    'hover:fill-929292',
    'py-4',
    css.menu,
  );

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

          <SearchInput className="grow" />

          <button className={`${linkClassNames} flex items-center`}>
            <ViewGridIcon size={20} className="mr-3" />
            CATEGORIES
            <div className={`${css.menu__dropdown} bg-ffffff rounded-sm`}>
              {genres.map((genre) => (
                <Link
                  href={`/genres/${genre.id}`}
                  key={genre.id}
                  className="text-1e232b hover:bg-e5e5e5 py-2 first:pt-4 last:pb-4 px-5 text-left z-40"
                >
                  {genre.name}
                </Link>
              ))}
            </div>
          </button>

          <Link href="/movies" className={linkClassNames}>
            MOVIES
          </Link>

          <Link href="/tv-shows" className={linkClassNames}>
            TV SHOWS
          </Link>

          <Link href="/login" className={linkClassNames}>
            LOGIN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
