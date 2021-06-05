const mysql = require("mysql");

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

con.connect((err) => {
  if (err) throw err;
  let address = "Highway 71";
  let sql = "DELETE FROM customers WHERE address = ?";

  //! WHERE CLAUSE SHOULD BE INCLUDED, IF NOT, ALL THE RECORDS WILL BE DELETED

  con.query(sql, [address], (err, result) => {
    if (err) throw err;
    console.log(`Number of records deleted: ${result.affectedRows}`);
  });
});
