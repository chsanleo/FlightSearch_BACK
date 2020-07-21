const { User, ContactInfo, Country } = require('../models');
const Validations = require('../utiles/validations');

const UserController = {
    async getAllUsers(req, res) {
        try {
            const users = await User.findAll({
                where: { deletedAt: null }
            });
            res.status(200).send(users);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async getOneUser(req, res) {
        try {
            const id = parseInt(req.params.id);
            Validations.validaId(id);

            const user = await User.findOne({
                where: { id: id, deletedAt: null },
                include: [
                    { model: ContactInfo },
                    { model: Country}
                ]
            });
            res.status(200).send(user);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async updateUser(req, res) {
        try {
            const id = parseInt(req.body.id);

            Validations.validaId(id);

            const user = await User.findOne({
                where: { id: id, deletedAt: null }
            });
            if (!user) { throw Error(' User error. '); }

            const contactInfoF = {
                address: req.body.address,
                telephone: req.body.telephone,
                email: req.body.email
            }

            Validations.validaContactInfo(contactInfoF);

            await ContactInfo.update(contactInfoF, { where: { id: user.ContactInfoId } });

            const userF = {
                name: req.body.name,
                username: req.body.username,
                surname: req.body.surname,
                password: user.password,
                passport: req.body.passport,
                questionSecret: user.questionSecret,
                answerSecret: user.answerSecret,
                CountryId: req.body.CountryId,
                ContactInfoId: user.ContactInfoId
            };

            Validations.validaUser(userF);

            await User.update(userF, {
                where: { id: id }
            });
            res.status(200).send({ message: 'Todo OK' });
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            Validations.validaId(id);

            await User.destroy({
                where: { id: id }
            });
            res.status(200).send({ message: 'Todo OK' });
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async logOut(req, res) {
        const id = parseInt(req.user.id);
        Validations.validaId(id);

        await User.updateOne({
            token: null
        }, {
            where: { id: id }
        });
    },
    async getInfo(req,res) {
        try {
            res.status(201).send(req.user);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
};

module.exports = UserController;