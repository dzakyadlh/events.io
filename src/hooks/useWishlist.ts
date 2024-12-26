import axiosInstance from '@/api/axiosInstance';
import { useMutation } from '@tanstack/react-query';

export const useAddWishlist = () => {
  return useMutation({
    mutationKey: ['addWishlist'],
    mutationFn: async ({ event_id }: { event_id: string }) => {
      const user = JSON.parse(localStorage.getItem('events.io_user')!);
      const user_id = user['id'];
      const token = user['token'];
      const res = await axiosInstance.post(
        `/users/${user_id}/wishlist`,
        { event_id: event_id },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return true;
    },
  });
};

export const useRemoveWishlist = () => {
  return useMutation({
    mutationKey: ['removeWishlist'],
    mutationFn: async ({ event_id }: { event_id: string }) => {
      const user = JSON.parse(localStorage.getItem('events.io_user')!);
      const user_id = user['id'];
      const token = user['token'];
      const res = await axiosInstance.delete(`/users/${user_id}/wishlist`, {
        data: { event_id },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return true;
    },
  });
};
