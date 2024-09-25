import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import Link from 'next/link';
import { ClassValue } from 'clsx';
import { cn } from '@/lib/utils';

type Slide = {
  src: string;
  title: string;
  date: string;
  joined: string;
};

interface CarouselProps {
  slides: Slide[];
  interval?: number;
  className?: ClassValue;
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  interval = 5000,
  className,
}) => {
  useEffect(() => {
    const splideOptions = {
      type: 'loop',
      autoplay: true,
      rewind: false,
      rewindByDrag: true,
      pagination: false,
      arrows: false,
      interval: interval,
      speed: 1000,
      perPage: 3,
      perMove: 1,
      focus: 'center' as const, // Explicitly set "center" as const
      slideFocus: true,
      updateOnMove: true,
      clones: 4,
      gap: '40px',
      breakpoints: {
        768: {
          gap: '12px',
        },
      },
    };

    const splideInstances = document.querySelectorAll('.js-carousel-01');

    splideInstances.forEach((splide) => {
      // Assert that splide is an HTMLElement
      if (splide instanceof HTMLElement) {
        new Splide(splide, splideOptions).mount();
      }
    });
  }, [interval, slides]);

  return (
    <section
      id="image-carousel"
      className={cn(
        'js-carousel-01 splide w-full h-96 my-20 overflow-hidden',
        className
      )}
      aria-label="slider"
    >
      <div className="splide__track">
        <div className="splide__list">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="splide__slide border-4 border-black rounded-xl h-96"
            >
              <Link className="" href="/events">
                <img
                  className="relative h-full object-cover rounded-lg"
                  src={slide.src}
                  alt={`slide-${index}`}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
