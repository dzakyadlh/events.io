'use client';

import Profile from '@/components/dashboard/profile';
import RegisteredEvents from '@/components/dashboard/registered_events';
import Wishlists from '@/components/dashboard/wishlists';
import Sidebar from '@/components/sidebar/sidebar';
import { User } from '@/models/user';
import api from '@/utils/api';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { CircularLoading } from '@/components/loading/circular_loading';
import { ErrorFetch } from '@/components/error/error_fetch';

const getUser = async (id: string) => {
  const res = await api.get(`users/${id}`);
  return res.data.data;
};

const Dashboard = () => {
  const [page, setPage] = useState('Profile');
  const router = useRouter();

  const user_id =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('user') || '{}').id
      : null;

  const { data, error, isLoading } = useQuery<User, Error>(
    ['user', user_id],
    () => getUser(user_id as string),
    { enabled: !!user_id }
  );

  const renderContent = () => {
    if (data) {
      switch (page) {
        case 'Profile':
          return <Profile user={data} />;
        case 'Registered Events':
          return <RegisteredEvents user={data!} />;
        case 'Wishlists':
          return <Wishlists user={data!} />;
        case 'Back to Home':
          router.push('/');
        default:
          return <div></div>;
      }
    } else if (isLoading) {
      return <CircularLoading />;
    } else if (error) {
      return <ErrorFetch />;
    }
  };

  return (
    <div className="min-h-screen w-screen max-w-[100vw] flex max-sm:flex-col">
      <Sidebar page={page} setPage={setPage} />
      <div className="flex-grow max-w-full">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
