import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

interface SearchProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar = ({ value, setValue }: SearchProps) => {
  return (
    <div className="relative w-2/5 max-md:w-4/5">
      <input
        className="w-full rounded-full bg-white border-2 border-indigo-500 py-3 pl-5 pr-5 font-base focus-visible:outline-none outline-none focus:shadow-custom-black focus:border-black duration-100"
        type="text"
        name="text"
        placeholder="Search for an event"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        aria-label="Search for an event"
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400"
      />
    </div>
  );
};
