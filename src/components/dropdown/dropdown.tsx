import React, { useState, useRef, useEffect } from 'react';
import autoAnimate from '@formkit/auto-animate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

interface DropdownProps {
  label: string;
  content: string;
}

export const Dropdown = ({ label, content }: DropdownProps) => {
  const [show, setShow] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const reveal = () => setShow(!show);

  return (
    <div
      ref={parent}
      className="w-full py-3 px-5 bg-indigo-400 border-2 border-black shadow-custom-black rounded-lg cursor-pointer"
    >
      <div className="w-full h-full rounded-lg" onClick={reveal}>
        <strong className="">{label}</strong>
      </div>
      {show && <p className="mt-4">{content}</p>}
    </div>
  );
};

interface InputDropdownProps {
  label: string;
  content: React.ReactNode;
}

export const InputDropdown = ({ label, content }: InputDropdownProps) => {
  const [show, setShow] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const reveal = () => setShow(!show);

  return (
    <div
      ref={parent}
      className={`w-full flex flex-col py-3 px-5 ${
        show ? 'bg-white' : 'bg-indigo-400'
      } border-2 border-black shadow-custom-black rounded-lg cursor-pointer transition duration-300`}
    >
      <div
        className="w-full h-full flex items-center justify-between rounded-lg"
        onClick={reveal}
      >
        <h3 className="text-lg font-semibold">{label}</h3>
        <FontAwesomeIcon icon={faAdd} className="text-black" />
      </div>
      {show && content}
    </div>
  );
};
