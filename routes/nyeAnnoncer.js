const express = require('express');
const router = express.Router();




// Antag at du har en funktion, der henter brugerinformation
// Denne funktion er blot et eksempel og skal tilpasses din applikation
function getBrugerInfo() {
  // Her skal du hente den faktiske brugerinformation
  return {
    email: 'bruger@example.com',
    phone: '12345678'
  };
}

// GET-rute for "nyeAnnoncer" view
router.get('/', (req, res) => {
  const brugerInfo = getBrugerInfo(); // Hent brugerinformation
  res.render('nyeAnnoncer', { brugerInfo }); // Send brugerInfo til skabelonen
});



module.exports = router;
