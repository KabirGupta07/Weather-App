const express = require('express');
const router = express.Router();
const WeatherController = require('../controllers/weather');

router.post('/city',WeatherController.getWeatherByCity); 

router.post('/lat-lon',WeatherController.getWeatherByLocation ); 

router.get('/', WeatherController.searchForLocation)
// router.get('/location');

module.exports = router;