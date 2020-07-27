const router = require('express').Router();
const MainController = require('../controller/mainController');

router.post('/login', MainController.login);
router.post('/register', MainController.register);
router.post('/forgotPass',MainController.forgotPassword)

module.exports = router;