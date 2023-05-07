const { default: mongoose } = require("mongoose");

const flightSchema = new mongoose.Schema({
    source: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true
    },
    date:{
        type: Date, 
    },
    price:{
        type: Object,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('flight', flightSchema);