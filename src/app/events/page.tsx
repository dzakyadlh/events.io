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

  const handleCategory = () => {
    setCategory(category);
  };

  const handleSubmit = () => {
    setSearchTerm(searchTerm);
  };

  return (
    <div className="min-h-screen w-screen box-border bg-white overflow-hidden flex flex-col items-center gap-20">
      <Navbar />
      <header className="w-full min-h-[20vh] bg-gradient-to-r from-yellow-200 to-red-200 flex flex-col items-center justify-end gap-20 pt-36 pb-20">
        <h1 className="font-bold text-5xl leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-red-700 drop-shadow-xl">
          Level Up Your Skills: Search for Cool Events
        </h1>
        <SearchBar
          value={searchTerm}
          setValue={setSearchTerm}
          onSubmit={handleSubmit}
        />
      </header>
      <main className="min-h-[60vh] w-4/5 flex flex-col gap-10">
        <section className="w-full flex items-center justify-center gap-5">
          {categories.map((category, index) => {
            return (
              <div
                key={index}
                className="rounded-full text-sm border-black border px-4 py-2 shadow-custom-black hover:bg-indigo-300 hover:shadow-none hover:font-medium duration-200"
                onClick={handleCategory}
              >
                {category}
              </div>
            );
          })}
        </section>
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.map((item, index) => {
            return <Card key={index} event={item} />;
          })}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
