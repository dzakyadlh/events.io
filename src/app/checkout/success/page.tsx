'use client';

import { CustomButton } from '@/components/button/button';
import { Footer } from '@/components/footer/footer';
import LoadingScreen from '@/components/loading/loading_screen';
import Navbar from '@/components/navbar/navbar';
import { useEvent } from '@/hooks/useEvent';
import {
  dateToHour,
  ddmmmmyyyy,
  hourWithTimezone,
} from '@/utils/date_formatter';
import { numberWithCommas } from '@/utils/number_formatter';
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter, useSearchParams } from 'next/navigation';

const CheckoutSuccess = () => {
  const router = useRouter();
  const event_id = useSearchParams().get('event_id');

  const { data: event, error, isLoading } = useEvent(event_id!);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-10 text-white bg-slate-900">
      <Navbar />
      <header className="text-3xl font-bold text-center mt-32 leading-normal">
        Congratulations!
        <br />
        Your Payment Has Been Approved.
      </header>
      <main className="flex flex-col gap-10 items-center justify-center">
        <section className="flex flex-col lg:flex-row gap-10 items-center justify-center px-5">
          <img
            src="/images/event1.png"
            alt="event poster"
            className="rounded-lg w-full lg:w-1/3"
          />
          <div className="flex flex-col gap-5 w-full lg:w-1/3">
            <h2 className="font-semibold text-xl">{event?.title}</h2>
            <li className="flex gap-5">
              <FontAwesomeIcon icon={faLocationDot} className="text-lg" />
              <p className="font-light">{event?.location}</p>
            </li>
            <li className="flex gap-5">
              <FontAwesomeIcon icon={faClock} className="text-lg" />
              <p className="font-light">
                {dateToHour(event?.start_time!)} -{' '}
                {hourWithTimezone(event?.end_time!, 'Asia/Jakarta')}
              </p>
            </li>
            <li className="flex gap-5">
              <FontAwesomeIcon icon={faCalendar} className="text-lg" />
              <p className="font-light">{ddmmmmyyyy(event?.start_time!)}</p>
            </li>
            <p className="font-bold text-2xl">
              Rp. {numberWithCommas(event?.price!)}
            </p>
          </div>
        </section>
        <section className="w-full lg:w-2/3 flex flex-col gap-5 items-center px-5">
          <h2 className="text-lg">Payment Method</h2>
          <ul className="w-full flex flex-col gap-2">
            <li>Prowallet</li>
            <li className="flex items-center justify-between">
              <p>Account Name:</p>
              <p>Rei Mizuki</p>
            </li>
            <li className="flex items-center justify-between">
              <p>Total Amount:</p>
              <p>$15</p>
            </li>
            <li className="flex items-center justify-between">
              <p>Date:</p>
              <p>18 September 2024</p>
            </li>
            <li className="text-blue-400">Download Receipt</li>
          </ul>
        </section>
        <section className="w-full lg:w-2/3 flex flex-col gap-5 px-5">
          <CustomButton
            onClick={() => {
              router.replace('/dashboard');
            }}
            children="Go to Dashboard"
            className="justify-center"
          />
          <p className="text-center">
            Put your event schedult on Google Calendar to make sure that you
            don't miss it.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutSuccess;
