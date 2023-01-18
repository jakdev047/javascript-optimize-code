# Javascript

_Tips For Professional_
_Inpired by Manjurhusain Datardi_
_LinkedIn:_ [manjurhusen](https://www.linkedin.com/in/manjurhusen/)

## Table of Contents

1. [Use proper variable names](#usepropervariablenames)
1. [Be careful with comparison using the loose equality operator](#becarefulwithcomparisonusingthelooseequalityoperator)
1. [Check property exists in an object](#checkpropertyexistsinanobject)
1. [Conditionally add a property to an object](#conditionallyaddapropertytoanobject)

## <a name="usepropervariablenames">Use proper variable names</a>

```javascript
const firstName = "Jubayer";
const lastName = "Khan";
```

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

## <a name="conditionallyaddapropertytoanobject">Conditionally add a property to an object</a>

```javascript
const includeSalary = true;
const employee = {
  id: 1,
  name: "Jubayer",
  ...(includeSalary && {salary: })
};
```
