const router = require('express').Router();
const CurrencyController = require ('../controller/currencyController')

router.get('/allcurrency', CurrencyController.getCurrencies);
router.get('/:id', CurrencyController.getCurrencyById);
router.post('/create', CurrencyController.createCurrency);
router.put('/modify/:id', CurrencyController.updateCurrency);
router.delete('/delete/:id', CurrencyController.deleteCurrency);

module.exports = router;