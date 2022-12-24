export interface NavItemProps {
  text: string;
  href?: string;
  menus?: {
    text: string;
    url: string;
  }[];
}

export interface NavbarProps {
  menus?: NavItemProps[];
}
