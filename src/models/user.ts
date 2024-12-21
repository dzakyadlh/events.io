import { Event } from './event';

export default interface User {
  _id: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  image?: string;
  is_host?: boolean;
  is_admin?: boolean;
  wishlist?: Event[];
  registered_events?: Event[];
}
