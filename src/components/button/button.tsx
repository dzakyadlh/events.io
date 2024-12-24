'use client';

import React from 'react';

import { ClassValue } from 'clsx';

import { cn } from '@/lib/utils';

type Props = {
  className?: ClassValue;
  children: React.ReactNode;
  role?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export function CustomButton({ className, children, onClick }: Props) {
  return (
    <button
      role="button"
      aria-label="Click to perform an action"
      onClick={onClick}
      className={cn(
        'flex px-4 py-2 text-black bg-violet-400 border-2 border-black rounded-md shadow-custom-black hover:shadow-none transition duration-300 hover:ease-linear',
        className
      )}
    >
      {children}
    </button>
  );
}

export function CustomSecondaryButton({
  className,
  children,
  role,
  onClick,
}: Props) {
  if (!role) {
    role = 'button';
  }
  return (
    <button
      role={role}
      aria-label="Click to perform an action"
      onClick={onClick}
      className={cn(
        'w-fit flex px-4 py-2 text-black bg-gray-200 border-2 border-black rounded-md text-sm shadow-none hover:bg-gray-300 transition duration-300',
        className
      )}
    >
      {children}
    </button>
  );
}
