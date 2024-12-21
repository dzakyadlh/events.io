'use client';

import { useRouter } from 'next/navigation';
import { Card } from '../card/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadCry, faFaceSadTear } from '@fortawesome/free-solid-svg-icons';
import User from '@/models/user';

interface WishlistsProps {
  user: User;
}

const Wishlists = ({ user }: WishlistsProps) => {
  const router = useRouter;

  const wishlists = user.wishlist;

  return (
    <main className="w-full min-h-screen p-10 gap-8 flex flex-col">
      <div>
        <h1 className="font-bold text-2xl text-black">Your Wishlists</h1>
      </div>
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 place-items-center">
        {wishlists && wishlists?.length > 0 ? (
          wishlists?.map((wishlist, index) => (
            <Card event={wishlist} key={index} />
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
