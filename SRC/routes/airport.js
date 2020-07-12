const router = require('express').Router();
const AirportController = require ('../controller/airportController')

router.get('/allairports', AirportController.getAirports);
router.get('/airport/:id', AirportController.getAirportById);
router.post('/create', AirportController.createAirport);
router.put('/modify/:id', AirportController.updateAirport);
router.delete('/delete/:id', AirportController.deleteAirport);

module.exports = router;