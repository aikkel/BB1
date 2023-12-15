const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const db = require('../Database/db.js');
const user = require('../models/User.js');

router.get('/', (req, res) => {
    res.render('update');
});

router.post('/', async (req, res) => {
  const { currentEmail, currentPassword, currentphone, newPhone, city, newCity, newEmail, newPassword } = req.body;

  if (!currentEmail || !currentPassword) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const user = await db.User.findOne({ where: { email: currentEmail } });

    if (!user) {
      return res.status(400).json({ message: 'Bruger ikke fundet {v1}' });
    }
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Ugyldig Adgangskode {v2}' });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    await user.update({
      email: newEmail,
      password: hashedPassword,
      phone: newPhone,
      city: newCity
    
    });
    await user.reload();
    
    // Redirect or send response after updating
    res.redirect('/minside');
  } catch (err) {
    return res.status(500).json({ err: 'Internal server error, dine oplysninger blev ikke opdateret' });
  }
});

module.exports = router;