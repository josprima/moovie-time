import ArrowDown from '@components/icons/arrow-down';
import useClickOutside from '@hooks/click-outside';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { OptionType, SelectInputProps } from './SelectInput.interfaces';

const SelectInput = ({ options, onSelect, value }: SelectInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [optionsHeight, setOptionsHeight] = useState(0);

  const selectRef = useRef(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  const arrowClassName = classNames('fill-c4c4c4 transition-all duration-500', {
    'rotate-180': isOpen,
    'rotate-0': !isOpen,
  });

  const toggleOption = () => {
    setIsOpen(!isOpen);
  };

  const hideOption = () => {
    setIsOpen(false);
  };

  const handleOnSelect = (selectedOption: OptionType) => () => {
    hideOption();
    onSelect(selectedOption);
  };

  useClickOutside(selectRef, hideOption);

  useEffect(() => {
    if (!isOpen) {
      setOptionsHeight(0);
    } else {
      if (optionsRef.current) {
        setOptionsHeight(optionsRef.current.offsetHeight);
      }
    }
  }, [isOpen]);

  return (
    <div className="bg-2f363f rounded-md relative" ref={selectRef}>
      <button
        className="flex justify-between items-center w-full py-2 pl-4 pr-2"
        onClick={toggleOption}
      >
        <span className="text-xs text-e5e5e5">{value}</span>

        <ArrowDown size={10} className={arrowClassName} />
      </button>

      {/* Option section */}
      <div
        className="absolute top-full left-0 z-40 w-full rounded-md transition-all duration-500 overflow-hidden"
        style={{
          maxHeight: `${optionsHeight}px`,
        }}
      >
        <div className="flex flex-col" ref={optionsRef}>
          {options.map((option) => (
            <button
              className="text-ffffff hover:text-e5e5e5 text-xs px-4 py-2 first:pt-4 last:pb-4 text-left bg-111419 hover:bg-1e232b"
              key={option.value}
              onClick={handleOnSelect(option)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectInput;
