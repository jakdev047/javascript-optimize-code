const numbers = [1, 2, [3, 4], [5, [6, 7]]];

const flatNumbers = numbers.flat();
const flatNumbers2 = numbers.flat(2);

console.log(flatNumbers);

console.log(flatNumbers2);
