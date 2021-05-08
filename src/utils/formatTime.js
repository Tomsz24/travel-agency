export const formatTime = seconds => {
  if (typeof seconds !== 'number' || seconds < 0) {
    return null;
  }

  let secs = Math.floor(seconds % 60);
  let mins = Math.floor((seconds / 60) % 60);
  let hrs = Math.floor(seconds / 3600);

  return `${hrs}:${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;
};