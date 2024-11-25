'use client';

import Profile from '@/components/dashboard/profile';
import RegisteredEvents from '@/components/dashboard/registered_events';
import Wishlists from '@/components/dashboard/wishlists';
import Sidebar from '@/components/sidebar/sidebar';
import { User } from '@/models/user';
import api from '@/utils/api';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { CircularLoading } from '@/components/loading/circular_loading';
import { ErrorFetch } from '@/components/error/error_fetch';

const getUser = async (id: string): Promise<User> => {
  const res = await api.get(`users/${id}`);
  console.log(res);
  return res.data.data;
};

const Dashboard = () => {
  const [page, setPage] = useState('Profile');
  const router = useRouter();

  const user_id =
    typeof window !== 'undefined' ? localStorage.getItem('user_id') : null;
  console.log(user_id);

  const { data, error, isLoading, refetch } = useQuery<User, Error>(
    ['user', user_id],
    () => {
      console.log('Calling getUser with user_id:', user_id);
      return getUser(user_id as string);
    },
    { enabled: !!user_id }
  );

  useEffect(() => {
    if (user_id) {
      console.log('User ID available, triggering refetch:', user_id);
      refetch();
    }
  }, [user_id]);

  const renderContent = () => {
    if (data) {
      console.log('data');
      console.log(data);
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
      console.log('loading');
      return <CircularLoading />;
    } else if (error) {
      console.error('Error fetching user data:', error);
      return <ErrorFetch />;
    }
  };

  return (
    <div className="min-h-screen w-screen max-w-[100vw] flex max-sm:flex-col">
      <Sidebar page={page} setPage={setPage} user={data!} />
      <div className="flex-grow max-w-full">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
