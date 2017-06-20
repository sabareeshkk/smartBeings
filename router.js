const express = require('express');
const router = express.Router();
const Locations = require('./models/location.js');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function (req, res) {

  Locations.find({}, function (err, locations){
  	// console.log('locations', locations)
  	res.json(locations);
  });
  
});


module.exports = router;