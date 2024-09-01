import moment from 'moment';

export function getCurrentDateTime(date) {
  const now = moment(date);
  const currentDate = String(now.date());
  const month = String(now.month() + 1);
  const year = String(now.year());
  const hour = String(now.hour());
  const seconds = String(now.second());

  const presentDate = `${currentDate.padStart(2, 0)}/${month.padStart(
    2,
    0
  )}/${year}`;
  const meridian = hour >= 12 ? 'PM' : 'AM';
  const presentTime = `${hour.padStart(2, 0)}:${seconds.padStart(
    2,
    0
  )} ${meridian}`;

  return {
    presentDate,
    presentTime,
  };
}

export function getCurrentDate() {
  const date = new Date();

  return date.toDateString();
}
