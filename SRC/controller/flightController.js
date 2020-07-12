const Flight = require('../models/flight');
const Validations = require('../utiles/validations');

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
            const flightF = {
                price: req.body.price,
                code: req.body.code,
                takeOffDate: req.body.takeOffDate,
                landingDate: req.body.landingDate,
                landingAirportId: req.body.landingAirportId,
                takeOffAirportId: req.body.takeOffAirportId,
                planeId: req.body.planeId,
                currencyId: req.body.currencyId
            };

            Validations.validaFlight(flightF)

            const flight = Flight.create(flightF);
            res.status(201).send(flight);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async update(req, res) {
        try {
            const flightF = {
                price: req.body.price,
                code: req.body.code,
                takeOffDate: req.body.takeOffDate,
                landingDate: req.body.landingDate,
                landingAirportId: req.body.landingAirportId,
                takeOffAirportId: req.body.takeOffAirportId,
                planeId: req.body.planeId,
                currencyId: req.body.currencyId
            };

            Validations.validaFlight(flightF)


            await Flight.update(flightF, {
                where: { id: req.body }
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