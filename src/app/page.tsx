'use client';

import Button from '@/components/button/button';
import { Card, CardList } from '@/components/card/card';
import Carousel from '@/components/carousel/carousel';
import { Footer } from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { EmblaOptionsType } from 'embla-carousel';
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

  const cardItems = [
    {
      title: 'Learn Jira for Sprint Design Venture',
      category: 'Product Design',
      date: 'Bandung, 22 Jan 2022',
      image: './images/event1.png',
    },
    {
      title: 'Team Management for Long Term',
      category: 'Product Design',
      date: 'Jakarta, 11 Aug 2022',
      image: './images/event2.png',
    },
    {
      title: 'Set Marketing Target for Saas',
      category: 'Product Design',
      date: 'Bandung, 22 Jan 2022',
      image: './images/event3.png',
    },
    {
      title: 'Google Adsense from Zero to Big Bucks',
      category: 'Product Design',
      date: 'Jakarta, 11 Aug 2022',
      image: './images/event4.png',
    },
    {
      title: 'Learn Jira for Sprint Design Venture',
      category: 'Product Design',
      date: 'Bandung, 22 Jan 2022',
      image: './images/event1.png',
    },
    {
      title: 'Team Management for Long Term',
      category: 'Product Design',
      date: 'Jakarta, 11 Aug 2022',
      image: './images/event2.png',
    },
    {
      title: 'Set Marketing Target for Saas',
      category: 'Product Design',
      date: 'Bandung, 22 Jan 2022',
      image: './images/event3.png',
    },
    {
      title: 'Google Adsense from Zero to Big Bucks',
      category: 'Product Design',
      date: 'Jakarta, 11 Aug 2022',
      image: './images/event4.png',
    },
  ];

  return (
    <div className="min-h-full max-w-screen bg-white overflow-hidden">
      <Navbar />
      <header className="w-full h-[90vh] bg-slate-900 text-white flex flex-col items-center justify-center">
        <div className="mb-5">
          <h1 className="font-bold text-5xl text-center leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-300">
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
      <section className="bg-slate-100 py-24 flex flex-col justify-center gap-10">
        <div className="mx-10">
          <p className="font-semibold text-xl mb-4">Grow Today</p>
          <h2 className="font-bold text-black text-3xl">Featured Events</h2>
        </div>
        <CardList cardItems={cardItems} />
      </section>
      <section className="bg-white py-24 flex align-middle justify-center gap-10">
        <div className="relative">
          <img
            src="./images/girl.png"
            alt="girl"
            className="h-[30rem] rounded-3xl border-4 border-black"
          />
          <div className="absolute flex flex-col p-4 rounded-3xl bg-white gap-8 -bottom-10 -left-20 border-2 border-black">
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
        <div className="flex flex-col gap-5 max-w-[30vw] justify-center">
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
      <section className="w-[40vw] bg-white py-24 flex align-middle justify-between mx-auto">
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
