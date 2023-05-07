const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');
router.get('/' , (req,res) => {
    res.send('<h1>Hello From Express App </h1>')
});
router.post('/flight', flightController.createFlight);
router.get('/flights',flightController.getFlight)
module.exports = router;