import { ClassValue } from 'clsx';
import { cn } from '@/lib/utils';
import React from 'react';
import Link from 'next/link';
import { ddmmmmyyyy } from '@/utils/date_formatter';
import { Event } from '@/models/event';

type CardItem = {
  event: Event;
  className?: ClassValue;
};

export function Card({ event, className }: CardItem) {
  return (
    <Link
      href={`/events/${encodeURIComponent(event._id)}`}
      className={cn(
        'bg-white flex-shrink-0 w-full h-[10vh] sm:h-80 rounded-md flex sm:flex-col border-2 border-black shadow-custom-black hover:bg-indigo-300 hover:shadow-none transition duration-300',
        className
      )}
    >
      <img
        src="./images/design_seminar.png"
        alt={event.title}
        className="h-full md:h-3/5 rounded-t-md object-cover border-b-2 border-black"
      />
      <div className="h-full flex flex-col p-2 gap-1 sm:gap-2">
        <h5 className="font-semibold text-black text-wrap text-sm sm:text-base">
          {event.title}
        </h5>
        <p className="font text-gray-500 text-xs max-sm:hidden">
          {event.category}
        </p>
        <div className="mt-auto justify-self-end">
          <p className="font-medium text-black text-xs">
            {ddmmmmyyyy(event.start_time)}
          </p>
        </div>
      </div>
    </Link>
  );
}
