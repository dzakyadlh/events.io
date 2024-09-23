'use client';

import Button from '@/components/button';
import Navbar from '@/components/navbar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-full">
      <Navbar />
      <header className="w-full min-h-screen bg-indigo-950 py-32 text-white flex flex-col items-center justify-center">
        <div className="mb-5">
          <h1 className="font-bold text-5xl text-center leading-relaxed">
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
    </div>
  );
}
