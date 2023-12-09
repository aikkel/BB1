const express = require('express');
const router = express.Router();

const db = require('../Database/db.js');
// const Advert = require('../models/Advert.js'); // Assuming this is the correct path to your Advert model
const { Advert } = require('../Database/db.js');

router.get('/', function(req, res, next) {
  if (!req.session.userID) { // Make sure this matches how you set it in the session
      return res.redirect('/login'); // Redirect to login if not logged in
  }

  Advert.findAll({
      where: { advertID: req.session.userID } // Use the correct column name here
  })
  .then(adverts => {
      if (adverts) {
          res.render('mineAnnoncer', { advert: adverts });
      } else {
          res.redirect('/');
      }
  })
  .catch(err => {
      console.error(err);
      res.redirect('/');
  });
});

module.exports = router;
