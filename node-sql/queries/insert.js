const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

//insert single record
// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   const sql =
//     "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });

//insert multiple records
con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  let sql = "INSERT INTO customers (name, address) VALUES ?";
  let values = [
    ["John", "Highway 71"],
    ["Peter", "Lowstreet 40"],
    ["Amy", "Apple st 650"],
    ["Michael", "Valley 20"],
    ["Jan", "Park Lane 21"],
    ["Wiliiam", "Highway 79"],
    ["Sandy", "Highway 72"],
    ["Nico", "Highway 75"],
    ["David", "Highway 90"],
  ];
  con.query(sql, [values], (err, result) => {
    if (err) throw err;
    console.log(`Number of records inserted: ${result.affectedRows}`);
  });
});
