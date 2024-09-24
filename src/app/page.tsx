'use client';

import Button from '@/components/button/button';
import { Card } from '@/components/card/card';
import Carousel from '@/components/carousel/carousel';
import Navbar from '@/components/navbar/navbar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Home() {
  const router = useRouter();

  const slides = [
    {
      src: './images/design_seminar.png',
      title: 'Start Design Sprint',
      date: 'Jakarta, 20 Mei 2022',
      joined: '120K joined',
    },
    {
      src: './images/public_speaking.jpg',
      title: 'Public Speaking Seminar',
      date: 'Bandung, 10 Aug 2022',
      joined: '80K joined',
    },
    {
      src: './images/team_management.jpg',
      title: 'Team Management Training',
      date: 'Surabaya, 5 Sep 2022',
      joined: '90K joined',
    },
    {
      src: './images/public_speaking.jpg',
      title: 'Public Speaking Seminar',
      date: 'Bandung, 10 Aug 2022',
      joined: '80K joined',
    },
    {
      src: './images/team_management.jpg',
      title: 'Team Management Training',
      date: 'Surabaya, 5 Sep 2022',
      joined: '90K joined',
    },
  ];
  return (
    <div className="min-h-full bg-white">
      <Navbar />
      <header className="w-full h-[90vh] bg-indigo-950 text-white flex flex-col items-center justify-center">
        <div className="mb-5">
          <h1 className="font-bold text-5xl text-center leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-red-500">
            Expand Your Knowledge <br></br> by Joining Our Greatest Events
          </h1>
        </div>
        <p className="font-medium text-xl text-center">
          We offer a diverse range of top-notch events designed to<br></br>
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
      <section className="relative flex flex-col align-middle justify-center">
        <Carousel slides={slides} className="absolute bottom-50" />
      </section>
      <section className="flex flex-col align-middle justify-center mt-48 py-20 gap-10">
        <p className="text-gray-600 text-center font-medium text-1.5xl">
          Events held and approved by top companies
        </p>
        <div className="flex align-middle justify-center gap-10">
          <img src="./images/apple.png" alt="apple" className="w-40" />
          <img src="./images/adobe.png" alt="apple" className="w-40" />
          <img src="./images/slack.png" alt="apple" className="w-40" />
          <img src="./images/spotify.png" alt="apple" className="w-40" />
          <img src="./images/google.png" alt="apple" className="w-40" />
        </div>
      </section>
      <section className="bg-indigo-300 p-10 flex flex-col justify-center gap-10">
        <h2 className="font-semibold text-black text-3xl">Featured Events</h2>
        <Card
          title="Test"
          category="test"
          date="2 October"
          image="./images/design_seminar.png"
        />
      </section>
    </div>
  );
}
