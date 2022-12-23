import { ReactElement } from 'react';

export interface IconProps {
  size?: number;
  className?: string;
}

export interface IconWrapperProps extends IconProps {
  children?: ReactElement;
}
