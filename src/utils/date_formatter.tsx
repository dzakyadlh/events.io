import { format } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

export function ddmmmmyyyy(date: Date) {
  const formattedDate = format(date, 'dd MMMM yyyy');
  return formattedDate;
}

export function dateToHour(date: Date) {
  const formattedHour = format(date, 'hh:mm');
  return formattedHour;
}

export function hourWithTimezone(date: Date, timeZone: string) {
  const formattedHour = formatInTimeZone(date, timeZone, 'hh:mm a');
  const utcOffset = formatInTimeZone(date, timeZone, 'XXX'); // gets the UTC offset
  return `${formattedHour} UTC${utcOffset}`;
}
