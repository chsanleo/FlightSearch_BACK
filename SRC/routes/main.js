const router = require('express').Router();
const MainController = require('../controller/mainController')

router.post('/login', MainController.login);
router.get('/logout', MainController.logOut);
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

module.exports = router;