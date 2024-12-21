import axiosInstance from '@/api/axiosInstance';
import { useQuery } from '@tanstack/react-query';

export const useGetUser = (user_id: string) => {
  return useQuery({
    queryKey: ['user', user_id],
    queryFn: async () => {
      const res = await axiosInstance.get(`/users/${user_id}`);
      return res.data.data;
    },
  });
};
