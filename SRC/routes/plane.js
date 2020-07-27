const router = require('express').Router();
const PlaneController = require ('../controller/planeController')

router.get('/allplanes', PlaneController.getPlanes);
router.get('/:id', PlaneController.getOnePlane);
router.get('/plate/:plate', PlaneController.getPlaneByPlate);
router.post('/create', PlaneController.createPlane);
router.put('/modify/:id', PlaneController.updatePlane);
router.delete('/delete/:id', PlaneController.deletePlane);


module.exports = router;