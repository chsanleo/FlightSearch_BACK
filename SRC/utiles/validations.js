const EMPTY = "";
const MIN_ID = 1;
const MIN_PRICE = 0.0;
const MIN_CHAR_PASSWORD = 6;
const MAX_CHAR_PASSWORD = 12;
const MIN_CHAR_PASSPORT = 8;
const STRINGTYPE = "string";
const MIN_STOCK = 1;

const Validations = {
    validaId(id){
        if (id === undefined || typeof (id) === STRINGTYPE || id < MIN_ID) {
            throw Error(" Id must be provide. ");
        }
    },
    validaContactInfo(contactInfo) {

        let error = EMPTY;
        let emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        if (contactInfo.address == EMPTY || contactInfo.address === undefined) {
            error += ' Must provide a address. ';
        }

        if (contactInfo.email != EMPTY) {
            //if (!contactInfo.email.match(emailRegex)) {
            //  error += ' The format email is invalid. ';
            //}
        }
        else { error += ' Must provide a email. '; }

        if (contactInfo.telephone == EMPTY) {
            error += ' Must provide a correct telephone. ';
        }

        if (error != EMPTY) { throw Error(error); }
    },

    validaUser(user) {
        let error = EMPTY;

        if (user.name == EMPTY) { error += ' Name must be provided. '; }
        if (user.username == EMPTY) { error += ' Username must be provided. '; }
        if (user.surname == EMPTY) { error += ' Surname must be provided. '; }
        if (user.password != EMPTY) {
            if (user.password.length < MIN_CHAR_PASSWORD || user.password.length > MAX_CHAR_PASSWORD) {
                error += ' Password must be between ' + MIN_CHAR_PASSWORD + ' and ' + MAX_CHAR_PASSWORD + ' characters. ';
            }
            //evaluar si contienen un caracter especial (@#.-+/\|'?!¡¿^)
        } else { error += ' Password must be provided. '; }

        if (user.passport != EMPTY) {
            if (user.passport.length < MIN_CHAR_PASSPORT) {
                error += ' Passport can not be less than ' + MIN_CHAR_PASSPORT + ' characters. ';
            }
        } else { error += ' Passport must be provided. '; }

        if (user.questionSecret == EMPTY) { error += ' Secret Question must be provided. '; }
        if (user.answerSecret == EMPTY) { error += ' Secret Answer must be provided. '; }
        if (typeof (user.countryId) === STRINGTYPE || user.countryId < MIN_ID) {
            error += ' Country must be provided. ';
        }
        if (typeof (user.contactInfoId) === STRINGTYPE || user.contactInfoId < MIN_ID) {
            error += ' Contact Information must be provided. ';
        }

        if (error != EMPTY) { throw Error(error); }
    },

    validaFlight(flight) {
        let error = EMPTY;

        if (typeof (flight.price) === STRINGTYPE || flight.price < MIN_PRICE) {
            error += ' Correct price must be provided. ';
        }
        if (flight.code == EMPTY) { error += ' Flight Code must be provided. '; }
        //FECHA landing no puede ser anterior a fecha takeOFf
        if ((flight.takeOffDate == EMPTY || flight.takeOffDate < new Date()) ||
            (flight.landingDate == EMPTY || flight.landingDate < new Date())) {
            error += ' Landing and TakeOff Date must be in the future. ';
        }
        //no puede salir y llegar al mismo aeropuerto
        if (flight.landingAirportId == EMPTY || flight.landingAirportId < MIN_ID) {
            error += ' Landing Airport must be provided. '
        }
        if (flight.takeOffAirportId == EMPTY || flight.takeOffAirportId < MIN_ID) {
            error += ' Take Off Airport must be provided. ';
        }
        if (typeof (flight.planeId) === STRINGTYPE || flight.planeId < MIN_ID) {
            error += ' Plane must be provided. ';
        }
        if(typeof (flight.stock) === STRINGTYPE|| flight.stock < MIN_STOCK ){
            error += ' Stock must be provided. ';
        }

        if (error != EMPTY) { throw Error(error); }
    },

    validaInsurance(insurance) {
        let error = EMPTY;

        if (insurance.type == EMPTY) { error += ' Type must be provided. '; }
        if (typeof (insurance.price) === STRINGTYPE || insurance.price < MIN_PRICE) {
            error += ' Correct price must be provided. ';
        }
        if (insurance.company == EMPTY) { error += ' Company must be provided. '; }
        if (insurance.name == EMPTY) { error += ' Name must be provided.'; }
        if (typeof (insurance.contactInfoId) === STRINGTYPE || insurance.contactInfoId < MIN_ID) {
            error += ' Contact Information must be provided. ';
        }

        if (error != EMPTY) { throw Error(error); }
    },

    validaPlane(plane) {
        let error = EMPTY;

        if (plane.type == EMPTY) { error += ' Type must be provided. '; }
        if (plane.name == EMPTY) { error += 'Name must be provided. ' }
        if (plane.model == EMPTY) { error += 'Model must be provided. ' }
        if (plane.yearOfFabric == EMPTY || plane.yearOfFabric > new Date()) {
            error += ' This date must be in the past. '
        }
        if (plane.plate == EMPTY) { error += ' Plate must be provided. '; }
        if (typeof (plane.companyId) === STRINGTYPE || plane.companyId < MIN_ID) {
            error += 'Company must be provided. ';
        }

        if (error != EMPTY) { throw Error(error); }
    },

    validaCurrency(currency) {
        let error = EMPTY;

        if (currency.name == EMPTY) { error += ' Name must be provided. '; }
        //evaluar que solo puede tener 2 o 3 caracteres
        if (currency.code == EMPTY) { error += ' Code must be provided. '; }
        if (typeof (currency.countryId) === STRINGTYPE || currency.countryId < MIN_ID) {
            error += ' Country must be provided. ';
        }

        if (error != EMPTY) { throw Error(error); }
    },

    validaCompany(company) {
        let error = EMPTY;

        if (company.name == EMPTY) { error += ' Name must be provided. '; }
        if (typeof (company.IataCodeId) === STRINGTYPE || company.IataCodeId < MIN_ID) {
            error += ' Code must be provided. ';
        }
        if (typeof (company.currencyId) === STRINGTYPE || company.currencyId < MIN_ID) {
            error += ' Currency must be provided. ';
        }
        if (typeof (company.countryId) === STRINGTYPE || company.countryId < MIN_ID) {
            error += ' Country must be provided. ';
        }
        if (typeof (company.contactInfoId) === STRINGTYPE || company.contactInfoId < MIN_ID) {
            error += ' Contact Information must be provided. ';
        }

        if (error != EMPTY) { throw Error(error); }
    },
    validaFlightTicket(bill) {
        let error = EMPTY;

        //FECHA landing no puede ser anterior a fecha takeOFf
        if (bill.landingDate == EMPTY) { error += ' Landing Date must be provided. '; }
        if (bill.takeOffDate == EMPTY) { error += ' TakeOff Date must be provided. '; }
        if (bill.landingAirport == EMPTY) { error += ' Landing Airport must be provided. '; }
        if (bill.takeOffAirport == EMPTY) { error += ' TakeOff Airport must be provided. '; }
        if (typeof (bill.basePrice) === STRINGTYPE || bill.basePrice < MIN_PRICE) {
            error += ' Correct base price must be provided. ';
        }
        if (bill.ratioExchange == EMPTY || bill.ratioExchange < 0.0) {
            error += ' Ratio Exchange must be provided. ';
        }
        if (bill.baseCurrency == EMPTY) { error += ' Base currency must be provided. '; }
        if (typeof (bill.price) === STRINGTYPE || bill.price < MIN_PRICE) {
            error += ' Correct price must be provided. ';
        }
        if (bill.currency == EMPTY) { error += ' Currency must be provided. '; }
        //contiene los campos de user?
        if (bill.user == EMPTY) { error += ' User Information must be provided. '; }
        //contiene los campos de insurance?
        if (bill.insurance == EMPTY) { error += ' Insurance Information must be provided. '; }
        if (bill.flightcode == EMPTY) { error += ' Flight code must be provided. '; }
        if (bill.plane == EMPTY) { error += ' Plane must be provided. '; }
        if (bill.seat == EMPTY) { error += ' Seat must be provided. '; }

        if (error != EMPTY) { throw Error(error); }
    },
    validaAirport(airport) {
        let error = EMPTY;

        if (airport.name == EMPTY) { error += 'Name must be provided. '; }
        if (typeof (airport.countryId) === STRINGTYPE || airport.countryId < MIN_ID) {
            error += ' Country must be provided. ';
        }
        if (typeof (airport.contactInfoId) === STRINGTYPE || airport.contactInfoId < MIN_ID) {
            error += 'Contact Information must be provided. ';
        }
        if (typeof (airport.IataCodeId) === STRINGTYPE || airport.IataCodeId < MIN_ID) {
            error += ' Iata Code must be provided. ';
        }

        if (error != EMPTY) { throw Error(error); }
    }

    //validaCountry?
    //validaIataCode?
    //validaPayData?

};

module.exports = Validations;