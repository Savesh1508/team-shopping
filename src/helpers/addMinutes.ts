export function AddMinutesToDate(date: Date, minutes: number) {
  return new Date(date.getTime() + minutes * 120 * 2000);
}
