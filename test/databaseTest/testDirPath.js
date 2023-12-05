const sqlite3 = require('sqlite3').verbose();
const path = require('path');

//_dirname is the directory of the current file (testDirPath.js), it's a global variable in node.js.
const dbPath = path.resolve(__dirname, '../../Database/BBDB.db');

let db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Closed the database connection.');
});

// const sqlite3 = require('sqlite3').verbose();
// let db = new sqlite3.Database('../Database/BBDB.db', (err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Connected to the SQLite database.');
// });

// db.close((err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Closed the database connection.');
// });

