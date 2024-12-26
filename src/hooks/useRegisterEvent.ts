import axiosInstance from '@/api/axiosInstance';
import { useMutation } from '@tanstack/react-query';

export const useRegisterEvent = () => {
  return useMutation({
    mutationKey: ['registerEvent'],
    mutationFn: async ({ event_id }: { event_id: string }) => {
      const user = localStorage.getItem('events.io_user');
      if (!user) {
        return false;
      }
      const user_id = JSON.parse(user!)['id'];
      const token = JSON.parse(user!)['token'];
      const res = await axiosInstance.post(
        `/users/${user_id}/register-event`,
        { event_id: event_id },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    },
  });
};
