import Image from 'next/image';

import logo from '@images/MoovieTime-Logo.svg';
import SearchMovieInput from '@components/search-movie-input';
import { useCallback, useEffect, useState } from 'react';

import { NavbarProps } from './Navbar.interfaces';
import { NavItem } from './NavItem';
import Link from 'next/link';

const defaultBgColor = 'bg-ffffff/5';
const secondaryBgColor = 'bg-2f363f';

const Navbar = ({ menus }: NavbarProps) => {
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
        <div className="flex justify-between items-center gap-x-10 py-3">
          <Link href="/">
            <Image alt="MoovieTime" src={logo} priority />
          </Link>

          <SearchMovieInput className="grow" />

          {menus?.map((menu) => (
            <NavItem
              key={menu.text}
              text={menu.text}
              menus={menu.menus}
              href={menu.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
