const { Insurance, ContactInfo } = require('../models');
const Validations = require('../utiles/validations');

const InsuranceController = {
    async getInsurance(req, res) {
        try {
            const insurances = await Insurance.findAll({
                where: { deletedAt: null }
            });
            res.status(200).send(insurances)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async getOneInsurance(req, res) {
        try {
            const  id  = parseInt(req.params.id);
            const insurance = await Insurance.findOne({
                where: { id: id, deletedAt: null }
            });
            res.status(200).send(insurance)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async createInsurance(req, res) {
        try {
            const contactInfoF = {
                address: req.body.address,
                telephone: req.body.telephone,
                email: req.body.email
            };

            Validations.validaContactInfo(contactInfoF)

            const contactInfo = await ContactInfo.create(contactInfoF)

            const insuranceF = {
                type: req.body.type,
                name: req.body.name,
                company: req.body.company,
                price: req.body.price,
                ContactInfoId: contactInfo.id
            }

            Validations.validaInsurance(insuranceF)

            const insurance = await Insurance.create(insuranceF)
            res.status(201).send(insurance)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async updateInsurance(req, res) {
        try {
            const id = parseInt(req.body.id);

            Validations.validaId(id);

            const contactInfoF = {
                address: req.body.address,
                telephone: req.body.telephone,
                email: req.body.email
            };

            Validations.validaContactInfo(contactInfoF)

            const contactInfo = await ContactInfo.update(contactInfoF, { where : { id: id}})

            const insuranceF = {
                type: req.body.type,
                name: req.body.name,
                company: req.body.company,
                price: req.body.price,
                contactInfoId: contactInfo.id
            }

            Validations.validaInsurance(insuranceF)

            
            await Insurance.update(insuranceF, {
                where: {
                    id: id
                }
            })
            res.status(200).send({ message: 'Todo OK' })
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async deleteInsurance(req, res) {
        try {
            const { id } = req.params;
            await Insurance.destroy({
                where: {
                    id: id
                }
            })
            res.status(200).send({ message: 'Todo OK' })
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    }
};

module.exports = InsuranceController;