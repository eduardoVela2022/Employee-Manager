// Imports
const { client } = require("./client");

// Gets all the names of the departments from the database
async function getDepartmentNames() {
  // Stores the names of the departments
  const data = [];

  // SELECT query
  const query = await client.query("SELECT name FROM departments");
  // Adds names to the empty list
  query.rows.forEach((department) => data.push(department.name));

  // List of names is returned
  return data;
}

// Gets all the titles of the roles from the database
async function getRoleTitles() {
  // Stores the titles of the roles
  const data = [];

  // SELECT query
  const query = await client.query("SELECT title FROM roles");
  // Adds titles to the empty list
  query.rows.forEach((role) => data.push(role.title));

  // List of titles is returned
  return data;
}

// Gets all the names of the employees from the database
async function getEmployeeNames() {
  // Stores the names of the employees
  const data = [];

  // SELECT query
  const query = await client.query(
    "SELECT first_name, last_name FROM employees"
  );
  // Adds names to the empty list
  query.rows.forEach((employee) =>
    data.push(`${employee.first_name} ${employee.last_name}`)
  );

  // List of names is returned
  return data;
}

// Gets all the names of the managers of the employees from the database
async function getEmployeeManagerNames() {
  // Stores the names of the managers of the employees
  const data = [];

  // SELECT query
  const query = await client.query(
    "SELECT first_name, last_name FROM employees WHERE role_id = 4;"
  );
  // Adds names to the empty list
  query.rows.forEach((employee) =>
    data.push(`${employee.first_name} ${employee.last_name}`)
  );

  // List of names is returned
  return data;
}

// Exports
module.exports = {
  getDepartmentNames,
  getRoleTitles,
  getEmployeeNames,
  getEmployeeManagerNames,
};
