const express = require('express');
const app = express();

const properties = require('./config/properties');
//const dbconnect = require('./config/mongoDb');
//dbconnect();


app.use(express.json);

app.listen(properties.server_PORT, () => console.log('Server running on port ' + properties.server_PORT));