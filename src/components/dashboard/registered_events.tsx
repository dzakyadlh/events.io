'use client';

import api from '@/utils/api';
import { useRouter } from 'next/navigation';
import { useQuery } from 'react-query';
import { Card } from '../card/card';
import { Event } from '@/models/event';
import Button from '../button/button';
import { useEffect, useState } from 'react';

const user = JSON.parse(localStorage.getItem('user')!);

const getRegisteredEvents = async () => {
  const res = await api.get('/events');
  return res.data.data;
};

const RegisteredEvents = () => {
  const [ongoingEvents, setOngoingEvents] = useState<Event[]>([]);
  const [finishedEvents, setFinishedEvents] = useState<Event[]>([]);
  const router = useRouter();

  const { data, error, isLoading } = useQuery<Event[]>(
    'events',
    getRegisteredEvents
  );

  useEffect(() => {
    if (Array.isArray(data)) {
      // Ensure that data is an array
      const today = new Date();
      const ongoing = data.filter((event) => new Date(event.date) >= today);
      const finished = data.filter((event) => new Date(event.date) < today);

      setOngoingEvents(ongoing);
      setFinishedEvents(finished);
    } else {
      // Optionally handle the case where data is not an array
      setOngoingEvents([]);
      setFinishedEvents([]);
    }
  }, [data]); // Only depend on data

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
      </div>
      <section className="w-full flex flex-col gap-5">
        <h2 className="text-lg font-semibold text-black">Ongoing</h2>
        <hr />
        <div className="w-full flex flex-wrap gap-5">
          {ongoingEvents.length > 0 ? (
            ongoingEvents.map((event, index) => (
              <Card event={event} key={index} className="w-48 h-72" />
            ))
          ) : (
            <div className="flex flex-col">
              <p className="mb-5">
                You have no ongoing events. Go back to events page to find some!
              </p>
              <Button
                onClick={() => {
                  router.push('/events');
                }}
                children="Go to Events Page"
              />
            </div>
          )}
        </div>
      </section>
      <section className="w-full flex flex-col gap-5">
        <h2 className="text-lg font-semibold text-black">Finished</h2>
        <hr />
        <div className="w-full flex flex-wrap gap-5">
          {finishedEvents.length > 0 ? (
            finishedEvents.map((event, index) => (
              <Card event={event} key={index} className="w-48 h-72" />
            ))
          ) : (
            <p>You have no finished events.</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default RegisteredEvents;
