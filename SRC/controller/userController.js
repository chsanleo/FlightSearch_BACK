const User = require('../models/user');

const axios = require('axios');

const UserController = {
    async getAllUsers(req,res) {
        try {
            const users = User.findAll()
            res.status(200).send(users)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem'})
        }
    },
    async getOneUser(req,res) {
        try {
            const { id } = req.params;
            const user = await User.findOne({
                where : {
                    id: id
                }
            })
            res.status(200).send(user)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem'})
        }
    },
    async updateUser(req,res) {
        try {
            const { id } = req.params;
            await User.update(req.body, {
                where: {
                    id: id
                }
            })
            res.status(200).send({ message : 'Todo OK'})
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem'})
        }
    },
    async deleteUser(req,res){
        try {
            const { id } = req.params;
            await User.destroy({
                where: {
                    id: id
                }
            })
            res.status(200).send({ message : 'Todo OK'})
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem'})
        }
    }

};

module.exports = UserController;