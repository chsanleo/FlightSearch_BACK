const { Currency } = require('../models');

const Validations = require('../utiles/validations');

const CurrencyController = {
    async createCurrency(req, res) {
        try {
            const currencyF = {
                name: req.body.name,
                code: req.body.code,
                CountryId: req.body.CountryId
            };

            Validations.validaCurrency(currencyF);

            const currency = await Currency.create(currencyF);
            res.status(201).send(currency);

        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async getCurrencyById(req, res) {
        try {
            const  id  = parseInt(req.params.id);
            Validations.validaId(id);

            const currencyId = await Currency.findOne({
                where: { deletedAt: null, id: id }
            });
            if (currencyId === null) {
                res.status(400).send({ message: 'There was a problem getting the specified currency.' });
            }
            res.status(200).send(currencyId);
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async updateCurrency(req, res) {
        try {
            const  id  = parseInt(req.body.id);
            Validations.validaId(id);

            const currencyF = {
                name: req.body.name,
                code: req.body.code,
                CountryId: req.body.CountryId
            };

            Validations.validaFlight(currencyF);

            await Currency.update(currencyF, { where: { id: id } });

            res.status(202).send({ message: 'Successfull Updated.' });
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async deleteCurrency(req, res) {
        try {
            const { id } = req.body;
            Validations.validaId(id);

            const currency = await Currency.destroy({
                where: { id: id }
            });
            res.status(200).send({ message: 'Currency deleted succesfully.' });
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    }
};

module.exports = CurrencyController;