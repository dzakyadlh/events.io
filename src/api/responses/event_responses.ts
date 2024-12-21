import { Event } from '@/models/event';

export interface EventsResponse {
  message: string;
  data: Event[];
  totalPage: number | null;
  currentPage: number | null;
}

export interface EventResponse {
  message: string;
  data: Event;
}
