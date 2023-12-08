var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bloby' });
});

// Define route for displaying advertisement details
router.get('/adverts/:advertID', (req, res) => {
  const advertID = req.params.advertID;

  // Replace this with your actual database query to fetch advertisement details
  // Example using Mongoose:
  // Advertisement.findById(advertID, (err, advert) => {
  //   if (err || !advert) {
  //     // Handle error or not found scenario
  //   } else {
  //     // Render a page with the advertisement details
  //     res.render('advert-details', { advert });
  //   }
  // });

  // For demonstration purposes, sending a sample response
  res.send(`Displaying advertisement details for ID: ${advertID}`);
});


module.exports = router;