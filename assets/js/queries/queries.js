// Imports
const pg = require("pg");
const Client = pg.Client;

// Database client information
const client = new Client({
  user: "postgres",
  password: "Elefant3",
  host: "localhost",
  port: 5432,
  database: "company",
});

// Gets all the departments from the database
async function getAllDepartments() {
  // Connects to the database
  await client.connect();

  // SELECT query
  const query = await client.query("SELECT * FROM departments");
  // Displays data
  console.log(query.rows);

  // Disconnects from the database
  await client.end();
}

// Gets all the roles from the database
async function getAllRoles() {
  // Connects to the database
  await client.connect();

  // SELECT query
  const query = await client.query("SELECT * FROM roles");
  // Displays data
  console.log(query.rows);

  // Disconnects from the database
  await client.end();
}

// Gets all employees from the database
async function getAllEmployees() {
  // Connects to the database
  await client.connect();

  // SELECT query
  const query = await client.query("SELECT * FROM employees");
  // Displays data
  console.log(query.rows);

  // Disconnects from the database
  await client.end();
}

// Adds a department to the database
async function addDepartment(name) {
  // Connects to the database
  await client.connect();

  // INSERT query
  await client.query(`INSERT INTO departments (name) VALUES ($1)`, [name]);

  // Disconnects from the database
  await client.end();
}

// Adds a role to the database
async function addRole(title, salary, departmentId) {
  // Connects to the database
  await client.connect();

  // INSERT query
  await client.query(
    `INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3)`,
    [title, salary, departmentId]
  );

  // Disconnects from the database
  await client.end();
}

// Adds a employee to the database
async function addEmployee(firstName, lastName, roleId, managerId) {
  // Connects to the database
  await client.connect();

  // INSERT query
  await client.query(
    `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`,
    [firstName, lastName, roleId, managerId]
  );

  // Disconnects from the database
  await client.end();
}

// Updates the role of an employee
async function updateEmployeeRole(id, newRoleId) {
  // Connects to the database
  await client.connect();

  // INSERT query
  await client.query(`UPDATE employees SET role_id = $1 WHERE id = $2`, [
    newRoleId,
    id,
  ]);

  // Disconnects from the database
  await client.end();
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
