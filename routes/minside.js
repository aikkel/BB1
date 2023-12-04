var express = require('express');
var path = require('path'); // Step 1: Import the path module
var router = express.Router();

// Step 2: Serve static files
router.use(express.static(path.join(__dirname, 'public', )));

/* GET home page. */
router.get('/', function(req, res, next) {
  // Step 3: Send the index.html file
  res.sendFile(path.join(__dirname, 'public', 'minside.html'));
});

router.post('/', function(req, res, next){
    if ((req.body.username == 'Jens') && (req.body.password == 'Gut')) {
        res.send('logget ind ' + req.body.username + " " + req.body.password);
    }
    else {
        res.send('forkert username eller password');
    }
    });

module.exports = router;