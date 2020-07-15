const router = require('express').Router();
const MainController = require('../controller/mainController')

router.post('/login', MainController.login);
router.get('/questions', MainController.getAllQuestions);
router.post('/register', MainController.register);
router.get('/iatacodes', MainController.getAllIataCode);
router.get('/contries', MainController.getAllCountries);
router.get('/currencies', MainController.getAllCurrencies);
router.get('/seats', MainController.getAllSeats);
router.post('/flightbydate', MainController.getFlightByDate);
router.post('/flightbyCompany/', MainController.getFlightsByCompanies);
router.post('/flightbyLandAirport', MainController.getFlightsByLandingAirport);
router.post('/flightbyLandAirport', MainController.getFlightsByTakeOffAirport);
router.post('/airportbysmoking', MainController.getAirportSmoking);
router.post('/currencybycountry', MainController.getCurrencyByCountry);
router.post('/searchFlight', MainController.searchFlight);
router.post('/exchagerate', MainController.getExchange);

module.exports = router;