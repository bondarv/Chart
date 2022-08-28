export const getNewValue = (value: number): number => {
  const newValue = +(Math.random() * 10).toFixed(1);
  return newValue === value ? getNewValue(value) : newValue;
};
