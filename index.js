const empoyeeTwo = {
  id: 1,
  name: "Jubayer Alam Khan",
  salary: 500,
};
delete empoyeeTwo.salary;

console.log("empoyeeTwo", empoyeeTwo);

const { salary, ...newEmployee } = empoyeeTwo;

console.log("newEmployee", newEmployee);
