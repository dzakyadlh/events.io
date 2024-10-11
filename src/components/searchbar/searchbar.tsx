import { useState } from 'react';

interface SearchProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar = ({ value, setValue }: SearchProps) => {
  return (
    <input
      className="w-2/5 max-md:w-4/5 rounded-full bg-white border-2 border-indigo-500 py-3 px-5 font-base focus-visible:outline-none outline-none focus:shadow-custom-black focus:border-black duration-100"
      type="text"
      name="text"
      placeholder="Search for an event"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      aria-label="Search for an event"
    />
  );
};
