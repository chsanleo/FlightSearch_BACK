const Bill = require('../models/bill');

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
            const flightTicket = await Bill.findOne({ _id: req.params.id });
            res.status(200).send(flightTicket);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async createUpdate(req, res) {
        try {
            const flightTicket = await Bill.updateOne({ '_id': req.body._id }, req.body, { upsert: true });
            res.status(202).send(flightTicket);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error.' });
        }
    }
};

module.exports = FlightTicketController;