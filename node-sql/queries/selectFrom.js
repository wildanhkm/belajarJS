const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

// con.connect((err) => {
//   if (err) throw err;
//   con.query("SELECT * FROM customers", (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// con.connect((err) => {
//   if (err) throw err;
//   con.query("SELECT name FROM customers", (err, result, fields) => {
//     if (err) throw err;
//     console.log(result);
//   });
// });

//* limiting results
// con.connect((err) => {
//   if (err) throw err;
//   con.query("SELECT * FROM customers LIMIT 5", (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// });

//* start from another position
con.connect((err) => {
  if (err) throw err;
  con.query("SELECT * FROM customers LIMIT 5 OFFSET 2", (err, result) => { //*SELECT * FROM customers LIMIT 2, 5
    //*OFFSET 2 means start from the third position, not the second, just like array
    if (err) throw err;
    console.log(result);
  });
});
