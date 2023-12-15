const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const db = require('../Database/db.js');

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await db.User.findOne({ where: { email } });

    if (!user) {
      return res.render('login', { error: 'Ugyldig Email eller Adgangskode {v3}' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.render('login', { error: 'Ugyldig Email eller Adgangskode {v4}' });
    }

    
    req.session.userID = user.id; //saves user.id in session.
    
    // If everything is okay, redirect to the user's page
    return res.redirect(`/minside`);
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;