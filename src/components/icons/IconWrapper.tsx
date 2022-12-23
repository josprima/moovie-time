import { IconWrapperProps } from './Icon.interface';

const IconWrapper = ({
  size = 24,
  color = '3c3c3c',
  className,
  children,
}: IconWrapperProps) => {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {children}
    </svg>
  );
};

export default IconWrapper;
