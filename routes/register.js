const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();

router.get('/', (req, res) => {
    res.render('register'); 
});

// Register route
router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Generate salt
    const salt = await bcrypt.genSalt(12);

    // Hash the password with the salt
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save the username and hashed password to the database
    // Your code here...

    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.use(bodyParser.json());

app.post('/createUser', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.createUser(email, password);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('Server started'));

module.exports = router;
