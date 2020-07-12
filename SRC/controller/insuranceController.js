const Insurance = require('../models/insurance');
const Validations = require('../utiles/validations');
const ContactInfo = require ('../models/contactinfo');


const InsuranceController = {
    async getInsurance(req,res) {
        try {
            const insurances = await Insurance.findAll()
            res.status(200).send(insurances)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem. '})
        }
    },
    async getOneInsurance(req,res) {
        try {
            const { id } = req.params;
            const insurance = await Insurance.findOne({
                where : {
                    id : id
                }
            })
            res.status(200).send(insurance)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : ' There was a problem. '})
        }
    },
    async createInsurance(req,res) {
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
                price : req.body.price,
                contactInfoId: contactInfo.id
            }

            Validations.validaInsurance(insuranceF)

            const insurance = await Insurance.create(insuranceF)
            res.status(201).send(insurance)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem'})
        }
    },
    async updateInsurance(req,res) {
        try {
            const contactInfoF = {
                address: req.body.address,
                telephone: req.body.telephone,
                email: req.body.email
            };

            Validations.validaContactInfo(contactInfoF)

            const contactInfo = await ContactInfo.update(contactInfoF)

            const insuranceF = {
                type: req.body.type,
                name: req.body.name,
                company: req.body.company,
                price : req.body.price,
                contactInfoId: contactInfo.id
            }

            Validations.validaInsurance(insuranceF)



            const { id } = req.body;
            await Insurance.update(insuranceF, {
                where : {
                    id: id
                }
            })
            res.status(200).send({ message : 'Todo OK'})
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem'})
        }
    },
    async deleteInsurance(req,res) {
        try {
            const { id } = req.params;
            await Insurance.destroy({
                where : {
                    id: id
                }
            })
            res.status(200).send({ message : 'Todo OK'})
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem'})
        }
    }

};

module.exports = InsuranceController;