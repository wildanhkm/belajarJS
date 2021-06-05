const mysql = require("mysql");

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

con.connect((err) => {
  if (err) throw err;
  let newAddress = "Canyon 123";
  let oldAddress = "Highway 79";
  let sql = "UPDATE customers SET address = ? WHERE address = ? ";

  //! WHERE CLAUSE SHOULD BE INCLUDED, IF NOT, ALL THE RECORDS WILL BE UPDATED

  con.query(sql, [newAddress, oldAddress], (err, result) => {
    if (err) throw err;
    console.log(`${result.affectedRows} record(s) updated`);
  });
});
