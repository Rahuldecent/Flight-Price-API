const express = require('express');
const mongoose = require('mongoose');
var morgan = require('morgan');
const app = express();
app.use(morgan('combined'));
const route = require('./routes/route')
app.use(express.json());

mongoose.connect('mongodb+srv://rahulkumar:A8K4HFFnpjfeY3Pl@cluster0.pchlfj0.mongodb.net/flight-api').then(() => console.log('Mongodb is connected')).catch((err) => console.log(err));
app.use('/', route);

app.listen(3000, () => {
  console.log('express app running on port 3000')
})