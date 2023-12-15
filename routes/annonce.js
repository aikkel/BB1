var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('annonce', { title: 'biboo' });
});

module.exports = router;