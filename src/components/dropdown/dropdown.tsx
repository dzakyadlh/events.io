import { useState, useRef, useEffect } from 'react';
import autoAnimate from '@formkit/auto-animate';

interface DropdownProps {
  label: string;
  content: string;
}

const Dropdown = ({ label, content }: DropdownProps) => {
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

export default Dropdown;
