import { IconProps } from '../Icon.interface';
import IconWrapper from '../IconWrapper';

const MovieIcon = ({ size, className }: IconProps) => {
  return (
    <IconWrapper className={className} size={size}>
      <>
        <g clipPath="url(#clip0_10_532)">
          <path d="M18 4L20 8H17L15 4H13L15 8H12L10 4H8L10 8H7L5 4H4C2.895 4 2.01 4.895 2.01 6L2 18C2 19.105 2.895 20 4 20H20C21.105 20 22 19.105 22 18V4H18Z" />
        </g>
        <defs>
          <clipPath id="clip0_10_532">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </>
    </IconWrapper>
  );
};

export default MovieIcon;
