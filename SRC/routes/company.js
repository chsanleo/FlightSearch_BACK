const router = require('express').Router();
const CompanyController = require('../controller/companyController')

router.get('/allcompanies', CompanyController.getCompanies);
router.get('/:id', CompanyController.getCompanyById);
router.post('/create', CompanyController.createCompany);
router.put('/modify/:id', CompanyController.updateCompany);
router.delete('/delete/:id', CompanyController.deleteCompany);

module.exports = router;