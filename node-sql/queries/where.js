const mysql = require("mysql");

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

// where clause
// con.connect((err) => {
//   if (err) throw err;
//   con.query(
//     "SELECT * FROM customers WHERE address = 'Highway 71'",
//     (err, result) => {
//       if (err) throw err;
//       console.log(result);
//     }
//   );
// });

//wildcard characters
// con.connect((err) => {
//   if (err) throw err;
//   con.query(
//     "SELECT * FROM customers WHERE address LIKE '7%'",
//     (err, result) => {
//       if (err) throw err;
//       console.log(result);
//     }
//   );
// });

//escaping query values
// let address = "Highway";
// let sql = `SELECT * FROM customers WHERE address = ${mysql.escape(address)}`;
// con.query(sql, (err, result) => {
//   if (err) throw err;
//   console.log(result);
// });

//escaping query single value or multiple values with placeholder
let name = "Jan";
let address = "Park Lane 21";
let sql = "SELECT * FROM customers WHERE name = ? OR address = ?";
con.query(sql, [name, address], (err, result) => {
  if (err) throw err;
  console.log(result);
});
