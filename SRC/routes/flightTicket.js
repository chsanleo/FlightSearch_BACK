const router = require('express').Router();
const FlightTicketController = require ('../controller/flightTicketController')

router.get('/allflightstickets', FlightTicketController.getAll);
router.get('/:username', FlightTicketController.get);
router.post('/create', FlightTicketController.createUpdate);

module.exports = router;