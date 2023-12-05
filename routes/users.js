var express = require('express');
var router = express.Router();
const db = require('Database/BBDB.db');

/* GET users listing. */
router.get('/minside', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/minside', function(req, res, next){
  if ((req.body.username == 'email') && (req.body.password == 'password')) {
    res.send('logget ind ' + req.body.username + " " + req.body.password);
  }
  else {
    res.send('forkert username eller password');
  }
});

module.exports = router;