const Company = require('../models/company');

const CompanyController = {
    createCompany (req, res) {
        console.log(req.body)
        Company.create(req.body)
            .then(company => {
                res.status(200).send(company)
            })
            .catch(error => {
                console.log(error)
                res.status(500).send({ message : 'There was a problem creating the company, please, try again.'})
            })
    },
    async getCompanies(req,res) {
        try {
            const companies = await Company.findAll({
                limit: 15
            })
            res.status(200).send(companies)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem trying to get the companies'})
        }
    },
    async getCompanyById(req,res) {
        try {
            const { id } = req.params;
            const companyId = await Company.findOne({
                where : {
                    id : id
                }
            })
            if (companyId === null){
                res.status(400).send({ message : 'There was a problem getting the specified company.'})
            }
            res.status(200).send(companyId);
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem refreshing the movie.'})
        }
    },
    async updateCompany(req,res) {
        const id = req.params.id;
        Company.updateCompany(req.body, {
            where: { id : id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "Company was updated succesfully"
                    });
                } else {
                    res.send ({
                        message: `Cannot update Company with id=${id}.`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error updating Company with id=" + id
                });
            });
    },
    async deleteCompany(req,res) {
        try {
            const { id } = req.params
            const company = await Company.destroy({
                where : {
                    id : id
                }
            })
            res.status(200).send({ message : 'Company deleted succesfully.'})
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem deleting the company, please, try again.'})
        }
    }
};

module.exports = CompanyController;