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
    },
    validaInsurance(insurance) {
        let error = "";
        
        //Revisar ya que no siempre se va a querer seguro

        if(insurance.type == ''){
            error += 'Must be a type'
        }
        if(insurance.price < 0){
            error += 'Price can not negative'
        }
        if(insurance.company == ''){
            error += 'Company can not empty'
        }
        if(insurance.name == ''){
            error += 'Name can not empty'
        }

    }
};

module.exports = Validations;