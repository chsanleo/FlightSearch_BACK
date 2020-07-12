const Insurance = require('../models/insurance');

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
            const insurance = await Insurance.create(req.body)
            res.status(201).send(insurance)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem'})
        }
    },
    async updateInsurance(req,res) {
        try {
            const { id } = req.params;
            await Insurance.update(req.body, {
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