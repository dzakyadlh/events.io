import axiosInstance from '@/api/axiosInstance';
import { useMutation } from '@tanstack/react-query';

export const useSignIn = () => {
  return useMutation({
    mutationKey: ['signIn'],
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      const res = await axiosInstance.post(
        '/auth/login',
        { email: email, password: password },
        { headers: { 'Content-Type': 'application/json' } }
      );
      localStorage.setItem('events.io_user', JSON.stringify(res.data.data));
      return res.data;
    },
  });
};

export const useSignUp = () => {
  return useMutation({
    mutationKey: ['signUp'],
    mutationFn: async ({
      firstName,
      lastName,
      email,
      password,
    }: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    }) => {
      const res = await axiosInstance.post(
        '/auth/register',
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
        },
        { headers: { 'Content-Type': 'application/json' } }
      );
      return res.data;
    },
  });
};
