const express = require('express');
const app = express();

const properties = require('./config/properties');
//const dbconnect = require('./config/mongoDb');
//dbconnect();
const cors = require('./middleware/cors');



app.use(express.json);
app.use(cors);

app.listen(properties.server_PORT, () => console.log('Server running on port ' + properties.server_PORT));