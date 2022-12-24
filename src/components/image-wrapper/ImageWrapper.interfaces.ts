import { ReactElement } from 'react';

export interface ImageWrapperProps {
  children: ReactElement;
  width: number | 'full';
  height: number;
}
