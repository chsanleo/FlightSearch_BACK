const router = require('express').Router();
const MainController = require ('../controller/mainController')

//router.get('/allmain', MainController)
//router.get('/main/:id', MainController)
//router.post('/create', MainController)
//router.put('/modify/:id', MainController)
//router.delete('/delete/:id', MainController)
router.post('/register', MainController.register)

module.exports = router;