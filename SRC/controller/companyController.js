const { Company } = require('../models');
const Validations = require('../utiles/validations');

const CompanyController = {
    async createCompany(req, res) {
        try {
            /*const companyF = {
                name: req.body.name,
                iatacodeid: req.body.iatacodeid,
                currencyid: req.body.currencyid,
                countryId: req.body.countryId,
                contactinfoid: req.body.contactinfoid,
            };

            Validations.validaCompany(companyF)*/

            const currency = await Company.create(req.body);
            res.status(201).send(currency);

        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error creating the Company.' });
        }
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
            if (companyId == null){
                res.status(400).send({ message : 'There was a problem getting the specified company.'})
            }
            res.status(200).send(companyId);
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem'})
        }
    },
    async updateCompany(req,res) {
        try {
            const companyF = {
                name: req.body.name,
                iatacodeid: req.body.iatacodeid,
                currencyid: req.body.currencyid,
                countryId: req.body.countryId,
                contactinfoid: req.body.contactinfoid,
            };

            Validations.validaCompany(companyF)


            await Company.update(companyF, {
                where: { id: req.body }
            });
            res.status(202).send({ message: 'Successfull Updated.' });
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error.' });
        }
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