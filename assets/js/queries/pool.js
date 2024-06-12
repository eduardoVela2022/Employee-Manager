// Imports
const { Pool } = require("pg");

// Database client information
const pool = new Pool({
  user: "postgres",
  password: "Elefant3",
  host: "localhost",
  database: "company",
});

// Connects client to database
async function connectToDatabase() {
  const tempClient = await pool.connect();
  return tempClient;
}

// Disconnects client from database
async function disconnectFromDatabase(tempClient) {
  await tempClient.release(true);
}

// Exports
module.exports = { connectToDatabase, disconnectFromDatabase, pool };
