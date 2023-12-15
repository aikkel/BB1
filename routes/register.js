const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('../Database/db.js');
const app = express();

router.get('/', (req, res) => {
    res.render('register'); 
});

// Register route
router.post('/', async (req, res) => {
  try {
    const { email, password, city, phone } = req.body;
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);
    await db.User.create({ email, password: hashedPassword, city, phone });
   
    res.render('minside');
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.render('register', { error: 'E-mail er allerede taget' });
    } else {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
});

app.use(bodyParser.json());

app.post('/createUser', async (req, res) => {
  const { email, password, city, phone } = req.body;
  try {
    const user = await db.createUser(email, password, city, phone);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;