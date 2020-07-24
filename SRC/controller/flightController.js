const { Flight, Company,Airport } = require('../models');
const Validations = require('../utiles/validations');
const { Op } = require('sequelize');

const FlightController = {
    async getAllFlight(req, res) {
        try {
            const flights = await Flight.findAll({
                where: { deletedAt: null }
            });
            res.status(200).send(flights);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async getFlight(req, res) {
        try {
            const id = parseInt(req.params.id);
            Validations.validaId(id);
            const flight = await Flight.findByPk(id);

            if (flight.deletedAt != null) { res.status(200).send(new Object); }
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
                LandingAirportId: req.body.LandingAirportId,
                TakeOffAirportId: req.body.TakeOffAirportId,
                PlaneId: req.body.PlaneId,
                CurrencyId: req.body.CurrencyId,
                CompanyId: req.body.CompanyId,
                stock: req.body.stock
            };

            Validations.validaFlight(flightF);

            const flight = await Flight.create(flightF);
            res.status(201).send(flight);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async update(req, res) {
        try {
            const { id } = req.body;
            Validations.validaId(id);

            const flightF = {
                price: req.body.price,
                code: req.body.code,
                takeOffDate: req.body.takeOffDate,
                landingDate: req.body.landingDate,
                LandingAirportId: req.body.LandingAirportId,
                TakeOffAirportId: req.body.TakeOffAirportId,
                PlaneId: req.body.PlaneId,
                CurrencyId: req.body.CurrencyId,
                stock: req.body.stock
            };

            Validations.validaFlight(flightF);

            await Flight.update(flightF, {
                where: { id: id }
            });
            res.status(202).send({ message: 'Successfull Updated.' });
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }

    },
    async delete(req, res) {
        try {
            const id = parseInt(req.params.id);
            Validations.validaId(id);

            await Flight.destroy({
                where: { id: id }
            });
            res.status(202).send({ message: 'Successfull Deleted.' });
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async getFlightsbyAirportsandDate(req, res) {
        try {
            const flights = await Flight.findAll({
                where: {
                    deletedAt: null,
                    TakeOffAirportId: req.body.TakeOffAirportId,
                    LandingAirportId: req.body.LandingAirportId,
                    takeOffDate: {
                        [Op.startsWith] : req.body.takeOffDate 
                    } 
                },
                include : [
                    {model : Company},
                    {model : Airport}
                ],
                
            });
            
            res.status(200).send(flights);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    }
};

module.exports = FlightController;