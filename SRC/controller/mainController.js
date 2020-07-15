const { User, ContactInfo, IataCode, Country, Currency, Seat, Flight, Airport } = require('../models');
const axios = require("axios");
const Validations = require('../utiles/validations');

const EMPTY = "";

const MainController = {
    async login(req, res) {
        try {
            const user = await User.findOne({
                where: { username: req.body.username }
            });
            if (!await bycrypt.compare(req.body.password, user.password)) {
                throw new Error({ message: 'Wrong Credentials' });
            }

            const token = jwt.sign({ id: user.id }, properties.token_SECRETWORD, { expiresIn: properties.token_EXPIRES });

            await User.updateOne({
                token: token
            }, {
                where: { id: user.id }
            });

            res.status(200).send({ user, token });
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
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
    async register(req, res) {
        try {
            let error = EMPTY;
            const usernameStock = await User.findOne({ where: { username: req.body.username } });

            if (username = usernameStock) {
                throw Error('This username already exists.');
            }

            const contactInfoF = {
                address: req.body.address,
                telephone: req.body.telephone,
                email: req.body.email,
            };

            Validations.validaContactInfo(contactInfoF);

            const contactInfo = await ContactInfo.create(contactInfoF);

            const userF = {
                name: req.body.name,
                username: req.body.username,
                surname: req.body.surname,
                password: req.body.password,
                passport: req.body.passport,
                questionSecret: req.body.questionSecret,
                answerSecret: req.body.answerSecret,
                CountryId: req.body.CountryId,
                ContactInfoId: contactInfo.id
            };

            Validations.validaUser(userF);

            const user = await User.create(userF);
            res.status(201).send(user);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
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
                where: { deletedAt: null, takeOffDate: req.body.takeOffDate }
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
            const landingDate = req.body.landingDate;
            const landingAirportId = req.body.LandingAirportId;
            const takeOffAirportId = req.body.TakeOffAirportId;

            error += Validations.validaTakeOffAndLandingDates(takeOffDate, landingDate);
            error += Validations.validaTakeOffAndLandingAirports(landingAirportId, takeOffAirportId);

            if (error != EMPTY) { throw Error(error); }

            const currencyList = await Currency.findAll({
                where: {
                    takeOffDate: takeOffDate, landingDate: landingDate,
                    landingAirportId: landingAirportId, takeOffAirportId: takeOffAirportId
                }
            });
            res.status(200).send(currencyList);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async getExchange(req, res) {
        try {
            const base = req.body.baseCurrencyCode;
            const change = req.body.changeCurrencyCode;

            Validations.validaCurrencyCode(base);
            Validations.validaCurrencyCode(change);

            const exchange = axios.get("https://api.exchangeratesapi.io/latest?base=" + base + "&symbols=" + change);
            res.status(200).send(exchange);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    }
};

module.exports = MainController;