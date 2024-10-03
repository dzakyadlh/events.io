import { format } from 'date-fns';

export function ddmmmmyyyy(date: Date) {
  const formattedDate = format(date, 'dd MMMM yyyy');
  return formattedDate;
}

export function dateToHour(date: Date) {
  const hour = format(date, 'HH');
  return hour;
}
