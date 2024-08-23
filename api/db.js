import mysql from 'mysql2';

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "visitour"
});
db.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("connected to mysql");
  }
})

export default db;