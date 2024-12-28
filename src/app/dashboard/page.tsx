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
import Transactions from '@/components/dashboard/transactions/transactions';
import { useTransaction } from '@/hooks/useTransactions';

const Dashboard = () => {
  const [page, setPage] = useState('Profile');
  const router = useRouter();

  // Fetch user data using React Query
  const { data: user, isLoading: userLoading, error: userError } = useUser();
  const {
    data: transaction,
    isLoading: transactionLoading,
    error: transactionError,
  } = useTransaction(1);

  const renderContent = () => {
    if (userLoading || transactionLoading) return <LoadingScreen />;
    if (userError) {
      console.error('Error fetching user data:', userError);
      return <ErrorFetch />;
    }
    if (transactionError) {
      console.error('Error fetching user data:', transactionError);
      return <ErrorFetch />;
    }
    if (user && transaction) {
      switch (page) {
        case 'Profile':
          return <Profile user={user} />;
        case 'Registered Events':
          return <RegisteredEvents user={user} />;
        case 'Wishlists':
          return <Wishlists user={user} />;
        case 'Manage Events':
          return <ManageEvents user={user} />;
        case 'Wallet':
          return <Wallet user={user} />;
        case 'Transactions':
          return <Transactions user={user} transactions={transaction} />;
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
      {user && <Sidebar page={page} setPage={setPage} user={user} />}
      <div className="flex-grow w-full">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
