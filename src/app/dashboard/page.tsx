'use client';

import Profile from '@/components/dashboard/profile';
import RegisteredEvents from '@/components/dashboard/registered_events/registered_events';
import Wishlists from '@/components/dashboard/wishlists';
import Sidebar from '@/components/sidebar/sidebar';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/loading/loading_screen';
import { ErrorFetch } from '@/components/error/error_fetch';
import { useUser } from '@/hooks/useUser';
import Wallet from '../../components/dashboard/wallet';
import ManageEvents from '@/components/dashboard/manage_events';

const Dashboard = () => {
  const [page, setPage] = useState('Profile');
  const router = useRouter();

  // Fetch user data using React Query
  const { data, isLoading, error } = useUser();

  const renderContent = () => {
    if (isLoading) return <LoadingScreen />;
    if (error) {
      console.error('Error fetching user data:', error);
      return <ErrorFetch />;
    }
    if (data) {
      switch (page) {
        case 'Profile':
          return <Profile user={data} />;
        case 'Registered Events':
          return <RegisteredEvents user={data} />;
        case 'Wishlists':
          return <Wishlists user={data} />;
        case 'Manage Events':
          return <ManageEvents user={data} />;
        case 'Wallet':
          return <Wallet user={data} />;
        case 'Back to Home':
          router.push('/');
          break;
        default:
          return <div>Invalid Page</div>;
      }
    }
    return null; // Fallback
  };

  return (
    <div className="min-h-screen w-full flex max-md:flex-col">
      {data && <Sidebar page={page} setPage={setPage} user={data} />}
      <div className="flex-grow w-full">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
