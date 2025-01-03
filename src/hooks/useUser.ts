import axiosInstance from '@/api/axiosInstance';
import User from '@/models/user';
import { useQuery } from '@tanstack/react-query';

const fetchUser = async (): Promise<User> => {
  const user = localStorage.getItem('events.io_user');
  const user_id = JSON.parse(user!)['id'];
  const res = await axiosInstance.get(`/users/${user_id}`);
  return res.data.data;
};

export const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => fetchUser(),
  });
};

const fetchUserById = async (user_id: string): Promise<User> => {
  const res = await axiosInstance.get(`/users/${user_id}`);
  return res.data.data;
};

export const useUserById = (user_id: string) => {
  return useQuery({
    queryKey: ['user', user_id],
    queryFn: async () => fetchUserById(user_id),
  });
};
