'use client';

import api from '@/utils/api';
import { useRouter } from 'next/navigation';
import { useQuery } from 'react-query';
import { Card } from '../card/card';
import { Event } from '@/models/event';
import Button from '../button/button';
import { useEffect, useState } from 'react';
import { User } from '@/models/user';

interface RegisteredEventsProps {
  user: User;
}

const getRegisteredEvents = async () => {
  const res = await api.get('/events');
  return res.data.data;
};

const RegisteredEvents = ({ user }: RegisteredEventsProps) => {
  const [ongoingEvents, setOngoingEvents] = useState<Event[]>([]);
  const [finishedEvents, setFinishedEvents] = useState<Event[]>([]);
  const router = useRouter();

  const events = user.registered_events;

  useEffect(() => {
    if (Array.isArray(events)) {
      // Ensure that data is an array
      const today = new Date();
      const ongoing = events.filter(
        (event) => new Date(event.start_time) <= today
      );
      const finished = events.filter(
        (event) => new Date(event.end_time) > today
      );

      setOngoingEvents(ongoing);
      setFinishedEvents(finished);
    } else {
      // Optionally handle the case where data is not an array
      setOngoingEvents([]);
      setFinishedEvents([]);
    }
  }, [events]); // Only depend on data

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
