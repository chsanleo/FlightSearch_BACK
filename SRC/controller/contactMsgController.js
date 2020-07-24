const { ContactMsg } = require('../models');

const ContactMsgController = {
    async setContactMsg(req, res) {
        try {

            const contactF = {
                message: req.body.message,
                UserId: req.body.UserId,
                subject: req.body.subject,
                email: req.body.email
            };
            
            const contactMsg = await ContactMsg.create(contactF);
            res.status(201).send(contactMsg);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async getAllContactsMsg(req, res) {
        try {
            const contactMsgList = await ContactMsg.findAll();
            res.status(200).send(contactMsgList);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    }

}
module.exports = ContactMsgController;