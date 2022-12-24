import { IconProps } from '../Icon.interface';
import IconWrapper from '../IconWrapper';

const ArrowDown = ({ size, className }: IconProps) => {
  return (
    <IconWrapper className={className} size={size}>
      <>
        <path d="M12.4999 21L1.9999 3L22.9999 3L12.4999 21Z" />
      </>
    </IconWrapper>
  );
};

export default ArrowDown;
