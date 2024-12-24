import { ClassValue } from 'clsx';

import { cn } from '@/lib/utils';

type Props = {
  className?: ClassValue;
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  placeholder: string;
  minLength?: number;
  maxLength?: number;
  type?: string;
};

export default function Input({
  className,
  value,
  setValue,
  placeholder,
  minLength = 0,
  maxLength = 100,
  type = 'text',
}: Props) {
  return (
    <input
      className={cn(
        'w-full rounded-lg bg-white dark:bg-darkBg border-2 box-border dark:border-darkBorder p-[10px] font-base border-black outline-none',
        className
      )}
      type={type}
      name="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      aria-label={placeholder}
      required
      minLength={minLength}
      maxLength={maxLength}
    />
  );
}
