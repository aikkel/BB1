const express = require('express');
const router = express.Router();

const db = require('../Database/db.js');
const model = require('../models/Advert.js');

const bodyParser = require('body-parser');

router.get('/', function(req, res, next) {
  if (!req.session.userID) {
      return res.redirect('/login'); // Redirect til login, hvis ikke logget ind
  }

  db.Advert.findAll({
      where: { userID: req.session.userID } // Filtrer annoncer baseret på brugerens id
  })
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