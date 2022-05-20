const mysql = require("mysql2");
const { resourceLimits } = require("worker_threads");
const dotenv = require("dotenv");
dotenv.config();

const conn = mysql.createConnection({
  // host: `${process.env.DB_HOST}:3306`,
  host: process.env.MYSQL_HOST || "localhost", 
  // user: process.env.DB_USER,
  // password: process.env.DB_PASS,
  // database: process.env.DB_DATA,
  database: process.env.MYSQL_DATABASE || "mysql-blog",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "root",
});

conn.connect((err) => {
  if (err) {
    console.log("we did not connect to database:\n", process.env.MYSQL_USER);
    throw err;
  }
  console.log("connected to mySQL databases ");
});

module.exports = { conn };
