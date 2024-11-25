'use client';

import Button from '@/components/button/button';
import PaymentCard from '@/components/card/payment_card';
import { ErrorFetch } from '@/components/error/error_fetch';
import { CircularLoading } from '@/components/loading/circular_loading';
import Navbar from '@/components/navbar/navbar';
import { Event } from '@/models/event';
import { User } from '@/models/user';
import api from '@/utils/api';
import {
  dateToHour,
  ddmmmmyyyy,
  hourWithTimezone,
} from '@/utils/date_formatter';
import {
  faCalendar,
  faClock,
  faLocationDot,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useQueries, useQuery } from 'react-query';

const getUser = async (id: string) => {
  const res = await api.get(`/user/${id}`);
  return res.data.data;
};

const getEvent = async (id: string) => {
  const res = await api.get(`/events/${id}`);
  return res.data.data;
};

const paymentMethod = ['Mastercard', 'Visa', 'Paypal'];

const Checkout = () => {
  const [payment, setPayment] = useState<string | null>(null);
  const [active, setActive] = useState(false);
  const router = useRouter();
  const event_id = useSearchParams().get('event_id');

  const user_id =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('user') || '{}').id
      : null;

  const {
    data: user,
    error: userError,
    isLoading: userLoading,
  } = useQuery<User, Error>(
    ['user', user_id],
    () => getUser(user_id as string),
    { enabled: !!user_id }
  );

  const {
    data: event,
    error: eventError,
    isLoading: eventLoading,
  } = useQuery<Event, Error>(
    ['event', event_id],
    () => getEvent(event_id as string),
    { enabled: !!event_id }
  );

  if (userLoading || eventLoading)
    return (
      <div className="w-screen h-screen">
        <CircularLoading />
      </div>
    );

  if (userError || eventError)
    return (
      <div className="w-screen h-screen">
        <ErrorFetch />
      </div>
    );

  const handlePaymentMethod = (name: string) => {
    setPayment(name);
  };

  const handlePayment = () => {
    if (payment) {
      router.push(`checkout/success`);
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <div className="w-screen min-h-screen flex flex-col items-center gap-10 text-white bg-slate-900">
      <Navbar />
      <header className="text-3xl font-bold text-center mt-[8%]">
        Invest In Yourself Now
      </header>
      <main className="flex flex-col gap-10 items-center justify-center">
        <section className="flex gap-10 items-center justify-center">
          <img
            src="/images/event1.png"
            alt="event poster"
            className="rounded-lg w-1/3"
          />
          <div className="flex flex-col gap-5 w-1/3">
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
            <p className="font-bold text-2xl">Rp. {event?.price}</p>
          </div>
        </section>
        <section className="flex flex-col w-2/3 gap-5 items-center">
          <h2 className="text-lg">Payment Method</h2>
          <div className="flex flex-wrap gap-5 justify-center">
            {paymentMethod.map((method, index) => {
              return (
                <PaymentCard
                  key={index}
                  name={method}
                  balance={15000000}
                  icon={`/images/${method}.png`}
                  active={payment == method}
                  onClick={() => handlePaymentMethod(method)}
                />
              );
            })}
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <Button
            onClick={handlePayment}
            children="Pay Now"
            className="justify-center"
          />
          <p>
            <span>
              <FontAwesomeIcon icon={faShieldHalved} className="mr-2" />
            </span>
            Your payment is secure and encrypted
          </p>
        </section>
      </main>
    </div>
  );
};

export default Checkout;
