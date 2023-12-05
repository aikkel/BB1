const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();

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