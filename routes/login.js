const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const db = require('../Database/db.js');
// const user = require('../models/User.js');


/* GET users listing. */
router.get('/', (req, res) => {
  res.render('login');
});


/* Post user input */
router.post('/', async (req, res) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // Find the user by email
    const user = await db.User.findOne({ where: { email } });

    // If user not found, return error
    if (!user) {
      return res.render('login', { error: 'Ugyldig Email eller Adgangskode {v3}' });
    }

    // Check if the provided password matches the one in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If password is not valid, return error
    if (!isPasswordValid) {
      return res.render('login', { error: 'Ugyldig Email eller Adgangskode {v4}' });
    }

    // If everything is okay, redirect to the user's page
    req.session.userID = user.id; //saves user.id in session.
    console.log(req.session.userID); // show the shit in conosle.
     
    return res.redirect(`/minside`);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;