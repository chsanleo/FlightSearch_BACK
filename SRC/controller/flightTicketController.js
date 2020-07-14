const Bill = require('../models/bill');
const Validations = require('../utiles/validations');


const FlightTicketController = {

    async getAll(req, res) {
        try {
            const flightTickets = await Bill.find();
            res.status(200).send(flightTickets);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async get(req, res) {
        try {

            const flightTicket = await Bill.findOne({ name: req.params.User });
            res.status(200).send(flightTicket);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async createUpdate(req, res) {
        try {

            const flightticketF = {
                landingDate: req.body.landingDate,
                takeOffDate: req.body.takeOffDate,
                landingAirport: req.body.landingAirport,
                takeOffAirport: req.body.takeOffAirport,
                basePrice: req.body.basePrice,
                ratioExchange: req.body.ratioExchange,
                baseCurrency: req.body.baseCurrency,
                price: req.body.price,
                currency: req.body.currency,
                User: req.body.User,
                smoking: req.body.smoking,
                insurance: req.body.insurance,
                flightCode: req.body.flightCode,
                plane: req.body.plane,
                seat: req.body.seat,
            };

            Validations.validaFlightTicket(flightticketF)

            const flightTicketP = Bill.create(flightticketF);
            res.status(201).send(flightTicketP);

            // const flightTicket = await Bill.updateOne({ '_id': req.body._id }, req.body, { upsert: true });
            // res.status(202).send(flightTicket);

        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error.' });
        }
    }
};

module.exports = FlightTicketController;