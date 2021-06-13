export const getCurrentDate = () => {
  const [day, month, date] = new Date().toDateString().split(' ');
  return [day, date, month].join(' ');
};

export const getReadbleTime = seconds => Math.floor(seconds / 60) + ' min';

export const getTimerValues = time => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  minutes = minutes < 0 ? 0 : minutes;
  seconds = seconds <= 0 ? '00' : seconds > 9 ? seconds : '0' + seconds;
  return `${minutes}:${seconds}`;
};
