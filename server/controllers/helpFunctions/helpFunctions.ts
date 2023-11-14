function isWeekend(eventDate: Date): boolean {
  const currentDate = new Date();
  const daysUntilWeekend = 6 - currentDate.getDay();
  const nearestWeekendStartDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + daysUntilWeekend);
  const nearestWeekendEndDate = new Date(
    nearestWeekendStartDate.getFullYear(),
    nearestWeekendStartDate.getMonth(),
    nearestWeekendStartDate.getDate() + 1,
  );

  return eventDate >= nearestWeekendStartDate && eventDate < nearestWeekendEndDate;
}

function isSameMonth(eventDate: Date): boolean {
  const currentDate = new Date();
  const eventMonth = new Date(eventDate).getMonth();
  const currentMonth = currentDate.getMonth();
  return eventMonth === currentMonth;
}

function isSameWeek(eventDate: Date): boolean {
  const currentDate = new Date();
  const eventWeek = Math.floor((eventDate.getTime() - new Date(currentDate.getFullYear(), 0, 1).getTime()) / (7 * 24 * 60 * 60 * 1000));
  const currentWeek = Math.floor((currentDate.getTime() - new Date(currentDate.getFullYear(), 0, 1).getTime()) / (7 * 24 * 60 * 60 * 1000));
  return eventWeek === currentWeek;
}

export { isWeekend, isSameMonth, isSameWeek };
