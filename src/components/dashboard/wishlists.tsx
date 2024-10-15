'use client';

import { Event } from '@/models/event';
import api from '@/utils/api';
import { useRouter } from 'next/navigation';
import { useQuery } from 'react-query';
import { Card } from '../card/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadCry, faFaceSadTear } from '@fortawesome/free-solid-svg-icons';

const user = JSON.parse(localStorage.getItem('user')!);

const getWishlists = async () => {
  const res = await api.get('/wishlists');
  return res.data;
};

const Wishlists = () => {
  const router = useRouter;

  const { data, error, isLoading } = useQuery<Event[]>(
    'wishlists',
    getWishlists
  );

  return (
    <main className="w-full min-h-screen p-10 gap-8 flex flex-col">
      <div>
        <h1 className="font-bold text-2xl text-black">Your Wishlists</h1>
      </div>
      <section className="w-full flex flex-grow flex-wrap items-center justify-center gap-5">
        {data && data?.length > 0 ? (
          data?.map((wishlist, index) => (
            <Card event={wishlist} key={index} className="w-48 h-72" />
          ))
        ) : (
          <div className="w-3/5 h-full flex flex-col">
            <FontAwesomeIcon icon={faFaceSadCry} className="text-9xl mb-10" />
            <p className="text-black text-center">
              You don't have any wishlisted events. Go back to events page to
              find some!
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Wishlists;
