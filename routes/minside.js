var express = require('express');
var router = express.Router();
const db = require('../Database/db.js');
const FilteredApiService = require('../services/FilteredApiService.js'); // Import the FilteredApiService class
const ApiService = require('../services/ApiService.js');
const apiService = new ApiService('https://api.nrpla.de', 'xptQbIKH1AyItGP0TCiv8BcIo3rFHiIyA7GI3QdOESidtD0oJeSDPbEyRzqL5mlc');
const filteredApiService = new FilteredApiService(apiService); // Create an instance of FilteredApiService

router.post('/', function(req, res, next) {
  let registration = req.body.registration;

  if (registration) {
    // Get vehicle data by registration
    filteredApiService.makeRequest(`${registration}`).then(data => {
      console.log(data); // This will log the filtered data
      res.json(data); // This will send the filtered data as a JSON response
    }).catch(error => {
      console.error('Failed to fetch vehicle data:', error);
      res.status(500).send('Failed to fetch vehicle data');
    }); 
  } else {
    res.status(400).send('Registration is required');
  }
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
  console.log(req.session.userID);
  res.render('minside', { title: 'blobbbs' });
});


module.exports = router;