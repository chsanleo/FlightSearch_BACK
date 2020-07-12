const User = require('../models/user');
const ContactInfo = require ('../models/contactinfo');
const Validations = require ('../utiles/validations');

const axios = require('axios');

const UserController = {
    async getAllUsers(req,res) {
        try {
            const users = User.findAll()
            res.status(200).send(users)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem'})
        }
    },
    async getOneUser(req,res) {
        try {
            const { id } = req.params;
            const user = await User.findOne({
                where : {
                    id: id
                }
            })
            res.status(200).send(user)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem'})
        }
    },
    async updateUser(req,res) {
        try {
            const contactInfoF = {
                address: req.body.address,
                telephone: req.body.telephone,
                email: req.body.email
            }

            Validations.validaContactInfo(contactInforF);

            const contactinfo = await ContactInfo.update(contactInfoF)

            const userF = {
                name: req.body.name,
                username: req.body.username,
                surname: req.body.surname,
                password: req.body.password,
                passport: req.body.passport,
                questionSecret: req.body.questionSecret,
                answerSecret: req.body.answerSecret,
                countryId: req.body.countryId,
                contactInfoId :contactInfo.id
            };

            Validations.validaUser(userF);

            const { id } = req.body;
            await User.update(userF, {
                where: {
                    id: id
                }
            })
            res.status(200).send({ message : 'Todo OK'})
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem'})
        }
    },
    async deleteUser(req,res){
        try {
            const { id } = req.params;
            await User.destroy({
                where: {
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

module.exports = UserController;