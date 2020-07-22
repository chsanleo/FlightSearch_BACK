const router = require('express').Router();
const FlightController = require ('../controller/flightController')

router.get('/allflights', FlightController.getAllFlight);
router.get('/:id', FlightController.getFlight);
router.post('/search', FlightController.getFlightsbyAirportsandDate );
router.post('/create', FlightController.createFlight);
router.put('/modify/:id', FlightController.update);
router.delete('/delete/:id', FlightController.delete);

module.exports = router;