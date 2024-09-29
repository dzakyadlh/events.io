'use client';

import Button from '@/components/button/button';
import { Footer } from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { useRouter } from 'next/navigation';
import React from 'react';

const Events = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen w-screen box-border bg-white overflow-hidden">
      <Navbar />
      <header className="w-full min-h-screen flex flex-col items-center justify-center bg-slate-900 gap-10 py-40">
        <img
          src="./images/design_seminar.png"
          alt="thumbnail"
          className="w-[60vw] rounded-xl shadow-custom-black"
        />
        <div className="w-[60vw] flex justify-between relative">
          <div className="w-[60%]">
            <h1 className="font-semibold text-5xl leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-300">
              Start Your Design Career <br />
              With Design Sprint
            </h1>
          </div>

          <div className="absolute w-80 flex flex-col px-5 py-8 rounded-3xl bg-white gap-5 -bottom-25 -right-24 border-2 border-black">
            <p className="text-black font-semibold text-xl">Your Speaker</p>
            <div className="flex gap-3">
              <img src="./images/girlpp.png" alt="figma" className="w-12" />
              <div className="flex flex-col">
                <h3 className="font-semibold">Rei Kazuki</h3>
                <p className="text-gray-500 text-sm">UI Designer</p>
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
                    src="./images/location.png"
                    alt="icon"
                    className="w-8 h-8"
                  />
                  <p className="text-black font-medium text-md">
                    Events.io Ballroom, Tokyo
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <img src="./images/time.png" alt="icon" className="w-8 h-8" />
                  <p className="text-black font-medium text-md">
                    15.00 PM UTC+8
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <img src="./images/date.png" alt="icon" className="w-8 h-8" />
                  <p className="text-black font-medium text-md">
                    1 December 2024
                  </p>
                </div>
              </div>
            </div>
            <Button
              onClick={() => {
                router.push('/events');
              }}
              children="Join Now"
            />
          </div>
        </div>
      </header>
      <main className="w-[60vw] flex flex-col text-black px-40 py-20 gap-10">
        <div>
          <h5 className="font-semibold text-2xl mb-6">Event Details</h5>
          <p className="text-black leading-loose">
            Most realtors and investors are using Social Media (Facebook and
            Google) ineffectively because they don't know what they're doing or
            to start. They spend hours and hours trying different things and
            getting nowhere. This makes them feel like giving up on marketing
            altogether.
            <br />
            <br />
          </p>
          <p className="text-black leading-loose">
            We are a group of professionals who have decided to help people
            making travel experiences whenever they want and wherever they are.
            Our virtual tours have as their topic the beauties of the ancient
            world, such as Ancient Egypt or Ancient Rome, Art and History.
          </p>
        </div>
        <div>
          <h5 className="font-semibold text-2xl mb-6">Keypoints</h5>
          <ul>
            <li className="flex items-start gap-4 mb-4">
              <img
                src="./images/check.png"
                alt="checklist"
                className="w-7 h-7"
              />
              <p>
                Hours trying different things and getting nowhere makes them
                feel like giving up on marketing altogether.
              </p>
            </li>
            <li className="flex items-start gap-4 mb-4">
              <img
                src="./images/check.png"
                alt="checklist"
                className="w-7 h-7"
              />
              <p>
                Hours trying different things and getting nowhere makes them
                feel like giving up on marketing altogether.
              </p>
            </li>
            <li className="flex items-start gap-4 mb-4">
              <img
                src="./images/check.png"
                alt="checklist"
                className="w-7 h-7"
              />
              <p>
                Hours trying different things and getting nowhere makes them
                feel like giving up on marketing altogether.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-2xl mb-6">Location on Maps</h5>
          <div className="relative w-96 h-56 rounded-xl overflow-clip">
            <div className="absolute w-96 h-56 rounded-xl bg-black opacity-35"></div>
            <img
              src="./images/maps.png"
              alt="gmaps"
              className="w-96 object-cover"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
