import { DateTime } from 'luxon';

export const formatNumber = (balance?: number) => {
  return (balance ?? 0).toLocaleString();
};

export const formatDate = (time: string) => {
  return DateTime.fromISO(time).toFormat('hh:mm:ss dd/MM/yyyy');
};

export const getBase64 = (file: File, callback: Function) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(file);
};
