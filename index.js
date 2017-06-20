const express = require('express');
const app = express();

//Import the mongoose module
const mongoose = require('mongoose');
//routers
const locationUrl = require('./router');
//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/smartBeings';
mongoose.connect(mongoDB);

//Get the default connection
var db = mongoose.connection;
// console.log(db);
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//enable cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', locationUrl);

app.listen(3000, function (req, res) {
    console.log('your server is running', req, res);
});