import { IconProps } from '../Icon.interface';
import IconWrapper from '../IconWrapper';

const ArrowUp = ({ size, className }: IconProps) => {
  return (
    <IconWrapper className={className} size={size}>
      <>
        <path d="M11.5001 3L22.0001 21L1.0001 21L11.5001 3Z" />
      </>
    </IconWrapper>
  );
};

export default ArrowUp;
