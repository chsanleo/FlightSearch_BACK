const router = require('express').Router();
const PlaneController = require ('../controller/planeController')

router.get('/allplanes', PlaneController.getPlanes);
router.get('/planes/:id', PlaneController.getOnePlane);
router.post('/create', PlaneController.createPlane);
router.put('/modify/:id', PlaneController.updatePlane);
router.delete('/delete/:id', PlaneController.deletePlane);
router.get('/plate/:plate', PlaneController.getPlaneByPlate);

module.exports = router;