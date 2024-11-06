export const getNumberOfYearsSinceDate = (dateString: string): number => {
  const now = new Date();
  const startedWorking = new Date("2011-07-11T00:00:00");

  return Math.floor(
    (now.getTime() - startedWorking.getTime()) / 1000 / 60 / 60 / 24 / 365
  );
};
