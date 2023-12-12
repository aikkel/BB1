const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const db = require('../Database/db.js');
const user = require('../models/User.js');

router.get('/', (req, res) => {
    res.render('update');
});

router.post('/', async (req, res) => {
  const { currentEmail, currentPassword, newEmail, newPassword } = req.body;

  // Check if all required fields are provided
  if (!currentEmail || !currentPassword) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Find the user by current email
    const user = await db.User.findOne({ where: { email: currentEmail } });

    // If user not found, return error
    if (!user) {
      return res.status(400).json({ message: 'Invalid current email or password' });
    }

    // Check if the provided current password matches the one in the database
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);

    // If current password is not valid, return error
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid current email or password' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 12);

    // Update the user's email and password
    await user.update({
      email: newEmail,
      password: newPassword,
      phone: newPhone,
      city: newCity
    });

    // Redirect or send response after updating
    res.redirect('/minside'); // Redirect to a success page or handle as needed
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
