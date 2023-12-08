var express = require('express');
var router = express.Router();
const db = require('../Database/db.js');
// const User = require('../models/User.js');

const ApiService = require('../services/apiService.js');
const advertAPI = new ApiService('https://api.nrpla.de', 'xptQbIKH1AyItGP0TCiv8BcIo3rFHiIyA7GI3QdOESidtD0oJeSDPbEyRzqL5mlc');
//lOWUQnlPUqEdChpAwjOfvs7xyeIVdTWiDWvdsKmR5Orr3dudJ9Nrzj6cOAhYlmjJ

router.post('/', function(req, res, next) {
  let registration = req.body.registration;
  let vin = req.body.vin; // Get the VIN from the request body

  if (registration) {
    // Get vehicle data by registration
    advertAPI.makeRequest(`${registration}`).then(data => {
      console.log(data);
    }).catch(error => {
      console.error('Failed to fetch vehicle data:', error);
    });
  }
  
  if (vin) {
    // Get vehicle data by VIN
    advertAPI.makeRequest(`${vin}`).then(data => {
      console.log(data);
    });

    // Get vehicle data by VIN with additional data
    advertAPI.makeRequest(`${vin}?advanced=1`).then(data => {
      console.log(data);
    });
  }

  res.redirect('/minside');
});

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
