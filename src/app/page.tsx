'use client';

import { CustomButton } from '@/components/button/button';
import { Footer } from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEvents } from '@/hooks/useEvents';
import LoadingScreen from '@/components/loading/loading_screen';
import { Carousel } from '@/components/carousel/events_carousel';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      offset: 100, // offset from the viewport
    });
    AOS.refresh();
  }, []);

  const { data: events, isLoading, error } = useEvents();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <header
        data-aos="fade-up"
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
        <CustomButton
          className="mt-10 px-10"
          onClick={() => {
            router.push('/events');
          }}
        >
          Browse Now
        </CustomButton>
      </header>
      {/* <section className="hidden relative md:flex flex-col align-middle justify-center">
        <Carousel slides={slides} className="absolute bottom-50" />
      </section> */}
      <section
        data-aos="fade-up"
        className="flex flex-col align-middle justify-center py-20 gap-10"
      >
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
      <section
        data-aos="fade-up"
        className="bg-indigo-100 flex max-sm:flex-col items-center justify-center px-10 py-20 gap-20"
      >
        <div className="w-full sm:w-1/4">
          <h2 className="font-bold text-black text-4xl leading-relaxed">
            Level Up Your Skills
          </h2>
          <p className="text-lg mb-4">
            We curate a wide variety of cutting-edge seminars, webinars, and
            workshops, all aimed at helping you!
          </p>
        </div>
        <div className="w-full sm:w-1/3 flex-col">
          <div className="w-2/3 bg-white rounded-xl p-5 border-2 border-black shadow-custom-black mb-5">
            <h5 className="font-semibold text-xl leading-relaxed">
              Expert-Led Contents
            </h5>
            <p>
              Our events are curated and led by industry experts, ensuring you
              gain cutting-edge insights and actionable knowledge that make a
              real impact.
            </p>
          </div>
          <div className="w-2/3 bg-white rounded-xl p-5 border-2 border-black shadow-custom-black mb-5 ml-auto">
            <h5 className="font-semibold text-xl leading-relaxed">
              Diverse Learning Opportunities
            </h5>
            <p>
              We offer a wide array of events, from hands-on workshops to
              thought-provoking webinars, tailored to different skill levels and
              interests in technology.
            </p>
          </div>
          <div className="w-2/3 bg-white rounded-xl p-5 border-2 border-black shadow-custom-black mb-5">
            <h5 className="font-semibold text-xl leading-relaxed">
              Flexible and Accessible
            </h5>
            <p>
              With both virtual and in-person events, we bring learning to your
              doorstep, so you can enhance your skills from anywhere at any
              time.
            </p>
          </div>
          <div className="w-2/3 bg-white rounded-xl p-5 border-2 border-black shadow-custom-black ml-auto">
            <h5 className="font-semibold text-xl leading-relaxed">
              Community-Focused
            </h5>
            <p>
              At Events.io, we believe in growing together. Our platform is
              designed to build a supportive, engaged community of learners and
              professionals driven to succeed.
            </p>
          </div>
        </div>
      </section>
      <section
        data-aos="fade-up"
        className="bg-slate-100 py-24 flex flex-col justify-center"
      >
        <div className="mx-10">
          <p className="font-semibold text-xl mb-4">Grow Today</p>
          <h2 className="font-bold text-black text-3xl">Featured Events</h2>
        </div>
        <Carousel cardItems={events || []} />
      </section>
      <section
        data-aos="fade-up"
        className="bg-white py-24 flex max-md:flex-col align-middle justify-center max-md:items-center gap-10"
      >
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
          <CustomButton
            onClick={() => {
              router.push('/events');
            }}
            children="Read more"
          />
        </div>
      </section>
      <section
        data-aos="fade-up"
        className="md:w-[40vw] bg-white md:py-24 pb-24 flex flex-wrap align-middle justify-center mx-auto md:gap-10 gap-5 px-5"
      >
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
