const express = require('express');
const router = express.Router();
const db = require('../models'); // Assuming your Sequelize models are in a 'models' directory

router.get('/search', function(req, res) {
    db.Advert.findAll()
      .then(adverts => {
        if (adverts) {
          res.render('searchResult', { adverts: adverts });
        } else {
          res.send('No adverts found');
        }
      })
      .catch(err => {
        console.error(err);
        res.send('An error occurred');
      });
});

module.exports = router;