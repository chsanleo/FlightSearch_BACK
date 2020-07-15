const router = require('express').Router();
const UserController = require('../controller/userController');

router.get('/allusers', UserController.getAllUsers);
router.get('/:id', UserController.getOneUser);
router.put('/modify/:id', UserController.updateUser);
router.delete('/delete/:id', UserController.deleteUser);
router.get('/logout', UserController.logOut);

module.exports = router;