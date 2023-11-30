const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('../Database/BBDB.db', (err) => {
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
