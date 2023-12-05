var express = require('express');
var router = express.Router();
const db = require('Database/BBDB.db');
const User = require('path_to_your_user_model'); // replace with the path to your User model
const bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/minside', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/minside', async function(req, res, next){
  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ where: { email: username } });

    // If the user doesn't exist, send an error message
    if (!user) {
      return res.send('User does not exist');
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);

    // If the password is incorrect, send an error message
    if (!isMatch) {
      return res.send('Incorrect password');
    }

    // If the username and password are correct, send a success message
    res.send(`Logged in as ${username}`);
  } catch (error) {
    console.error(error);
    res.send('An error occurred');
  }
});

module.exports = router;