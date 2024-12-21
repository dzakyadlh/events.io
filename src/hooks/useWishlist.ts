import axiosInstance from '@/api/axiosInstance';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useAddWishlist = async (
  user_id: string,
  event_id: string,
  token: string
) => {
  return useMutation({
    mutationKey: ['addWishlist', user_id, event_id, token],
    mutationFn: async () => {
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
      return res.data;
    },
  });
};

export const useRemoveWishlist = async (
  user_id: string,
  event_id: string,
  token: string
) => {
  return useMutation({
    mutationKey: ['removeWishlist', user_id, event_id, token],
    mutationFn: async (data: {
      user_id: string;
      event_id: string;
      token: string;
    }) => {
      const { user_id, event_id, token } = data;
      const res = await axiosInstance.delete(`/users/${user_id}/wishlist`, {
        data: { event_id },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    },
  });
};

export const getWishlist = async (user_id: string, token: string) => {
  return useQuery({
    queryKey: ['wishlist', user_id, token],
    queryFn: async () => {
      const res = await axiosInstance.get(`/users/${user_id}/wishlist`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data.data;
    },
  });
};
