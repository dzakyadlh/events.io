'use client';

import Button from '@/components/button/button';
import { Card, Carousel } from '@/components/card/card';
import { Footer } from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import api from '@/utils/api';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useQuery } from 'react-query';

const getEvents = async () => {
  const res = await api.get('/events');
  return res.data; // Ensure to return the data from the response
};

export default function Home() {
  const router = useRouter();

  const { data: events, error, isLoading } = useQuery('events', getEvents);

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
    <div className="min-h-full w-screen max-w-[100vw] bg-white">
      <Navbar />
      <header
        className="w-full h-[90vh] bg-slate-900 text-white flex flex-col items-center justify-center px-5"
        style={{
          backgroundImage: 'url("./images/team_management.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      >
        <div className="mb-5">
          <h1 className="font-bold text-5xl max-md:text-4xl text-center leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-300 drop-shadow-xl">
            Expand Your Knowledge <br className="max-md:hidden"></br> by Joining
            Our Greatest Events
          </h1>
        </div>
        <p className="font-medium md:text-xl text-center drop-shadow-xl">
          We offer a diverse range of top-notch events designed to
          <br className="md:block hidden"></br>
          enhance your skills in the technology field.
        </p>
        <Button
          className="mt-10 px-10"
          onClick={() => {
            router.push('/events');
          }}
        >
          Browse Now
        </Button>
      </header>
      {/* <section className="hidden relative md:flex flex-col align-middle justify-center">
        <Carousel slides={slides} className="absolute bottom-50" />
      </section> */}
      <section className="flex flex-col align-middle justify-center py-20 gap-10">
        <p className="text-gray-600 text-center font-medium mid:text-1.5xl text-sm">
          Events held and approved by top companies
        </p>
        <div className="flex align-middle justify-center md:gap-10 gap-4 flex-wrap">
          <img src="./images/apple.png" alt="apple" className="md:w-40 w-24" />
          <img src="./images/adobe.png" alt="apple" className="md:w-40 w-24" />
          <img src="./images/slack.png" alt="apple" className="md:w-40 w-24" />
          <img
            src="./images/spotify.png"
            alt="apple"
            className="md:w-40 w-24"
          />
          <img src="./images/google.png" alt="apple" className="md:w-40 w-24" />
        </div>
      </section>
      <section className="bg-slate-100 py-24 flex flex-col justify-center">
        <div className="mx-10">
          <p className="font-semibold text-xl mb-4">Grow Today</p>
          <h2 className="font-bold text-black text-3xl">Featured Events</h2>
        </div>
        <Carousel cardItems={events.data || []} />
      </section>
      <section className="bg-white py-24 flex max-md:flex-col align-middle justify-center max-md:items-center gap-10">
        <div className="relative">
          <img
            src="./images/girl.png"
            alt="girl"
            className="md:h-[30rem] h-96 rounded-3xl border-4 border-black"
          />
          <div className="absolute hidden md:flex flex-col p-4 rounded-3xl bg-white gap-8 -bottom-10 -left-20 border-2 border-black">
            <div className="flex gap-3">
              <img src="./images/figma.png" alt="figma" className="w-12" />
              <div className="flex flex-col">
                <h3 className="font-semibold">Learn Figma</h3>
                <p className="text-gray-500 text-sm">UI Design</p>
              </div>
            </div>
            <div>
              <div className="flex gap-2">
                <img src="./images/star.png" alt="star" className="w-5" />
                <img src="./images/star.png" alt="star" className="w-5" />
                <img src="./images/star.png" alt="star" className="w-5" />
                <img src="./images/star.png" alt="star" className="w-5" />
                <img src="./images/star.png" alt="star" className="w-5" />
              </div>
              <p className="font-semibold text-black text-md">12.5k joined</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 md:max-w-[30vw] justify-center px-5">
          <div>
            <p className="leading-snug font-semibold text-xl">Story</p>
            <p className="leading-snug font-semibold text-4xl">
              One Great Event
            </p>
            <p className="leading-snug font-semibold text-4xl">
              For The Better World
            </p>
          </div>
          <p>
            Read story about how Shayna managed to create a startup that helped
            more than 100,000 people to receive supplies during pandemic
          </p>
          <Button
            onClick={() => {
              router.push('/events');
            }}
            children="Read more"
          />
        </div>
      </section>
      <section className="md:w-[40vw] bg-white md:py-24 pb-24 flex flex-wrap align-middle justify-center mx-auto md:gap-10 gap-5 px-5">
        <div className="flex flex-col">
          <p className="font-semibold text-black text-3xl leading-relaxed text-center">
            190K+
          </p>
          <p className="text-gray text-md text-gray-500">Events Created</p>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-black text-3xl leading-relaxed text-center">
            3M+
          </p>
          <p className="text-gray text-md text-gray-500">People Joined</p>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-black text-3xl leading-relaxed text-center">
            5K+
          </p>
          <p className="text-gray text-md text-gray-500">Success Startups</p>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-black text-3xl leading-relaxed text-center">
            113K+
          </p>
          <p className="text-gray text-md text-gray-500">Top Speakers</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
