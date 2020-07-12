const express = require('express');
const app = express();

const properties = require('./config/properties');
const dbconnect = require('./config/mongoDb');
dbconnect();

const cors = require('./middleware/cors');

//Routes
//const adminRouter = require('./routes/admin')
const airportRouter = require('./routes/airport')
const companyRouter = require('./routes/company')
const currencyRouter = require('./routes/currency')
const flightTicketRouter = require('./routes/flightTicket')
const flightRouter = require('./routes/flights')
const insuranceRouter = require('./routes/insurances')
//const mainRouter = require('./routes/main')
const planeRouter = require('./routes/plane')
const userRouter = require('./routes/users')



app.use(express.json);
app.use(cors);

//Use of Routes
app.use('/admin', adminRouter);
app.use('/airport', airportRouter);
app.use('/company', companyRouter);
app.use('/currency', currencyRouter);
app.use('/flighticket', flightTicketRouter);
app.use('/flight', flightRouter);
app.use('/insurance', insuranceRouter);
app.use('/main', mainRouter);
app.use('/plane', planeRouter);
app.use('/user', userRouter);

app.listen(properties.server_PORT, () => console.log('Server running on port ' + properties.server_PORT));