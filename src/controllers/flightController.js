const flightModel = require('../models/flightModel');

exports.createFlight = async (req, res) => {
    const data = req.body;
    let { source, destination, price } = data;

    const flightCreated = await flightModel.create(data)
    return res.send({ status: true, msg: "Successfully created", data: data });
};

// get flight data
exports.getFlight = async (req, res) => {
    const data = req.query;
    let { source, destination, date } = data

    const getFlightData = await flightModel.find(
        { $and: [{ source: source }, { destination: destination }] }
    )
    return res.send({ availableFlights: getFlightData[0].price })
}