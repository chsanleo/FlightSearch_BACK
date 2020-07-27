const router = require('express').Router();
const InsuranceController = require ('../controller/insuranceController')

router.get('/allinsurances', InsuranceController.getInsurance);
router.get('/:id', InsuranceController.getOneInsurance);
router.post('/create', InsuranceController.createInsurance);
router.put('/modify', InsuranceController.updateInsurance);
router.delete('/delete/:id', InsuranceController.deleteInsurance);

module.exports = router;