const mysql = require('mysql2');
const config = require('./config');

// Create MySQL connection pool
const pool = mysql.createPool(config);

// Ensure the database is created or already exists
pool.getConnection((err, connection) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MYSQL connected");

    // Create database query
    const createDbQuery = 'CREATE DATABASE IF NOT EXISTS DbFarm';

    connection.query(createDbQuery, (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Database created or already exists");
      }

      // Release the connection back to the pool
      connection.release();
    });
  }
});

// Export the pool for use in other modules
module.exports = pool.promise();
