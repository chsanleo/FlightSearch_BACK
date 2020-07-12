const router = require('express').Router();
const MainController = require ('../controller/mainController')

router.post('/login', MainController.login);
router.get('/main/:id', MainController.getAllQuestions);
router.post('/register', MainController.register);

module.exports = router;