'use client';

import React from 'react';

import { ClassValue } from 'clsx';

import { cn } from '@/lib/utils';

type Props = {
  className?: ClassValue;
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({ className, children, onClick }: Props) {
  return (
    <button
      role="button"
      aria-label="Click to perform an action"
      onClick={onClick}
      className={cn(
        'flex px-4 py-2 text-black bg-indigo-400 border-2 border-black rounded-md shadow-custom-black hover:shadow-none transition duration-300 hover:ease-linear',
        className
      )}
    >
      {children}
    </button>
  );
}
