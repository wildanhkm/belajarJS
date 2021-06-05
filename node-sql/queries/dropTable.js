const mysql = require("mysql");

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

//* drop table
con.connect((err) => {
  if (err) throw err;
  let sql = "DROP TABLE customers";
  con.query(sql, (err) => {
    if (err) throw err;
    console.log("Table deleted!");
  });
});

//* drop table only if exists
con.connect((err) => {
  if (err) throw err;
  let sql = "DROP TABLE IF EXISTS customers";
  con.query(sql, (err) => {
    if (err) throw err;
    console.log("Table deleted!");
  });
});
