import axiosInstance from '@/api/axiosInstance';
import { Event } from '@/models/event';
import { useQuery } from '@tanstack/react-query';

const fetchEvent = async (id: string): Promise<Event> => {
  const res = await axiosInstance.get(`/events/${id}`);
  return res.data.data;
};

export const useEvent = (id: string) => {
  return useQuery({
    queryKey: ['event', id],
    queryFn: () => fetchEvent(id),
  });
};
