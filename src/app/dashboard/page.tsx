'use client';

import Profile from '@/components/dashboard/profile';
import RegisteredEvents from '@/components/dashboard/registered_events';
import Wishlists from '@/components/dashboard/wishlists';
import Sidebar from '@/components/sidebar/sidebar';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const user = JSON.parse(localStorage.getItem('user')!);

const Dashboard = () => {
  const [page, setPage] = useState('Profile');
  const router = useRouter();

  const renderContent = () => {
    switch (page) {
      case 'Profile':
        return <Profile />;
      case 'Registered Events':
        return <RegisteredEvents />;
      case 'Wishlists':
        return <Wishlists />;
      case 'Back to Home':
        router.push('/');
      default:
        return <div></div>;
    }
  };

  return (
    <div className="min-h-screen w-screen max-w-[100vw] flex items-center">
      <Sidebar page={page} setPage={setPage} />
      <div className="flex-grow">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
