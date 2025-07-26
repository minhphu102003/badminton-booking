export const formatDateRangeString = (
  date: string,
  hour: string,
  ampm: 'AM' | 'PM',
  duration: number,
) => {
  const startHour = parseInt(hour, 10);
  const isPM = ampm === 'PM';

  const start24 =
    isPM && startHour !== 12 ? startHour + 12 : ampm === 'AM' && startHour === 12 ? 0 : startHour;
  const end24 = (start24 + duration) % 24;

  const format12Hour = (h24: number) => {
    const suffix = h24 >= 12 ? 'PM' : 'AM';
    const hour12 = h24 % 12 === 0 ? 12 : h24 % 12;
    return `${hour12} ${suffix}`;
  };

  const startStr = format12Hour(start24);
  const endStr = format12Hour(end24);

  const dateObj = new Date(date);
  const dateStr = dateObj.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  });

  return `${dateStr} ${startStr} - ${endStr}`;
};

export function formatJoinDate(dateString?: string): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    month: 'short',
    year: 'numeric',
  });
}
