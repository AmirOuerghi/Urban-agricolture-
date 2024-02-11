const mysql = require('mysql2');
const config = require('./config');

// Create MySQL connection pool with promise support
const pool = mysql.createPool(config).promise();

// Ensure the database is created or already exists
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }

  console.log("MySQL connected");

  // Create database query
  const createDbQuery = 'CREATE DATABASE IF NOT EXISTS DbFarm';

  connection.query(createDbQuery, (error, results) => {
    if (error) {
      console.error("Error creating database:", error);
    } else {
      console.log("Database created or already exists");
    }

    // Release the connection back to the pool
    connection.release();
  });
});

// Export the pool for use in other modules
module.exports = pool;
