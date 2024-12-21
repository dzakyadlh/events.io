import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/api/axiosInstance';
import { EventsResponse } from '@/api/responses/event_responses';
import { Event } from '@/models/event';

const fetchEvents = async (
  category?: string,
  searchTerm?: string
): Promise<Event[]> => {
  const params = new URLSearchParams();
  if (category) params.append('category', category);
  if (searchTerm) params.append('searchTerm', searchTerm);
  if (!category && !searchTerm) {
    const res = await axiosInstance.get(`/events`);
    return res.data.data;
  }
  console.log(`/events?${params.toString()}`);
  const res = await axiosInstance.get(`/events?${params.toString()}`);
  return res.data.data;
};

export const useEvents = (category?: string, searchTerm?: string) => {
  return useQuery({
    queryKey: ['events', category, searchTerm],
    queryFn: () => fetchEvents(category, searchTerm),
  });
};
