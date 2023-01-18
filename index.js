const colors = ["red", "green", "blue", "pink", "red", "green"];
const numbers = [1, 2, 4, 5, 2, 4, 9, 11, 4, 11];

const uniqueColors = [...new Set(colors)];
const uniqueNumbers = [...new Set(numbers)];

console.log("colors", uniqueColors);
console.log("numbers", uniqueNumbers);
