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
    },
    validaFlight(flight) {
        let error = "";

        if(flight.price < 0) {
            error += 'Price can not negative'
        }
        if(flight.code == ''){
            error += 'Code can not empty'
        }
        if(flight.takeOffDate < new Date()){
            error += 'Take Off Date can not be last'
        }
        if(flight.landingDate < new Date()){
            error += 'Landing Date can not be last'
        }
        if(flight.landingAirportId == ''){
            error += 'Landing Airport ID can not empty'
        }
        if(flight.takeOffAirportId == ''){
            error += 'Take Off Airport ID can not empty'
        }
        if(flight.planeId == ''){
            error += 'PlaneID can not empty'
        }
    }
};

module.exports = Validations;