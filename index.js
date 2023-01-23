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
