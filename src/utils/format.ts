export const formatOutput = (value: number): string => {
  return `Result: ${value}`;
};

export const formatArray = <T>(items: T[]): string => {
  return items.map((item) => String(item)).join(', ');
};
