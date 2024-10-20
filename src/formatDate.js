export default function formatDate(dateString) {
  const newDate = new Date(dateString);
  const optionsDay = { day: "numeric" };
  const optionsWeekday = { weekday: "short" };

  const weekdayFormatter = new Intl.DateTimeFormat("en-US", optionsWeekday);
  const dayFormatter = new Intl.DateTimeFormat("en-US", optionsDay);

  return `${weekdayFormatter.format(newDate)} ${dayFormatter.format(newDate)}`;
}
