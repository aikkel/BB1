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

  // Check if all required fields are provided
  if (!currentEmail || !currentPassword) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Find the user by current email
    const user = await db.User.findOne({ where: { email: currentEmail } });

    // If user not found, return error
    if (!user) {
      console.log("user fejl"  + "\n")
      return res.status(400).json({ message: 'Bruger ikke fundet {v1}' });
    }

    // Check if the provided current password matches the one in the database
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
    console.log(isPasswordValid);  // Should print 'true' if the password is correct

    // If current password is not valid, return error
    if (!isPasswordValid) {
      console.log("password fucked" + "\n");
      console.log(currentPassword + "\n");
      console.log(user.password + "\n");
      return res.status(400).json({ message: 'Ugyldig Adgangskode {v2}' });
    }
    console.log(newPassword)
    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    console.log(hashedPassword)
    // Update the user's email and password
    await user.update({
      email: newEmail,
      password: hashedPassword,
      phone: newPhone,
      city: newCity
    
    });
    // Reload the user instance to get the updated user
    await user.reload();

    console.log(user);
    console.log(user.email + "\n", user.password  + "\n", user.phone  + "\n", user.city  + "\n");
    console.log(newEmail, newPassword, newPhone, newCity);
    
    // Redirect or send response after updating
    res.redirect('/minside'); // Redirect to a success page or handle as needed
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error, dine oplysninger blev ikke opdateret' });
  }
});

module.exports = router;
