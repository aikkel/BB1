var express = require('express');
var router = express.Router();
const db = require('../Database/db.js');
const User = require('../models/User.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('minside', { title: 'blobbbs' });
});



module.exports = router;
