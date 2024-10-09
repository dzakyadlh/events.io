export interface Event {
  _id: string;
  title: string;
  date: Date;
  location: string;
  poster: string;
  quota: number;
  event_type: string;
  price: number;
  host: string;
  category: string;
  details: EventDetail;
}

interface EventDetail {
  speakers: string[];
  description: string;
  keypoints: string[];
  requirements: string[];
  agenda: string[];
  faq: string[];
}
