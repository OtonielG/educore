const MINUTE_IN_MILLISECONDS = 60_000;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;

export function formatElapsedTime(createdAt: number, currentTime: number) {
  const elapsedMilliseconds = Math.max(currentTime - createdAt, 0);
  const elapsedMinutes = Math.floor(
    elapsedMilliseconds / MINUTE_IN_MILLISECONDS,
  );

  if (elapsedMinutes < 1) {
    return "Ahora";
  }

  if (elapsedMinutes < MINUTES_IN_HOUR) {
    return `Hace ${elapsedMinutes} min`;
  }

  const elapsedHours = Math.floor(elapsedMinutes / MINUTES_IN_HOUR);

  if (elapsedHours < HOURS_IN_DAY) {
    return `Hace ${elapsedHours} h`;
  }

  const elapsedDays = Math.floor(elapsedHours / HOURS_IN_DAY);
  const remainingHours = elapsedHours % HOURS_IN_DAY;

  return remainingHours === 0
    ? `Hace ${elapsedDays} d`
    : `Hace ${elapsedDays} d ${remainingHours} h`;
}
