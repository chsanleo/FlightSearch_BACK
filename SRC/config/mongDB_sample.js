const properties = require('./properties');
const dbconnect = () => {

    const mongoose = require("mongoose");
    const uri = MONGOURI;
    mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then(() => {
            console.log('Connection established.');
        })
        .catch(error => console.log('Error connecting:' + error));}

module.exports = dbconnect;