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

// Connects client to database
async function connectToDatabase() {
  await client.connect();
}

// Disconnects client from database
async function disconnectFromDatabase() {
  await client.end();
}

// Exports
module.exports = { connectToDatabase, disconnectFromDatabase, client };
