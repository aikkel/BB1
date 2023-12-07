const express = require('express');
const router = express.Router();

const db = require('../Database/db.js');
const model = require('../models/Advert.js');

const bodyParser = require('body-parser');

router.get('/', function(req, res, next) {
    db.Advert.findAll()
      .then(advert => {
        if (advert) {
          res.render('mineAnnoncer', { advert: advert });
        } else {
          res.redirect('/')
        }
      })
      .catch(err => {
        console.error(err);
        res.redirect('/')
      });
});

module.exports = router;