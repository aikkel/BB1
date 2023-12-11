const express = require('express');
const router = express.Router();

// GET route for the "nyeAnnoncer" view
router.get('/', (req, res) => {
    // Logic to fetch and render the "nyeAnnoncer" view
    res.render('nyeAnnoncer');
});

module.exports = router;
