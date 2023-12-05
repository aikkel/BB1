var express = require('express');
var router = express.Router();
const db = require('../Database/db.js');
const User = require('../models/User.js');
const bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'bloatware'});
});

router.post('/login', async function(req, res, next){
    const { email, password } = req.body;
  
    try {
      // Find the user by email
      const user = await User.findOne({ where: { email: email } });
  
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
  
      // If the email and password are correct, send a success message
      res.redirect(`/minside/${user.id}`);
    } catch (error) {
      console.error(error);
    }
  });

module.exports = router;