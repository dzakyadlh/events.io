import axiosInstance from '@/api/axiosInstance';
import Transaction from '@/models/transaction';
import { useMutation, useQuery } from '@tanstack/react-query';

const fetchTransactionByUserId = async (
  page: number
): Promise<Transaction[]> => {
  const user_id = JSON.parse(localStorage.getItem('events.io_user')!)['id'];
  const res = await axiosInstance.get(`/transactions/${user_id}?page=${page}`);
  return res.data.data;
};

export const useTransaction = (page: number) => {
  return useQuery({
    queryKey: ['transaction', page],
    queryFn: async () => fetchTransactionByUserId(page),
  });
};

export const useAddTransaction = () => {
  return useMutation({
    mutationKey: ['addTransaction'],
    mutationFn: async ({
      amount,
      payment_method,
      payment_account_number,
      event_name,
      event_host,
    }: {
      amount: number;
      payment_method: string;
      payment_account_number: string;
      event_name: string;
      event_host: string;
    }) => {
      const user_id = JSON.parse(localStorage.getItem('events.io_user')!)['id'];
      const token = JSON.parse(localStorage.getItem('events.io_user')!)[
        'token'
      ];
      const res = await axiosInstance.post(
        '/transactions',
        {
          userId: user_id,
          amount: amount,
          paymentMethod: payment_method,
          paymentAccountNumber: payment_account_number,
          eventName: event_name,
          eventHost: event_host,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data.data;
    },
  });
};
