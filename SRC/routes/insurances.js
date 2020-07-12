const router = require('express').Router();
const InsuranceController = require ('../controller/insuranceController')

router.get('/allinsurance', InsuranceController.getInsurance)
router.get('/insurance/:id', InsuranceController.getOneInsurance)
router.post('/create', InsuranceController.createInsurance)
router.put('/modify/:id', InsuranceController.updateInsurance)
router.delete('/delete/:id', InsuranceController.deleteInsurance)

module.exports = router;