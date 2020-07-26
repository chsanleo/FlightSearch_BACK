const { User, IataCode, Country, Currency, Seat, Flight, Airport, ContactInfo, Company } = require('../models');
const axios = require("axios");
const Validations = require('../utiles/validations');
const { Op } = require('sequelize');

const EMPTY = "";

const DataController = {
    async getAllQuestions(req, res) {
        try {
            const questions = await User.findAll({
                attributes: ['questionSecret']
            });
            res.status(200).send(questions);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async getAllIataCode(req, res) {
        try {
            const iataList = await IataCode.findAll({ attributes: ['id', 'code'] }, {
                where: { deletedAt: null }
            });
            res.status(200).send(iataList);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async getAllCountries(req, res) {
        try {
            const countriesList = await Country.findAll({ attributes: ['id', 'name', 'code', 'prefix'] }, {
                where: { deletedAt: null }
            });
            res.status(200).send(countriesList);

        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async getAllCurrencies(req, res) {
        try {
            const currencyList = await Currency.findAll({ attributes: ['id', 'name', 'code', 'countryId'] }, {
                where: { deletedAt: null }
            });
            res.status(200).send(currencyList);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async getAllSeats(req, res) {
        try {
            const seatList = await Seat.findAll({ attributes: ['id', 'type', 'price'] }, {
                where: { deletedAt: null }
            });
            res.status(200).send(seatList);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async getFlightByDate(req, res) {
        try {
            const flightList = await Flight.findAll(
                {
                    attributes: ['id', 'price', 'code', 'takeOffDate', 'landingDate',
                        'LandingAirportId', 'TakeOffAirportId', 'PlaneId', 'CurrencyId',
                        'CompanyId', 'stock']
                }, {
                where: {
                    deletedAt: null, takeOffDate: {
                        [Op.startsWith]: takeOffDate
                    }
                }
            });
            res.status(200).send(flightList);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async getFlightsByCompanies(req, res) {

        try {
            const id = parseInt(req.body.id);
            Validations.validaId(id);

            const flightList = await Flight.findAll({
                where: { CompanyId: id }
            });
            res.status(200).send(flightList);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async getFlightsByLandingAirport(req, res) {

        try {
            const id = parseInt(req.body.id);
            Validations.validaId(id);

            const flightList = await Flight.findAll({
                where: { LandingAirportId: id }
            });
            res.status(200).send(flightList);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async getFlightsByTakeOffAirport(req, res) {

        try {
            const id = parseInt(req.body.id);
            Validations.validaId(id);

            const flightList = await Flight.findAll({
                where: { TakeOffAirportId: id }
            });
            res.status(200).send(flightList);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async getAllAirport(req, res) {
        try {
            const airportList = await Airport.findAll({
                where: { deletedAt: null },
                include: [
                    { model: ContactInfo },
                    { model: Country },
                    { model: IataCode }
                ]
            });
            res.status(200).send(airportList);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async getAirportSmoking(req, res) {
        try {
            let smoking = false;
            if (req.body.smoking == true) { smoking = true; }

            const airportList = await Airport.findAll({
                where: { smooking: smoking }
            });
            res.status(200).send(airportList);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async getCurrencyByCountry(req, res) {
        try {
            const id = req.body.idCountry;
            Validations.validaId(id);
            const currencyList = await Currency.findAll({
                where: { CountryId: id }
            });
            res.status(200).send(currencyList);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async searchFlight(req, res) {
        try {
            let error = EMPTY;
            const takeOffDate = req.body.takeOffDate;
            const landingAirportId = req.body.LandingAirportId;
            const takeOffAirportId = req.body.TakeOffAirportId;

            error += Validations.validaTakeOffAndLandingAirports(landingAirportId, takeOffAirportId);

            if (error != EMPTY) { throw Error(error); }

            const flightList = await Flight.findAll({
                where: {
                    takeOffDate: {
                        [Op.startsWith]: takeOffDate
                    },
                    LandingAirportId: landingAirportId,
                    TakeOffAirportId: takeOffAirportId
                },
                include: [
                    { model: Company }
                ]
            });
            res.status(200).send(flightList);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    getExchange(req, res) {

        const base = req.body.baseCurrencyCode;
        const change = req.body.changeCurrencyCode;

        Validations.validaCurrencyCode(base);
        Validations.validaCurrencyCode(change);
        let ratio = 1;
        let permitList = ["USD", "MXN", "SGD", "AUD", "ILS", "KRW", "PLN", "ZAR",
            "NZD", "NOK", "CNY", "CHF", "THB", "JPY", "HRK", "RUB", "BRL", "SEK", "HU", "PHP", "HKD",
            "TRY", "BGN", "MYR", "EUR", "INR", "IDR", "RON", "GBP", "CZK", "DKK", "ISK", "CAD"]

        if (permitList.includes(base) && permitList.includes(change)) {
            axios.get("https://api.exchangeratesapi.io/latest?base=" + base + "&symbols=" + change)
                .then(result => {

                    let response = JSON.stringify(result.data.rates);
                    response = response.replace('"', '');
                    response = response.replace(change, '');
                    response = response.replace('{', '');
                    response = response.replace('}', '');
                    response = response.replace(':', '');
                    response = response.replace('"', '');

                    let finalResponse = {
                        exchange: response
                    }

                    res.send(finalResponse);
                })
                .catch(error => {
                    console.log(error);
                    res.send(500).send({ message: 'There was an error. Contact with the administrator.' });
                });
        } else {
            let min = 0; let max = 2;
            ratio = min + (Math.random() * (max - min));
            let response = {
                exchange: ratio
            }
            res.status(200).send(response);
        }
    }
};

module.exports = DataController;