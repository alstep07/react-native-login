export const getCurrentDate = () => {
  const [day, month, date] = new Date().toDateString().split(' ');
  return [day, date, month].join(' ');
};

export const getReadbleTime = seconds => Math.floor(seconds / 60) + ' min';
