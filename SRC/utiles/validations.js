const Validations = {
    validaContactInfo(contactInfo) {

        let error = "";

        if (contactInfo.address == "") {
            error += " The address can not be empty. ";
        }
        if (contactInfo.email == "") {
            error += " The email can not be empty. ";
        }
        if (contactInfo.telephone == "") {
            error += " The telephone can not be empty. ";
        }

        if (error != "") {
            throw Error(error);
        }
    },

    validaUser(user) {
        let error = "";

        //casos

        if (error != "") {
            throw Error(error);
        }
    }
};

module.exports = Validations;