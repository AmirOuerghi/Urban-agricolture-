const mysql = require('mysql2');
const config = require('./config');

// Create MySQL connection pool
const pool = mysql.createPool(config);

const connection = mysql.createConnection(config)
connection.connect((err)=>{
    if (err) {
        console.log(err)
    }
    else {
        console.log("MYSQL connected")
    }
})
// Export the pool for use in other modules
module.exports = pool.promise(),connection;
