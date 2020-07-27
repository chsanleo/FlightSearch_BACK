const { Company } = require('../models');
const Validations = require('../utiles/validations');

const CompanyController = {
    async createCompany(req, res) {
        try {

            const contactInfoF = {
                address: req.body.address,
                telephone: req.body.telephone,
                email: req.body.email
            }

            Validations.validaContactInfo(contactInforF);

            const contactInfo = await ContactInfo.create(contactInfoF)

            const companyF = {
                name: req.body.name,
                IataCodeId: req.body.IataCodeId,
                CurrencyId: req.body.CurrencyId,
                CountryId: req.body.CountryId,
                ContactInfoId: contactInfo.id,
            };

            Validations.validaCompany(companyF)

            const currency = await Company.create(companyF);
            res.status(201).send(currency);

        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async getCompanies(req, res) {
        try {
            const companies = await Company.findAll({
                where: { deleteAt: null }
            });
            res.status(200).send(companies)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async getCompanyById(req, res) {
        try {
            const id = parseInt(req.params.id);
            const companyId = await Company.findOne({
                where: {
                    id: id, deleteAt: null
                }
            });
            if (companyId == null) {
                res.status(400).send({ message: 'There was a problem getting the specified company.' })
            }
            res.status(200).send(companyId);
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async updateCompany(req, res) {
        try {

            const id = parseInt(req.body.id);

            Validations.validaId(id);
            const contactInfoF = {
                address: req.body.address,
                telephone: req.body.telephone,
                email: req.body.email
            }

            Validations.validaContactInfo(contactInforF);

            const contactInfo = await ContactInfo.update(contactInfoF, { where : { id: id}})

            const companyF = {
                name: req.body.name,
                IataCodeId: req.body.IataCodeId,
                Currencyid: req.body.CurrencyId,
                CountryId: req.body.CountryId,
                ContactInfoId: contactInfo.id,
            };

            Validations.validaCompany(companyF)


            await Company.update(companyF, {
                where: { id: id }
            });
            res.status(202).send({ message: 'Successfull Updated.' });
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async deleteCompany(req, res) {
        try {
            const id = parseInt(req.params.id);
            const company = await Company.destroy({
                where: {
                    id: id
                }
            })
            res.status(200).send({ message: 'Company deleted succesfully.' })
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    }
};

module.exports = CompanyController;