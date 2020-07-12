const Airport = require('../models/airport');


const AirportController = { 
    createAirport (req, res) {
        console.log(req.body)        
        Airport.create(req.body)
            .then(airport => {
                res.status(200).send(airport)
            })
            .catch(error => {
                console.log(error)
                res.status(500).send({ message : 'There was a problem creating the airport, please, try again.'})
            })
    },
    async getAirports(req,res) {
        try {
            const airports = await Airport.findAll({
                limit: 15
            })
            res.status(200).send(airports)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem trying to get the airports'})
        }
    },
    async getAirportById(req,res) {
        try {
            const { id } = req.params;
            const airportId = await Airport.findOne({
                where : {
                    id : id
                }
            })
            if (companyId === null){
                res.status(400).send({ message : 'There was a problem getting the specified airport.'})
            }
            res.status(200).send(airportId);
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem refreshing the airport.'})
        }
    },
    async updateAirport(req,res) {
        const id = req.params.id;
        Company.updateAirport(req.body, {
            where: { id : id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "Airport was updated succesfully"
                    });
                } else {
                    res.send ({
                        message: `Cannot update Airport with id=${id}.`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error updating Airport with id=" + id
                });
            });
    },
    async deleteAirport(req,res) {
        try {
            const { id } = req.params
            const airport = await Airport.destroy({
                where : {
                    id : id
                }
            })
            res.status(200).send({ message : 'Airport deleted succesfully.'})
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem deleting the Airport, please, try again.'})
        }
    }

};

module.exports = AirportController;