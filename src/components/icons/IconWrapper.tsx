import { IconWrapperProps } from './Icon.interface';

const IconWrapper = ({ size = 24, className, children }: IconWrapperProps) => {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {children}
    </svg>
  );
};

export default IconWrapper;
