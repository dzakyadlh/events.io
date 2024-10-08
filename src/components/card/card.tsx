import { ClassValue } from 'clsx';
import { cn } from '@/lib/utils';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { ddmmmmyyyy } from '@/utils/date_formatter';

type CardItem = {
  title: string;
  category: string;
  date: Date;
  poster: string;
  className?: ClassValue;
};

interface CardItems {
  cardItems: CardItem[];
  interval?: number;
  className?: ClassValue;
}

export function Card({ title, category, date, poster, className }: CardItem) {
  return (
    <Link
      href="/events"
      className={cn(
        'flex-shrink-0 w-80 bg-indigo-200 h-96 rounded-md flex flex-col border-2 border-black shadow-custom-black',
        className
      )}
    >
      <img
        src="./images/design_seminar.png"
        alt={title}
        className="h-3/5 rounded-t-md object-cover border-b-2 border-black"
      />
      <div className="h-full flex flex-col p-4 gap-2">
        <h5 className="font-semibold text-black text-md text-wrap">{title}</h5>
        <p className="font text-gray-500 text-xs">{category}</p>
        <div className="mt-auto justify-self-end">
          <p className="font-semibold text-black text-sm">{ddmmmmyyyy(date)}</p>
        </div>
      </div>
    </Link>
  );
}

export const CardList: React.FC<CardItems> = ({
  cardItems,
  interval = 3000,
  className,
}: CardItems) => {
  return (
    <section className={cn('relative flex overflow-x-hidden', className)}>
      <div className={`gap-x-4 flex animate-marquee whitespace-nowrap py-12`}>
        {cardItems.map((card, index) => (
          <Card
            key={`card-${index}-1`}
            title={card.title}
            category={card.category}
            date={card.date}
            poster={card.poster}
          />
        ))}
      </div>
      <div
        className={`absolute top-0 gap-x-4 pl-4 flex animate-marquee2 whitespace-nowrap py-12`}
      >
        {cardItems.map((card, index) => (
          <Card
            key={`card-${index}-1`}
            title={card.title}
            category={card.category}
            date={card.date}
            poster={card.poster}
          />
        ))}
      </div>
    </section>
  );
};
