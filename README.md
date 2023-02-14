# Javascript

_Tips For Professional_
_Inpired by Manjurhusain Datardi_
_LinkedIn:_ [manjurhusen](https://www.linkedin.com/in/manjurhusen/)

## Table of Contents

1. [Use proper variable names](#usepropervariablenames)
1. [Be careful with comparison using the loose equality operator](#becarefulwithcomparisonusingthelooseequalityoperator)
1. [Check property exists in an object](#checkpropertyexistsinanobject)
1. [Conditionally add a property to an object](#conditionallyaddapropertytoanobject)
1. [Use includes to check for multiple criteria](#useincludestocheckformultiplecriteria)
1. [Remove duplicates from an array using Set](#removeduplicatesfromanarrayusingset)
1. [Use spread operator to shallow copy arrays and objects](#usespreadoperatortoshallowcopyarraysandobjects)
1. [Avoid delete keyword](#avoiddeletekeyword)
1. [Use Array.isArray to determine the array](#usearrayisarraytodeterminethearray)
1. [Use of falsy bouncer](#useoffalsybouncer)
1. [Use Array.some to check occurrence in array](#usearraysometocheckoccurrenceinarray)
1. [Readable numbers](#readablenumbers)
1. [Pass function arguments as an object](#passfunctionargumentsasanobject)
1. [Object destructuring on arrays](#objectdestructuringonarrays)
1. [Skip values in array destructuring](#skipvaluesinarraydestructuring)
1. [Format the output of JSON.stringify](#formattheoutputofjsonstringify)
1. [Filter with JSON.stringify](#filterwithjsonstringify)
1. [Power of JSON.stringify replacer parameter](#powerofjsonstringifyreplacerparameter)
1. [Don’t extend built-ins](#dontextendbuiltins)
1. [Use of optional chaining on function call](#useofoptionalchainingonfunctioncall)
1. [Convert to a flat array using Array.flat](#converttoaflatarrayusingarrayflat)
1. [Use console.time to debug performance](#useconsoletimetodebugperformance)
1. [Logging using console.group](#loggingusingconsolegroup)
1. [Conditional log message using console.assert](#conditionallogmessageusingconsoleassert)
1. [Default assignment for required arguments of the function](#defaultassignmentforrequiredargumentsofthefunction)

## <a name="usepropervariablenames">Use proper variable names</a>

```javascript
const firstName = "Jubayer";
const lastName = "Khan";
```

**[⬆ back to top](#table-of-contents)**

## <a name="becarefulwithcomparisonusingthelooseequalityoperator">Be careful with comparison using the loose equality operator</a>

```javascript
const looseComparison1 = [100] == 100; // true
const tightComparison1 = [100] === 100; // false

const looseComparison2 = "100" == 100; // true
const tightComparison2 = "100" === 100; // false

const looseComparison3 = [] == 0; // true
const tightComparison3 = [] === 0; // false

const looseComparison4 = "" == false; // true
const tightComparison4 = "" === false; // false

const looseComparison5 = "" == 0; // true
const tightComparison5 = "" === 0; // false

const looseComparison6 = false == 0; // true
const tightComparison6 = false === 0; // false

const looseComparison7 = null == undefined; // true
const tightComparison7 = null === undefined; // false
```

**[⬆ back to top](#table-of-contents)**

## <a name="checkpropertyexistsinanobject">Check property exists in an object</a>

```javascript
const employee = {
  id: 1,
  name: "Jubayer",
  salary: 5000,
};

const isSalaryExist = "salary" in employee; // true
const isGenderExist = "gender" in employee; // false
```

**[⬆ back to top](#table-of-contents)**

## <a name="conditionallyaddapropertytoanobject">Conditionally add a property to an object</a>

```javascript
const includeSalary = true;
const employee = {
  id: 1,
  name: "Jubayer",
  ...(includeSalary && { salary: 500 }),
};
```

**[⬆ back to top](#table-of-contents)**

## <a name="useincludestocheckformultiplecriteria">Use includes to check for multiple criteria</a>

```javascript
const rgbColors = ["red", "green", "blue"];
const isRgbColor = (color) => {
  return rgbColors.includes(color);
};
```

**[⬆ back to top](#table-of-contents)**

## <a name="removeduplicatesfromanarrayusingset">Remove duplicates from an array using Set</a>

```javascript
const colors = ["red", "green", "blue", "pink", "red", "green"];
const numbers = [1, 2, 4, 5, 2, 4, 9, 11, 4, 11];

const uniqueColors = [...new Set(colors)]; // ["red","green","blue","pink"]
const uniqueNumbers = [...new Set(numbers)]; // [1,2,4,5,9,11]
```

**[⬆ back to top](#table-of-contents)**

## <a name="usespreadoperatortoshallowcopyarraysandobjects">Use spread operator to shallow copy arrays and objects</a>

```javascript
const scores = [10, 20, 40, 60];
const empoyeeOne = {
  id: 1,
  name: "Jubayer Alam Khan",
};

const newScores = [...scores];
const newEmpoyeeOne = { ...empoyeeOne };
```

**[⬆ back to top](#table-of-contents)**

## <a name="avoiddeletekeyword">Avoid delete keyword</a>

- `Bad Practice`

```javascript
const empoyeeTwo = {
  id: 1,
  name: "Jubayer Alam Khan",
  salary: 500,
};
delete empoyeeTwo.salary;
// { id: 1, name: 'Jubayer Alam Khan' }
```

- `Good Practice`

```javascript
const { salary, ...newEmployee } = empoyeeTwo;
// { id: 1, name: 'Jubayer Alam Khan' }
```

**[⬆ back to top](#table-of-contents)**

## <a name="usearrayisarraytodeterminethearray">Use Array.isArray to determine the array</a>

```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbers)); // true
const age = 18;
console.log(Array.isArray(age)); // false
const empoyee = {
  id: 1,
  name: "Jubayer Alam Khan",
  salary: 500,
};
console.log(Array.isArray(empoyee)); // false
```

**[⬆ back to top](#table-of-contents)**

## <a name="useoffalsybouncer">Use of falsy bouncer</a>

- `Falsy values in javascript are false, null, 0, "", NaN, undefined`

```javascript
const numbersWithFalsyValue = [7, null, 10, 17, false, NaN];
const validNaumbers = numbersWithFalsyValue.filter(Boolean);
console.log(validNaumbers); // [ 7, 10, 17 ]
```

**[⬆ back to top](#table-of-contents)**

## <a name="usearraysometocheckoccurrenceinarray">Use Array.some to check occurrence in array</a>

- `Bad Practice`

```javascript
const assets = [
  { id: 1, title: "V-1", type: "video" },
  { id: 2, title: "A-1", type: "audio" },
];

const hasVideoAsset = assets.find((asset) => asset.type === "video");

console.log(Boolean(hasVideoAsset)); // true
```

- `Good Practice`

```javascript
const hasVideoAsset = assets.some((asset) => asset.type === "video");

console.log(hasVideoAsset); // true
```

**[⬆ back to top](#table-of-contents)**

## <a name="readablenumbers">Readable numbers</a>

- `Bad Practice`

```javascript
const largeNumber = 45000000000;

console.log(largeNumber); // 45000000000
```

- `Good Practice`

```javascript
const largeNumber = 45_000_000_000;

console.log(largeNumber); // 45_000_000_000

const largeNumber = 45e9;

console.log(largeNumber); // 45e9
```

**[⬆ back to top](#table-of-contents)**

## <a name="passfunctionargumentsasanobject">Pass function arguments as an object</a>

- `Bad Practice`

```javascript
const createProduct = (name, price, categoryId, brandId) => {
  // code to create product
};
createProduct("Product-1", 500, 1, 1);
```

- `Good Practice`

```javascript
const createProduct = ({ name, price, categoryId, brandId }) => {
  // code to create product
};
createProduct({
  name: "Product-1",
  price: 500,
  categoryId: 1,
  brandId: 1,
});
```

**[⬆ back to top](#table-of-contents)**

## <a name="objectdestructuringonarrays">Object destructuring on arrays</a>

```javascript
const colorCodes = ["#FFFFFF", "#000000", "#FF0000", "#FFFF00"];
const { 0: whiteColor, 1: blackColor } = colorCodes;

console.log(whiteColor); // #FFFFFF
console.log(blackColor); // #000000
```

**[⬆ back to top](#table-of-contents)**

## <a name="skipvaluesinarraydestructuring">Skip values in array destructuring</a>

```javascript
const scores = [10, 20, 30, 40, 50];
const [, , ...restScores] = scores;

console.log(restScores); // [ 30, 40, 50 ]
```

**[⬆ back to top](#table-of-contents)**

## <a name="formattheoutputofjsonstringify">Format the output of JSON.stringify</a>

- `Bad Practice`

```javascript
const employee = {
  id: 1,
  name: "Jubayer Alam Khan",
  salary: 500,
};
const format = JSON.stringify(employee);

console.log(format); // {"id":1,"name":"Jubayer Alam Khan","salary":500}
```

- `Good Practice`

```javascript
const format = JSON.stringify(employee, null, 2);

console.log(format);
/*
  {
    "id": 1,
    "name": "Jubayer Alam Khan",
    "salary": 500
  }
*/
```

**[⬆ back to top](#table-of-contents)**

## <a name="filterwithjsonstringify">Filter with JSON.stringify</a>

```javascript
const employee = {
  id: 1,
  name: "Jubayer Alam Khan",
  salary: 500,
  address: {
    policeStation: "Jatrabari",
    district: "Dhaka",
    division: "Dhaka",
  },
};

const filters = ["name", "salary", "address", "district"];

const filterEmployee = JSON.stringify(employee, filters, 2);

console.log(filterEmployee);
/*
  {
    "name": "Jubayer Alam Khan",
    "salary": 500,
    "address": {
      "district": "Dhaka"
    }
  }
*/
```

**[⬆ back to top](#table-of-contents)**

## <a name="powerofjsonstringifyreplacerparameter">Power of JSON.stringify replacer parameter</a>

```javascript
const employee = {
  id: 1,
  name: "Jubayer Alam Khan",
  salary: 500,
};

const doubleSalary = (key, value) => {
  return key === "salary" ? value * 2 : value;
};

const filterEmployee = JSON.stringify(employee, doubleSalary, 2);

console.log(filterEmployee);
/*
  {
    "id": 1,
    "name": "Jubayer Alam Khan",
    "salary": 1000
  }
*/
```

**[⬆ back to top](#table-of-contents)**

## <a name="dontextendbuiltins">Don’t extend built-ins</a>

```javascript
// array-utils.js
export const eventCount = (list) => {
  return list.reduce((count, number) => count + (number % 2 === 0 ? 1 : 0), 0);
};

// import from array-utils.js
const numbers = [1, 4, 7, 10, 20];

const even = eventCount(numbers);

console.log(even); // 3
```

**[⬆ back to top](#table-of-contents)**

## <a name="useofoptionalchainingonfunctioncall">Use of optional chaining on function call</a>

- `Bad Practice`

```javascript
const loadingFunc = () => {
  console.log("Loading..."); // "Loading..."
};
const loadFunction = (loadingFunc) => {
  if (loadingFunc) {
    loadingFunc();
  }
};

loadFunction(loadingFunc);
```

- `Bad Practice`

```javascript
const loadingFunc = () => {
  console.log("Loading..."); // "Loading..."
};
const loadFunction = (loadingFunc) => {
  loadingFunc && loadingFunc();
};

loadFunction(loadingFunc);
```

- `Good Practice`

```javascript
const loadingFunc = () => {
  console.log("Loading..."); // "Loading..."
};
const loadFunction = (loadingFunc) => {
  loadingFunc?.();
};

loadFunction(loadingFunc);
```

**[⬆ back to top](#table-of-contents)**

## <a name="converttoaflatarrayusingarrayflat">Convert to a flat array using Array.flat</a>

```javascript
const numbers = [1, 2, [3, 4], [5, [6, 7]]];

const flatNumbers = numbers.flat();
const flatNumbers2 = numbers.flat(2);

console.log(flatNumbers); // [ 1, 2, 3, 4, 5, [ 6, 7 ] ]

console.log(flatNumbers2); // [ 1, 2, 3, 4, 5, 6, 7 ]
```

**[⬆ back to top](#table-of-contents)**

## <a name="useconsoletimetodebugperformance">Use console.time to debug performance</a>

```javascript
const label = "ForLoop";
console.time(label);

const list = [];
for (let i = 0; i <= 5; i++) {
  list.push(`Item-${i}`);
}
console.log(`List Length: ${list.length}`); // List Length: 6

console.timeEnd(label); // 0.127ms
```

**[⬆ back to top](#table-of-contents)**

## <a name="loggingusingconsolegroup">Logging using console.group</a>

```javascript
console.group("Video");

console.log("Video Uploaded");
console.log("Video Validated");
console.log("Video published");

console.groupEnd();
```

**[⬆ back to top](#table-of-contents)**

## <a name="conditionallogmessageusingconsoleassert">Conditional log message using console.assert</a>

- `Bad Practice`

```javascript
const employee = { id: 1, name: "Jubayer Alam Khan" };

if (!employee.salary) {
  console.error("Salary not defined.");
}
```

- `Good Practice`

```javascript
console.assert(employee.salary, "Salary not defined.");
```

**[⬆ back to top](#table-of-contents)**

## <a name="defaultassignmentforrequiredargumentsofthefunction">Default assignment for required arguments of the function</a>

```javascript
const isRequired = () => {
  throw Error("Argument is required");
};

const setCurrentVideoCode = (videoCode = isRequired()) => {
  console.log(videoCode);
};

setCurrentVideoCode(); // Argument is required
setCurrentVideoCode(""); //
setCurrentVideoCode(null); // null
setCurrentVideoCode("VD098"); // VD098
```

**[⬆ back to top](#table-of-contents)**
