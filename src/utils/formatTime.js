export const formatTime = seconds => {
  if (typeof seconds !== 'number' || seconds < 0) {
    return null;
  }

  const addZero = time => {
    return time < 10 ? '0' + time : time;
  };

  let secs = Math.floor(seconds % 60);
  let mins = Math.floor((seconds / 60) % 60);
  let hrs = Math.floor(seconds / 3600);

  return `${addZero(hrs)}:${addZero(mins)}:${addZero(secs)}`;
};