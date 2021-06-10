export const getCurrentDate = () => {
  const [day, month, date] = new Date().toDateString().split(' ');
  return [day, date, month].join(' ');
};
