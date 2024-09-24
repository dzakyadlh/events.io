import { ClassValue } from 'clsx';
import { cn } from '@/lib/utils';

type CardItem = {
  title: string;
  category: string;
  date: string;
  image: string;
};

interface CardItems {
  cardItems: CardItem[];
  className?: ClassValue;
}

export function Card({ title, category, date, image }: CardItem) {
  return (
    <div className="bg-white h-96 w-72 rounded-lg flex flex-col">
      <img
        src={image}
        alt={title}
        className="h-1/2 rounded-t-lg object-cover"
      />
      <div className="h-full flex flex-col p-4 gap-2">
        <h5 className="font-semibold text-black text-xl">{title}</h5>
        <p className="font-light text-gray-500 text-md">{category}</p>
        <div className="mt-auto justify-self-end">
          <p className="font-semibold text-black text-md">{date}</p>
        </div>
      </div>
    </div>
  );
}

export function CardList({ cardItems, className }: CardItems) {}
