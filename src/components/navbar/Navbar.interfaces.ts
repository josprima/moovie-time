import { GenreInterface } from 'interfaces/Movie.interfaces';
import { ReactElement } from 'react';

export interface NavbarProps {
  genres: GenreInterface[];
}

export interface NavItemProps {
  text: string;
  href?: string;
  icon?: ReactElement;
  menus?: {
    text: string;
    url: string;
  }[];
}
