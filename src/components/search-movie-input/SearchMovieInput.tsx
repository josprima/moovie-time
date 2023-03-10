import _debounce from 'lodash/debounce';
import _isEmpty from 'lodash/isEmpty';

import MovieIcon from '@components/icons/movie';
import SearchIcon from '@components/icons/search/Search';
import { SearchMovieInputProps } from './SearchMovieInput.interface';
import classNames from 'classnames';

import css from './SearchMovieInput.module.scss';
import { useEffect, useMemo, useRef, useState } from 'react';
import { InputEventInterface } from '@interfaces/Event.interfaces';
import { MovieInterface } from '@interfaces/Movie.interfaces';
import formatSearchResult from '@utils/format-search-result';
import useClickOutside from '@hooks/click-outside';
import { useRouter } from 'next/router';

const SearchMovieInput = ({ className }: SearchMovieInputProps) => {
  const [keyWord, setKeyWord] = useState('');
  const [movies, setMovies] = useState<MovieInterface[]>([]);
  const [searchResultHeight, setSearchResultHeight] = useState(0);
  const [showSearchResult, setShowSearchResult] = useState(false);

  const searchResultRef = useRef<HTMLDivElement>(null);
  const searchBoxRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  useClickOutside(searchBoxRef, () => {
    setShowSearchResult(false);
  });

  const leftIconCN = classNames(
    `${css.input__icon} ${css['input__icon--left']}`,
    'fill-ffffff',
    'opacity-20',
  );

  const rightIconCN = classNames(
    `${css.input__icon} ${css['input__icon--right']}`,
    'fill-ffffff',
  );

  const searchMovieTitles = async (value: string) => {
    try {
      const response = await fetch(`/data/search/movie?query=${value}`);

      const data = await response.json();

      const formattedMovies = data?.results?.map((movie: MovieInterface) => ({
        ...movie,
        formattedTitle: formatSearchResult({
          result: movie.title,
          keyWord: value,
        }),
      }));

      setMovies(formattedMovies || []);
    } catch (error) {
      // TODO: handle error here
      setMovies([]);
    }
  };

  const debouncedSearchTitle = useMemo(
    () =>
      _debounce((value) => {
        if (value.trim()) {
          searchMovieTitles(value);
        } else {
          setMovies([]);
        }
      }, 500),
    [],
  );

  const handleOnChange = (e: InputEventInterface) => {
    const { value } = e.target;

    setKeyWord(value);

    debouncedSearchTitle(value);
  };

  const handleOnFocus = () => {
    setShowSearchResult(true);
  };

  const handleOnClickResult = (movie: MovieInterface) => {
    setShowSearchResult(false);
    setKeyWord(movie.title);

    router.push(`/movies/${movie.id}`);
  };

  useEffect(() => {
    if (_isEmpty(keyWord) || _isEmpty(movies)) {
      setSearchResultHeight(0);
    } else {
      if (searchResultRef.current) {
        setSearchResultHeight(searchResultRef.current.offsetHeight);
      }
    }
  }, [keyWord, movies, searchResultRef]);

  return (
    <div className={`${className} ${css.input} relative`} ref={searchBoxRef}>
      <MovieIcon className={leftIconCN} />

      <SearchIcon className={rightIconCN} size={16} />

      <input
        type="text"
        className="w-full h-9 rounded bg-000000/10 text-ffffff text-base border-0 placeholder:text-ffffff focus:outline-none px-12 focus:placeholder:opacity-20"
        placeholder="Find Movie"
        value={keyWord}
        name="keyWord"
        onChange={handleOnChange}
        onFocus={handleOnFocus}
      />

      {/* Search result */}
      {showSearchResult && (
        <div
          className={
            'absolute top-full left-0 w-full z-30 bg-000000/90 transition-all duration-500 overflow-hidden'
          }
          style={{
            maxHeight: `${searchResultHeight}px`,
          }}
        >
          <div ref={searchResultRef}>
            {movies.map((movie) => (
              <button
                key={movie.id}
                className="text-sm text-e5e5e5 block px-4 py-2 first:pt-4 last:pb-4"
                dangerouslySetInnerHTML={{ __html: movie.formattedTitle }}
                onClick={() => handleOnClickResult(movie)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchMovieInput;
