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

module.exports = { getAllDepartments, getAllRoles, getAllEmployees };
