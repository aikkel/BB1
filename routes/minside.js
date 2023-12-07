var express = require('express');
var router = express.Router();
const db = require('../Database/db.js');
// const User = require('../models/User.js');

const ApiService = require('../services/apiService.js');
const advertAPI = new ApiService('https://api.nrpla.de', 'lOWUQnlPUqEdChpAwjOfvs7xyeIVdTWiDWvdsKmR5Orr3dudJ9Nrzj6cOAhYlmjJ');

router.get('/', function(req, res, next) {
  // Check API connection
  advertAPI.makeRequest('AB123CD').then(data => {
    console.log('Connected to API');
  }).catch(error => {
    console.error('Failed to connect to API:', error);
  });

  res.render('minside', { title: 'blobbbs' });
});



router.post('/search', function(req, res, next) {
  let registration = req.body.registration;
  let vin = req.body.vin;

  // Get vehicle data by registration
  advertAPI.makeRequest(registration).then(data => {
    console.log(data);
  });

  // Get vehicle data by registration with additional data
  advertAPI.makeRequest(`${registration}?advanced=1`).then(data => {
    console.log(data);
  });

  // Get vehicle data by VIN
  advertAPI.makeRequest(`vin/${vin}`).then(data => {
    console.log(data);
  });

  // Get vehicle data by VIN with additional data
  advertAPI.makeRequest(`vin/${vin}?advanced=1`).then(data => {
    console.log(data);
  });

  res.redirect('/');
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('minside', { title: 'blobbbs' });
});


// ????? host, user, pass, data
// ?????

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../Database/db.js'
});

const User = sequelize.define('User', {
  email: DataTypes.STRING,
  password: DataTypes.STRING
}, {});

sequelize.sync();

router.get('/', async function(req, res, next) {
  const user = await User.findOne({ where: { id: 1 } });
  if (user) {
    const { email, password } = user;
    console.log(email, password);
  }
  res.render('minside', { title: 'blobbbs' });
});

module.exports = router;
