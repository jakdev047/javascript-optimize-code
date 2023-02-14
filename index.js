const employee = { id: 1, name: "Jubayer Alam Khan" };

if (!employee.salary) {
  console.error("Salary not defined.");
}

console.assert(employee.salary, "Salary not defined.");
