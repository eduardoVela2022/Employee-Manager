// Imports
const { connectToDatabase, disconnectFromDatabase } = require("./pool");

// Gets all the departments from the database
async function getAllDepartments() {
  // Connects client to database
  const client = await connectToDatabase();

  // SELECT query
  const query = await client.query("SELECT * FROM departments");

  // Disconnects client from database
  await disconnectFromDatabase(client);

  // Return query data
  return query.rows;
}

// Gets all the roles from the database
async function getAllRoles() {
  // Connects client to database
  const client = await connectToDatabase();

  // SELECT query
  const query = await client.query("SELECT * FROM roles");

  // Disconnects client from database
  await disconnectFromDatabase(client);

  // Return query data
  return query.rows;
}

// Gets all employees from the database
async function getAllEmployees() {
  // Connects client to database
  const client = await connectToDatabase();

  // SELECT query
  const query = await client.query("SELECT * FROM employees");

  // Disconnects client from database
  await disconnectFromDatabase(client);

  // Return query data
  return query.rows;
}

// Adds a department to the database
async function addDepartment(name) {
  // Connects client to database
  const client = await connectToDatabase();

  // INSERT query
  await client.query(`INSERT INTO departments (name) VALUES ($1)`, [name]);

  // Disconnects client from database
  await disconnectFromDatabase(client);
}

// Adds a role to the database
async function addRole(title, salary, departmentId) {
  // Connects client to database
  const client = await connectToDatabase();

  // INSERT query
  await client.query(
    `INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3)`,
    [title, salary, departmentId]
  );

  // Disconnects client from database
  await disconnectFromDatabase(client);
}

// Adds a employee to the database
async function addEmployee(firstName, lastName, roleId, managerId) {
  // Connects client to database
  const client = await connectToDatabase();

  // INSERT query
  await client.query(
    `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`,
    [firstName, lastName, roleId, managerId]
  );

  // Disconnects client from database
  await disconnectFromDatabase(client);
}

// Updates the role of an employee
async function updateEmployeeRole(employeeId, newRoleId) {
  // Connects client to database
  const client = await connectToDatabase();

  // INSERT query
  await client.query(`UPDATE employees SET role_id = $1 WHERE id = $2`, [
    newRoleId,
    employeeId,
  ]);

  // Disconnects client from database
  await disconnectFromDatabase(client);
}

// Gets the id of a department by searching for its name in the database
async function getIdFromDepartmentName(name) {
  // Connects client to database
  const client = await connectToDatabase();

  // SELECT query
  const query = await client.query(
    `SELECT id FROM departments WHERE name = $1`,
    [name]
  );

  // Disconnects client from database
  await disconnectFromDatabase(client);

  // Returns the id of the department
  return query.rows[0].id;
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
  getIdFromDepartmentName,
};
