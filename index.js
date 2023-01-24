// array-utils.js
export const eventCount = (list) => {
  return list.reduce((count, number) => count + (number % 2 === 0 ? 1 : 0), 0);
};

// import from array-utils.js
const numbers = [1, 4, 7, 10, 20];

const even = eventCount(numbers);

console.log(even);
