import Image from 'next/image';

import logo from '@images/MoovieTime-Logo.svg';
import SearchInput from '@components/search-input';
import ViewGridIcon from '@components/icons/view-grid';
import Link from 'next/link';
import classNames from 'classnames';

const Navbar = () => {
  const linkClassNames = classNames(
    'text-ffffff',
    'hover:text-929292',
    'text-sm',
    'font-semibold',
    'fill-ffffff',
    'hover:fill-929292',
  );

  return (
    <div className="fixed w-full z-10 left-0 top-0 bg-ffffff/5">
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
