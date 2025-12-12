
const processDivBy3Cubed = (nums: number[]): number[] => {
    return nums
        .filter((n) => n % 3 === 0)
        .map((n) => n ** 3);
};


const input = [1, 2, 3, 4, 5, 6, 9];
const result = processDivBy3Cubed(input);
console.log(result);
