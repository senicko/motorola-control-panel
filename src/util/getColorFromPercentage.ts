export const getColorFromPercentage = (percentage: number): string => {
  if (percentage < 0) percentage = 0;
  if (percentage > 100) percentage = 100;
  return `hsl(${percentage}, 100%, 50%)`;
};
