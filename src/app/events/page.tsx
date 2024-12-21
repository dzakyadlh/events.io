'use client';

import { Footer } from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { SearchBar } from '@/components/searchbar/searchbar';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { Event } from '@/models/event';
import { Card } from '@/components/card/card';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEvents } from '@/hooks/useEvents';
import LoadingScreen from '@/components/loading/loading_screen';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      offset: 100, // offset from the viewport
    });
    AOS.refresh();
    const handler = debounce(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    handler();

    return () => {
      handler.cancel();
    };
  }, [searchTerm]);

  const {
    data: events,
    isLoading,
    error,
  } = useEvents(category, debouncedSearchTerm);

  if (error) {
    return <div>Error fetching data</div>;
  }

  const categories = [
    'All',
    'Technology',
    'Business',
    'Art',
    'Health',
    'Self Development',
  ];

  const handleCategory = (category: string) => {
    if (category == 'All') category = '';
    setCategory(category);
  };

  return (
    <div className="min-h-screen w-full box-border bg-gray-100 overflow-hidden flex flex-col items-center gap-10">
      <Navbar />
      <header
        data-aos="fade-up"
        className="w-full min-h-[20vh] bg-gradient-to-r flex flex-col items-center justify-end gap-10 pt-36 pb-20"
        style={{
          backgroundImage: 'url("./images/team_management.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      >
        <h1 className="font-bold text-4xl leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-yellow-400 drop-shadow-xl text-center">
          Find Events That You Are Looking For
        </h1>
        <SearchBar value={searchTerm} setValue={setSearchTerm} />
      </header>
      <main
        data-aos="fade-up"
        className="min-h-[60vh] w-4/5 flex flex-col gap-10"
      >
        <section className="w-full flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          {categories.map((category, index) => {
            return (
              <div
                key={index}
                className="rounded-full text-xs sm:text-sm border-black border px-3 sm:px-4 py-2 shadow-custom-black hover:bg-indigo-300 hover:shadow-none hover:font-medium duration-200 flex justify-center items-center min-w-[100px] max-w-[150px] text-center"
                onClick={() => handleCategory(category)}
              >
                {category}
              </div>
            );
          })}
        </section>

        <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 place-items-center">
          {events?.map((item, index) => {
            return <Card key={index} event={item} />;
          })}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
