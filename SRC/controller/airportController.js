const { Airport } = require('../models');
const Validations = require('../utiles/validations');


const AirportController = {
    async createAirport(req, res) {
        try {
            const airportF = {
                name: req.body.name,
                companyManag: req.body.companyManag,
                smooking: req.body.smooking,
                CountryId: req.body.CountryId,
                ContactInfoId: req.body.ContactInfoId,
                IataCodeId: req.body.IataCodeId,
            };

            Validations.validaCurrency(airportF)

            const airport = await Airport.create(airportF);
            res.status(201).send(airport);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error creating the Airport.' });
        }
    },
    async getAirports(req, res) {
        try {
            const airports = await Airport.findAll({
                limit: 15
            })
            res.status(200).send(airports)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async getAirportById(req, res) {
        try {
            const  id  = parseInt(req.params.id);
            const airportId = await Airport.findOne({
                where: {
                    id: id
                }
            })
            res.status(200).send(airportId);
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async updateAirport(req, res) {
        try {
            const id = parseInt(req.body.id);

            Validations.validaId(id);
            
            const airportF = {
                name: req.body.name,
                companyManag: req.body.companyManag,
                smooking: req.body.smooking,
                CountryId: req.body.CountryId,
                ContactInfoId: req.body.ContactInfoId,
                IataCodeId: req.body.IataCodeId,
            };

            Validations.validaAirport(airportF)

            await Airport.update(airportF, {
                where: { id: id }
            });
            res.status(202).send({ message: 'Successfull Updated.' });
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async deleteAirport(req, res) {
        try {
            const  id  = parseInt(req.params.id);
            await Airport.destroy({
                where: {
                    id: id
                }
            })
            res.status(200).send({ message: 'Airport deleted succesfully.' })
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    }
};

module.exports = AirportController;