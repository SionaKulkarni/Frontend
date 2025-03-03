const sum = (numbers: number[]): number => numbers.reduce((acc, num) => acc + num, 0);

// Example usage
console.log(sum([1, 2, 3, 4, 5]));