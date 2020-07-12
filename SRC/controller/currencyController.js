const Currency = require('../models/currency');

const axios = require('axios');

const CurrencyController = {
    async createCurrency(req, res) {
        try {
            const currency = Currency.create(req.body);
            res.status(201).send(currency);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error creating the Currency.' });
        }
    },
    async getCurrencies(req,res) {
        try {
            const currencies = await Currency.findAll({
                limit: 15
            })
            res.status(200).send(currencies)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem trying to get the currencies'})
        }
    },
    async getCurrencyById(req,res) {
        try {
            const { id } = req.params;
            const currencyId = await Currency.findOne({
                where : {
                    id : id
                }
            })
            if (currencyId === null){
                res.status(400).send({ message : 'There was a problem getting the specified currency.'})
            }
            res.status(200).send(currencyId);
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem refreshing the currency.'})
        }
    },
    async updateCurrency(req,res) {
        const id = req.params.id;
        Currency.updateCurrency(req.body, {
            where: { id : id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "Currency was updated succesfully"
                    });
                } else {
                    res.send ({
                        message: `Cannot update Currency with id=${id}.`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error updating Currency with id=" + id
                });
            });
    },
    async deleteCurrency(req,res) {
        try {
            const { id } = req.params
            const currency = await Currency.destroy({
                where : {
                    id : id
                }
            })
            res.status(200).send({ message : 'Currency deleted succesfully.'})
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem deleting the currency, please, try again.'})
        }
    }
};

module.exports = CurrencyController;