import classNames from 'classnames';
import Link from 'next/link';
import { NavItemProps } from './Navbar.interfaces';
import css from './Navbar.module.scss';

export const NavItem = ({ text, icon, menus, href = '' }: NavItemProps) => {
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

  if (menus) {
    return (
      <button className={`${linkClassNames} flex items-center`}>
        {icon}
        <span>{text}</span>

        <div className={`${css.menu__dropdown} bg-ffffff rounded-sm`}>
          {menus.map((menu) => (
            <Link
              href={menu.url}
              key={menu.url}
              className="text-1e232b hover:bg-e5e5e5 py-2 first:pt-4 last:pb-4 px-5 text-left z-40"
            >
              {menu.text}
            </Link>
          ))}
        </div>
      </button>
    );
  }

  return (
    <Link href={href} className={linkClassNames}>
      {text}
    </Link>
  );
};
