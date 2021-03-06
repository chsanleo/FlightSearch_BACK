const router = require('express').Router();
const UserController = require('../controller/userController');

router.get('/allusers', UserController.getAllUsers);
router.get('/:id', UserController.getOneUser);
router.post('/modify/', UserController.updateUser);
router.delete('/delete/:id', UserController.deleteUser);
router.get('/logout', UserController.logOut);
router.get('/getinfo', UserController.getInfo);

module.exports = router;