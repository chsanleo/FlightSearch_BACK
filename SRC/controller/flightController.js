const Flight = require('../models/flight');

const FlightController = {
    async getAllFlight(req, res) {
        try {
            const flights = await Flight.findAll();
            res.status(200).send(flights);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async getFlight(req, res) {
        try {
            const flight = await Flight.findOne({
                where: { id: req.params }
            });
            res.status(200).send(flight);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async createFlight(req, res) {
        try {
            const flight = Flight.create(req.body);
            res.status(201).send(flight);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async update(req, res) {
        try {
            await Flight.update(req.body, {
                where: { id: req.params }
            });
            res.status(202).send({ message: 'Successfull Updated.' });
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error.' });
        }

    },
    async delete(req, res) {
        try {
            await Flight.destroy({
                where: { id: req.params }
            });
            res.status(202).send({ message: 'Successfull Deleted.' });
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error.' });
        }
    }
};

module.exports = FlightController;