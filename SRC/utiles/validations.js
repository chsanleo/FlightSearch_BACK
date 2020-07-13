const currency = require("../models/currency");

const Validations = {
    validaContactInfo(contactInfo) {

        let error = "";
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


        if (contactInfo.address == "") {
            error += " The address can not be empty. ";
        }
        if (contactInfo.email == "") {
            error += " The email can not be empty. ";
        }
        if (regex.test(String(contactInfo.email).toLowerCase()) ){
            error += 'The format email is invalid'
        }
        if (contactInfo.telephone == "") {
            error += " The telephone can not be empty. ";
        }
        if (contactInfo.telephone == NaN) {
            error += 'The telephone not admits letters'
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
    },
    validaCompany(company) {
        let error = ''

        if(company.name == ''){
            error += 'Name can not be empty'
        }
        if(company.IataCodeId == ''){
            error += 'Code can not be empty'
        }
        if(company.currencyId <= 0){
            error += 'CurrencyId can not be empty'
        }
        if(company.countryId <= 0){
            error += 'Id can not be empty'
        }
        if(company.contactInfoId <= 0){
            error += 'ContactInfoId can not less than 0'
        }
        if (error != "") {
            throw Error(error);
        }
    },
    validaFlightTicket(flightticket) {
        let error = ''

        if(flightticket.name == ''){
            error += 'Name can not be empty'
        }
        if(flightticket.takeOffDate == ''){
            error += 'Code can not be empty'
        }
        if(flightticket.landingAirport == ''){
            error += 'CurrencyId can not be empty'
        }
        if(flightticket.takeOffAirport == ''){
            error += 'Id can not be empty'
        }
        if(flightticket.basePrice <= 0){
            error += 'ContactInfoId can not less than 0'
        }
        if(flightticket.ratioExchange <= 0){
            error += 'Code can not be empty'
        }
        if(flightticket.baseCurrency == ''){
            error += 'CurrencyId can not be empty'
        }
        if(flightticket.price <= 0){
            error += 'Id can not be empty'
        }
        if(flightticket.currency == ''){
            error += 'ContactInfoId can not less than 0'
        }
        if(flightticket.user <= 0){
            error += 'Id can not be empty'
        }
        if(flightticket.smoking <= 0){
            error += 'ContactInfoId can not less than 0'
        }
        if(flightticket.insurance <= 0){
            error += 'ContactInfoId can not less than 0'
        }
        if(flightticket.flightcode == ''){
            error += 'Id can not be empty'
        }
        if(flightticket.plane <= 0){
            error += 'ContactInfoId can not less than 0'
        }
        if(flightticket.seat == ''){
            error += 'Id can not be empty'
        }
        if (error != "") {
            throw Error(error);
        }
    },
    validaAirport(airport) {
        let error = ''

        if(airport.name == ''){
            error += 'Name can not be empty'
        }
        if(airport.companymang == ''){
            error += 'Company can not be empty'
        }
        if(airport.smoking <= 0){ // Arreglar
            error += 'Smoking may be allowed'
        }
        if(airport.countryId <= 0){
            error += 'Id can not be empty'
        }
        if(airport.contactInfoId <= 0){
            error += 'ContactInfoId can not less than 0'
        }
        if(airport.IataCodeId <= 0){
            error += 'IataCodeId can not less than 0'
        }
        if (error != "") {
            throw Error(error);
        }
    }

    // String : No puede ser vacio, igual a name
    // Number (id): no puede ser ni menor ni igual a 0
    // Date : SI es fecha de salida no puede ser menor que new date y la fecha de llegada no puede ser menor que new date
};

module.exports = Validations;