import MovieIcon from '@components/icons/movie';
import SearchIcon from '@components/icons/search/Search';
import colors from '@constants/colors';
import { SearchInputProps } from './SearchInput.interface';
import classNames from 'classnames';

import css from './SearchInput.module.scss';

const SearchInput = ({ className }: SearchInputProps) => {
  const leftIconCN = classNames(
    `${css.input__icon} ${css['input__icon--left']} opacity-20`,
  );

  const rightIconCN = classNames(
    `${css.input__icon} ${css['input__icon--right']}`,
  );

  return (
    <div className={`${className} ${css.input}`}>
      <MovieIcon className={leftIconCN} color={colors.ffffff} />

      <SearchIcon className={rightIconCN} color={colors.ffffff} size={16} />

      <input
        type="text"
        className="w-full h-9 rounded bg-000000/10 text-ffffff text-base border-0 placeholder:text-ffffff focus:outline-none px-12 focus:placeholder:opacity-20"
        placeholder="Find Movie"
      />
    </div>
  );
};

export default SearchInput;
