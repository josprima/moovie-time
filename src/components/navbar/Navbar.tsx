import Image from 'next/image';

import logo from '@images/MoovieTime-Logo.svg';
import SearchInput from '@components/search-input';
import ViewGridIcon from '@components/icons/view-grid';
import Link from 'next/link';
import classNames from 'classnames';
import { useCallback, useEffect, useState } from 'react';

const defaultBgColor = 'bg-ffffff/5';
const secondaryBgColor = 'bg-0e1723';

const Navbar = () => {
  const [bgColor, setBgColor] = useState(defaultBgColor);

  const linkClassNames = classNames(
    'text-ffffff',
    'hover:text-929292',
    'text-sm',
    'font-semibold',
    'fill-ffffff',
    'hover:fill-929292',
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
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center gap-x-10">
          <Image alt="MoovieTime" src={logo} priority />

          <SearchInput className="grow" />

          <button className={`${linkClassNames} flex items-center`}>
            <ViewGridIcon size={20} className="mr-3" />
            CATEGORIES
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
