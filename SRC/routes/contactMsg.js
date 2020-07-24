const router = require('express').Router();
const ContactMsgController = require('../controller/contactMsgController')

router.post('/setContact', ContactMsgController.setContactMsg);
router.get('/allContacts', ContactMsgController.getAllContactsMsg);

module.exports = router;