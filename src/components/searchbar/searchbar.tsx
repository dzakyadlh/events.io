import { motion, AnimatePresence, color } from 'framer-motion';
import { useState } from 'react';

interface SearchProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const SearchBar = ({ value, setValue, onSubmit }: SearchProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-[80%] md:w-[80%] rounded-full bg-white border-2 border-indigo-500 py-3 px-5 font-base focus-visible:outline-none outline-none focus:shadow-custom-black focus:border-black duration-100"
        type="text"
        name="text"
        placeholder="Search for an event"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        aria-label="Search for an event"
      />
    </form>
  );
};
