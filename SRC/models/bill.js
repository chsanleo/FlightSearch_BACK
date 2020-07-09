const mongoose = require('mongoose');

const BillSchema = mongoose.Schema({
    landingDate:{
        type:String,
        required:true
    },
    takeOffDate:{
        type:String,
        required:true
    },
    landingAirport:{
        type:String,
        required:true
    },
    takeOffAirport:{
        type:String,
        required:true
    },
    basePrice:{
        type:Number,
        required:true
    },
    ratioExchange:{
        type:Number,
        required:true
    },
    baseCurrency:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    currency:{
        type:String,
        required:true
    },
    User:{
        //name:string,username:string,email:string,passport:string
        type:Array,
        required:true
    },
    smoking:{
        type:Boolean,
        required:true
    },
    insurance:{
        //nameCompany:string, type:string, price:string, currency:string
        type:Array,
        required:true
    },
    flightCode:{
        type:string,
        required:true
    },
    plane:{
        //name:string,plate:string,model:string
        type:Array,
        required:true
    },
    seat:{
        type:string,
        required:true
    },

})

const billModel = mongoose.model('bill',BillSchema);
module.exports = billModel;