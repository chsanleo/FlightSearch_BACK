const express = require('express');
const app = express();

//PropertiesFile
const properties = require('./config/properties');

//MongoConectionDB
const dbconnect = require('./config/mongoDb');
dbconnect();

//logger
var winston = require('./config/winston');
var morgan = require('morgan');
app.use(morgan('combined', { stream: winston.stream }));


//Routes
const adminRouter = require('./routes/admin');
const airportRouter = require('./routes/airport');
const companyRouter = require('./routes/company');
const currencyRouter = require('./routes/currency');
const dataRouter = require('./routes/data');
const flightTicketRouter = require('./routes/flightTicket');
const flightRouter = require('./routes/flights');
const insuranceRouter = require('./routes/insurances');
const mainRouter = require('./routes/main');
const planeRouter = require('./routes/plane');
const userRouter = require('./routes/users');
const contactMsgRouter = require('./routes/contactMsg');

const cors = require('./middleware/cors');


const auth = require('./middleware/auth');
app.use(express.json());
app.use(cors);
 
//Use of Routes
app.use('/admin', adminRouter);
app.use('/airport', airportRouter);
app.use('/company', companyRouter);
app.use('/currency', currencyRouter);
app.use('/data', dataRouter);
app.use('/flighticket', flightTicketRouter);
app.use('/flight', flightRouter);
app.use('/insurance', insuranceRouter);
app.use('/main', mainRouter);
app.use('/plane', planeRouter);
app.use('/user', auth, userRouter);
app.use('/contactMsg', contactMsgRouter)

app.listen(properties.server_PORT, () => console.log('Server running on port ' + properties.server_PORT));