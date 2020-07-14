const router = require('express').Router();
const MainController = require ('../controller/mainController')

router.post('/login', MainController.login);
router.get('/questions', MainController.getAllQuestions);
router.post('/register', MainController.register);
router.get('/iatacodes',MainController.getAllIataCode);

module.exports = router;