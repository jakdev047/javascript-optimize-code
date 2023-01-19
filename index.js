const numbersWithFalsyValue = [7, null, 10, 17, false, NaN];
const validNaumbers = numbersWithFalsyValue.filter(Boolean);
console.log(validNaumbers);
