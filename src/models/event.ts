import User from './user';

export interface Event {
  _id: string;
  title: string;
  start_time: Date;
  end_time: Date;
  location: string;
  poster: string;
  quota: number;
  event_type: string;
  price: number;
  category: string;
  details: EventDetail;
  host: User;
  registered_users: string[];
  slug: string;
}

interface EventDetail {
  speakers: string[];
  description: string;
  keypoints: string[];
  requirements: string[];
  agenda: string[];
  faq: string[];
}
