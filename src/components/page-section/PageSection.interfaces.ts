import { ReactElement } from 'react';

export interface PageSectionProps {
  title: string;
  children?: ReactElement;
  actionButtons?: ReactElement;
  className?: string;
}
