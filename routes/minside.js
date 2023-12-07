var express = require('express');
var router = express.Router();
const db = require('../Database/db.js');
const User = require('../models/User.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('minside', { title: 'blobbbs' });
});


// ????? host, user, pass, data
// ?????


$query = "SELECT email, password FROM User WHERE id = 1";
$result = mysqli_query($connection, $query);

if ($result) {
    $row = mysqli_fetch_assoc($result);
    $email = $row['email'];
    $password = $row['password'];
}

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
  
  // Query to fetch email and password for user ID 1
  const userId = 1;
  const query = `SELECT email, password FROM User WHERE id = ${userId}`;
  
  // Execute the query
  connection.query(query, (err, result) => {
    if (err) throw err;
    
    if (result.length > 0) {
      const user = result[0];
      const email = user.email;
      const password = user.password;

      // Display user information
      console.log(`User ID: ${userId}`);
      console.log(`Email: ${email}`);
      console.log(`Password: ${password}`);
    } else {
      console.log('User not found');
    }

    // Close the connection
    connection.end();
  });
});

module.exports = router;
