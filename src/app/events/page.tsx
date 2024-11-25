'use client';

import Button from '@/components/button/button';
import { Footer } from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { SearchBar } from '@/components/searchbar/searchbar';
import api from '@/utils/api';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { debounce } from 'lodash';
import { Event } from '@/models/event';
import { Card } from '@/components/card/card';
import AOS from 'aos';
import 'aos/dist/aos.css';

const getEvents = async (
  category: string,
  searchTerm: string
): Promise<Event[]> => {
  const params = new URLSearchParams();
  if (category) params.append('category', category);
  if (searchTerm) params.append('searchTerm', searchTerm);
  const res = await api.get(`events?${params.toString()}`);
  return res.data.data;
};

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

  const { data, error, isLoading } = useQuery<Event[], Error>(
    ['events', category, debouncedSearchTerm],
    () => getEvents(category, debouncedSearchTerm)
  );

  const categories = [
    'Technology',
    'Business',
    'Art',
    'Health',
    'Self Development',
  ];

  const handleCategory = (category: string) => {
    setCategory(category);
  };

  return (
    <div className="min-h-screen w-screen box-border bg-white overflow-hidden flex flex-col items-center gap-20">
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

        <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center">
          {data?.map((item, index) => {
            return <Card key={index} event={item} className="max-lg:w-60" />;
          })}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
