'use client';

import { useRouter } from 'next/navigation';
import { Event } from '@/models/event';
import React, { useEffect, useState } from 'react';
import User from '@/models/user';
import { CustomSecondaryButton } from '../../button/button';
import { ClassValue } from 'clsx';
import { dateToHour, ddmmmmyyyy } from '@/utils/date_formatter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faFile } from '@fortawesome/free-solid-svg-icons';
import { useUserById } from '@/hooks/useUser';
import LoadingScreen from '@/components/loading/loading_screen';

interface RegisteredEventsProps {
  user: User;
}

const RegisteredEvents = ({ user }: RegisteredEventsProps) => {
  const [ongoingEvents, setOngoingEvents] = useState<Event[]>([]);
  const [finishedEvents, setFinishedEvents] = useState<Event[]>([]);
  const [eventDetails, setEventDetails] = useState<Event>();
  const [showDetails, setShowDetails] = useState(false);
  const router = useRouter();

  const events = user.registered_events;

  useEffect(() => {
    if (Array.isArray(events)) {
      // Ensure that data is an array
      const today = new Date();
      const ongoing = events.filter(
        (event) => new Date(event.end_time) >= today
      );
      const finished = events.filter(
        (event) => new Date(event.end_time) < today
      );

      setOngoingEvents(ongoing);
      setFinishedEvents(finished);
    } else {
      // Optionally handle the case where data is not an array
      setOngoingEvents([]);
      setFinishedEvents([]);
    }
  }, [events]); // Only depend on data

  function Card({ event }: { event: Event }) {
    return (
      <div
        onClick={async () => {
          setEventDetails(event);
          setShowDetails(true);
        }}
        className="bg-white flex-shrink-0 w-full h-[10vh] sm:h-72 rounded-md flex sm:flex-col border-2 border-black shadow-custom-black hover:bg-indigo-300 hover:shadow-none transition duration-300"
      >
        <img
          src="./images/design_seminar.png"
          alt={event.title}
          className="h-full md:h-3/5 rounded-t-md object-cover border-b-2 border-black"
        />
        <div className="h-full flex flex-col p-2 gap-1 sm:gap-2">
          <h5 className="font-semibold text-black text-wrap text-sm sm:text-base">
            {event.title}
          </h5>
          <p className="font text-gray-500 text-xs max-sm:hidden">
            {event.category}
          </p>
          <div className="mt-auto justify-self-end">
            <p className="font-medium text-black text-xs">
              {ddmmmmyyyy(event.start_time)}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      {showDetails ? (
        <div className="bg-white w-full min-h-screen p-10 gap-8 flex flex-col">
          <div className="flex items-center gap-5">
            <button
              onClick={() => {
                setShowDetails(false);
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} className="text-xl" />
            </button>
            <h1 className="font-bold text-xl text-black">Event Details</h1>
          </div>
          <section className="w-full flex items-center gap-5">
            <img
              className="w-52 h-32 rounded-lg border-2 border-black object-cover"
              src="/images/design_seminar.png"
            />
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-lg">{eventDetails?.title}</p>
              <p className="text-sm">
                Speakers: {eventDetails?.details.speakers.join(', ')}
              </p>
              <p className="text-sm">
                Host: {eventDetails?.host.first_name}{' '}
                {eventDetails?.host.last_name}
              </p>
            </div>
          </section>
          <section className="w-full flex flex-col gap-5">
            <h3 className="font-semibold text-lg">Event Schedule</h3>
            <ul className="bg-indigo-400 flex flex-col gap-2 p-5 border-2 border-black shadow-custom-black text-sm">
              <li className="flex justify-between items-center">
                <p className="font-medium">Date:</p>
                <p>{ddmmmmyyyy(eventDetails?.start_time!)}</p>
              </li>
              <li className="flex justify-between items-center">
                <p className="font-medium">Start Time:</p>
                <p>{dateToHour(eventDetails?.start_time!)}</p>
              </li>
              <li className="flex justify-between items-center">
                <p className="font-medium">End Time:</p>
                <p>{dateToHour(eventDetails?.end_time!)}</p>
              </li>
              <li className="flex justify-between items-center">
                <p className="font-medium">Place:</p>
                <p>{eventDetails?.location}</p>
              </li>
              <li className="mt-5 ml-auto flex items-center gap-5">
                <CustomSecondaryButton
                  children="Add to Google Calendar"
                  onClick={() => {}}
                />
                <CustomSecondaryButton
                  children="Join Meeting"
                  onClick={() => {}}
                  className="bg-purple-400 hover:bg-purple-500"
                />
              </li>
            </ul>
          </section>
          <section className="w-full flex flex-col gap-5">
            <h3 className="font-semibold text-lg">Event Add-ons</h3>
            <ul className="bg-indigo-400 flex flex-col items-start gap-2 p-5 border-2 border-black shadow-custom-black text-sm">
              <li className="flex flex-col items-center gap-2">
                <FontAwesomeIcon icon={faFile} className="text-6xl" />
                <p className="font-medium">event-preread.pdf</p>
                <CustomSecondaryButton
                  children="Download File"
                  onClick={() => {}}
                />
              </li>
            </ul>
          </section>
        </div>
      ) : (
        <main className="w-full min-h-screen p-10 gap-8 flex flex-col">
          <div>
            <h1 className="font-bold text-2xl text-black mb-5">
              Events You Have Registered
            </h1>
          </div>
          <section className="w-full flex flex-col gap-5">
            <h2 className="text-lg font-semibold text-black">Ongoing</h2>
            <hr />
            {ongoingEvents.length > 0 ? (
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 place-items-center">
                {ongoingEvents.map((event, index) => (
                  <Card event={event} key={index} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col">
                <p className="mb-5">
                  You have no ongoing events. Go back to events page to find
                  some!
                </p>
                <CustomSecondaryButton
                  onClick={() => {
                    router.push('/events');
                  }}
                  children="Go to Events Page"
                />
              </div>
            )}
          </section>
          <section className="w-full flex flex-col gap-5">
            <h2 className="text-lg font-semibold text-black">Finished</h2>
            <hr />
            {finishedEvents.length > 0 ? (
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 place-items-center">
                {finishedEvents.map((event, index) => (
                  <Card event={event} key={index} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col">
                <p className="mb-5">You have no finished events.</p>
              </div>
            )}
          </section>
        </main>
      )}
    </React.Fragment>
  );
};

export default RegisteredEvents;
