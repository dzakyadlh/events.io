'use client';

import api from '@/utils/api';
import { useRouter } from 'next/navigation';
import { useQuery } from 'react-query';
import { Card } from '../card/card';

const user = JSON.parse(localStorage.getItem('user')!);

const getRegisteredEvents = async () => {
  const res = await api.get('/events');
  return res.data.data;
};

const RegisteredEvents = () => {
  const router = useRouter();

  const { data, error, isLoading } = useQuery('events', getRegisteredEvents);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <h1 className="font-bold text-5xl leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-300 drop-shadow-lg">
          Events.io
        </h1>
      </div>
    );
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <main className="w-full min-h-screen p-10 gap-8 flex flex-col">
      <div>
        <h1 className="font-bold text-2xl text-black mb-5">
          Events You Have Registered
        </h1>
        <hr />
      </div>
      <section className="flex flex-wrap gap-5">
        {data?.map((event, index) => {
          return <Card event={event} key={index} className="w-48 h-72" />;
        })}
      </section>
    </main>
  );
};

export default RegisteredEvents;
