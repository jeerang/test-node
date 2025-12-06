export const findMax = (nums: number[]): string => {
  if (nums.length === 0) return "";
  const max = nums.reduce((m, n) => (n > m ? n : m), Number.NEGATIVE_INFINITY);
  return String(max);
};