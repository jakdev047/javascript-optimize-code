const employee = {
  id: 1,
  name: "Jubayer Alam Khan",
  salary: 500,
};
const format = JSON.stringify(employee, null, 2);

console.log(format);
