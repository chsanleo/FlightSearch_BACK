const router = require('express').Router();
const DataController = require('../controller/dataController');

router.get('/questions', DataController.getAllQuestions);
router.get('/iatacodes', DataController.getAllIataCode);
router.get('/countries', DataController.getAllCountries);
router.get('/currencies', DataController.getAllCurrencies);
router.get('/seats', DataController.getAllSeats);
router.post('/flightbydate', DataController.getFlightByDate);
router.post('/flightbyCompany', DataController.getFlightsByCompanies);
router.post('/flightbyLandAirport', DataController.getFlightsByLandingAirport);
router.post('/flightbyTakeOffAirport', DataController.getFlightsByTakeOffAirport);
router.get('/airports', DataController.getAllAirport);
router.post('/airportbysmoking', DataController.getAirportSmoking);
router.post('/currencybycountry', DataController.getCurrencyByCountry);
router.post('/searchFlight', DataController.searchFlight);
router.post('/exchagerate', DataController.getExchange);

module.exports = router;