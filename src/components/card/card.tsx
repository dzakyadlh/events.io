import { ClassValue } from 'clsx';
import { cn } from '@/lib/utils';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './card.module.css';
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
  options?: EmblaOptionsType;
}

export function Card({ title, category, date, poster, className }: CardItem) {
  return (
    <Link
      href="/events"
      className={cn(
        'bg-white h-96 rounded-xl flex flex-col border-4 border-black',
        className
      )}
    >
      <img
        src={poster}
        alt={title}
        className="h-3/5 rounded-t-lg object-cover border-b-2 border-black"
      />
      <div className="h-full flex flex-col p-4 gap-2">
        <h5 className="font-semibold text-black text-xl">{title}</h5>
        <p className="font-light text-gray-500 text-md">{category}</p>
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
  options,
}: CardItems) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <section className={cn(styles.embla, className)}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {cardItems.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              category={card.category}
              date={card.date}
              poster={card.poster}
              className={styles.embla__slide}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
