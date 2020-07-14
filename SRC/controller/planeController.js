const { Plane } = require('../models');
const Validations = require('../utiles/validations');

const PlaneController = {

    async getPlanes(req, res) {
        try {
            const planes = await Plane.findAll({
                where: { deletedAt: null }
            });
            res.status(200).send(planes);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async getOnePlane(req, res) {
        try {
            const { id } = req.params;
            Validations.validaId(id);

            const plane = await Plane.findOne({
                where: { id: id, deletedAt: null }
            });
            
            res.status(200).send(plane);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async getPlaneByPlate(req, res) {
        try {
            //validar plate
            const { plate } = req.params;
            const plane = await Plane.findOne({
                where: { plate: plate, deletedAt: null }
            });
            res.status(200).send(plane);
        } catch (error) {
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async createPlane(req, res) {
        try {
            const planeF = {
                type: req.body.type,
                name: req.body.name,
                model: req.body.model,
                yearOfFabric: req.body.yearOfFabric,
                plate: req.body.plate,
                companyId: req.body.CompanyId
            }

            Validations.validaPlane(planeF);

            const plane = await Plane.create(planeF);
            res.status(201).send(plane);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async updatePlane(req, res) {
        try {
            const { id } = req.body;
            Validations.validaId(id);

            const planeF = {
                type: req.body.type,
                name: req.body.name,
                model: req.body.model,
                yearOfFabric: req.body.yearOfFabric,
                plate: req.body.plate,
                CompanyId: req.body.CompanyId
            }

            Validations.validaPlane(planeF);
            
            await Plane.update(planeF, {
                where: { id: id }
            });
            res.status(200).send({ message: 'Avion actualizado correctamente' });
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }

    },
    async deletePlane(req, res) {
        try {
            const { id } = req.params;
            Validations.validaId(id);

            await Plane.destroy({
                where: { id: id }
            });
            res.status(200).send({ message: 'Avión eliminado con éxito' });
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    }
};

module.exports = PlaneController;