// src/function13.ts
const add = (a: number, b: number): number => {
    return a + b;
}

const result = add(1, 2) + 0;
console.log(result, 'type of result:', typeof result);

const findMax = (nums: number[]): string => {
    if (nums.length === 0) return '';
    const max = Math.max(...nums);
    return String(max);
}

const maxStr = findMax([3, 7, 2, 1]);
console.log('max as string:', maxStr, 'type:', typeof maxStr);
