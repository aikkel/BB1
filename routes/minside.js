var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/minside', function(req, res, next) {
  res.render('minside', { title: 'blobbbs' });
});


module.exports = router;