const currency = require("../models/currency");

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
        if(user.name == ''){
            error += 'Name can not empty'
        }
        if(user.name.lenght < 4){
            error += 'Name can not be less than 4 characters'
        }
        if(user.username == ''){
            error += 'Username can not empty'
        }
        if(user.username == username){
            error += 'Username already exists'
        }
        if(user.surname == ''){
            error += 'Surname can not empty'
        }
        if(user.password == ''){
            error += 'Password can not empty'
        }
        if(user.password.lenght < 6){
            error += 'Password can not less than 6 characters'
        }
        if(user.passport == ''){
            error += 'Passport can not empty'
        }
        if(user.passport.lenght < 8){
            error += 'Passport can not be less than 8 characters'
        }
        if(user.questionSecret == ''){
            error += 'QuestionSecret can not empty'
        }
        if(user.answerSecret == ''){
            error += 'AnswerSecret can not empty'
        }
        if(user.countryId <= 0){
            error += 'CountryID can not less than 0'
        }
        if(user.contactInfoId <= 0){
            error += 'Name can not less than 0'
        }


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
        if(flight.landingAirportId <= 0){
            error += 'Landing Airport ID can not 0 or less'
        }
        if(flight.takeOffAirportId <= 0){
            error += 'Take Off Airport ID can not 0 or less'
        }
        if(flight.planeId <= 0){
            error += 'PlaneID can not 0 or less'
        }

        if (error != "") {
            throw Error(error);
        }
    },
    validaInsurance(insurance) {
        let error = "";
        
        //Revisar ya que no siempre se va a querer seguro, entendido en caso de que se coja

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
        if(insurance.contactInfoId <= 0){
            error += 'ContactInfoId can not less than 0'
        }

        if (error != "") {
            throw Error(error);
        }

    },
    validaPlane(plane) {
        let error = ''

        if(plane.type == ''){
            error += 'Type can not empty'
        }
        if(plane.name == ''){
            error += 'Name can not empty'
        }
        if(plane.model == ''){
            error += 'Model can not empty'
        }
        if(plane.yearOfFabric > new Date()){
            error += 'Can not fabricate planes in the data future'
        }
        if(plane.plate == ''){
            error += 'Plane must be plate'
        }
        if(plane.companyId <= 0){
            error += 'Plane must be a Company'
        }

        if (error != "") {
            throw Error(error);
        }

    },
    validaCurrency(currency) {
        let error = ''

        if(currency.name == ''){
            error += 'Name can not be empty'
        }
        if(currency.code == ''){
            error += 'Code can not be empty'
        }
        if(currency.countryId <= 0){
            error += 'Id can not be empty'
        }
        if (error != "") {
            throw Error(error);
        }
    }
};

module.exports = Validations;