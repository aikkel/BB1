const bcrypt = require('bcrypt');

async function testBcrypt() {
  // Generate a salt
  const salt = await bcrypt.genSalt(10);

  // Hash a password
  const hashedPassword = await bcrypt.hash('myPassword123', salt);

  console.log('Hashed password:', hashedPassword);

  // Compare the hashed password with a plain text password
  const isMatch = await bcrypt.compare('myPassword123', hashedPassword);

  console.log('Do the passwords match?', isMatch);
}

testBcrypt();