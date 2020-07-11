const router = require ('express').Router();
const AdminController = require ('../controller/adminController')

router.get('/allusers', AdminController)
router.post('/create', AdminController)
router.put('/modify/:id', AdminController)
router.delete('/delete/:id', AdminController)

module.exports = router;
