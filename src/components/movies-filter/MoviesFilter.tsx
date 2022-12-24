import SelectInput from '@components/select-input';
import { OptionType } from '@components/select-input/SelectInput.interfaces';
import { useState } from 'react';
import { MoviesFilterProps } from './MoviesFilter.interfaces';

const defaultOption = {
  label: 'Popularity',
  value: 'popularity',
};

const options = [
  {
    label: 'Popularity Ascending',
    value: 'popularity-asc',
  },
  {
    label: 'Popularity Descending',
    value: 'popularity-desc',
  },
  {
    label: 'Release Date Ascending',
    value: 'release-date-asc',
  },
  {
    label: 'Release Date Descending',
    value: 'release-date-desc',
  },
  {
    label: 'Rating Ascending',
    value: 'rating-asc',
  },
  {
    label: 'Rating Descending',
    value: 'rating-desc',
  },
];

const MoviesFilter = ({ genres = [] }: MoviesFilterProps) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleSelect = (option: OptionType) => {
    setSelectedOption(option);
  };

  return (
    <div className="rounded-md bg-gradient-to-b from-0e1723 to-ffffff/0">
      <span className="block text-md text-e5e5e5 font-semibold pt-5 pb-4 px-4 border-b border-ffffff/10">
        Sort Result By
      </span>

      <div className="p-4 pb-5">
        <SelectInput
          value={selectedOption.label}
          options={options}
          onSelect={handleSelect}
        />
      </div>

      <span className="block text-md text-e5e5e5 font-semibold p-4 border-t border-b border-ffffff/10">
        Genres
      </span>

      {genres.map((genre) => (
        <span key={genre.id}>{genre.name}</span>
      ))}
    </div>
  );
};

export default MoviesFilter;
