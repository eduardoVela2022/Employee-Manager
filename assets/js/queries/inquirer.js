// Imports
const { client } = require("./client");

// Gets all the departments from the database
async function getAllDepartments() {
  // SELECT query
  const query = await client.query("SELECT * FROM departments");
  // Displays data
  console.log(query.rows);
}

// Gets all the roles from the database
async function getAllRoles() {
  // SELECT query
  const query = await client.query("SELECT * FROM roles");
  // Displays data
  console.log(query.rows);
}

// Gets all employees from the database
async function getAllEmployees() {
  // SELECT query
  const query = await client.query("SELECT * FROM employees");
  // Displays data
  console.log(query.rows);
}

// Adds a department to the database
async function addDepartment(name) {
  // INSERT query
  await client.query(`INSERT INTO departments (name) VALUES ($1)`, [name]);
}

// Adds a role to the database
async function addRole(title, salary, departmentId) {
  // INSERT query
  await client.query(
    `INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3)`,
    [title, salary, departmentId]
  );
}

// Adds a employee to the database
async function addEmployee(firstName, lastName, roleId, managerId) {
  // INSERT query
  await client.query(
    `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`,
    [firstName, lastName, roleId, managerId]
  );
}

// Updates the role of an employee
async function updateEmployeeRole(id, newRoleId) {
  // INSERT query
  await client.query(`UPDATE employees SET role_id = $1 WHERE id = $2`, [
    newRoleId,
    id,
  ]);
}

// Exports
module.exports = {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
};
