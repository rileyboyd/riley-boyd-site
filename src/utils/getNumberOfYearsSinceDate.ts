export const getNumberOfYearsSinceDate = (dateString: string): number => {
  const now = new Date();
  const [year, month, day] = dateString.split("-");
  const inputDate = new Date(
    Date.UTC(Number(year), Number(month) - 1, Number(day.substring(0, 2)))
  );

  const years = now.getUTCFullYear() - inputDate.getUTCFullYear();

  // Calculate month and day differences
  const monthDifference = now.getUTCMonth() - inputDate.getUTCMonth();

  // Check if the current month is before the input month or if we are in the same month, check if the current day is before the input day
  const isCurrentMonthBeforeInputDateMonth = monthDifference < 0;

  const isCurrentDayBeforeInputDateDay =
    monthDifference === 0 && now.getUTCDate() < inputDate.getUTCDate();

  // If the input date is in the future, return -1
  if (
    years < 0 ||
    (years === 0 && isCurrentMonthBeforeInputDateMonth) ||
    (years === 0 &&
      isCurrentMonthBeforeInputDateMonth &&
      isCurrentDayBeforeInputDateDay)
  ) {
    return -1;
  }

  // If the current date hasn't reached the input date yet this year, subtract 1
  if (isCurrentMonthBeforeInputDateMonth || isCurrentDayBeforeInputDateDay) {
    return years - 1;
  }

  return years;
};
