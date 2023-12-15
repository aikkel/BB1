var express = require('express');
var router = express.Router();

const FilteredApiService = require('../services/FilteredApiService.js');
const ApiService = require('../services/ApiService.js');

//Future update should use enviorment variables(personal variables.) for the api key.
const apiService = new ApiService('https://api.nrpla.de', 'xptQbIKH1AyItGP0TCiv8BcIo3rFHiIyA7GI3QdOESidtD0oJeSDPbEyRzqL5mlc');
const filteredApiService = new FilteredApiService(apiService);

// Middleware to check if user is logged in
function isAuthenticated(req, res, next) {
  if (req.session && req.session.userID) {
    return next();
  } else {
    res.redirect('/login');
  }
}

router.post('/',isAuthenticated, function(req, res, next) {
  let registration = req.body.registration;

  if (registration) { //Requests the filtered data object.
    filteredApiService.makeRequest(`${registration}`).then(data => {
      res.json(data);
    }).catch(error => {
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

router.get('/', isAuthenticated, async function(req, res, next) {
  const user = await User.findOne({ where: { id: req.session.userID } });
  if (user) {
    const { email, password } = user;
  }
  res.render('minside', { title: 'blobbbs' });
});

module.exports = router;