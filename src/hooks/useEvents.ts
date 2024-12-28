import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/api/axiosInstance';
import { Event } from '@/models/event';

const fetchEvents = async (
  category?: string,
  searchTerm?: string
): Promise<Event[]> => {
  const params = new URLSearchParams();
  if (category) params.append('category', category);
  if (searchTerm) params.append('title', searchTerm);
  if (!category && !searchTerm) {
    const res = await axiosInstance.get(`/events`);
    return res.data.data;
  }
  const res = await axiosInstance.get(`/events?${params.toString()}`);
  return res.data.data;
};

export const useEvents = (category?: string, searchTerm?: string) => {
  return useQuery({
    queryKey: ['events', category, searchTerm],
    queryFn: () => fetchEvents(category, searchTerm),
  });
};

const fetchEventsByHost = async (host_id: string): Promise<Event[]> => {
  const token = JSON.parse(localStorage.getItem('events.io_user')!)[
    'token'
  ] as string;
  const res = await axiosInstance.get(`/events/host/${host_id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data.data;
};

export const useHostEvents = (host_id: string) => {
  return useQuery({
    queryKey: ['host_events', host_id],
    queryFn: () => fetchEventsByHost(host_id),
  });
};
