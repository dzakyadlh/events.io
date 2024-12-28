'use client';

import { useTransaction } from '@/hooks/useTransactions';
import User from '@/models/user';
import { useEffect, useState } from 'react';
import LoadingScreen from '../../loading/loading_screen';
import ErrorAlert from '../../alert/errorAlert';
import Transaction from '@/models/transaction';

const Transactions = ({
  user,
  transactions,
}: {
  user: User;
  transactions: Transaction[];
}) => {
  return (
    <div className="bg-gray-100 w-full min-h-screen flex flex-col p-10 gap-8">
      <h1 className="font-bold text-2xl text-black mb-5">Transactions</h1>
      <section className="w-full flex flex-col gap-5">
        {transactions.length === 0 ? (
          <p className="text-gray-500">No transactions available.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {transactions.map((transaction) => (
              <div
                key={transaction._id}
                className="w-full xl:w-4/5 bg-white hover:bg-indigo-300 flex justify-between items-center p-4 rounded-lg border-2 border-black shadow-custom-black hover:shadow-none transition duration-300"
              >
                <div>
                  <p className="font-medium text-black">
                    {transaction.event_name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(transaction.created_at!).toLocaleDateString()}{' '}
                    &middot; {transaction.payment_method}
                  </p>
                </div>
                <div>
                  <p
                    className={`font-bold text-lg ${
                      transaction.amount! < 0
                        ? 'text-red-500'
                        : 'text-green-500'
                    }`}
                  >
                    {transaction.amount! < 0 ? '-' : '+'}$
                    {Math.abs(transaction.amount!).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Transactions;
