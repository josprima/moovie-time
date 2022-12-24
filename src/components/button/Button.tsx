import classNames from 'classnames';
import { ButtonProps } from './Button.interfaces';

const Button = ({ text, onClick, variant = 'primary' }: ButtonProps) => {
  const buttonClassName = classNames(
    'py-2 px-4 text-e5e5e5 hover:text-c4c4c4 text-sm font-semibold cursor-pointer rounded-3xl',
    {
      'bg-ff0000 hover:bg-ff0000/90': variant === 'primary',
      'bg-000000/20 hover:bg-000000/40': variant === 'secondary',
    },
  );

  return (
    <button className={buttonClassName} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
