'use client';

import Button from '@/components/button/button';
import Dropdown from '@/components/dropdown/dropdown';
import { Footer } from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { Event } from '@/models/event';
import api from '@/utils/api';
import { ddmmmmyyyy } from '@/utils/date_formatter';
import { format } from 'date-fns';
import { useRouter, useParams } from 'next/navigation';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const getEvents = async (id: String): Promise<Event> => {
  const res = await api.get(`/events/${id}`);
  return res.data.data;
};

export default function EventDetail() {
  const [bookmark, setBookmark] = useState(false);
  const router = useRouter();
  const { id } = useParams();

  const { data, error, isLoading } = useQuery<Event, Error>(
    ['event', id],
    () => getEvents(id as string),
    { enabled: !!id }
  );

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

  const handleBookmark = () => {
    setBookmark(!bookmark);
  };

  return (
    <div className="min-h-screen w-screen box-border bg-white overflow-hidden">
      <Navbar />
      <header className="w-full min-h-screen flex flex-col items-center justify-center bg-slate-900 gap-10 py-40 px-5">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'tween', duration: 1 }}
          src="/images/design_seminar.png"
          alt="thumbnail"
          className="md:w-[60vw] w-[90vw] rounded-xl shadow-custom-black"
        />
        <div className="md:w-[60vw] flex max-md:flex-col justify-between relative">
          <motion.div
            initial={{ x: '-100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'tween', duration: 1 }}
            className="md:w-[60%]"
          >
            <h1 className="font-semibold text-4xl md:text-5xl leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-300">
              {data?.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ x: '100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'tween', duration: 1 }}
            className="relative md:absolute w-80 flex flex-col px-5 py-8 max-md:mt-10 rounded-3xl bg-white gap-5 md:-bottom-25 md:-right-24 border-2 border-black shadow-custom-black"
          >
            <div className="flex justify-between items-center">
              <p className="text-black font-semibold text-xl">Your Speakers</p>
              <div className="flex items-center gap-5">
                <FontAwesomeIcon icon={faShareSquare} />
                {bookmark ? (
                  <FontAwesomeIcon
                    icon={faBookmarkSolid}
                    onClick={handleBookmark}
                  />
                ) : (
                  <FontAwesomeIcon icon={faBookmark} onClick={handleBookmark} />
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-full flex flex-col">
                <div className="w-full grid grid-cols-3">
                  {data?.details?.speakers?.map((speaker, index) => {
                    return (
                      <div className="flex flex-col items-center">
                        <img
                          src="/images/girlpp.png"
                          alt="speaker"
                          className="w-14 border-indigo-500 border-2 rounded-full"
                        />
                        <h3
                          key={index}
                          className="font-semibold text-sm text-center"
                        >
                          {speaker}
                        </h3>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <hr />
            <div>
              <div className="flex flex-col gap-3">
                <p className="text-black font-medium text-md">Get Ticket</p>
                <p className="text-black font-bold text-3xl">
                  $25
                  <span className="text-gray-500 font-light text-xs">
                    /person
                  </span>
                </p>
                <div className="flex gap-3 items-center">
                  <img
                    src="/images/location.png"
                    alt="icon"
                    className="w-8 h-8"
                  />
                  <p className="text-black font-medium text-md">
                    {data?.location}
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <img src="/images/time.png" alt="icon" className="w-8 h-8" />
                  <p className="text-black font-medium text-md">
                    {format(data?.date!, 'HH:mm O')}
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <img src="/images/date.png" alt="icon" className="w-8 h-8" />
                  <p className="text-black font-medium text-md">
                    {ddmmmmyyyy(data?.date!)}
                  </p>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', damping: 0, mass: 10 }}
            >
              <Button
                onClick={() => {
                  router.push('/events');
                }}
                children="Join Now"
                className="w-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </header>
      <main className="xl:w-[60vw] flex flex-col text-black md:px-40 px-5 py-20 gap-10">
        <motion.div
          initial={{ x: '-100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'tween', duration: 1 }}
        >
          <h5 className="font-semibold text-2xl mb-6">Event Details</h5>
          <p className="text-black leading-loose">
            {data?.details.description}
          </p>
        </motion.div>
        <motion.div
          initial={{ x: '-100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'tween', duration: 1, delay: 0.25 }}
        >
          <h5 className="font-semibold text-2xl mb-6">Keypoints</h5>
          <ul>
            {data?.details?.keypoints?.map((keypoint, index) => {
              return (
                <li key={index} className="flex items-start gap-4 mb-4">
                  <img
                    src="/images/check.png"
                    alt="checklist"
                    className="w-7 h-7"
                  />
                  <p>{keypoint}</p>
                </li>
              );
            })}
          </ul>
        </motion.div>
        <motion.div
          initial={{ x: '-100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'tween', duration: 1, delay: 0.5 }}
        >
          <h5 className="font-semibold text-2xl mb-6">Requirements</h5>
          <ul>
            {data?.details?.requirements?.map((requirement, index) => {
              return (
                <li key={index} className="flex items-start gap-4 mb-4">
                  <img
                    src="/images/check.png"
                    alt="checklist"
                    className="w-7 h-7"
                  />
                  <p>{requirement}</p>
                </li>
              );
            })}
          </ul>
        </motion.div>
        <motion.div
          initial={{ x: '-100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'tween', duration: 1, delay: 0.75 }}
        >
          <h5 className="font-semibold text-2xl mb-6">Agenda</h5>
          <ul className="flex gap-4 items-start max-sm:overflow-x-scroll">
            {data?.details?.agenda?.map((agenda, index) => {
              return (
                <motion.li
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    duration: 1,
                    delay: 1.5,
                  }}
                  key={index}
                  className="flex flex-col items-start gap-4 mb-4 p-4 bg-indigo-400 rounded-lg shadow-custom-black border-2 border-black"
                >
                  <p className="font-semibold">{agenda}</p>
                  <p className="text-sm">09:00 - 10:00</p>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
        <motion.div
          initial={{ x: '-100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'tween', duration: 1, delay: 1 }}
        >
          <h5 className="font-semibold text-2xl mb-6">
            Frequently Asked Questions
          </h5>
          <ul>
            {data?.details?.faq?.map((faq, index) => {
              return (
                <motion.li
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    duration: 1,
                    delay: 1.5,
                  }}
                  className="flex items-start gap-4 mb-4"
                >
                  <Dropdown
                    label={faq}
                    content={
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    }
                  />
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
        {/* <div>
          <h5 className="font-semibold text-2xl mb-6">Location on Maps</h5>
          <div className="relative md:w-96 w-[90vw] h-56 rounded-xl overflow-clip">
            <div className="absolute md:w-96 w-[90vw] h-56 rounded-xl bg-black opacity-35"></div>
            <img
              src="/images/maps.png"
              alt="gmaps"
              className="md:w-96 w-[90vw] object-cover"
            />
          </div>
        </div> */}
      </main>
      <Footer />
    </div>
  );
}
