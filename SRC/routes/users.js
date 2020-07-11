const router = require('express').Router();
const UserController = require('../controller/userController');

router.get('/allusers', UserController.getAllUsers)
router.get('/user/:id', UserController.getOneUser)
router.post('/create', UserController.createUser)
router.put('/modify/:id', UserController.updateUser)
router.delete('/delete/:id', UserController.deleteUser)

module.exports = router;