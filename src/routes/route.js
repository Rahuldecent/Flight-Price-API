const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');
router.get('/api' , (req,res) => {
    res.send('first api')
});
router.post('/flight', flightController.createFlight);
router.get('/flights',flightController.getFlight)
module.exports = router;