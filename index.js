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
