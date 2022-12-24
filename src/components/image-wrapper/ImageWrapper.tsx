import { ImageWrapperProps } from './ImageWrapper.interfaces';

import css from './ImageWrapper.module.scss';

const ImageWrapper = ({ children, width, height }: ImageWrapperProps) => {
  return (
    <div
      className={css.wrapper}
      style={{
        width: width === 'full' ? '100%' : `${width}px`,
        height: `${height}px`,
      }}
    >
      {children}
    </div>
  );
};

export default ImageWrapper;
