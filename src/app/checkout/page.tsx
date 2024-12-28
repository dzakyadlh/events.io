'use client';

import ErrorAlert from '@/components/alert/errorAlert';
import { CustomButton } from '@/components/button/button';
import PaymentCard from '@/components/card/payment_card';
import { ErrorFetch } from '@/components/error/error_fetch';
import { Footer } from '@/components/footer/footer';
import LoadingScreen from '@/components/loading/loading_screen';
import Navbar from '@/components/navbar/navbar';
import { useEvent } from '@/hooks/useEvent';
import { useRegisterEvent } from '@/hooks/useRegisterEvent';
import { useAddTransaction } from '@/hooks/useTransactions';
import { useUser } from '@/hooks/useUser';
import api from '@/utils/api';
import {
  dateToHour,
  ddmmmmyyyy,
  hourWithTimezone,
} from '@/utils/date_formatter';
import { numberWithCommas } from '@/utils/number_formatter';
import {
  faCalendar,
  faClock,
  faLocationDot,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';

const paymentMethod = ['Mastercard', 'Visa', 'Paypal'];

const Checkout = () => {
  const [payment, setPayment] = useState<string | null>(null);
  const [error, setError] = useState('');
  const router = useRouter();
  const event_id = useSearchParams().get('event_id');

  const { mutate: registerEvent, isPending: registerPending } =
    useRegisterEvent();
  const { mutate: addTransaction, isPending: transactionPending } =
    useAddTransaction();

  const {
    data: event,
    error: eventError,
    isLoading: eventLoading,
  } = useEvent(event_id!);
  const { data: user, error: userError, isLoading: userLoading } = useUser();

  if (userLoading || eventLoading) return <LoadingScreen />;

  if (userError || eventError)
    return (
      <div className="w-screen h-screen">
        <ErrorFetch />
      </div>
    );

  const handlePaymentMethod = (name: string) => {
    setPayment(name);
  };

  const handlePayment = async () => {
    if (payment) {
      addTransaction(
        {
          amount: event?.price!,
          payment_method: payment,
          payment_account_number: '123456789',
          event_name: event?.title!,
          event_host: event?.host._id!,
        },
        {
          onSuccess: (transactionData) => {
            sessionStorage.setItem(
              'transactionData',
              JSON.stringify(transactionData)
            );
            registerEvent(
              { event_id: event?._id! },
              {
                onSuccess: () => {
                  router.push(`checkout/success?event_id=${event?._id}`);
                },
                onError: (error) => {
                  console.log(error);
                  setError(error?.message);
                  return;
                },
              }
            );
          },
          onError: (error) => {
            console.log(error);
            setError(error?.message);
            return;
          },
        }
      );
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-10 text-white bg-slate-900">
      <Navbar />
      <header className="text-3xl font-bold text-center mt-[8%]">
        Invest In Yourself Now
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
        <section className="w-full lg:w-3/4 flex flex-col gap-5 items-center px-5">
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
        <section className="w-full lg:w-2/3 flex flex-col items-center gap-5 px-5">
          <CustomButton
            onClick={handlePayment}
            children={
              registerPending || transactionPending ? (
                <ClipLoader color="#6366f1" loading={true} size={24} />
              ) : (
                'Pay Now'
              )
            }
            className="justify-center w-full"
          />
          <p>
            <span>
              <FontAwesomeIcon icon={faShieldHalved} className="mr-2" />
            </span>
            Your payment is secure and encrypted
          </p>
        </section>
      </main>
      {error && <ErrorAlert message={error} />}
      <Footer />
    </div>
  );
};

export default Checkout;
