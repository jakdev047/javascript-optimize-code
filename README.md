# Javascript

_Tips For Professional_
_Inpired by Manjurhusain Datardi_
_LinkedIn:_ [manjurhusen](https://www.linkedin.com/in/manjurhusen/)

## Table of Contents

1. [Use proper variable names](#usepropervariablenames)
1. [Be careful with comparison using the loose equality operator](#Becarefulwithcomparisonusingthelooseequalityoperator)

## Use proper variable names

```javascript
const firstName = "Jubayer";
const lastName = "Khan";
```

## Be careful with comparison using the loose equality operator

```javascript
const looseComparison1 = [100] == 100; // true
const tightsComparison1 = [100] === 100; // false

const looseComparison2 = "100" == 100; // true
const tightsComparison2 = "100" === 100; // false

const looseComparison3 = [] == 0; // true
const tightsComparison3 = [] === 0; // false

const looseComparison4 = "" == false; // true
const tightsComparison4 = "" === false; // false

const looseComparison5 = "" == 0; // true
const tightsComparison5 = "" === 0; // false

const looseComparison6 = false == 0; // true
const tightsComparison6 = false === 0; // false

const looseComparison7 = null == undefined; // true
const tightsComparison7 = null === undefined; // false
```
