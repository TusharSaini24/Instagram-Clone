const mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: "3306",
  database: "instagram",
  multipleStatements: true,
});

module.exports = db;
