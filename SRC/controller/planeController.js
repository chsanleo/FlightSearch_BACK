const { Plane } = require('../models');

const axios = require('axios');
const { update, delete } = require('../../../../KATAS/Back-end/EXPRESS-MYSQL/api/controladores/MovieControlador');

const PlaneController = {

    async getPlanes(req,res) {
        try {
            const planes = await Plane.findAll()
            res.status(201).send(planes)
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
            res.status(201).send(plane)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'Error obteniendo un avión'})
        }
    },
    async createPlane (req,res) {
        try {
            const plane = Plane.create(req.body)
            res.status(201).send(plane)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'Error creando el avion'})
        }
    },
    async update(req,res) {
        try {
            const { id } = req.params;
            Plane.update(req.body, {
                where: {
                    id: id
                }
            })
            res.status(201).send({ message : 'Avion actualizado correctamente'})
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'Error actualizando el avión'})
        }

    },
    async delete(req,res) {
        try {
            const { id } = req.params;
            Plane.destroy({
                where: {
                    id: id
                }
            })
            res.status(201).send({ message : 'Avión eliminado con éxito'})
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'Error eliminando el avión'})
        }
    }

};

module.exports = PlaneController;