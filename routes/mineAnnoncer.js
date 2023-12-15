const express = require('express');
const router = express.Router();
const { Advert } = require('../Database/db.js');

router.get('/', function(req, res, next) {
  if (!req.session.userID) {
      return res.redirect('/login'); // Redirect to login if not logged in
  }

  Advert.findAll({
      where: { userID: req.session.userID }
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