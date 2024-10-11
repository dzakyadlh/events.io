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

interface CardItems {
  cardItems: Event[];
  className?: ClassValue;
}

export function Card({ event, className }: CardItem) {
  return (
    <Link
      href={`/events/${encodeURIComponent(event._id)}`}
      className={cn(
        'flex-shrink-0 w-80 bg-indigo-200 h-96 rounded-md flex flex-col border-2 border-black shadow-custom-black',
        className
      )}
    >
      <img
        src="./images/design_seminar.png"
        alt={event.title}
        className="h-3/5 rounded-t-md object-cover border-b-2 border-black"
      />
      <div className="h-full flex flex-col p-4 gap-2">
        <h5 className="font-semibold text-black text-md text-wrap">
          {event.title}
        </h5>
        <p className="font text-gray-500 text-xs">{event.category}</p>
        <div className="mt-auto justify-self-end">
          <p className="font-semibold text-black text-sm">
            {ddmmmmyyyy(event.date)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export const Carousel: React.FC<CardItems> = ({
  cardItems,
  className,
}: CardItems) => {
  return (
    <section className={cn('relative flex overflow-x-hidden', className)}>
      <div className={`gap-x-4 flex animate-marquee whitespace-nowrap py-12`}>
        {cardItems.map((item, index) => (
          <Card key={index} event={item} />
        ))}
      </div>
      <div
        className={`absolute top-0 gap-x-4 pl-4 flex animate-marquee2 whitespace-nowrap py-12`}
      >
        {cardItems.map((item, index) => (
          <Card key={index} event={item} />
        ))}
      </div>
    </section>
  );
};
