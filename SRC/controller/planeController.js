const Plane = require('../models/plane');

const axios = require('axios');
const Validations = require('../utiles/validations');

const PlaneController = {

    async getPlanes(req,res) {
        try {
            const planes = await Plane.findAll()
            res.status(200).send(planes)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem get All planes'})
        }
    },
    async getOnePlane (req,res) {
        try {
            const { id } = req.params;
            const plane = await Plane.findOne({
                where : {
                    id : id
                }
            })
            res.status(200).send(plane)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'Error obteniendo un avión'})
        }
    },
    async createPlane (req,res) {
        try {
            const planeF = {
                type: req.body.type,
                name: req.body,
                model: req.body.model,
                yearOfFabric: req.body.yearOfFabric,
                plate: req.body.plate,
                companyId: req.body.CompanyId
            }

            Validations.validatePlane(planeF)

            const plane = await Plane.create(planeF)
            res.status(201).send(plane)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'Error creando el avion'})
        }
    },
    async updatePlane(req,res) {
        try {

            const planeF = {
                type: req.body.type,
                name: req.body,
                model: req.body.model,
                yearOfFabric: req.body.yearOfFabric,
                plate: req.body.plate,
                CompanyId: req.body.CompanyId
            }

            Validations.validatePlane(planeF)

            const { id } = req.body;
            await Plane.update(planeF, {
                where: {
                    id: id
                }
            })
            res.status(200).send({ message : 'Avion actualizado correctamente'})
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'Error actualizando el avión'})
        }

    },
    async deletePlane(req,res) {
        try {
            const { id } = req.params;
            await Plane.destroy({
                where: {
                    id: id
                }
            })
            res.status(200).send({ message : 'Avión eliminado con éxito'})
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'Error eliminando el avión'})
        }
    },
    async getPlanePlate(req,res) {
        try {
            const { plate } = req.params;
            const plane = await Plane.findOne({
                where: {
                    plate: plate
                }
            })
            res.status(200).send(plane)
        } catch (error) {
            res.status(500).send({ message: 'There was a problem'})
        }
    }

};

module.exports = PlaneController;