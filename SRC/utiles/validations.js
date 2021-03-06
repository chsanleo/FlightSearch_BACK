const utils = require('./utils');

const EMPTY = "";
const MIN_ID = 1;
const MIN_PRICE = 0.0;
const MIN_CHAR_PASSWORD = 6;
const MAX_CHAR_PASSWORD = 12;
const MIN_CHAR_PASSPORT = 8;
const STRINGTYPE = "string";
const MIN_STOCK = 1;
const MIN_CURRENCY_CODE = 2;
const MAX_CURRRENCY_CODE = 3;

const Validations = {
    validaId(id) {
        if (id === undefined || id < MIN_ID || isNaN(id)) {
            throw Error(" Id must be provide. ");
        }

    },
    validaPlate(plate) {
        if (plate === undefined || plate == EMPTY) {
            throw Error(" Plate must be provide. ");
        }
    },
    validaContactInfo(contactInfo) {

        let error = EMPTY;
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (contactInfo.address == EMPTY || contactInfo.address === undefined) {
            error += ' Must provide a address. ';
        }

        if (contactInfo.email != EMPTY) {
           /* if (!regex.test(String(contactInfo.email).toLowerCase())) {
                error += ' The format email is invalid. ';
            }*/
        }
        else { error += ' Must provide a email. '; }

        if (contactInfo.telephone == EMPTY) {
            error += ' Must provide a correct telephone. ';
        }

        if (error != EMPTY) { throw Error(error); }
    },

    validaUser(user) {
        let error = EMPTY;
        console.log(user.username);
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

        error += this.validaTakeOffAndLandingDates(flight.takeOffDate, flight.landingDate)
        error += this.validaTakeOffAndLandingAirports(flight.landingAirportId, flight.takeOffAirportId);

        if (typeof (flight.planeId) === STRINGTYPE || flight.planeId < MIN_ID) {
            error += ' Plane must be provided. ';
        }
        if (typeof (flight.stock) === STRINGTYPE || flight.stock < MIN_STOCK) {
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
    validaTakeOffAndLandingDates(takeOffDate, landingDate) {
        let error = EMPTY;

        if ((takeOffDate == EMPTY || takeOffDate < new Date()) ||
            (landingDate == EMPTY || landingDate < new Date())) {
            error += ' Landing and TakeOff Date must be in the future. ';
        }
        if (takeOffDate > landingDate) {
            error += ' TakeOff Date must be early than Landing Date. ';
        }
        return error;
    },
    validaTakeOffAndLandingAirports(landingAirportId, takeOffAirportId) {
        let error = EMPTY;

        if (landingAirportId == EMPTY || landingAirportId < MIN_ID) {
            error += ' Landing Airport must be provided. '
        }
        if (takeOffAirportId == EMPTY || takeOffAirportId < MIN_ID) {
            error += ' Take Off Airport must be provided. ';
        }

        if (landingAirportId == takeOffAirportId) {
            error += ' TakeOff and Landing Airport must be differents. ';
        }
        return error;
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
    validaCurrencyCode(code) {
        let error = EMPTY;
        if (code != EMPTY) {
            if (code.length < MIN_CURRENCY_CODE || code.length > MAX_CURRRENCY_CODE) {
                error += ' Code must be between ' + MIN_CURRENCY_CODE + ' and ' + MAX_CURRRENCY_CODE + ' characters. ';
            }
        }
        else { error += ' Code must be provided. '; }

        return error;
    },
    validaCurrency(currency) {
        let error = EMPTY;

        if (currency.name == EMPTY) { error += ' Name must be provided. '; }
        error += this.validaCurrencyCode(currency.code);

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

        error += validaTakeOffAndLandingDates(bill.takeOffDate, bill.landingDate)
        error += validaTakeOffAndLandingAirports(bill.landingAirportId, bill.takeOffAirportId);

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
    },
    validaForgotData(forgotData) {
        let error = EMPTY;

        if (utils.isNullOrEmpty(forgotData.question)) { error += ' Question must be provided. '; }
        if (utils.isNullOrEmpty(forgotData.answer)) { error += ' Answer must be provided. '; }
        if (utils.isNullOrEmpty(forgotData.username)) { error += ' Username must be provided. '; }
        if (utils.isNullOrEmpty(forgotData.password)) { error += ' Password must be provided. '; }

        if (error != EMPTY) { throw Error(error); }
    }

    //validaCountry?
    //validaIataCode?
    //validaPayData?

};

module.exports = Validations;