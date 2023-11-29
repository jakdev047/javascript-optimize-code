// let's do some interesting stuff with JS
// 1. let's create a variable
const name = "John Doe";
// 2. let's create a function
function sayHello(name) {
  console.log(`Hello ${name}`);
}

sayHello(name);
// 3. let's create a class
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello ${this.name}`);
  }
}

const person = new Person(name);

person.sayHello();
