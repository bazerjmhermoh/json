const sqlite3 = require('sqlite3').verbose();
const prompt = require('prompt-sync')();
import { sqlite3 } from 'sqlite3';

let db = new sqlite3.Database('mom.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  // console.log('Connected to the mom.db SQlite database.');
});
///////////////////  WHERE name LIKE 'a%'   ///***     `SELECT * FROM ali WHERE name LIKE '%a%' ` */
let a = prompt("in -->  ");
let sql = "select * from ali where name like '" + a + "%'";

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.name);
  });
});

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  //console.log('Close the database connection.');
});