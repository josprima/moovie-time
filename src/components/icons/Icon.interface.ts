import { ReactElement } from 'react';

export interface IconProps {
  color?: string;
  size?: number;
  className?: string;
}

export interface IconWrapperProps extends IconProps {
  children?: ReactElement;
}
