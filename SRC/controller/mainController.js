const { User, ContactInfo } = require('../models');
const bcrypt = require('bcryptjs');
const properties = require('../config/properties');
const jwt = require('jsonwebtoken');
const Validations = require('../utiles/validations');

const EMPTY = "";

const MainController = { 
    async login(req, res) {
        try {
            const user = await User.findOne({
                where: { username: req.body.username }
            });
            console.log(user);
           /* if (!await bcrypt.compare(req.body.password, user.password)) {
                throw new Error({ message: 'Wrong Credentials' });
            }*/

            const token = jwt.sign({ id: user.id }, properties.token_SECRETWORD, { expiresIn: properties.token_EXPIRES });

            await User.update({
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
            userF.password = await bcrypt.hash(req.body.password, properties.PASSWORDSALT);

            const user = await User.create(userF);
            res.status(201).send(user);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },
};

module.exports = MainController;